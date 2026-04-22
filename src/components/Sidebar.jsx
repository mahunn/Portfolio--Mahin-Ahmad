import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { label: 'Home', href: '#home', icon: <Home size={20} /> },
    { label: 'About', href: '#about', icon: <User size={20} /> },
    { label: 'Projects', href: '#projects', icon: <Code size={20} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    { 
      label: 'GitHub', 
      href: 'https://github.com/mahunn', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ) 
    },
    { 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/mahun/', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ) 
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/mahunnn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  return (
    <aside className="fixed top-0 left-0 w-full md:w-[80px] lg:w-[280px] h-[60px] md:h-screen flex md:flex-col justify-between items-center md:items-stretch py-0 px-4 md:py-8 md:px-6 border-b md:border-b-0 md:border-r border-gray-800 bg-surface/90 backdrop-blur-md z-50 transition-all duration-300">
      <div className="font-display font-bold text-xl text-center md:mb-12">
        <span className="hidden lg:block text-gradient">Mahin.</span>
        <span className="block lg:hidden text-gradient text-2xl">M.</span>
      </div>
      
      <nav className="hidden md:flex flex-col gap-4">
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="group flex items-center justify-center lg:justify-start gap-4 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-primary/10 hover:border-l-2 hover:border-primary hover:translate-x-1 transition-all duration-300"
            title={item.label}
          >
            <span className="flex items-center justify-center text-primary/80 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(240,0,0,0.8)] transition-all">{item.icon}</span>
            <span className="hidden lg:block font-medium tracking-wide">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="flex md:flex-col lg:flex-row justify-center gap-4 mt-auto">
        {socialLinks.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary border border-primary/30 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(240,0,0,0.6)] transition-all duration-300"
            target="_blank" 
            rel="noreferrer"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
