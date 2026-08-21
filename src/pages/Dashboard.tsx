import { Wallet, TrendingUp, TrendingDown, PiggyBank, ShieldCheck } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import { account, affordability, budgetCategories, transactions } from "../data/mockData";

const cashflowData = [
  { month: "Feb", income: 40200, expenses: 27100 },
  { month: "Mar", income: 41000, expenses: 29800 },
  { month: "Apr", income: 41000, expenses: 26500 },
  { month: "May", income: 42000, expenses: 30200 },
  { month: "Jun", income: 42000, expenses: 27900 },
  { month: "Jul", income: 42000, expenses: 28300 },
];

const pieData = budgetCategories.map((c) => ({ name: c.name, value: c.spent }));
const PIE_COLORS = ["#4A9B7F", "#5FB894", "#C99A4A", "#B85450", "#8A9B8E", "#6E6D68"];

export default function Dashboard() {
  const dtiPercent = Math.round(affordability.debtToIncomeRatio * 100);
  const recentTx = transactions.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Balance"
          value={`R${account.balance.toLocaleString()}`}
          icon={<Wallet size={16} />}
          delay={0}
        />
        <StatCard
          label="Income"
          value={`R${account.income.toLocaleString()}`}
          sublabel="this month"
          icon={<TrendingUp size={16} />}
          accent="verified"
          delay={0.05}
        />
        <StatCard
          label="Expenses"
          value={`R${account.expenses.toLocaleString()}`}
          sublabel="this month"
          icon={<TrendingDown size={16} />}
          accent="caution"
          delay={0.1}
        />
        <StatCard
          label="Savings"
          value={`R${account.savings.toLocaleString()}`}
          icon={<PiggyBank size={16} />}
          accent="verified"
          delay={0.15}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* cashflow chart */}
        <div className="lg:col-span-2 glass rounded-xl p-5">
          <h2 className="text-parchment font-medium mb-4">Income vs. expenses</h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={cashflowData}>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A9B7F" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#4A9B7F" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C99A4A" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#C99A4A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E2531" vertical={false} />
              <XAxis dataKey="month" stroke="#6E6D68" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6E6D68" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip
                contentStyle={{ background: "#161B26", border: "1px solid #2A3341", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#EDEAE3" }}
              />
              <Area type="monotone" dataKey="income" stroke="#4A9B7F" fill="url(#incomeGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="expenses" stroke="#C99A4A" fill="url(#expenseGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* spend breakdown */}
        <div className="glass rounded-xl p-5">
          <h2 className="text-parchment font-medium mb-4">Spend by category</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: "#161B26", border: "1px solid #2A3341", borderRadius: 8, fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {budgetCategories.slice(0, 4).map((c, i) => (
              <div key={c.id} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-parchment-dim">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                  {c.name}
                </span>
                <span className="tabular text-parchment">R{c.spent.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* DTI card - the credit risk angle, front and centre */}
        <div className="glass rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={16} className="text-verified" />
            <h2 className="text-parchment font-medium">Debt-to-income ratio</h2>
          </div>
          <p className="text-3xl font-semibold tabular text-parchment mb-2">{dtiPercent}%</p>
          <ProgressBar percent={dtiPercent} color="#4A9B7F" />
          <p className="text-parchment-faint text-xs mt-3 leading-relaxed">
            Lenders generally flag sustained DTI above 40% as a risk signal under NCA affordability
            guidelines. You're well within a comfortable range.
          </p>
        </div>

        {/* credit score */}
        <div className="glass rounded-xl p-5">
          <h2 className="text-parchment font-medium mb-3">Credit health</h2>
          <p className="text-3xl font-semibold tabular text-verified mb-2">
            {account.creditScore}<span className="text-parchment-faint text-base"> / {account.creditScoreMax}</span>
          </p>
          <ProgressBar percent={(account.creditScore / account.creditScoreMax) * 100} color="#4A9B7F" />
          <p className="text-parchment-faint text-xs mt-3">Good — up 14 points since last month</p>
        </div>

        {/* recent transactions preview */}
        <div className="glass rounded-xl p-5">
          <h2 className="text-parchment font-medium mb-3">Recent activity</h2>
          <div className="space-y-2.5">
            {recentTx.map((t) => (
              <div key={t.id} className="flex items-center justify-between text-sm">
                <span className="text-parchment-dim truncate max-w-[140px]">{t.merchant}</span>
                <span className={`tabular ${t.amount > 0 ? "text-verified" : "text-parchment"}`}>
                  {t.amount > 0 ? "+" : ""}R{Math.abs(t.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
