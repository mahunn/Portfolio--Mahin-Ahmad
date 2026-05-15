import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mahunn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mahun',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mahunnn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] py-16 md:py-24 relative overflow-hidden flex flex-col justify-center">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-2xl">03.</span> Where I'm Based
            <div className="h-px bg-white/10 flex-grow max-w-sm ml-4"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* Main Map Area - Col Span 8 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="lg:col-span-8 relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 liquid-glass shadow-2xl group"
          >
            <div className="absolute inset-0 bg-primary/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097779355!2d90.33728804060886!3d23.780636450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1715873000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%) grayscale(80%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              title="Location Map"
            ></iframe>

            {/* Glowing Pin Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full scale-150 animate-pulse"></div>
                <div className="w-16 h-16 liquid-glass border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(240,0,0,0.5)]">
                  <MapPin className="text-primary w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Location Label */}
            <div className="absolute bottom-6 left-6 z-20 liquid-glass border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-base font-display font-semibold text-white tracking-wide">Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          {/* Contact Details & Socials - Col Span 4 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Contact Cards */}
            <div className="flex-1 liquid-glass rounded-[2rem] border border-white/10 p-8 flex flex-col justify-center gap-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full transition-all duration-500 group-hover:bg-primary/20"></div>
              
              <div>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Direct Contact</p>
                <div className="space-y-6">
                  <a href="mailto:maahin.ahmaad@gmail.com" className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-primary/50 group-hover/item:bg-primary/10 transition-all duration-300">
                      <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Email</p>
                      <p className="text-sm sm:text-base font-medium text-gray-200 group-hover/item:text-white transition-colors">maahin.ahmaad@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+8801828034555" className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-primary/50 group-hover/item:bg-primary/10 transition-all duration-300">
                      <Phone className="w-5 h-5 text-gray-400 group-hover/item:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-500 uppercase">Phone</p>
                      <p className="text-sm sm:text-base font-medium text-gray-200 group-hover/item:text-white transition-colors">+880 1828-034555</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Socials Card */}
            <div className="liquid-glass rounded-[2rem] border border-white/10 p-8 flex flex-col items-center justify-center gap-4 shadow-2xl">
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest text-center w-full">Connect</p>
              <div className="flex gap-4 w-full justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(240,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
