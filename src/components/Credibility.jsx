import { motion } from "framer-motion";
import { Star, Quote, MapPin, Mail } from "lucide-react";
import {
  AnimSection,
  AnimItem,
  fadeUp,
  staggerContainer,
} from "../utils/animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Executive Director, Shelter First",
    niche: "Homeless Services",
    avatar: "SJ",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&auto=format",
    color: "from-emerald-500 to-emerald-700",
    quote:
      "Before GrantBoost, we spent $1,200/month on Google ads with mediocre results. Now we're at the top of search for every relevant keyword in our city — and paying nothing. Our donation page visits went up 340% in 3 months.",
    stats: { label: "Traffic increase", value: "+340%" },
    contact: "sarah@shelterfirst.org",
  },
  {
    name: "Marcus Williams",
    role: "Development Director, City Food Bank",
    niche: "Food Security",
    avatar: "MW",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&auto=format",
    color: "from-blue-500 to-blue-700",
    quote:
      "We'd applied for Google Ad Grants ourselves and got rejected twice. GrantBoost handled everything — and we were approved in 12 days. Three months in, we've added over 80 new regular donors. ROI is insane.",
    stats: { label: "New donors in 90 days", value: "80+" },
    contact: "mwilliams@cityfoodbank.org",
  },
  {
    name: "Dr. Elena Reyes",
    role: "CEO, Mental Health Matters",
    niche: "Mental Health",
    avatar: "ER",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces&auto=format",
    color: "from-purple-500 to-purple-700",
    quote:
      "Our cause is urgent but we had zero online presence. GrantBoost built our website, got the grant, and launched campaigns — all in one month. We now get 200+ calls per month from people who found us via Google.",
    stats: { label: "Monthly inquiries", value: "200+" },
    contact: "elena@mentalhealthmatters.org",
  },
];

const niches = [
  "Food Security",
  "Animal Welfare",
  "Education",
  "Mental Health",
  "Homeless Services",
  "Veterans Support",
  "Environmental",
  "Youth Programs",
  "Disability Services",
  "Women & Families",
  "Immigrant Support",
  "Arts & Culture",
];

const team = [
  {
    name: "Alex Rivera",
    role: "Head of Grant Strategy",
    exp: "8 years Google Ads",
    avatar: "AR",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Jordan Kim",
    role: "Lead Campaign Manager",
    exp: "200+ accounts managed",
    avatar: "JK",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Sam Patel",
    role: "Compliance Specialist",
    exp: "99% retention rate",
    avatar: "SP",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces&auto=format",
  },
];

export default function Credibility() {
  return (
    <section
      id="credibility"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/50" />
              <span className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">
                Social Proof
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/50" />
            </div>
          </AnimItem>

          <AnimItem variant={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center max-w-3xl mx-auto leading-tight mb-4">
              We've Done This Before.{" "}
              <span className="gradient-text-gold">Here's the Proof.</span>
            </h2>
            <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
              Real results from real nonprofits. You can contact them directly.
            </p>
          </AnimItem>
        </AnimSection>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-6 mb-20"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="testimonial-card p-7 flex flex-col gap-5 group"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote
                  size={28}
                  className="text-emerald-500/30 absolute -top-1 -left-1"
                />
                <p className="text-slate-300 text-sm leading-relaxed pl-6">
                  {t.quote}
                </p>
              </div>

              {/* Stat highlight */}
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/15 px-4 py-3 text-center">
                <div className="text-2xl font-black gradient-text">
                  {t.stats.value}
                </div>
                <div className="text-slate-400 text-xs">{t.stats.label}</div>
              </div>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-white/10"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} items-center justify-center text-white font-bold text-sm flex-shrink-0 hidden`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    {t.niche}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <Mail size={11} className="text-emerald-500/60" />
                  <span className="text-emerald-400/70 text-xs hover:text-emerald-400 transition-colors cursor-pointer">
                    {t.contact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Niches */}
        <AnimSection>
          <AnimItem variant={fadeUp}>
            <div className="glass-card rounded-2xl p-7 sm:p-9 mb-10">
              <h3 className="text-white font-bold text-xl text-center mb-2">
                We've worked with nonprofits in:
              </h3>
              <p className="text-slate-400 text-center text-sm mb-7">
                Every niche, every mission.
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {niches.map((n, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/15 text-slate-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors cursor-default"
                  >
                    {n}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimItem>

          {/* Team */}
          <AnimItem variant={fadeUp}>
            <div className="glass-card rounded-2xl p-7 sm:p-9">
              <h3 className="text-white font-bold text-xl text-center mb-7">
                The Team Behind Your Growth
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {team.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="text-center p-5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-emerald-500/20 transition-all"
                  >
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 items-center justify-center text-white font-black text-xl glow-green hidden absolute inset-0">
                        {m.avatar}
                      </div>
                    </div>
                    <div className="text-white font-bold mb-1">{m.name}</div>
                    <div className="text-slate-400 text-sm mb-2">{m.role}</div>
                    <div className="text-emerald-400 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 inline-block">
                      {m.exp}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimItem>
        </AnimSection>
      </div>

      <div className="section-divider mx-auto max-w-6xl mt-16" />
    </section>
  );
}
