export interface Attribution { source: string; medium: string | null; campaign: string | null; referrer: string | null; }
const KEY = "cantarelli-entry-source";
function isAttribution(value: unknown): value is Attribution {
  if (!value || typeof value !== "object") return false;
  const fields = value as Record<string, unknown>;
  return typeof fields.source === "string" && fields.source.length > 0 &&
    [fields.medium, fields.campaign, fields.referrer].every(field => field === null || typeof field === "string");
}
export function preserveAttribution(current: Attribution, storage: Pick<Storage, "getItem" | "setItem"> | undefined): Attribution {
  if (!storage) return current;
  try {
    const raw = storage.getItem(KEY);
    if (raw) {
      try {
        const saved: unknown = JSON.parse(raw);
        if (isAttribution(saved)) return saved;
      } catch { /* Replace malformed session data with this entry. */ }
    }
    storage.setItem(KEY, JSON.stringify(current));
  } catch { /* Storage denial must not interfere with navigation. */ }
  return current;
}