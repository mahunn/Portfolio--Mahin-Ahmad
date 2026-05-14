import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, Server, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      description: "High-converting, premium websites designed to establish authority and generate leads for your business.",
      icon: <Monitor className="w-8 h-8 text-primary" />,
      features: ["Custom UI/UX Design", "Conversion Rate Optimization", "CMS Integration"]
    },
    {
      title: "Landing Pages",
      description: "Laser-focused, hyper-optimized landing pages built for maximum conversion and engagement.",
      icon: <Zap className="w-8 h-8 text-primary" />,
      features: ["A/B Testing Ready", "Fast Loading", "Persuasive Copy Layout"]
    },
    {
      title: "Full-Stack Web Apps",
      description: "Complex, scalable web applications with custom functionality and seamless user experiences.",
      icon: <Server className="w-8 h-8 text-primary" />,
      features: ["Database Architecture", "API Development", "Secure Authentication"]
    },
    {
      title: "Website Redesign",
      description: "Transform your outdated site into a modern, high-end digital experience that builds trust instantly.",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      features: ["Modern Aesthetics", "Performance Boost", "Mobile First Strategy"]
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="mb-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono tracking-widest uppercase text-sm mb-4"
        >
          My Expertise
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight"
        >
          Premium Solutions For <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Modern Businesses</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="group liquid-glass p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(240,0,0,0.05)]"
          >
            <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/10 group-hover:border-primary/20">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>
            
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-mono text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
