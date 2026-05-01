import { motion } from "framer-motion";
import { DollarSign, Search, ArrowRight } from "lucide-react";
import {
  AnimSection,
  AnimItem,
  fadeUp,
  slideLeft,
  slideRight,
} from "../utils/animations";
import { useCounter } from "../hooks/useCounter";

const searchQueries = [
  '"food bank near me"',
  '"how to help homeless families"',
  '"volunteer opportunities in Chicago"',
  '"donate to animal shelter"',
  '"mental health support nonprofit"',
  '"veterans assistance programs"',
];

function CounterStat({ end, prefix = "", suffix = "", label, decimals = 0 }) {
  const { count, ref } = useCounter(end, 2200);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function Opportunity() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Big green glow in center */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/50" />
              <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">
                The Opportunity
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/50" />
            </div>
          </AnimItem>

          <AnimItem variant={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center max-w-4xl mx-auto leading-tight mb-6">
              <span className="gradient-text">$10,000/Month.</span> Every Month.{" "}
              <br className="hidden sm:block" />
              Already Yours If You Qualify.
            </h2>
          </AnimItem>

          <AnimItem variant={fadeUp}>
            <p className="text-slate-300 text-center max-w-3xl mx-auto text-lg mb-16 leading-relaxed">
              Google Ad Grants gives eligible 501(c)(3) nonprofits up to{" "}
              <strong className="text-white">
                $10,000/month — $120,000/year
              </strong>{" "}
              — in free search advertising on Google. That's your organization
              appearing at the top of Google results every time someone searches
              for what you do.
            </p>
          </AnimItem>
        </AnimSection>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Search queries visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <Search size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-lg">
                People are already searching for you:
              </h3>
            </div>
            <div className="space-y-3">
              {searchQueries.map((query, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-emerald-500/20 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Search size={12} className="text-emerald-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-mono">
                    {query}
                  </span>
                  <div className="ml-auto">
                    <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      Ad
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-emerald-400 font-semibold text-sm mt-5 text-center">
              → Your organization appears first. You pay $0.
            </p>
          </motion.div>

          {/* Right: Stats & math */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="flex flex-col gap-4"
          >
            {/* Big dollar visual */}
            <div className="glass-card rounded-2xl p-8 text-center border border-emerald-500/15 flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />
              <div className="relative z-10">
                <div className="text-7xl sm:text-8xl font-black gradient-text mb-2 leading-none">
                  $10K
                </div>
                <div className="text-slate-300 text-lg font-semibold mb-1">
                  per month in free ads
                </div>
                <div className="text-slate-500 text-sm">
                  Google funds it completely
                </div>
                <div className="mt-5 pt-5 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-black text-yellow-400">
                      $120K
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      per year total value
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">$0</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      ad spend from you
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency math */}
            <div className="urgency-box p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="text-yellow-300 font-bold mb-1">
                    Every month you wait...
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    ...is{" "}
                    <strong className="text-yellow-400">
                      $10,000 in free advertising
                    </strong>{" "}
                    that disappears forever. It doesn't accumulate or carry
                    over. Waiting 3 months to start costs you{" "}
                    <strong className="text-yellow-400">
                      $30,000 in potential reach.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Counter stats */}
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <CounterStat
                  end={120000}
                  prefix="$"
                  label="Per year in free ads"
                  suffix=""
                />
                <CounterStat end={200} suffix="+" label="Nonprofits helped" />
                <CounterStat end={99} suffix="%" label="Grant approval rate" />
                <CounterStat
                  end={30}
                  suffix=" days"
                  label="To live campaigns"
                />
              </div>
            </div>
          </AnimItem>
        </AnimSection>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
