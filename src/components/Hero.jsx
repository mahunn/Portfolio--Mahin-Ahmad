import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="max-w-3xl order-2 lg:order-1 px-2">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono mb-4 text-base tracking-widest uppercase"
          >
            Web Developer.
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground mb-6"
          >
            Mahin Ahmad.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted mb-8"
          >
            Designing intelligent systems.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted max-w-xl mb-12 leading-relaxed"
          >
            I'm a CSE student and full-stack developer dedicated to building high-performance digital solutions and exploring the future of AI-integrated web architecture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <a href="#projects" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl shadow-primary/20">
              View Portfolio
            </a>
            <a href="#contact" className="liquid-glass border border-white/10 text-foreground hover:bg-white/5 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] group">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 z-10 liquid-glass p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100">
                <img 
                  src="/profile.jpg" 
                  alt="Mahin Ahmad" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Decorative glass elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 liquid-glass rounded-2xl -z-10 border border-white/10 hidden sm:block"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 liquid-glass rounded-full -z-10 border border-white/10 hidden sm:block"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
