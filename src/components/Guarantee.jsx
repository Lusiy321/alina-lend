import { motion } from "framer-motion";
import { ShieldCheck, Zap, ChevronRight } from "lucide-react";
import { AnimSection, AnimItem, fadeUp, scaleIn } from "../utils/animations";

export default function Guarantee() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.04] to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={scaleIn}>
            <div className="guarantee-box p-8 sm:p-12 text-center relative overflow-hidden">
              {/* Corner glow effects */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/15 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/15 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                {/* Shield icon */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 items-center justify-center mb-6 mx-auto glow-green"
                >
                  <ShieldCheck size={38} className="text-emerald-400" />
                </motion.div>

                {/* Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5">
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                    Our Guarantee
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  We Guarantee Grant Approval.{" "}
                  <span className="gradient-text">Period.</span>
                </h2>

                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  If your nonprofit is eligible and we don't get you approved
                  for Google Ad Grants — we keep working at no charge until
                  you're in.
                </p>

                {/* Guarantee details */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
                  {[
                    {
                      img: "/guarantee/no-fine-print.jpg",
                      title: "No fine print",
                      desc: "The guarantee is exactly what it says. No exceptions, no asterisks.",
                    },
                    {
                      img: "/guarantee/we-keep-working.jpg",
                      title: "We keep working",
                      desc: "If we don't get you approved, we continue at absolutely no charge until we do.",
                    },
                    {
                      img: "/guarantee/first-month-free.jpg",
                      title: "First month free",
                      desc: "We only charge once your grant is live and campaigns are running.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 }}
                      viewport={{ once: true }}
                      className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] overflow-hidden"
                    >
                      <div className="w-full h-28 rounded-lg overflow-hidden mb-4">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-white font-bold text-sm mb-1.5">
                        {item.title}
                      </div>
                      <div className="text-slate-400 text-xs leading-relaxed">
                        {item.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-slate-400 text-sm italic mb-8">
                  "We've never failed to get an eligible nonprofit approved. But
                  if we do — you pay nothing until it's done."
                </p>

                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary text-base !py-4 !px-8 mx-auto"
                >
                  Claim My Free Month
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimItem>
        </AnimSection>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
