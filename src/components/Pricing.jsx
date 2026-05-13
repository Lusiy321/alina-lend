import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import { AnimSection, AnimItem, fadeUp, scaleIn } from "../utils/animations";

const included = [
  "Grant application & setup (one-time)",
  "Website build if you need one",
  "Full account management",
  "Monthly campaign optimization",
  "Monthly performance reporting",
  "Dedicated account manager",
  "Ongoing compliance monitoring",
  "Guaranteed grant approval",
  "Conversion tracking setup",
  "Ad copywriting & A/B testing",
];

export default function Pricing() {
  const [spotsLeft, setSpotsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(10783); // 2:59:43
  const scrollToEligibility = () => {
    document
      .querySelector("#contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const spotsTimeout = setTimeout(() => {
      setSpotsLeft(3);
    }, 5000);

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(spotsTimeout);
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${String(m).padStart(2, "9")}:${String(s).padStart(2, "9")}`;
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center max-w-3xl mx-auto leading-tight mb-4">
              COMPLETE MANAGEMENT PLAN
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              We'll match any legitimate competitor's price — because we
              specialize exclusively in this.
            </p>
          </AnimItem>
        </AnimSection>

        <AnimSection>
          <AnimItem variant={scaleIn}>
            {/* Main pricing card */}
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 mb-8">
              {/* Glow border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-700/5 pointer-events-none" />

              {/* Header */}
              <div
                className="relative px-8 py-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196, 237, 130, 0.36) 0%, rgba(170, 201, 118, 0.18) 100%)",
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">
                      Complete Management Plan
                    </div>
                    <h3 className="text-white text-lg font-black">
                      Full Google Ad Grants Service
                    </h3>
                    <p className="text-slate-300 text-lg mt-2 max-w-xs">
                      Most agencies charge $1,000+/mo for this. This month only
                      — just $250/mo.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-500/15 border border-red-400/25">
                      <span className="text-slate-300 text-xs font-bold">
                        ⏱️ Offer expires in
                      </span>
                      <span className="text-white font-mono text-sm font-black">
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/70 text-sm line-through mb-0.5">
                      $1,250/mo
                    </div>
                    <div className="text-white font-black text-4xl leading-none">
                      $250<span className="text-lg font-semibold">/mo</span>
                    </div>
                    <div className="text-emerald-400 text-xs mt-1">
                      after free grant setup
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="relative px-8 py-8 glass-card border-0 rounded-none">
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {included.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle
                        size={16}
                        className="text-emerald-400 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Grant setup free highlight */}
                <div className="rounded-2xl p-5 bg-gradient-to-r from-emerald-400/10 to-emerald-600/5 border border-emerald-400/20 text-center mb-6">
                  <div className="text-3xl mb-2">🎁</div>
                  <div className="text-emerald-400 font-black text-xl mb-1">
                    GRANT SETUP — 100% FREE
                  </div>
                  <p className="text-slate-300 text-lg">
                    We secure your Google Ad Grant at no cost. You only pay once
                    it's live.
                  </p>
                </div>

                <div className="flex justify-center mt-8 mb-4">
                  <button
                    onClick={scrollToEligibility}
                    className="btn-primary text-2xl !py-4 !px-8"
                  >
                    → Start My Free Period
                  </button>
                </div>
              </div>
            </div>
          </AnimItem>

          {/* Price match */}
          <AnimItem variant={fadeUp}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                  <Zap size={22} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Price Match Guarantee
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-3">
                    Found a lower price? We'll beat it. If you find a legitimate
                    registered agency (not a freelancer) offering the same scope
                    of Google Ad Grants management for a lower monthly rate —
                    <strong className="text-white">
                      {" "}
                      show us the quote. We'll match or beat their price.
                    </strong>
                  </p>
                  <p className="text-slate-400 text-lg italic">
                    Why are we confident? Because we specialize exclusively in
                    Google Ad Grants for nonprofits. Generalist agencies charge
                    the same but deliver less.
                  </p>
                </div>
              </div>
            </div>
          </AnimItem>

          {/* Urgency block */}
          <AnimItem variant={fadeUp}>
            <div className="urgency-box p-6 sm:p-8">
              <h3 className="text-red-400 font-bold text-lg mb-3">
                ⚠️ Limited Spots Available
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-5">
                We currently have limited spots open for new nonprofits. Every
                month without the grant is $10,000 in free advertising you don't
                get back.
              </p>

              <div className="flex items-center gap-2 mb-3">
                <motion.span
                  key={spotsLeft}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-400 font-black text-xl"
                >
                  🔴 {spotsLeft}
                </motion.span>
                <span className="text-red-400 font-bold text-sm">
                  spots remaining this month
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-slate-400 font-bold text-sm">
                  ⏱️ Offer expires in{" "}
                  <span className="font-mono text-white text-base">
                    {formatTime(timeLeft)}
                  </span>
                </span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary text-2xl !py-4 !px-8 mb-3"
                >
                  → Start My Free Period
                </button>
              </div>
              <p className="text-center text-slate-500 text-xs">
                No credit card required · Cancel anytime · 30-day notice
              </p>
            </div>
          </AnimItem>
        </AnimSection>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
