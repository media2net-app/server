"use client";

import React from "react";
import type { SiteRow } from "@/lib/parse";

export type ColumnKey = keyof Pick<SiteRow, "domain" | "provider" | "sizeMB" | "monthlyMB" | "status">;

function formatMB(n: number) {
  if (n >= 1024) return `${(n / 1024).toFixed(2)} GB`;
  return `${n.toFixed(1)} MB`;
}

function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function StatusBadge({ status }: { status: string }) {
  const color = status === "Active" ? "bg-emerald-100 text-emerald-700" : status === "Disabled" ? "bg-rose-100 text-rose-700" : "bg-zinc-100 text-zinc-700";
  return <span className={classNames("inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", color)}>{status}</span>;
}

function LabelBadge({ state }: { state: "match" | "mismatch" | "unknown" }) {
  const conf =
    state === "match"
      ? { cls: "bg-emerald-100 text-emerald-700", text: "On 162.19.155.212" }
      : state === "mismatch"
      ? { cls: "bg-rose-100 text-rose-700", text: "Other IP" }
      : { cls: "bg-zinc-100 text-zinc-700", text: "Unknown" };
  return <span className={classNames("inline-flex items-center rounded px-2 py-0.5 text-xs font-medium", conf.cls)}>{conf.text}</span>;
}

export default function DataTable({ data, matchMap, selected, onToggle }: { data: SiteRow[]; matchMap?: Record<string, boolean>; selected?: Record<string, boolean>; onToggle?: (domain: string) => void }) {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<{ key: ColumnKey; dir: "asc" | "desc" }>({ key: "domain", dir: "asc" });
  const [filter, setFilter] = React.useState<"all" | "match" | "mismatch">("all");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = !q
      ? data
      : data.filter((r) =>
          [r.domain, r.provider, r.status, r.note || "", String(r.sizeMB), String(r.monthlyMB)]
            .join(" ")
            .toLowerCase()
            .includes(q)
        );

    if (matchMap && filter !== "all") {
      rows = rows.filter((r) => {
        const m = matchMap[r.domain];
        return filter === "match" ? m === true : m === false;
      });
    }
    rows = [...rows].sort((a, b) => {
      const { key, dir } = sort;
      const mul = dir === "asc" ? 1 : -1;
      if (key === "domain" || key === "provider" || key === "status") {
        return a[key].localeCompare(b[key]) * mul;
      }
      // numeric
      return ((a as any)[key] - (b as any)[key]) * mul;
    });
    return rows;
  }, [data, query, sort, matchMap, filter]);

  function toggleSort(key: ColumnKey) {
    setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));
  }

  const headers: Array<{ key: ColumnKey; label: string; numeric?: boolean }> = [
    { key: "domain", label: "Domain" },
    { key: "provider", label: "Provider" },
    { key: "sizeMB", label: "Size" , numeric: true},
    { key: "monthlyMB", label: "Monthly" , numeric: true},
    { key: "status", label: "Status" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <input
          className="w-full md:w-80 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
          placeholder="Search domain, provider, status..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex items-center gap-2">
          {matchMap && (
            <div className="hidden sm:flex items-center gap-1">
              <button
                className={classNames(
                  "rounded border px-2 py-1 text-xs",
                  filter === "all" ? "border-zinc-900 text-zinc-900" : "border-zinc-300 text-zinc-600 hover:border-zinc-400"
                )}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={classNames(
                  "rounded border px-2 py-1 text-xs",
                  filter === "match" ? "border-emerald-600 text-emerald-700" : "border-zinc-300 text-zinc-600 hover:border-zinc-400"
                )}
                onClick={() => setFilter("match")}
              >
                Green
              </button>
              <button
                className={classNames(
                  "rounded border px-2 py-1 text-xs",
                  filter === "mismatch" ? "border-rose-600 text-rose-700" : "border-zinc-300 text-zinc-600 hover:border-zinc-400"
                )}
                onClick={() => setFilter("mismatch")}
              >
                Red
              </button>
            </div>
          )}
          <div className="text-sm text-zinc-600">{filtered.length} results</div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="min-w-full divide-y divide-zinc-200">
          <thead className="bg-zinc-50">
            <tr>
              {onToggle && <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600">Mark</th>}
              {headers.map((h) => (
                <th
                  key={h.key}
                  className={classNames(
                    "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600 select-none",
                    h.numeric && "text-right"
                  )}
                >
                  <button
                    className="inline-flex items-center gap-1 hover:text-zinc-900"
                    onClick={() => toggleSort(h.key)}
                  >
                    {h.label}
                    {sort.key === h.key && (
                      <span className="text-zinc-400">{sort.dir === "asc" ? "▲" : "▼"}</span>
                    )}
                  </button>
                </th>
              ))}
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filtered.map((r, idx) => {
              const match = matchMap?.[r.domain];
              const state: "match" | "mismatch" | "unknown" = match === undefined ? "unknown" : match ? "match" : "mismatch";
              const rowBg = state === "match" ? "bg-emerald-50" : state === "mismatch" ? "bg-rose-50" : "";
              return (
                <tr key={r.domain + idx} className={classNames("hover:bg-zinc-50", rowBg)}>
                  {onToggle && (
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        aria-label={`Mark ${r.domain}`}
                        disabled={state !== "match"}
                        checked={!!selected?.[r.domain]}
                        onChange={() => onToggle(r.domain)}
                      />
                    </td>
                  )}
                  <td className="px-4 py-2 text-zinc-900">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{r.domain}</span>
                      <LabelBadge state={state} />
                    </div>
                  </td>
                <td className="px-4 py-2 text-zinc-700">{r.provider}</td>
                <td className="px-4 py-2 text-right tabular-nums text-zinc-700">{formatMB(r.sizeMB)}</td>
                <td className="px-4 py-2 text-right tabular-nums text-zinc-700">{formatMB(r.monthlyMB)}</td>
                <td className="px-4 py-2"><StatusBadge status={r.status} /></td>
                <td className="px-4 py-2 text-zinc-600">{r.note || ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
