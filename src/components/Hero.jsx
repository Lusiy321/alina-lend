import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  ChevronRight,
  Star,
  Users,
  Lock,
} from "lucide-react";
import {
  staggerContainer,
  fadeUp,
  fadeIn,
  scaleIn,
  AnimSection,
  AnimItem,
} from "../utils/animations";

const trustBadges = [
  {
    icon: <BadgeCheck size={15} className="text-emerald-400" />,
    text: "Google Ad Grants Certified Partner",
  },
  {
    icon: (
      <Star size={15} className="text-gold-400 fill-current text-yellow-400" />
    ),
    text: "Trusted by 200+ nonprofits",
  },
  {
    icon: <Lock size={15} className="text-emerald-400" />,
    text: "Your account stays yours. Always.",
  },
];

export default function Hero() {
  const scrollToEligibility = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 grid-bg"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 hero-radial-glow pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-yellow-400/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-[8%] w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 border border-emerald-500/20 backdrop-blur-sm hidden xl:flex items-center justify-center"
      >
        <BadgeCheck size={32} className="text-emerald-400" />
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-[6%] w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border border-yellow-400/20 backdrop-blur-sm hidden xl:flex items-center justify-center"
      >
        <span className="text-2xl">💰</span>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <AnimSection>
          {/* Pre-headline badge */}
          <AnimItem variant={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-green" />
              <span className="text-emerald-400 text-sm font-semibold tracking-wide">
                Official Google Ad Grants Certified Partner
              </span>
            </div>
          </AnimItem>

          {/* Main headline */}
          <AnimItem variant={fadeUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight mb-6">
              <span className="text-white">Get Up to </span>
              <span className="gradient-text">$10,000/Month</span>
              <br />
              <span className="text-white">in Free Google Ads</span>
              <br />
              <span className="text-white">for Your Nonprofit — </span>
              <span className="gradient-text-gold">Guaranteed.</span>
            </h1>
          </AnimItem>

          {/* Subheadline */}
          <AnimItem variant={fadeUp}>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We help eligible nonprofits access Google's official Ad Grants
              program — then take full ownership of setup, management, and
              optimization to bring in more donors, volunteers, and program
              inquiries.
            </p>
          </AnimItem>

          {/* Timeline badge */}
          <AnimItem variant={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] mb-10">
              <Clock size={16} className="text-yellow-400" />
              <span className="text-slate-300 text-sm font-medium">
                Grant live in as little as{" "}
                <strong className="text-white">2 weeks</strong>
              </span>
            </div>
          </AnimItem>

          {/* CTAs */}
          <AnimItem variant={scaleIn}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={scrollToEligibility}
                className="btn-primary text-lg !py-4 !px-8"
              >
                Check My Eligibility →
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary text-base !py-3.5 !px-7"
              >
                See How It Works
              </button>
            </div>
          </AnimItem>

          {/* Supporting micro-copy */}
          <AnimItem variant={fadeIn}>
            <p className="text-slate-500 text-sm mb-14">
              First month free · Fully done-for-you · Cancel anytime
            </p>
          </AnimItem>

          {/* Trust badges row */}
          <AnimItem variant={fadeUp}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-emerald-500/25 transition-colors duration-300"
                >
                  {badge.icon}
                  <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimItem>

          {/* Stats row */}
          <AnimItem variant={fadeUp}>
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              {[
                { value: "$10K", label: "Per month free ads" },
                { value: "99%", label: "Approval rate" },
                { value: "30d", label: "To first results" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimItem>
        </AnimSection>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1120] to-transparent pointer-events-none" />
    </section>
  );
}
