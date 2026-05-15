import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 md:py-32 relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-primary/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center w-full relative z-10 liquid-glass p-8 md:p-20 rounded-[2.5rem] border border-white/10 border-t-primary/30 shadow-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-6"
        >
          Ready to Elevate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Business?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Stop losing clients to outdated designs. Let's build a high-performance, premium web experience that scales your business and establishes authority in your industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/8801828034555?text=Hi%20Mahin%2C%20are%20you%20available%20right%20now%20to%20talk%3F" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-display font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(240,0,0,0.3)] hover:shadow-[0_0_50px_rgba(240,0,0,0.5)] hover:-translate-y-1"
          >
            Book a Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
          <button 
            onClick={() => window.location.href = 'mailto:maahin.ahmaad@gmail.com'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 liquid-glass border border-white/10 text-foreground px-10 py-5 rounded-full font-display font-bold text-lg hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Send an Email
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
