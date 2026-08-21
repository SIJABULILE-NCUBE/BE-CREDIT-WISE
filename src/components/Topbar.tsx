import { Menu, Bell } from "lucide-react";
import { account } from "../data/mockData";

interface TopbarProps {
  onMenuClick: () => void;
  title: string;
}

export default function Topbar({ onMenuClick, title }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 glass border-b border-parchment/5 px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="md:hidden text-parchment-dim">
          <Menu size={22} />
        </button>
        <h1 className="text-lg font-semibold text-parchment">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-parchment-dim hover:text-parchment transition-colors">
          <Bell size={19} strokeWidth={1.8} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-flagged" />
        </button>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-verified/15 border border-verified/30 flex items-center justify-center font-mono text-xs text-verified">
            {account.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <span className="hidden sm:block text-sm text-parchment-dim">{account.name}</span>
        </div>
      </div>
    </header>
  );
}
