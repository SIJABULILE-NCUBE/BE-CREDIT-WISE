import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, User } from "lucide-react";

interface AuthProps {
  mode: "login" | "signup";
}

export default function Auth({ mode }: AuthProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // demo only - no real auth backend, just routes straight to the dashboard
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 grain-bg relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-strong rounded-2xl p-8 w-full max-w-md relative z-10"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-verified mb-1">CREDITWISE</p>
        <h1 className="text-2xl font-semibold text-parchment mb-1">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-parchment-dim text-sm mb-6">
          {mode === "login"
            ? "Log in to see where your money stands."
            : "Takes two minutes. No credit check required to sign up."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="text-xs text-parchment-dim mb-1.5 block">Full name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment-faint" />
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sipho Dlamini"
                  className="w-full bg-ink-800 border border-parchment/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-parchment placeholder:text-parchment-faint focus:outline-none focus:border-verified/50"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs text-parchment-dim mb-1.5 block">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment-faint" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-ink-800 border border-parchment/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-parchment placeholder:text-parchment-faint focus:outline-none focus:border-verified/50"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-parchment-dim mb-1.5 block">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment-faint" />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-ink-800 border border-parchment/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-parchment placeholder:text-parchment-faint focus:outline-none focus:border-verified/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-verified text-ink-950 font-medium py-2.5 rounded-lg hover:bg-verified-bright transition-colors mt-2"
          >
            {mode === "login" ? "Log in" : "Create account"}
          </button>
        </form>

        <p className="text-center text-sm text-parchment-dim mt-6">
          {mode === "login" ? (
            <>Don't have an account? <Link to="/signup" className="text-verified hover:underline">Sign up</Link></>
          ) : (
            <>Already have an account? <Link to="/login" className="text-verified hover:underline">Log in</Link></>
          )}
        </p>
      </motion.div>
    </div>
  );
}
