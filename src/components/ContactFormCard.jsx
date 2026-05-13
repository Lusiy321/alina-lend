import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle, Loader } from "lucide-react";
import { AnimSection, AnimItem, scaleIn } from "../utils/animations";

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
        <h3 className="text-white font-black text-lg mb-3">
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
        className="btn-primary w-full justify-center text-2xl !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
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
        Takes 30 minutes · No pressure · No obligation
      </p>
    </form>
  );
}

export default function ContactFormCard() {
  return (
    <div className="w-full max-w-xl mx-auto pb-24 sm:pb-32">
      <AnimSection>
        <AnimItem variant={scaleIn}>
          <div
            id="contact-form"
            className="glass-card rounded-2xl p-7 sm:p-9 border border-emerald-500/15 relative scroll-mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent rounded-2xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-white font-black text-lg mb-1">
                Check My Eligibility
              </h3>
              <p className="text-slate-400 text-lg mb-7">
                Free. 30 minutes. No obligation.
              </p>
              <ContactForm />
            </div>
          </div>
        </AnimItem>
      </AnimSection>
    </div>
  );
}
