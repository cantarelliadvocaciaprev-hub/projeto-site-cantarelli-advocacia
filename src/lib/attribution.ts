export interface Attribution { source: string; medium: string | null; campaign: string | null; referrer: string | null; }
const KEY = "cantarelli-entry-source";
export function preserveAttribution(current: Attribution, storage: Pick<Storage, "getItem" | "setItem"> | undefined): Attribution {
  if (!storage) return current;
  try {
    const raw = storage.getItem(KEY);
    if (raw) {
      const saved: unknown = JSON.parse(raw);
      if (saved && typeof saved === "object" && "source" in saved && typeof saved.source === "string") return saved as Attribution;
    }
    storage.setItem(KEY, JSON.stringify(current));
  } catch { /* Storage denial must not interfere with navigation. */ }
  return current;
}