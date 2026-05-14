import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Zap, Server, Smartphone, ChevronDown } from 'lucide-react';

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

const CARD_HEIGHT = 300;
const PEEK = 18; // px each stacked card peeks below previous

/* ── Card Deck ──────────────────────────────────────────────── */
const CardDeck = ({ active, setActive }) => {
  const remaining = services.length - 1 - active;
  const containerHeight = CARD_HEIGHT + (Math.min(remaining, 3) * PEEK);

  const handleNext = () => setActive((prev) => (prev + 1) % services.length);

  return (
    <div className="w-full">
      {/* Tap hint above */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between mb-3 px-1"
      >
        {/* dot indicators */}
        <div className="flex gap-1.5 items-center">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all duration-400"
              style={{
                width: i === active ? '22px' : '6px',
                background: i === active ? services[active].accent : 'rgba(255,255,255,0.18)',
              }}
            />
          ))}
        </div>
        {/* "X of 4" label */}
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
          {active + 1} / {services.length}
        </span>
      </motion.div>

      {/* Stack container — extra padding-bottom so peeking cards show */}
      <div className="relative w-full" style={{ height: `${containerHeight}px` }}>
        {/* Back shadow cards (they peek below the active card) */}
        {services.map((s, i) => {
          const offset = ((i - active) % services.length + services.length) % services.length;
          if (offset === 0 || offset > 3) return null;
          return (
            <div
              key={i}
              className="absolute left-0 right-0 rounded-3xl border border-white/5 liquid-glass"
              style={{
                top: `${offset * PEEK}px`,
                height: `${CARD_HEIGHT}px`,
                zIndex: 10 - offset,
                opacity: 1 - offset * 0.22,
                transform: `scale(${1 - offset * 0.03})`,
                transformOrigin: 'bottom center',
                transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
                background: `linear-gradient(135deg, ${s.accent}08, rgba(255,255,255,0.03))`,
              }}
            />
          );
        })}

        {/* Active (top) card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-0 right-0 top-0 liquid-glass rounded-3xl border border-white/10 p-6 cursor-pointer"
            style={{ height: `${CARD_HEIGHT}px`, zIndex: 20 }}
            onClick={handleNext}
          >
            {/* Accent glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse at top left, ${services[active].accent}30, transparent 65%)` }}
            />

            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border flex-shrink-0"
              style={{
                background: `${services[active].accent}18`,
                borderColor: `${services[active].accent}35`,
                color: services[active].accent,
              }}
            >
              {services[active].icon}
            </div>

            <h3 className="text-lg font-display font-bold mb-2">{services[active].title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{services[active].description}</p>

            <ul className="space-y-1.5">
              {services[active].features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: services[active].accent }} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tap to next hint — bottom right */}
            {active < services.length - 1 && (
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 right-5 flex items-center gap-1 text-[11px] font-mono text-gray-500"
              >
                tap for next <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>
            )}
            {active === services.length - 1 && (
              <div className="absolute bottom-4 right-5 text-[11px] font-mono text-gray-600">tap to restart</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ── Main ───────────────────────────────────────────────────── */
const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* ── MOBILE ── */}
      <div className="lg:hidden px-1">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-primary font-mono tracking-widest uppercase text-sm mb-3"
        >My Expertise</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold font-display leading-tight mb-8"
        >
          Premium Solutions<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">For Modern Businesses</span>
        </motion.h2>
        <CardDeck active={active} setActive={setActive} />
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
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
                <span style={active === i ? { color: s.accent } : {}} className={active !== i ? 'text-gray-600 group-hover:text-gray-400 transition-colors' : ''}>
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

        <div className="pt-4">
          <CardDeck active={active} setActive={setActive} />
        </div>
      </div>
    </section>
  );
};

export default Services;
