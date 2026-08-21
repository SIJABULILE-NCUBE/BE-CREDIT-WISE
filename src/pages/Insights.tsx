import InsightCard from "../components/InsightCard";
import { insights } from "../data/mockData";

export default function Insights() {
  return (
    <div className="space-y-5">
      <div className="glass rounded-xl p-5">
        <p className="text-parchment-dim text-sm leading-relaxed">
          Each note below is generated from your transaction history and reviewed against the same
          checks a credit analyst would run: affordability, spending consistency, and anything that
          breaks your normal pattern.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {insights.map((insight, i) => (
          <InsightCard key={insight.id} insight={insight} index={i} />
        ))}
      </div>
    </div>
  );
}
