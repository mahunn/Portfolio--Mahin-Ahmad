import React from 'react';
import { motion } from 'framer-motion';

/* ─── Real brand SVG paths (SimpleIcons / official) ─── */
const techs = [
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    bg: '#1a1a00',
    // JS yellow square logo
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    bg: '#001820',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    bg: '#001400',
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#339933">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.241l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.051-.139.143-.139.241v10.15c0 .097.055.189.136.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.944-.922-1.604V6.921c0-.659.352-1.275.922-1.604l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.945.924 1.604v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.076c-.281.163-.601.247-.925.247zm2.718-6.988c-3.852 0-4.657-1.769-4.657-3.254 0-.142.114-.253.256-.253h1.139c.127 0 .233.092.253.218.172 1.161.686 1.748 3.009 1.748 1.853 0 2.639-.419 2.639-1.401 0-.566-.223-.986-3.102-1.268-2.407-.237-3.896-.771-3.896-2.702 0-1.782 1.501-2.843 4.017-2.843 2.824 0 4.222.98 4.396 3.088.006.07-.016.138-.061.189-.046.051-.109.079-.176.079h-1.143c-.12 0-.225-.084-.249-.201-.276-1.224-.948-1.617-2.767-1.617-2.037 0-2.274.71-2.274 1.241 0 .645.28.833 3.007 1.196 2.698.36 3.987.872 3.987 2.763-.001 1.927-1.606 3.017-4.377 3.017z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    color: '#06B6D4',
    bg: '#001518',
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: 'C++',
    color: '#00599C',
    bg: '#00091a',
    svg: (
      <img src="/C++-logo.svg" alt="C++" className="w-8 h-8" />
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    bg: '#00080f',
    svg: (
      <img src="/Python-logo.svg" alt="Python" className="w-8 h-8" />
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 md:py-24 flex items-center relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 blur-[1px]"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: ["-20px", "20px", "-20px"],
              x: ["-10px", "10px", "-10px"],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> About Me
            <div className="h-px bg-white/10 flex-grow max-w-xs ml-4"></div>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6 text-muted text-sm md:text-lg leading-relaxed">
                <p>
                  Hi, I'm <span className="text-foreground font-semibold">Mahin Ahmad</span>. I'm a CSE student and full-stack developer dedicated to building high-performance digital solutions.
                </p>
                <p>
                  I focus on clean architecture and love exploring how AI can push the boundaries of modern web experiences. My approach combines technical rigor with a keen eye for minimalist design.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="mb-6 md:mb-10 text-foreground font-medium flex items-center gap-3 text-sm md:text-base">
                <span className="w-8 md:w-12 h-px bg-primary/30"></span>
                Tech Stack
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 120,
                    }}
                    className="flex flex-col items-center gap-2 group cursor-default"
                  >
                    {/* Float wrapper — separate motion.div to avoid prop conflict */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 15,
                        transition: { type: 'spring', stiffness: 300, damping: 12 }
                      }}
                      transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.4,
                      }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center
                                 border border-white/10 relative overflow-hidden
                                 group-hover:border-foreground/30
                                 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                                 cursor-pointer transition-all duration-500"
                      style={{ 
                        background: `linear-gradient(135deg, ${tech.color}15 0%, rgba(255,255,255,0.02) 100%)`,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                      <div className="relative z-10 filter group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300">
                        {tech.svg}
                      </div>
                      
                      {/* Interactive glow trace */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.color}40 0%, transparent 80%)`
                        }}
                      />
                    </motion.div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
