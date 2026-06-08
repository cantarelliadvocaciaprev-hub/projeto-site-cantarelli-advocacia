#!/usr/bin/env node
/**
 * Static security scanner for CI.
 *
 * Runs on every push / deploy and FAILS the build when *new* security issues
 * appear. Already-reviewed/accepted findings live in security-baseline.json,
 * so the build only breaks when something genuinely new shows up.
 *
 * Checks:
 *  1. Permissive RLS policies (USING (true) / WITH CHECK (true)) for
 *     INSERT / UPDATE / DELETE in supabase/migrations/*.sql
 *  2. Hardcoded secrets / service-role keys committed to source
 *  3. Raw SQL execution from edge functions (execute_sql / rpc raw SQL)
 *  4. npm audit (high + critical) — unless --skip-audit is passed
 *
 * Usage:
 *   node scripts/security-scan.mjs            # full scan (used in CI)
 *   node scripts/security-scan.mjs --update   # rewrite baseline with current findings
 *   node scripts/security-scan.mjs --skip-audit
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BASELINE_PATH = join(ROOT, "security-baseline.json");

const args = process.argv.slice(2);
const UPDATE = args.includes("--update");
const SKIP_AUDIT = args.includes("--skip-audit");

/** Recursively collect files under a dir matching a predicate. */
function walk(dir, match, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".git" || entry === "dist") continue;
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) walk(full, match, acc);
    else if (match(full)) acc.push(full);
  }
  return acc;
}

const findings = [];
function report(id, severity, file, message) {
  findings.push({ id, severity, file: file ? relative(ROOT, file) : null, message });
}

// 1. Permissive RLS policies in migrations -----------------------------------
const migDir = join(ROOT, "supabase", "migrations");
for (const file of walk(migDir, (f) => f.endsWith(".sql"))) {
  const sql = readFileSync(file, "utf8");
  // Split on CREATE POLICY blocks to inspect each independently.
  const policyRegex = /CREATE\s+POLICY[\s\S]*?(?=CREATE\s+POLICY|CREATE\s+TABLE|CREATE\s+INDEX|$)/gi;
  for (const block of sql.match(policyRegex) ?? []) {
    const cmdMatch = block.match(/\bFOR\s+(INSERT|UPDATE|DELETE|ALL)\b/i);
    const cmd = cmdMatch ? cmdMatch[1].toUpperCase() : "SELECT";
    if (cmd === "SELECT") continue; // public read with USING(true) is acceptable
    const permissive = /(USING|WITH\s+CHECK)\s*\(\s*true\s*\)/i.test(block);
    if (permissive) {
      const nameMatch = block.match(/CREATE\s+POLICY\s+"([^"]+)"/i);
      const name = nameMatch ? nameMatch[1] : "(unnamed)";
      report(
        "permissive_rls",
        "high",
        file,
        `Permissive ${cmd} policy "${name}" uses an always-true expression.`,
      );
    }
  }
}

// 2. Hardcoded secrets --------------------------------------------------------
const secretMatchers = [
  { id: "service_role_jwt", re: /"role"\s*:\s*"service_role"/, msg: "Possible service-role JWT committed to source." },
  { id: "private_key", re: /-----BEGIN (RSA |EC )?PRIVATE KEY-----/, msg: "Private key committed to source." },
  { id: "resend_key", re: /\bre_[A-Za-z0-9]{20,}\b/, msg: "Possible Resend API key committed to source." },
  { id: "generic_secret_assign", re: /(api[_-]?key|secret|password)\s*[:=]\s*["'][A-Za-z0-9_\-]{24,}["']/i, msg: "Possible hardcoded secret assignment." },
];
const srcFiles = [
  ...walk(join(ROOT, "src"), (f) => /\.(ts|tsx|js|jsx)$/.test(f)),
  ...walk(join(ROOT, "supabase", "functions"), (f) => /\.(ts|js)$/.test(f)),
];
for (const file of srcFiles) {
  const content = readFileSync(file, "utf8");
  for (const { id, re, msg } of secretMatchers) {
    if (re.test(content)) report(`secret:${id}`, "critical", file, msg);
  }
}

// 3. Raw SQL execution from edge functions ------------------------------------
for (const file of walk(join(ROOT, "supabase", "functions"), (f) => /\.(ts|js)$/.test(f))) {
  const content = readFileSync(file, "utf8");
  if (/\.rpc\(\s*["']execute_sql["']/.test(content) || /execute_sql/.test(content)) {
    report("raw_sql", "high", file, "Edge function appears to execute raw SQL (execute_sql).");
  }
}

// 4. npm audit ----------------------------------------------------------------
if (!SKIP_AUDIT) {
  try {
    const out = execSync("npm audit --json --audit-level=high", {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    }).toString();
    parseAudit(out);
  } catch (e) {
    // npm audit exits non-zero when vulns are found; output is still on stdout.
    if (e.stdout) parseAudit(e.stdout.toString());
    else report("npm_audit", "high", null, "npm audit failed to run.");
  }
}
function parseAudit(out) {
  let json;
  try {
    json = JSON.parse(out);
  } catch {
    return;
  }
  const vulns = json.vulnerabilities ?? {};
  for (const [name, v] of Object.entries(vulns)) {
    if (v.severity === "high" || v.severity === "critical") {
      report(`npm:${name}`, v.severity, null, `Dependency "${name}" has a ${v.severity} vulnerability.`);
    }
  }
}

// Compare against baseline ----------------------------------------------------
const fingerprint = (f) => `${f.id}|${f.file ?? ""}|${f.message}`;
const current = findings.map(fingerprint).sort();

if (UPDATE) {
  writeFileSync(
    BASELINE_PATH,
    JSON.stringify({ acceptedFindings: current }, null, 2) + "\n",
  );
  console.log(`Baseline updated with ${current.length} accepted finding(s).`);
  process.exit(0);
}

const baseline = existsSync(BASELINE_PATH)
  ? new Set(JSON.parse(readFileSync(BASELINE_PATH, "utf8")).acceptedFindings ?? [])
  : new Set();

const newFindings = findings.filter((f) => !baseline.has(fingerprint(f)));

console.log(`Security scan: ${findings.length} total finding(s), ${baseline.size} accepted in baseline.`);
if (newFindings.length === 0) {
  console.log("No new security issues. ✅");
  process.exit(0);
}

console.error(`\n❌ ${newFindings.length} NEW security issue(s) detected:\n`);
for (const f of newFindings) {
  console.error(`  [${f.severity.toUpperCase()}] ${f.id}${f.file ? ` (${f.file})` : ""}`);
  console.error(`      ${f.message}`);
}
console.error(
  "\nIf a finding is intentional and reviewed, add it to the baseline with:\n" +
    "  node scripts/security-scan.mjs --update\n",
);
process.exit(1);
