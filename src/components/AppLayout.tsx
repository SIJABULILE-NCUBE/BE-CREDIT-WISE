import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/transactions": "Transactions",
  "/insights": "AI Insights",
  "/budget": "Budget Planner",
  "/goals": "Savings Goals",
  "/credit-health": "Credit Health",
  "/profile": "Profile",
};

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = titles[location.pathname] ?? "Creditwise";

  return (
    <div className="flex min-h-screen grain-bg">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="flex-1 p-4 md:p-8 relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
