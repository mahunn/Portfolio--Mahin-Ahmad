import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Mail, Phone, Menu, X, Sun, Moon } from 'lucide-react';

/* ── Logo Component ── */
const LogoMark = ({ full = false }) => (
  <motion.div
    className="relative flex items-center justify-center select-none"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span
      className={`font-display font-bold ${full ? 'text-lg md:text-xl tracking-[0.12em]' : 'text-2xl'}`}
      style={{
        background: `linear-gradient(135deg, var(--color-text-primary) 30%, var(--color-primary))`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {full ? 'Mahin.' : 'M.'}
    </span>
  </motion.div>
);

const navItems = [
  { label: 'Home',       href: '#home',       icon: <Home       size={18} /> },
  { label: 'About',      href: '#about',      icon: <User       size={18} /> },
  { label: 'Projects',   href: '#projects',   icon: <Code       size={18} /> },
  { label: 'Contact',    href: '#contact',    icon: <Mail       size={18} /> },
  { label: 'Call',       href: 'tel:+8801828034555', icon: <Phone      size={18} /> },
];

const Sidebar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-12
        ${scrolled 
          ? 'py-3 bg-transparent pointer-events-none' 
          : 'py-6 bg-transparent pointer-events-none'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto relative">
        {/* Logo */}
        <a href="#home" className="shrink-0 hover:scale-105 transition-transform duration-300 relative z-10">
          <LogoMark full={true} />
        </a>

        {/* Navigation - Adaptive */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
          <nav 
            className="flex items-center gap-1 md:gap-2 p-1 liquid-glass rounded-full border border-white/5"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.label)}
                className="px-3 py-2 md:px-4 md:py-2 rounded-full text-sm font-medium text-muted hover:text-foreground transition-all duration-300 relative group flex items-center gap-2"
                title={item.label}
              >
                <span className="relative z-10 md:hidden">{item.icon}</span>
                <span className="relative z-10 hidden md:block">{item.label}</span>
                
                {hoveredItem === item.label && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-foreground/10 backdrop-blur-xl rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side: Toggle */}
        <div className="flex items-center shrink-0 relative z-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full liquid-glass border border-white/10 text-muted hover:text-foreground transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
