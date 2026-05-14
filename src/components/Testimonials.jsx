import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ariful Islam",
    role: "Owner, Henley Zone",
    project: "henleyzone.com",
    screenshot: "/review_ariful.png",
  },
  {
    name: "Siam Ahmed",
    role: "Founder, Glamora",
    project: "glamora-beige.vercel.app",
    screenshot: "/review_siam.png",
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono tracking-widest uppercase text-sm mb-4"
        >
          Client Success
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-display"
        >
          What Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-500 font-mono text-sm"
        >
          Real messages. Real results.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10 px-4">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.2 }}
            className="liquid-glass rounded-3xl border border-white/5 relative group hover:border-primary/20 transition-all duration-500 overflow-hidden"
          >
            {/* Red glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

            {/* Screenshot of real review message */}
            <div className="relative z-10 p-2 pb-0">
              <img
                src={t.screenshot}
                alt={`Review from ${t.name}`}
                className="w-full rounded-2xl object-cover"
              />
            </div>

            {/* Client info */}
            <div className="relative z-10 flex items-center gap-4 p-5 pt-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/80 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(240,0,0,0.3)]">
                <span className="text-white font-display font-bold text-base">{t.name.charAt(0)}</span>
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-sm sm:text-base leading-tight">{t.name}</h4>
                <p className="text-gray-500 text-xs font-mono">{t.role}</p>
              </div>
              {/* Verified badge */}
              <div className="ml-auto flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-400 text-[10px] font-mono uppercase tracking-wider">Verified</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
