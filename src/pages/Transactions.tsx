import { useMemo, useState } from "react";
import { Search, AlertTriangle } from "lucide-react";
import { transactions } from "../data/mockData";

export default function Transactions() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(transactions.map((t) => t.category)))],
    []
  );

  const filtered = transactions.filter((t) => {
    const matchesQuery = t.merchant.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || t.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-5">
      <div className="glass rounded-xl p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search transactions..."
            className="w-full bg-ink-800 border border-parchment/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-parchment placeholder:text-parchment-faint focus:outline-none focus:border-verified/50"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-ink-800 border border-parchment/10 rounded-lg px-3 py-2.5 text-sm text-parchment focus:outline-none focus:border-verified/50"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-parchment/10 text-left text-parchment-faint text-xs uppercase tracking-wide">
                <th className="px-5 py-3 font-normal">Date</th>
                <th className="px-5 py-3 font-normal">Merchant</th>
                <th className="px-5 py-3 font-normal">Category</th>
                <th className="px-5 py-3 font-normal text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id} className="border-b border-parchment/5 hover:bg-ink-700/30 transition-colors group">
                  <td className="px-5 py-3.5 text-parchment-dim tabular text-xs whitespace-nowrap">{t.date}</td>
                  <td className="px-5 py-3.5 text-parchment">
                    <div className="flex items-center gap-2">
                      {t.merchant}
                      {t.flagged && (
                        <span title={t.flagReason} className="flex items-center gap-1 text-flagged">
                          <AlertTriangle size={13} />
                        </span>
                      )}
                    </div>
                    {t.flagged && (
                      <p className="text-flagged/80 text-xs mt-0.5">{t.flagReason}</p>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-parchment-dim">
                    <span className="text-xs bg-ink-700 px-2 py-1 rounded-md">{t.category}</span>
                  </td>
                  <td className={`px-5 py-3.5 text-right tabular font-medium ${t.amount > 0 ? "text-verified" : "text-parchment"}`}>
                    {t.amount > 0 ? "+" : ""}R{Math.abs(t.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-10 text-center text-parchment-faint text-sm">
                    No transactions match that search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
