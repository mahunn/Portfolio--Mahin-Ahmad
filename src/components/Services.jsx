import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Zap, Server, Smartphone, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Business Websites",
    description: "High-converting, premium websites designed to establish instant authority and generate qualified leads.",
    icon: <Monitor className="w-7 h-7" />,
    features: ["Custom UI/UX Design", "Conversion Rate Optimization", "CMS Integration"],
    accent: "#f00000",
  },
  {
    title: "Landing Pages",
    description: "Laser-focused, hyper-optimized landing pages built for maximum conversion and engagement.",
    icon: <Zap className="w-7 h-7" />,
    features: ["A/B Testing Ready", "Sub-1s Load Time", "Persuasive Copy Layout"],
    accent: "#f97316",
  },
  {
    title: "Full-Stack Web Apps",
    description: "Complex, scalable web applications with custom functionality and seamless user experiences.",
    icon: <Server className="w-7 h-7" />,
    features: ["Database Architecture", "API Development", "Secure Authentication"],
    accent: "#3b82f6",
  },
  {
    title: "Website Redesign",
    description: "Transform your outdated site into a modern, high-end digital experience that builds trust instantly.",
    icon: <Smartphone className="w-7 h-7" />,
    features: ["Modern Aesthetics", "Performance Boost", "Mobile First Strategy"],
    accent: "#a855f7",
  }
];

/* ── Shared card deck component ─────────────────────────────── */
const CardDeck = ({ active, setActive }) => {
  const handleNext = () => setActive((prev) => (prev + 1) % services.length);

  return (
    <div className="relative w-full" style={{ height: '320px' }}>
      {/* Shadow stack cards */}
      {services.map((_, i) => {
        const offset = ((i - active) % services.length + services.length) % services.length;
        if (offset === 0 || offset > 3) return null;
        return (
          <div
            key={i}
            className="absolute inset-0 rounded-3xl border border-white/5 liquid-glass"
            style={{
              transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.04})`,
              zIndex: services.length - offset,
              opacity: 1 - offset * 0.28,
              transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
            }}
          />
        );
      })}

      {/* Active card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 liquid-glass rounded-3xl border border-white/10 p-7 cursor-pointer"
          style={{ zIndex: 20 }}
          onClick={handleNext}
        >
          {/* Accent glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top left, ${services[active].accent}35, transparent 65%)` }}
          />

          <div
            className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
            style={{
              background: `${services[active].accent}18`,
              borderColor: `${services[active].accent}35`,
              color: services[active].accent,
            }}
          >
            {services[active].icon}
          </div>

          <h3 className="text-xl font-display font-bold mb-2">{services[active].title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{services[active].description}</p>

          <ul className="space-y-2 mb-5">
            {services[active].features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs font-mono text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: services[active].accent }} />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {services.map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '20px' : '6px',
                    background: i === active ? services[active].accent : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
            <div
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${services[active].accent}50`, color: services[active].accent }}
            >
              Next <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ── Main component ─────────────────────────────────────────── */
const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* ── MOBILE: stacked cards only ── */}
      <div className="lg:hidden">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-primary font-mono tracking-widest uppercase text-sm mb-3"
        >My Expertise</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold font-display leading-tight mb-10"
        >
          Premium Solutions<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">For Modern Businesses</span>
        </motion.h2>
        <CardDeck active={active} setActive={setActive} />
      </div>

      {/* ── DESKTOP: two-column layout ── */}
      <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
        {/* Left: heading + nav list */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary font-mono tracking-widest uppercase text-sm mb-4"
          >My Expertise</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold font-display leading-tight mb-10"
          >
            Premium Solutions For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Modern Businesses</span>
          </motion.h2>

          <div className="space-y-3">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 group
                  ${active === i
                    ? 'border-white/20 bg-white/5 text-white'
                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-white/10'
                  }`}
              >
                <span className={`transition-colors duration-300 ${active === i ? '' : 'text-gray-600 group-hover:text-gray-400'}`}
                  style={active === i ? { color: s.accent } : {}}>
                  {s.icon}
                </span>
                <span className="font-display font-semibold">{s.title}</span>
                {active === i && (
                  <motion.div layoutId="active-dot" className="ml-auto w-2 h-2 rounded-full" style={{ background: s.accent }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: card deck */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <CardDeck active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
