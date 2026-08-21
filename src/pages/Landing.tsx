import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, LineChart, Search, ArrowRight } from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "See where your money actually goes",
    body: "Every transaction categorised automatically, with a dashboard that shows income, expenses and savings without the spreadsheet.",
  },
  {
    icon: ShieldCheck,
    title: "Understand your credit health, not just your score",
    body: "A number alone doesn't tell you what to do next. Creditwise explains what's driving your score and what to fix first.",
  },
  {
    icon: Search,
    title: "Catch what shouldn't be there",
    body: "Transactions that break your normal pattern get flagged for a second look, the same way a risk analyst reviews a file.",
  },
];

const testimonials = [
  {
    quote: "For the first time I understood why my score wasn't moving, not just that it wasn't.",
    name: "Naledi M.",
    role: "Freelance designer",
  },
  {
    quote: "The debt-to-income view alone changed how I plan my repayments.",
    name: "Thabo K.",
    role: "Junior developer",
  },
  {
    quote: "It caught a duplicate debit order I would have missed for months.",
    name: "Amahle P.",
    role: "Student",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen grain-bg relative overflow-hidden">
      {/* nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div>
          <p className="font-mono text-sm tracking-[0.2em] text-verified">CREDITWISE</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-parchment-dim hover:text-parchment transition-colors">
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-sm bg-verified/10 border border-verified/30 text-verified px-4 py-2 rounded-lg hover:bg-verified/20 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="stamp text-verified mb-6 inline-block">Financial insight, reviewed properly</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-parchment mt-4">
            Take control of your money with{" "}
            <span className="text-verified">AI-powered</span> financial insights.
          </h1>
          <p className="text-parchment-dim text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Built by someone who spent over a decade assessing risk and reading credit files for a
            living. Creditwise doesn't just show you numbers, it explains what they mean and what to
            do about them.
          </p>
          <div className="flex items-center justify-center gap-4 mt-9">
            <Link
              to="/signup"
              className="flex items-center gap-2 bg-verified text-ink-950 font-medium px-6 py-3 rounded-lg hover:bg-verified-bright transition-colors"
            >
              Start for free <ArrowRight size={16} />
            </Link>
            <Link
              to="/dashboard"
              className="text-parchment-dim px-6 py-3 rounded-lg border border-parchment/10 hover:border-parchment/25 transition-colors"
            >
              View demo dashboard
            </Link>
          </div>
        </motion.div>
      </section>

      {/* features */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-verified/10 border border-verified/20 flex items-center justify-center mb-4">
                <f.icon size={18} className="text-verified" strokeWidth={1.8} />
              </div>
              <h3 className="text-parchment font-medium mb-2">{f.title}</h3>
              <p className="text-parchment-dim text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* testimonials */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-2xl font-semibold text-parchment text-center mb-10">
          People who stopped guessing
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-xl p-6">
              <p className="text-parchment-dim text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
              <p className="text-parchment text-sm font-medium">{t.name}</p>
              <p className="text-parchment-faint text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-parchment mb-4">
          Your finances deserve the same scrutiny a bank gives your loan file.
        </h2>
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 bg-verified text-ink-950 font-medium px-6 py-3 rounded-lg hover:bg-verified-bright transition-colors mt-4"
        >
          Create your account <ArrowRight size={16} />
        </Link>
      </section>

      <footer className="relative z-10 border-t border-parchment/5 px-6 md:px-12 py-8 text-center">
        <p className="text-parchment-faint text-xs">Creditwise — a portfolio project by Sijabulile Ncube</p>
      </footer>
    </div>
  );
}
