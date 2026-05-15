import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Layout, Gauge, Lock } from 'lucide-react';

const Performance = () => {
  const stats = [
    { value: "99+", label: "Performance", icon: <Gauge className="text-primary w-5 h-5" /> },
    { value: "100", label: "Accessibility", icon: <Layout className="text-primary w-5 h-5" /> },
    { value: "100", label: "Best Practices", icon: <Lock className="text-primary w-5 h-5" /> },
    { value: "100", label: "SEO", icon: <Activity className="text-primary w-5 h-5" /> }
  ];

  return (
    <section className="py-16 md:py-32 relative border-y border-white/5 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono tracking-widest uppercase text-sm mb-4"
          >
            Built For Speed
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6"
          >
            Engineering Excellence in Every Pixel
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed mb-8"
          >
            A beautiful website is nothing if it's slow. I engineer web platforms that load instantly, rank flawlessly on search engines, and convert visitors into customers through seamless user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-display text-gray-200 text-lg">Sub-second page loads</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-display text-gray-200 text-lg">Server-Side Rendering (SSR) & Static Generation</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-display text-gray-200 text-lg">Advanced SEO Optimization</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="liquid-glass p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-white/5 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="mb-4 bg-white/5 p-3 rounded-2xl">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
