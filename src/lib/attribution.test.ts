import { describe, expect, it } from "vitest";
import { preserveAttribution } from "./attribution";
describe("entry attribution", () => {
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