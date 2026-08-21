import { useState } from "react";
import { Moon, Sun, Bell, Shield, LogOut } from "lucide-react";
import { account } from "../data/mockData";

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-colors ${checked ? "bg-verified" : "bg-ink-700"}`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-parchment transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function Profile() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [flagAlerts, setFlagAlerts] = useState(true);

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="glass rounded-xl p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-verified/15 border border-verified/30 flex items-center justify-center font-mono text-xl text-verified">
          {account.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <h2 className="text-parchment font-medium text-lg">{account.name}</h2>
          <p className="text-parchment-dim text-sm">Member since March 2026</p>
        </div>
      </div>

      <div className="glass rounded-xl p-5 divide-y divide-parchment/5">
        <div className="flex items-center justify-between py-3 first:pt-0">
          <div className="flex items-center gap-3">
            {darkMode ? <Moon size={17} className="text-parchment-dim" /> : <Sun size={17} className="text-parchment-dim" />}
            <div>
              <p className="text-parchment text-sm">Dark mode</p>
              <p className="text-parchment-faint text-xs">The interface Creditwise was designed for</p>
            </div>
          </div>
          <Toggle checked={darkMode} onChange={() => setDarkMode((v) => !v)} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Bell size={17} className="text-parchment-dim" />
            <div>
              <p className="text-parchment text-sm">Budget notifications</p>
              <p className="text-parchment-faint text-xs">Get notified when a category goes over budget</p>
            </div>
          </div>
          <Toggle checked={notifications} onChange={() => setNotifications((v) => !v)} />
        </div>

        <div className="flex items-center justify-between py-3 last:pb-0">
          <div className="flex items-center gap-3">
            <Shield size={17} className="text-parchment-dim" />
            <div>
              <p className="text-parchment text-sm">Flagged transaction alerts</p>
              <p className="text-parchment-faint text-xs">Notify me when a transaction breaks my normal pattern</p>
            </div>
          </div>
          <Toggle checked={flagAlerts} onChange={() => setFlagAlerts((v) => !v)} />
        </div>
      </div>

      <button className="flex items-center gap-2 text-flagged text-sm hover:underline">
        <LogOut size={15} /> Log out
      </button>
    </div>
  );
}
