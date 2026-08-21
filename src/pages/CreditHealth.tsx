import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import { account, creditFactors } from "../data/mockData";

const statusConfig = {
  verified: { icon: CheckCircle2, color: "text-verified", label: "Healthy" },
  caution: { icon: AlertCircle, color: "text-caution", label: "Watch" },
  flagged: { icon: XCircle, color: "text-flagged", label: "Action needed" },
};

export default function CreditHealth() {
  const scorePercent = (account.creditScore / account.creditScoreMax) * 100;

  return (
    <div className="space-y-6">
      <div className="glass-strong rounded-xl p-6 text-center">
        <p className="text-parchment-dim text-xs uppercase tracking-wide mb-2">Your credit score</p>
        <p className="text-5xl font-semibold tabular text-verified mb-1">{account.creditScore}</p>
        <p className="text-parchment-faint text-sm mb-4">out of {account.creditScoreMax} — Good</p>
        <div className="max-w-sm mx-auto">
          <ProgressBar percent={scorePercent} />
        </div>
        <p className="text-parchment-dim text-xs mt-4">Up 14 points since last month</p>
      </div>

      <div>
        <h2 className="text-parchment font-medium mb-4">What's driving your score</h2>
        <div className="space-y-3">
          {creditFactors.map((f, i) => {
            const config = statusConfig[f.status];
            const Icon = config.icon;
            return (
              <motion.div
                key={f.factor}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass rounded-xl p-4 flex items-start gap-3"
              >
                <Icon size={18} className={`${config.color} mt-0.5 flex-shrink-0`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-parchment text-sm font-medium">{f.factor}</h3>
                    <span className={`text-xs font-mono ${config.color}`}>{config.label}</span>
                  </div>
                  <p className="text-parchment-dim text-xs mt-1 leading-relaxed">{f.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="glass rounded-xl p-5">
        <h2 className="text-parchment font-medium mb-2">How to improve it faster</h2>
        <ul className="text-parchment-dim text-sm space-y-2 leading-relaxed">
          <li>• Bring credit utilisation under 30% — currently at 38%, this is the single fastest lever available.</li>
          <li>• Keep vehicle finance repayments on schedule, it's your longest and largest fixed obligation.</li>
          <li>• Avoid new credit applications in the next 3 months to limit hard enquiries.</li>
        </ul>
      </div>
    </div>
  );
}
