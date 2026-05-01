import { motion } from "framer-motion";
import { HelpCircle, CheckCircle, XCircle } from "lucide-react";
import {
  AnimSection,
  AnimItem,
  fadeUp,
  staggerContainer,
} from "../utils/animations";

export default function WhatIsGrants() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0e1929]/60">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
              <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">
                The Grant Explained
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
            </div>
          </AnimItem>

          <AnimItem variant={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center max-w-4xl mx-auto leading-tight mb-4">
              What Is Google Ad Grants?
            </h2>
            <p className="text-slate-400 text-center text-base mb-14 max-w-xl mx-auto">
              And why your nonprofit should care — explained in plain English.
            </p>
          </AnimItem>
        </AnimSection>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: explanation */}
          <AnimSection>
            <AnimItem variant={fadeUp}>
              <div className="glass-card rounded-2xl p-7 sm:p-9 h-full flex flex-col gap-6">
                {[
                  {
                    img: "/whatisgrants/what-it-is.jpg",
                    alt: "Volunteers and nonprofit workers collaborating",
                    title: "What it is",
                    text: "Google Ad Grants is a program by Google that gives registered 501(c)(3) nonprofits up to $10,000 per month in free advertising on Google Search — at no cost to you.",
                  },
                  {
                    img: "/whatisgrants/how-it-works.jpg",
                    alt: "Person searching on laptop",
                    title: "How it works",
                    text: "When someone types a relevant search query on Google, your organization's ad appears at the top — just like paid search results. You pay $0. Google covers it.",
                  },
                  {
                    img: "/whatisgrants/the-catch.jpg",
                    alt: "Compliance paperwork and checklist",
                    title: "The catch",
                    text: "To get and keep the grant, your campaigns must meet Google's strict compliance requirements — minimum 5% CTR, specific keyword rules, proper account structure, and regular optimization. That's where most nonprofits fail alone.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 mt-0.5">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimItem>
          </AnimSection>

          {/* Right: compare table */}
          <AnimSection>
            <AnimItem variant={fadeUp}>
              <div className="h-full flex flex-col gap-4">
                {/* Without grants */}
                <div className="glass-card rounded-2xl p-6 border-red-500/15 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle size={18} className="text-red-400" />
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wide">
                      Without Google Ad Grants
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      "Paying $2–$10 per click for Google ads",
                      "Invisible in search results",
                      "Competing with deep-pocket advertisers",
                      "Relying solely on organic SEO (takes years)",
                      "Missing donors who search daily",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-slate-400 text-sm"
                      >
                        <XCircle
                          size={14}
                          className="text-red-500/60 flex-shrink-0 mt-0.5"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* With grants */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-700/5 border border-emerald-500/20 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle size={18} className="text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-wide">
                      With Google Ad Grants
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      "$0 ad spend — Google funds every click",
                      "Top position in Google search results",
                      "Reach donors, volunteers & beneficiaries",
                      "Up to $10,000/month in reach",
                      "Trackable conversions & real ROI",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-slate-300 text-sm"
                      >
                        <CheckCircle
                          size={14}
                          className="text-emerald-400 flex-shrink-0 mt-0.5"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google certified note */}
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Official Google Program
                    </p>
                    <p className="text-slate-500 text-xs">
                      Not a loophole — a real, stable program since 2003.
                    </p>
                  </div>
                </div>
              </div>
            </AnimItem>
          </AnimSection>
        </div>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
