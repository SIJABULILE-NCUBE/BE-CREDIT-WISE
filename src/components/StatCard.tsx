import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon: ReactNode;
  accent?: "verified" | "caution" | "flagged" | "default";
  delay?: number;
}

const accentMap = {
  verified: "text-verified border-verified/20 bg-verified/5",
  caution: "text-caution border-caution/20 bg-caution/5",
  flagged: "text-flagged border-flagged/20 bg-flagged/5",
  default: "text-parchment border-parchment/10 bg-transparent",
};

export default function StatCard({ label, value, sublabel, icon, accent = "default", delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass rounded-xl p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-parchment-dim text-xs tracking-wide uppercase">{label}</span>
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${accentMap[accent]}`}>
          {icon}
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold tabular text-parchment">{value}</p>
        {sublabel && <p className="text-xs text-parchment-faint mt-1">{sublabel}</p>}
      </div>
    </motion.div>
  );
}
