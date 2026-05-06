import { motion } from "framer-motion";
import { AnimSection, AnimItem, fadeIn } from "../utils/animations";

const clients = [
  "Hope Foundation",
  "Green Earth Fund",
  "Shelter First",
  "Veterans United",
  "Animal Rescue Alliance",
  "City Food Bank",
  "Mental Health Matters",
  "Education Unlocked",
  "Ocean Guardians",
  "Families First",
  "Youth Opportunity",
  "Healing Hearts",
];

export default function SocialProofBar() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative py-12 bg-[#f0eee6] border-y border-[#ebe9e0] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f0eee6] via-transparent to-[#f0eee6] z-10 pointer-events-none" />

      <AnimSection>
        <AnimItem variant={fadeIn}>
          <p className="text-center text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            Trusted by 200+ nonprofits across the US
          </p>
        </AnimItem>
      </AnimSection>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="mx-4 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] whitespace-nowrap"
            >
              <span className="text-slate-300 text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certification badges */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-4 relative z-20">
        {[
          {
            icon: "🏅",
            title: "Google Ad Grants",
            sub: "Certified Partner",
            color: "from-emerald-500/15 to-emerald-700/5 border-emerald-500/20",
          },
          {
            icon: "⭐",
            title: "4.9 / 5.0",
            sub: "Average client rating",
            color: "from-yellow-400/15 to-yellow-600/5 border-yellow-400/20",
          },
          {
            icon: "🔒",
            title: "BBB Accredited",
            sub: "A+ Rating",
            color: "from-blue-500/15 to-blue-700/5 border-blue-500/20",
          },
          {
            icon: "✅",
            title: "99% Approval Rate",
            sub: "For eligible nonprofits",
            color: "from-emerald-500/15 to-emerald-700/5 border-emerald-500/20",
          },
        ].map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br ${badge.color} border`}
          >
            <span className="text-2xl">{badge.icon}</span>
            <div>
              <div className="text-white font-bold text-sm leading-tight">
                {badge.title}
              </div>
              <div className="text-slate-400 text-xs">{badge.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
