export type SiteRow = {
  domain: string;
  provider: string;
  sizeMB: number; // total storage in MB
  monthlyMB: number; // bandwidth per month in MB
  status: "Active" | "Disabled" | string;
  note?: string; // e.g., No hosting, alias for X, forward to Y
};

function toMB(value: string): number {
  // Supports e.g. "78534.5 MB"; trims commas/spaces
  const cleaned = value.replace(/[^0-9.]/g, "");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function extractNoteFromDomain(line: string): { domain: string; note?: string } {
  // Handles cases like: "baby-en-mama-geluk.nlNo hosting" or "emeq-int.nlalias for emeq-int.com"
  // Heuristics: domain ends before first space or before known note keywords concatenated
  const keywords = ["No hosting", "alias for", "forward to", "forward to "];
  // If there is a space, it's likely just the domain line; but keep both cases
  for (const key of keywords) {
    const idx = line.indexOf(key);
    if (idx > -1) {
      const domain = line.slice(0, idx).trim();
      const note = line.slice(idx).trim();
      return { domain, note };
    }
  }
  return { domain: line.trim() };
}

export function parseSites(input: string): SiteRow[] {
  const lines = input
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l, i, arr) => {
      // Keep empty lines for grouping but collapse multiple empties
      return true;
    });

  const rows: SiteRow[] = [];

  let i = 0;
  while (i < lines.length) {
    // Skip empty lines
    while (i < lines.length && lines[i] === "") i++;
    if (i >= lines.length) break;

    // Domain (may include concatenated note)
    const domLine = lines[i++] ?? "";
    const { domain, note: inlineNote } = extractNoteFromDomain(domLine);

    // Provider (often "Media2Net")
    let provider = lines[i++] ?? "";
    if (!provider) {
      // try skip empties to find provider
      while (i < lines.length && lines[i] === "") i++;
      provider = lines[i++] ?? "";
    }

    // Size line e.g. "303.8 MB"
    while (i < lines.length && lines[i] === "") i++;
    const sizeLine = lines[i++] ?? "0 MB";

    // Monthly line e.g. "235.6 MB/month"
    while (i < lines.length && lines[i] === "") i++;
    const monthlyLine = lines[i++] ?? "0 MB/month";

    // Status line e.g. "Active" / "Disabled"
    while (i < lines.length && lines[i] === "") i++;
    const statusLine = lines[i++] ?? "";

    // Normalize
    const sizeMB = toMB(sizeLine);
    const monthlyMB = toMB(monthlyLine);
    const status = statusLine as SiteRow["status"];

    // If provider accidentally merged into domain block (edge-case), fix when provider is not alphanumeric-ish
    if (!provider || /MB|month|Active|Disabled/i.test(provider)) {
      // fallback
      provider = "Media2Net";
    }

    rows.push({
      domain,
      provider,
      sizeMB,
      monthlyMB,
      status,
      note: inlineNote,
    });

    // Skip any extra blank separators
    while (i < lines.length && lines[i] === "") i++;
  }

  // Filter obviously invalid rows
  return rows.filter((r) => r.domain.length > 0 && r.status.length > 0);
}
