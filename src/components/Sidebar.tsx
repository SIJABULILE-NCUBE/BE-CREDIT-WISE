import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Sparkles,
  Wallet,
  Target,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/transactions", label: "Transactions", icon: Receipt },
  { to: "/insights", label: "AI Insights", icon: Sparkles },
  { to: "/budget", label: "Budget Planner", icon: Wallet },
  { to: "/goals", label: "Savings Goals", icon: Target },
  { to: "/credit-health", label: "Credit Health", icon: ShieldCheck },
  { to: "/profile", label: "Profile", icon: User },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 z-40
          glass-strong border-r border-parchment/5
          flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-verified">CREDITWISE</p>
            <p className="text-parchment-dim text-xs mt-0.5">Financial Insights</p>
          </div>
          <button onClick={onClose} className="md:hidden text-parchment-dim">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-verified/10 text-verified border border-verified/20"
                    : "text-parchment-dim hover:text-parchment hover:bg-ink-700/50"
                }`
              }
            >
              <Icon size={17} strokeWidth={1.8} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-parchment/5">
          <p className="text-parchment-faint text-[11px] leading-relaxed">
            Built by a credit risk specialist, not just a developer.
          </p>
        </div>
      </aside>
    </>
  );
}
