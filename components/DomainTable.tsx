"use client";

import React from "react";
import { DomainRow } from "@/lib/domain-parse";

function StatusBadge({ status }: { status: string }) {
  const isActive = status.toLowerCase() === "actief";
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
      isActive 
        ? "bg-green-100 text-green-800" 
        : "bg-gray-100 text-gray-800"
    }`}>
      {status}
    </span>
  );
}

// Helper function to convert month number to Dutch month name
function getMonthName(monthNumber: string): string {
  const monthNames: Record<string, string> = {
    '01': 'Januari',
    '02': 'Februari', 
    '03': 'Maart',
    '04': 'April',
    '05': 'Mei',
    '06': 'Juni',
    '07': 'Juli',
    '08': 'Augustus',
    '09': 'September',
    '10': 'Oktober',
    '11': 'November',
    '12': 'December'
  };
  return monthNames[monthNumber] || monthNumber;
}

export default function DomainTable({ data }: { data: DomainRow[] }) {
  const [query, setQuery] = React.useState("");
  const [selectedMonth, setSelectedMonth] = React.useState<string>("all");
  const [sort, setSort] = React.useState<{ key: keyof DomainRow; dir: "asc" | "desc" }>({ key: "name", dir: "asc" });

  // Get unique months from the data
  const availableMonths = React.useMemo(() => {
    const months = new Set(data.map(d => d.nextInvoiceMonth).filter(m => m !== '00'));
    return Array.from(months).sort();
  }, [data]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = data;

    // Apply search filter
    if (q) {
      rows = rows.filter((r) =>
        [r.name, r.product, r.status, r.lastInvoice, r.nextInvoice]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    // Apply month filter
    if (selectedMonth !== "all") {
      rows = rows.filter((r) => r.nextInvoiceMonth === selectedMonth);
    }

    // Apply sorting
    rows = [...rows].sort((a, b) => {
      const { key, dir } = sort;
      const mul = dir === "asc" ? 1 : -1;
      return a[key].localeCompare(b[key]) * mul;
    });
    return rows;
  }, [data, query, selectedMonth, sort]);

  function toggleSort(key: keyof DomainRow) {
    setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));
  }

  const headers: Array<{ key: keyof DomainRow; label: string }> = [
    { key: "name", label: "Naam" },
    { key: "product", label: "Product" },
    { key: "status", label: "Status" },
    { key: "lastInvoice", label: "Laatste factuur" },
    { key: "nextInvoice", label: "Volgende factuur" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Zoek domeinen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-2 border border-zinc-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-2 border border-zinc-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="all">Alle maanden</option>
            {availableMonths.map(month => (
              <option key={month} value={month}>
                {getMonthName(month)}
              </option>
            ))}
          </select>
        </div>
        <div className="text-sm text-zinc-600">
          {filtered.length} van {data.length} domeinen
          {selectedMonth !== "all" && (
            <span className="ml-2 text-blue-600">
              (filter: {getMonthName(selectedMonth)})
            </span>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 bg-white border border-zinc-200 rounded-lg">
          <thead className="bg-zinc-50">
            <tr>
              {headers.map(({ key, label }) => (
                <th
                  key={key}
                  className="px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider cursor-pointer hover:bg-zinc-100"
                  onClick={() => toggleSort(key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{label}</span>
                    {sort.key === key && (
                      <span className="text-zinc-400">
                        {sort.dir === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filtered.map((r, idx) => (
              <tr key={r.name + idx} className="hover:bg-zinc-50">
                <td className="px-4 py-3 text-zinc-900 font-medium">{r.name}</td>
                <td className="px-4 py-3 text-zinc-700">{r.product}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={r.status} />
                </td>
                <td className="px-4 py-3 text-zinc-700">{r.lastInvoice}</td>
                <td className="px-4 py-3 text-zinc-700">{r.nextInvoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
