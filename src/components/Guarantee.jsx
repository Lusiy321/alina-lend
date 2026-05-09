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

              <div className="relative z-10 flex flex-col items-center">
                {/* Shield icon + label stacked */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-24 h-24 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5 glow-green"
                >
                  <ShieldCheck size={44} className="text-emerald-400" />
                </motion.div>

                {/* Label */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-7">
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                    Our Guarantee
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Grant First. Payment After.
                </h2>

                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  We secure your Google Ad Grant at no cost — you only pay once
                  we're managing your live campaigns.
                </p>

                {/* Guarantee details */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
                  {[
                    {
                      img: "/guarantee/no-fine-print.jpg",
                      title: "Grant approval — guaranteed",
                      desc: "We handle the entire application process and guarantee approval for every eligible nonprofit.",
                    },
                    {
                      img: "/guarantee/we-keep-working.jpg",
                      title: "Zero upfront cost",
                      desc: "No fees until your grant is live and your ads are running. We prove the result first.",
                    },
                    {
                      img: "/guarantee/first-month-free.jpg",
                      title: "Then we grow it",
                      desc: "Once approved, we manage and optimize your campaigns to bring in real donors and volunteers.",
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
                          loading="lazy"
                          decoding="async"
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
                  "We get you the grant first — then you decide if you want us
                  to grow it."
                </p>

                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary text-base !py-4 !px-8 mx-auto"
                >
                  Claim My Free Period →
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
