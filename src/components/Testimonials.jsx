import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      text: "Mahin transformed our entire digital presence. Our new platform is not only visually stunning but loads faster than ever. Conversion rates are up 40% since launch.",
    },
    {
      name: "David Chen",
      role: "Founder, Zenith Agency",
      text: "Working with Mahin was a game-changer. The attention to detail, premium aesthetic, and technical expertise delivered a product that far exceeded our expectations.",
    }
  ];

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
          Trusted by Businesses
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.2 }}
            className="liquid-glass p-10 rounded-3xl border border-white/5 relative group hover:border-primary/20 transition-all duration-500"
          >
            <div className="text-primary text-6xl font-serif absolute top-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">"</div>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10 mb-8 italic">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-black border border-white/10 flex items-center justify-center">
                <span className="text-white font-display font-bold">{testimonial.name.charAt(0)}</span>
              </div>
              <div>
                <h4 className="text-white font-display font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm font-mono">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
