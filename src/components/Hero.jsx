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
          {/* Google for Nonprofits Partners badge */}
          <AnimItem variant={fadeUp}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#ffffff] border border-[#ebe9e0] shadow-sm mb-8">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-[#161514] text-sm font-semibold tracking-wide">
                Google for Nonprofits Partners
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
              We get your nonprofit into Google Ad Grants and manage everything
              from day one — so you attract more donors, volunteers, and
              inquiries. All with{" "}
              <strong className="text-white">$0 ad spend.</strong>
            </p>
          </AnimItem>

          {/* Free grant + timeline pills */}
          <AnimItem variant={fadeUp}>
            <div className="flex flex-col items-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#aac976] border border-[#aac976]">
                <span>🎁</span>
                <span className="text-[#2d3a1c] text-sm font-bold">
                  We get you the Google Grant — for free
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Clock size={16} className="text-yellow-400" />
                <span className="text-slate-300 text-sm font-medium">
                  Grant live in as little as{" "}
                  <strong className="text-white">2 weeks</strong>
                </span>
              </div>
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
                    .querySelector("#opportunity")
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
            <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-lg">✓</span>
                <span className="text-emerald-400 text-base font-bold">
                  First month free
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-lg">✓</span>
                <span className="text-emerald-400 text-base font-bold">
                  Fully done-for-you
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-lg">✓</span>
                <span className="text-emerald-400 text-base font-bold">
                  Cancel anytime
                </span>
              </div>
            </div>
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f7f3] to-transparent pointer-events-none" />
    </section>
  );
}
