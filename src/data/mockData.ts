// Mock data for Creditwise.
// Numbers are illustrative but modeled on real affordability/credit concepts
// (DTI, disposable income, NCA-style thresholds) rather than random placeholders.

export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number; // negative = expense, positive = income
  flagged?: boolean; // flagged = worth a second look, not necessarily fraud
  flagReason?: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  spent: number;
  limit: number;
  color: string;
}

export interface SavingsGoal {
  id: string;
  name: string;
  target: number;
  saved: number;
  targetDate: string;
}

export interface Insight {
  id: string;
  title: string;
  body: string;
  tag: "reviewed" | "flagged" | "opportunity";
  date: string;
}

export const account = {
  name: "Sipho Dlamini",
  balance: 35640,
  income: 42000,
  expenses: 28300,
  savings: 13700,
  creditScore: 742,
  creditScoreMax: 850,
};

// Debt-to-income is one of the first things a credit risk analyst checks -
// so it's front and centre here instead of buried in a settings page.
export const affordability = {
  grossMonthlyIncome: 42000,
  totalMonthlyDebtRepayments: 9800,
  get debtToIncomeRatio() {
    return this.totalMonthlyDebtRepayments / this.grossMonthlyIncome;
  },
  // NCA guidance generally treats sustained DTI above ~40% as a stress signal
  ncaThreshold: 0.4,
};

export const transactions: Transaction[] = [
  { id: "t1", date: "2026-07-29", merchant: "Woolworths Sandton", category: "Groceries", amount: -842.5 },
  { id: "t2", date: "2026-07-28", merchant: "Salary - Absa Corporate", category: "Income", amount: 42000 },
  { id: "t3", date: "2026-07-27", merchant: "Netflix", category: "Subscriptions", amount: -199 },
  { id: "t4", date: "2026-07-26", merchant: "Unknown POS - Cape Town", category: "Uncategorised", amount: -3200, flagged: true, flagReason: "First transaction from this merchant, unusual location relative to spending pattern" },
  { id: "t5", date: "2026-07-25", merchant: "Vehicle Finance - WesBank", category: "Debt Repayment", amount: -4650 },
  { id: "t6", date: "2026-07-24", merchant: "Engen Fuel", category: "Transport", amount: -680 },
  { id: "t7", date: "2026-07-22", merchant: "Takealot", category: "Shopping", amount: -1250 },
  { id: "t8", date: "2026-07-21", merchant: "Rent - Sable Court", category: "Housing", amount: -9500 },
  { id: "t9", date: "2026-07-20", merchant: "Checkers", category: "Groceries", amount: -560.3 },
  { id: "t10", date: "2026-07-18", merchant: "Duplicate debit order - DSTV", category: "Subscriptions", amount: -759, flagged: true, flagReason: "Same amount charged twice within 48 hours, worth confirming with the provider" },
  { id: "t11", date: "2026-07-15", merchant: "Discovery Medical Aid", category: "Insurance", amount: -3100 },
  { id: "t12", date: "2026-07-12", merchant: "Uber", category: "Transport", amount: -145 },
];

export const budgetCategories: BudgetCategory[] = [
  { id: "b1", name: "Housing", spent: 9500, limit: 10000, color: "#4A9B7F" },
  { id: "b2", name: "Groceries", spent: 3120, limit: 3500, color: "#4A9B7F" },
  { id: "b3", name: "Transport", spent: 1980, limit: 2000, color: "#C99A4A" },
  { id: "b4", name: "Debt Repayment", spent: 9800, limit: 9800, color: "#4A9B7F" },
  { id: "b5", name: "Subscriptions", spent: 958, limit: 700, color: "#B85450" },
  { id: "b6", name: "Shopping", spent: 2450, limit: 2000, color: "#B85450" },
];

export const savingsGoals: SavingsGoal[] = [
  { id: "g1", name: "Emergency Fund (3 months expenses)", target: 84900, saved: 41200, targetDate: "2027-01-31" },
  { id: "g2", name: "Vehicle Deposit", target: 40000, saved: 13700, targetDate: "2026-12-01" },
  { id: "g3", name: "Home Loan Deposit", target: 150000, saved: 22000, targetDate: "2028-06-01" },
];

export const creditFactors = [
  { factor: "Payment history", status: "verified" as const, note: "No missed payments in the last 24 months" },
  { factor: "Credit utilisation", status: "caution" as const, note: "38% of available credit in use, below 30% improves score faster" },
  { factor: "Debt-to-income", status: "caution" as const, note: "23% - within a healthy range, but vehicle finance is a large share" },
  { factor: "Account age", status: "verified" as const, note: "Oldest account 6 years, 4 months" },
  { factor: "Hard enquiries", status: "verified" as const, note: "1 enquiry in the last 12 months" },
];

export const insights: Insight[] = [
  {
    id: "i1",
    title: "Your debt-to-income ratio is trending in a healthy range",
    body: "Your current monthly debt repayments sit at roughly 23% of gross income. Credit providers generally treat anything under 30-40% as low risk, so you have room before this becomes a factor in future applications. Keep an eye on it if you take on new credit.",
    tag: "reviewed",
    date: "2026-08-01",
  },
  {
    id: "i2",
    title: "Subscriptions and shopping are running over budget",
    body: "Subscriptions are 37% over your monthly limit and shopping is 22% over. Neither is large on its own, but together they account for most of this month's overspend. A quick audit of active subscriptions usually recovers R200-R400 without any lifestyle change.",
    tag: "opportunity",
    date: "2026-07-30",
  },
  {
    id: "i3",
    title: "Two transactions were flagged for review",
    body: "An unfamiliar merchant in Cape Town and a duplicate DSTV debit order were flagged as inconsistent with your normal spending pattern. Neither is confirmed as fraudulent, but both are worth a quick check against your statement.",
    tag: "flagged",
    date: "2026-07-29",
  },
  {
    id: "i4",
    title: "Vehicle finance is your largest fixed monthly commitment",
    body: "Vehicle repayments make up roughly 47% of your total debt obligations. If you're considering additional credit in the next 12 months, lenders will weigh this heavily in an affordability assessment. Paying slightly more than the minimum now can shorten the term and reduce total interest paid.",
    tag: "reviewed",
    date: "2026-07-26",
  },
];
