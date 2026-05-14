import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  return (
    <section className="py-32 relative">
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono tracking-widest uppercase text-sm mb-4"
        >
          Transformation
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-display"
        >
          Outdated to Outstanding
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl overflow-hidden border border-white/5 flex flex-col"
          >
            <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Before</span>
            </div>
            <div className="bg-neutral-900 flex-1 p-0 flex flex-col items-center justify-center relative group overflow-hidden">
              <img 
                src="/before_wireframe.png" 
                alt="Messy outdated website representation" 
                className="w-full h-full object-cover object-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end p-8 z-20">
                <p className="text-gray-300 font-mono text-sm uppercase tracking-widest bg-black/80 px-6 py-3 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">No Website / Outdated Layouts</p>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl overflow-hidden border border-primary/20 flex flex-col relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="p-4 bg-primary/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">After</span>
            </div>
            <div className="bg-black flex-1 p-0 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
              <img 
                src="/henley_zone_preview.png" 
                alt="After" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end p-8 z-20">
                <p className="text-white font-mono text-sm uppercase tracking-widest bg-primary/90 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(240,0,0,0.5)] border border-red-400/50">Fast, dynamic, and conversion-optimized.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
