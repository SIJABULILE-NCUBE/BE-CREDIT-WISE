import { motion } from "framer-motion";
import { Target, Plus } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import { savingsGoals } from "../data/mockData";

function monthsUntil(dateStr: string) {
  const target = new Date(dateStr);
  const now = new Date();
  const months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
  return Math.max(months, 0);
}

export default function Goals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-parchment-dim text-sm">Track progress toward what matters, with a realistic timeline.</p>
        <button className="flex items-center gap-2 bg-verified/10 border border-verified/30 text-verified text-sm px-4 py-2 rounded-lg hover:bg-verified/20 transition-colors">
          <Plus size={15} /> New goal
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {savingsGoals.map((g, i) => {
          const percent = Math.round((g.saved / g.target) * 100);
          const monthsLeft = monthsUntil(g.targetDate);
          const remaining = g.target - g.saved;
          const monthlyNeeded = monthsLeft > 0 ? Math.ceil(remaining / monthsLeft) : remaining;

          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target size={16} className="text-verified" />
                <h3 className="text-parchment font-medium">{g.name}</h3>
              </div>
              <p className="text-2xl font-semibold tabular text-parchment mb-1">
                R{g.saved.toLocaleString()}
                <span className="text-parchment-faint text-base"> / R{g.target.toLocaleString()}</span>
              </p>
              <ProgressBar percent={percent} />
              <div className="flex items-center justify-between mt-3 text-xs text-parchment-dim">
                <span>{percent}% saved</span>
                <span>Target: {new Date(g.targetDate).toLocaleDateString("en-ZA", { month: "short", year: "numeric" })}</span>
              </div>
              {monthsLeft > 0 && (
                <p className="text-parchment-faint text-xs mt-2.5 border-t border-parchment/5 pt-2.5">
                  Save about <span className="text-verified tabular">R{monthlyNeeded.toLocaleString()}</span>/month to hit this on time
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
