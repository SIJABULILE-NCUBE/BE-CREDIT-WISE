import { motion } from "framer-motion";
import type { Insight } from "../data/mockData";
import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

const tagConfig = {
  reviewed: { label: "Reviewed", color: "text-verified", icon: CheckCircle2 },
  flagged: { label: "Flagged", color: "text-flagged", icon: AlertTriangle },
  opportunity: { label: "Opportunity", color: "text-caution", icon: TrendingUp },
};

// This is the signature element of the whole app - insight cards read like
// an annotated case file entry, because that's what her actual audit notes look like,
// rather than a generic chatbot speech bubble.
export default function InsightCard({ insight, index = 0 }: { insight: Insight; index?: number }) {
  const config = tagConfig[insight.tag];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glass rounded-xl p-5 border-l-2"
      style={{ borderLeftColor: "currentColor" }}
    >
      <div className={`flex items-center justify-between mb-3 ${config.color}`}>
        <span className="stamp">{config.label}</span>
        <span className="font-mono text-[11px] text-parchment-faint">{insight.date}</span>
      </div>
      <h3 className="text-parchment font-medium mb-2 flex items-start gap-2">
        <Icon size={16} className={`${config.color} mt-0.5 flex-shrink-0`} strokeWidth={2} />
        {insight.title}
      </h3>
      <p className="text-parchment-dim text-sm leading-relaxed">{insight.body}</p>
    </motion.div>
  );
}
