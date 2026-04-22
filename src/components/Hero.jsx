import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 lg:pt-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-3xl order-2 lg:order-1">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4 text-lg"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-100 mb-4"
          >
            Mahin Ahmad.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-400 mb-6"
          >
            I build intelligent digital experiences.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            I'm a CSE student and full-stack web developer with 1 year of experience crafting robust web applications. 
            Driven by a profound interest in Artificial Intelligence and Machine Learning, I am dedicated to bridging the gap between modern web development and intelligent algorithms.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Check out my work
            </a>
            <a href="#contact" className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group perspective-1000">
            {/* Futuristic Glow & Border */}
            <div className="absolute inset-0 border border-primary/50 rounded-2xl translate-x-4 translate-y-4 -z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(240,0,0,0.3)] bg-surface"></div>
            
            {/* Image Container with Red Tint Overlay */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10">
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-20 transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-black/20 z-20 transition-opacity duration-500 group-hover:opacity-0"></div>
              <img 
                src="/profile.jpg" 
                alt="Mahin Ahmad" 
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:contrast-100 scale-105 group-hover:scale-100"
              />
            </div>
            
            {/* Accent Corner Tech Detail */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary z-30 transition-all duration-500 group-hover:-top-3 group-hover:-left-3"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary z-30 transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3 translate-x-4 translate-y-4"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
