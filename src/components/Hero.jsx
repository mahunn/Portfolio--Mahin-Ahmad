import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mahinahmad',
    hoverClass: 'hover:text-foreground hover:border-white/30 hover:shadow-white/10',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mahinahmad',
    hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[#0A66C2]/20',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/mahinahmad',
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

          {/* H1 — name is the primary heading for SEO */}
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

          {/* CTA Buttons */}
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

          {/* Social Links — visible on all devices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-3 mt-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 rounded-full liquid-glass border border-white/10 text-muted transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverClass}`}
              >
                {social.icon}
              </a>
            ))}
            <span className="h-px w-10 bg-white/10 ml-1 hidden sm:block" />
            <span className="text-xs text-muted/60 font-mono tracking-widest hidden sm:block">Follow me</span>
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
                  alt="Mahin Ahmad - Portfolio Photo"
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
