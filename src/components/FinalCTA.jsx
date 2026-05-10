import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Loader } from "lucide-react";
import { AnimSection, AnimItem, fadeUp, scaleIn } from "../utils/animations";

const guarantees = [
  "Grant approval guaranteed",
  "First month free — pay only after launch",
  "Cancel anytime",
  "Your account stays yours, always",
  "No website? We'll build one",
];
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    website: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.org.trim()) errs.org = "Required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    // Simulate async submit (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4 glow-green">
          <CheckCircle size={32} className="text-emerald-400" />
        </div>
        <h3 className="text-white font-black text-2xl mb-3">
          You're on the list! 🎉
        </h3>
        <p className="text-slate-300 text-base">
          We'll review your details and reach out within 24 hours to schedule
          your free eligibility check.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-400 text-xs font-semibold mb-1.5 tracking-wide uppercase">
            Your Name *
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full bg-white/[0.04] border ${errors.name ? "border-red-500/60" : "border-white/[0.1]"} rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06] transition-all duration-200`}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-slate-400 text-xs font-semibold mb-1.5 tracking-wide uppercase">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="jane@nonprofit.org"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full bg-white/[0.04] border ${errors.email ? "border-red-500/60" : "border-white/[0.1]"} rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06] transition-all duration-200`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-slate-400 text-xs font-semibold mb-1.5 tracking-wide uppercase">
          Organization Name *
        </label>
        <input
          type="text"
          placeholder="Your Nonprofit Name"
          value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
          className={`w-full bg-white/[0.04] border ${errors.org ? "border-red-500/60" : "border-white/[0.1]"} rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06] transition-all duration-200`}
        />
        {errors.org && (
          <p className="text-red-400 text-xs mt-1">{errors.org}</p>
        )}
      </div>
      <div>
        <label className="block text-slate-400 text-xs font-semibold mb-1.5 tracking-wide uppercase">
          Website URL{" "}
          <span className="text-slate-500 normal-case font-normal">
            (optional)
          </span>
        </label>
        <input
          type="url"
          placeholder="https://yournonprofit.org"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06] transition-all duration-200"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center text-base !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Check My Eligibility — It's Free
            <ChevronRight size={18} />
          </>
        )}
      </button>
      <p className="text-center text-slate-500 text-xs">
        Takes 15 minutes · No pressure · No obligation
      </p>
    </form>
  );
}

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: copy */}
          <AnimSection>
            <AnimItem variant={fadeUp}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-400 pulse-green" />
                <span className="text-red-400 text-sm font-bold">
                  4 spots remaining this month
                </span>
              </div>
            </AnimItem>

            <AnimItem variant={fadeUp}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                While you're thinking, other nonprofits are already getting
                donors{" "}
                <span className="gradient-text">— with zero ad budget.</span>
              </h2>
            </AnimItem>

            {/* All guarantees */}
            <AnimItem variant={fadeUp}>
              <div className="space-y-3 mb-10">
                {guarantees.map((g, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-emerald-400" />
                    </div>
                    <span className="text-slate-200 font-medium text-sm">
                      {g}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimItem>

            {/* Social trust */}
            <AnimItem variant={fadeUp}>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex -space-x-2">
                  {[
                    {
                      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format",
                      alt: "Sarah J.",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&auto=format",
                      alt: "Marcus W.",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces&auto=format",
                      alt: "Elena R.",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&auto=format",
                      alt: "Lisa B.",
                    },
                  ].map((person, i) => (
                    <img
                      key={i}
                      src={person.src}
                      alt={person.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#f8f7f3]"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    200+ nonprofits already growing
                  </div>
                  <div className="text-slate-500 text-xs">Join them today</div>
                </div>
              </div>
            </AnimItem>
          </AnimSection>

          {/* <Pricing /> */}

          {/* Right: form */}
          <AnimSection>
            <AnimItem variant={scaleIn}>
              <div className="glass-card rounded-2xl p-7 sm:p-9 border border-emerald-500/15 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent rounded-2xl pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-white font-black text-2xl mb-1">
                    Check My Eligibility
                  </h3>
                  <p className="text-slate-400 text-sm mb-7">
                    Free. 30 minutes. No obligation.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </AnimItem>
          </AnimSection>
        </div>
      </div>
    </section>
  );
}
