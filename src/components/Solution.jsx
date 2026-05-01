import { motion } from "framer-motion";
import { CheckCircle, Globe } from "lucide-react";
import {
  AnimSection,
  AnimItem,
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const services = [
  { icon: "✓", text: "Eligibility check and grant application" },
  {
    icon: "✓",
    text: "Website build — if you don't have one, we'll create a Google-compliant site",
  },
  { icon: "✓", text: "Account setup and full campaign architecture" },
  { icon: "✓", text: "Keyword research tailored to your mission" },
  { icon: "✓", text: "Ad copywriting, creative testing, optimization" },
  { icon: "✓", text: "Conversion tracking (donations, signups, form fills)" },
  { icon: "✓", text: "Monthly optimization and compliance management" },
  { icon: "✓", text: "Monthly performance reports in plain English" },
];

export default function Solution() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-emerald-500/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500/50" />
              <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">
                Our Service
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/50" />
            </div>
          </AnimItem>

          <AnimItem variant={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center max-w-3xl mx-auto leading-tight mb-4">
              We Handle <span className="gradient-text">Everything.</span>
              <br />
              You Focus on Your Mission.
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg">
              Our team takes over your Google Ad Grant from start to finish — or
              builds it from the ground up. No Google Ads expertise required. No
              new staff. No learning curve.
            </p>
          </AnimItem>
        </AnimSection>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Services list */}
          <AnimSection>
            <AnimItem variant={fadeUp}>
              <div className="glass-card rounded-2xl p-7 sm:p-9">
                <h3 className="text-white font-bold text-xl mb-6">
                  Everything we take off your plate:
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-3"
                >
                  {services.map((s, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-500/5 transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-md bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/25 transition-colors">
                        <CheckCircle size={14} className="text-emerald-400" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {s.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimItem>
          </AnimSection>

          {/* Right column */}
          <AnimSection>
            <div className="flex flex-col gap-5">
              {/* No website callout */}
              <AnimItem variant={fadeUp}>
                <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 to-blue-700/5 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
                      <Globe size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      No website? No problem.
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Google Ad Grants requires a quality website that meets their
                    guidelines. If you don't have one — or yours doesn't meet
                    the requirements — we'll build it for you.
                  </p>
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <p className="text-blue-300 text-sm font-semibold mb-2">
                      Included in your onboarding:
                    </p>
                    <ul className="space-y-1.5 text-slate-400 text-sm">
                      {[
                        "Clean, fast, mobile-optimized site",
                        "Google guidelines compliant",
                        "Conversion-optimized for donations",
                        "Donation page + volunteer signup",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-400">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimItem>

              {/* What you don't need */}
              <AnimItem variant={fadeUp}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4">
                    What you DON'T need:
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      "Google Ads expertise or training",
                      "Dedicated marketing staff",
                      "Technical background",
                      "Large ad budget",
                      "Hours of your time each week",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-slate-400 text-sm"
                      >
                        <span className="text-red-500/70 text-base">✗</span>
                        <span className="line-through opacity-60">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/[0.06] text-emerald-400 text-sm font-semibold">
                    You need less than 2 hours/month from your team. We handle
                    the rest.
                  </div>
                </div>
              </AnimItem>
            </div>
          </AnimSection>
        </div>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
