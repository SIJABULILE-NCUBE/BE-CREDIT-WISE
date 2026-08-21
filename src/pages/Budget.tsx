import { motion } from "framer-motion";
import ProgressBar from "../components/ProgressBar";
import { budgetCategories } from "../data/mockData";

export default function Budget() {
  const totalSpent = budgetCategories.reduce((sum, c) => sum + c.spent, 0);
  const totalLimit = budgetCategories.reduce((sum, c) => sum + c.limit, 0);

  return (
    <div className="space-y-6">
      <div className="glass rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-parchment-dim text-xs uppercase tracking-wide mb-1">Total budgeted this month</p>
          <p className="text-2xl font-semibold tabular text-parchment">
            R{totalSpent.toLocaleString()} <span className="text-parchment-faint text-base">/ R{totalLimit.toLocaleString()}</span>
          </p>
        </div>
        <div className="w-full sm:w-64">
          <ProgressBar percent={(totalSpent / totalLimit) * 100} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {budgetCategories.map((c, i) => {
          const percent = Math.round((c.spent / c.limit) * 100);
          const over = c.spent > c.limit;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-parchment font-medium">{c.name}</h3>
                <span className={`text-xs font-mono ${over ? "text-flagged" : "text-parchment-dim"}`}>
                  {percent}%
                </span>
              </div>
              <ProgressBar percent={percent} color={c.color} />
              <div className="flex items-center justify-between mt-2.5 text-sm">
                <span className="text-parchment-dim tabular">R{c.spent.toLocaleString()} spent</span>
                <span className="text-parchment-faint tabular">of R{c.limit.toLocaleString()}</span>
              </div>
              {over && (
                <p className="text-flagged text-xs mt-2">
                  Over budget by R{(c.spent - c.limit).toLocaleString()}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
