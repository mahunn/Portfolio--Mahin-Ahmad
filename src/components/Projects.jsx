import React from 'react';
import { ExternalLink, ArrowUpRight, Star } from 'lucide-react';

const Projects = () => {
  const showcaseProjects = [
    {
      title: "Henley Zone",
      overview: "A premium full-stack e-commerce platform built for high performance and seamless user experience.",
      problem: "The client needed a modern, scalable e-commerce solution with real-time inventory management and secure authentication, as their previous platform was slow and prone to crashes during high-traffic periods.",
      solution: "Engineered a custom Next.js application backed by Supabase. Implemented SSR for lightning-fast page loads, integrated secure PostgreSQL data management, and designed a highly intuitive UI that increased conversion rates.",
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
      link: "https://henleyzone.com",
      image: "/henley_zone_preview.png"
    },
    {
      title: "Glamora",
      overview: "A high-end fashion boutique website focused on stunning visuals and seamless navigation.",
      problem: "The boutique was losing online sales due to an outdated, non-responsive website that didn't reflect the premium nature of their brand.",
      solution: "Designed and developed a visually striking, mobile-first web experience using React and Framer Motion. Focused on smooth scroll animations, high-quality image optimization, and a refined aesthetic to match their brand identity.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      link: "https://glamora-beige.vercel.app/",
      image: "/glamora_preview.png"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32 flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 flex items-center gap-6">
        <span className="text-primary font-mono text-lg uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">Featured Work</span>
        <div className="h-px bg-white/10 flex-grow"></div>
      </h2>

      <div className="space-y-20 md:space-y-32">
        {showcaseProjects.map((project, idx) => (
          <div key={idx} className="group flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Visual Side */}
            <div className={`w-full lg:w-3/5 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <a href={project.link} target="_blank" rel="noreferrer" className="block relative rounded-3xl overflow-hidden liquid-glass border border-white/10 hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_50px_rgba(240,0,0,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <div className="aspect-[16/10] bg-black/60 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle hover sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 pointer-events-none" />
                </div>
              </a>
            </div>

            {/* Info Side */}
            <div className={`w-full lg:w-2/5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-2 mb-4">
                <Star size={14} className="text-primary" fill="currentColor" />
                <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Client Project</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold font-display text-white mb-6 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-gray-400 leading-relaxed">{project.overview}</p>
                </div>
                <div className="pl-4 border-l-2 border-red-500/30">
                  <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-2">The Problem</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="pl-4 border-l-2 border-green-500/30">
                  <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-2">The Solution</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-display font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(240,0,0,0.4)] hover:-translate-y-1"
              >
                View Live Site <ArrowUpRight size={18} />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
