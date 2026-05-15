import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mahunn',
    hoverClass: 'hover:text-foreground hover:border-white/30 hover:shadow-white/10',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mahun',
    hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[#0A66C2]/20',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mahunnn',
    hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[#1877F2]/20',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-36 lg:pt-32 pb-12 md:pb-16 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text Content */}
        <div className="max-w-4xl order-2 lg:order-1 px-2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <img src="/profile.jpg" alt="Mahin Ahmad" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-primary/50 object-cover shadow-[0_0_30px_rgba(240,0,0,0.2)]" />
            <div className="flex flex-col gap-1">
              <p className="text-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary hidden sm:block"></span> 
                Web Developer
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white font-display">Mahin Ahmad</h2>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-extrabold text-foreground mb-6 leading-[1.1]"
          >
            I Build Fast, Reliable Websites That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Drive Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            I combine a deep understanding of business strategy with elite technical expertise. Transforming your online presence into a high-converting, ultra-reliable platform built to establish instant authority in the Bangladeshi market.
          </motion.p>

          {/* CTA Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              <a href="#projects" className="bg-primary text-white text-center hover:bg-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(240,0,0,0.3)] hover:shadow-[0_0_50px_rgba(240,0,0,0.5)] hover:-translate-y-1">
                View Projects
              </a>
              <a href="https://wa.me/8801828034555?text=Hi%20Mahin%2C%20are%20you%20available%20right%20now%20to%20talk%3F" className="liquid-glass border border-white/10 text-center text-foreground hover:bg-white/5 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display font-bold text-lg transition-all duration-300 hover:-translate-y-1">
                Book a Call
              </a>
            </div>

            {/* Social Links Integration */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mr-2">Follow Me</span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 liquid-glass text-gray-400 transition-all duration-300 ${link.hoverClass}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-4 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wider">Real Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wider">SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wider">Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wider">Fast Loading</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Website Mockup Preview (Two Mockups) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 mt-8 lg:mt-0 flex justify-center lg:justify-end relative w-full"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          
          <div className="relative w-full max-w-[300px] sm:max-w-md md:max-w-lg mx-auto aspect-square sm:aspect-[4/3] perspective-[1000px]">
            <motion.div 
              animate={{ 
                rotateY: [-5, 5, -5],
                rotateX: [2, -2, 2],
                y: [0, -10, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-[10%] right-[10%] w-32 h-32 border border-white/5 rounded-full animate-[spin_15s_linear_infinite] z-0"></div>
              <div className="absolute top-[20%] right-[20%] w-16 h-16 border border-primary/10 rounded-full animate-[spin_10s_linear_infinite_reverse] z-0"></div>
              
              <div className="absolute -top-4 sm:-top-6 right-4 sm:right-10 flex items-center gap-2 bg-black/60 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full z-10 hover:bg-black transition-colors animate-[bounce_3s_ease-in-out_infinite]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                <span className="text-[10px] sm:text-xs font-mono text-gray-300">99.9% Uptime</span>
              </div>
              
              <div className="absolute bottom-4 sm:bottom-10 -right-2 sm:-right-6 flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full z-30 hover:bg-primary/20 transition-colors animate-[bounce_4s_ease-in-out_infinite_reverse]">
                <span className="text-[10px] sm:text-xs font-mono text-primary font-bold tracking-wider">+120% Conversion</span>
              </div>

              {/* Back Mockup (Glamora) */}
              <a 
                href="https://glamora-beige.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="absolute top-4 sm:top-0 left-0 w-[80%] sm:w-[75%] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/5 liquid-glass p-1 sm:p-2 z-10 opacity-80 blur-[1px] hover:blur-none hover:z-40 hover:opacity-100 hover:scale-105 active:z-40 active:scale-105 transition-all duration-500 cursor-pointer animate-mobile-back sm:animate-none"
              >
                <img
                  src="/glamora_preview.png"
                  alt="Glamora Project Preview"
                  className="w-full h-full object-cover object-top rounded-lg sm:rounded-xl pointer-events-none"
                  onError={(e) => { e.target.src = "/project_hero_apps.png" }}
                />
              </a>

              {/* Front Mockup (HenleyZone) */}
              <a 
                href="https://henleyzone.com" 
                target="_blank" 
                rel="noreferrer"
                className="absolute bottom-4 sm:bottom-0 right-0 w-[85%] sm:w-[80%] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 liquid-glass p-1 sm:p-2 z-20 hover:scale-105 hover:z-40 active:scale-105 transition-all duration-500 cursor-pointer animate-mobile-front sm:animate-none"
              >
                <img
                  src="/henley_zone_preview.png"
                  alt="Henley Zone Preview"
                  className="w-full h-full object-cover object-top rounded-lg sm:rounded-xl pointer-events-none"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
