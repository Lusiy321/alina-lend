import { motion } from "framer-motion";
import { Key, Shield, LogOut, X } from "lucide-react";
import { AnimSection, AnimItem, fadeUp } from "../utils/animations";

const points = [
  {
    icon: <Key size={20} className="text-emerald-400" />,
    title: "You have admin access at all times",
    desc: "We're added as managers to your existing Google account — or we set one up in your name. You own it from day one.",
  },
  {
    icon: <Shield size={20} className="text-emerald-400" />,
    title: "If you leave, you keep everything",
    desc: "All campaigns, all data, all history, all keyword research stays in your account. Zero lock-in.",
  },
  {
    icon: <X size={20} className="text-emerald-400" />,
    title: "Cancel anytime, no penalties",
    desc: "30 days notice is all we ask. No long-term contracts. No exit fees. No questions asked.",
  },
  {
    icon: <LogOut size={20} className="text-emerald-400" />,
    title: "We never hold your account hostage",
    desc: "Some agencies own the account and take it when you leave. That's not us. Your data is always 100% yours.",
  },
];

export default function Ownership() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0e1929]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/50" />
              <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">
                Full Transparency
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/50" />
            </div>
          </AnimItem>

          <AnimItem variant={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4 leading-tight">
              Your Account. Your Data.{" "}
              <span className="gradient-text">Always.</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              We work inside YOUR Google Ad Grants account — not ours. That
              means complete transparency and zero dependency.
            </p>
          </AnimItem>

          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((point, i) => (
              <AnimItem key={i} variant={fadeUp}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(16,185,129,0.3)" }}
                  className="glass-card rounded-2xl p-6 flex gap-4 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{point.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimItem>
            ))}
          </div>

          {/* Visual comparison */}
          <AnimItem variant={fadeUp}>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl p-5 bg-red-500/6 border border-red-500/15">
                <div className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2">
                  <X size={14} /> Other agencies
                </div>
                <div className="space-y-2 text-slate-400 text-sm">
                  {[
                    "They own the account",
                    "Data disappears when you leave",
                    "Long-term contracts",
                    "Account held hostage",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <X size={12} className="text-red-500/60" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-5 bg-emerald-500/8 border border-emerald-500/20">
                <div className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2">
                  <Shield size={14} /> GrantBoost
                </div>
                <div className="space-y-2 text-slate-300 text-sm">
                  {[
                    "You own the account 100%",
                    "All data stays with you",
                    "Cancel anytime, 30 days notice",
                    "Full transparency, always",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimItem>
        </AnimSection>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
