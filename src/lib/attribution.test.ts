import { describe, expect, it } from "vitest";
import { preserveAttribution } from "./attribution";
describe("entry attribution", () => {
  it("replaces malformed or incomplete stored attribution", () => {
    const current = { source: "WhatsApp", medium: "social", campaign: "artigo", referrer: null };
    for (const initial of ["{broken", '{"source":"Instagram"}']) {
      let raw = initial;
      const storage = { getItem: () => raw, setItem: (_key: string, value: string) => { raw = value; } };
      expect(preserveAttribution(current, storage)).toEqual(current);
      expect(JSON.parse(raw)).toEqual(current);
    }
  });
  it("starts a new attribution in a new session", () => {
    const current = { source: "Google", medium: "cpc", campaign: "aposentadoria", referrer: null };
    expect(preserveAttribution(current, { getItem: () => null, setItem: () => {} })).toEqual(current);
  });
  it("keeps the original Instagram campaign through contact navigation", () => {
    const data = new Map<string, string>();
    const storage = { getItem: (key: string) => data.get(key) ?? null, setItem: (key: string, value: string) => { data.set(key, value); } };
    preserveAttribution({ source: "Instagram", medium: "social", campaign: "bio", referrer: null }, storage);
    expect(preserveAttribution({ source: "Direto", medium: null, campaign: null, referrer: null }, storage)).toEqual({ source: "Instagram", medium: "social", campaign: "bio", referrer: null });
  });
  it("allows browsing when session storage is blocked", () => {
    const current = { source: "Google", medium: "referral", campaign: null, referrer: "https://google.com" };
    expect(preserveAttribution(current, { getItem: () => { throw new Error("denied"); }, setItem: () => {} })).toEqual(current);
  });
});