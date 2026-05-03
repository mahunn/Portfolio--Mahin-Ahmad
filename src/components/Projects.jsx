import React from 'react';
import ProjectCard from './ProjectCard';
import { ExternalLink, ArrowUpRight, Star } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "Hero Apps Showcase",
      description: "A modern web application demonstrating interactive UI components, dynamic data handling, and robust state management, built with high-performance web technologies.",
      link: "https://strong-malasada-b3ddca.netlify.app/",
      tags: ["React", "Vite", "Frontend Architecture"],
      image: "/project_hero_apps.png"
    },
    {
      title: "Emergency Service Directory BD",
      description: "A streamlined web application providing quick access to essential government emergency services in Bangladesh. Features an intuitive interface for navigating emergency contacts and viewing call history.",
      link: "https://mahunn.github.io/Emergency-Hotline-BD/",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/project_emergency_bd.png"
    },
    {
      title: "CS Ticket System",
      description: "A comprehensive customer support ticket management system designed to streamline issue tracking, support requests, and user resolutions effectively for support teams.",
      link: "https://comfy-treacle-75e5ff.netlify.app/",
      tags: ["React", "Vite", "Tailwind CSS", "State Management"],
      image: "/project_cs_ticket.png"
    }
  ];

  const flagshipTags = ["Next.js", "Supabase", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel", "Auth", "Full-Stack"];

  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-foreground/50 font-mono text-xl">02.</span> Projects Showcase
        <div className="h-px bg-white/10 flex-grow max-w-xs ml-4"></div>
      </h2>

      {/* ── Flagship Project ── */}
      <a
        href="https://henley-zone.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="group block mb-16 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="View Henley Zone live project"
      >
        <div className="relative rounded-3xl overflow-hidden liquid-glass border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(240,0,0,0.2)] hover:-translate-y-1">

          {/* Animated top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

          <div className="flex flex-col lg:flex-row">

            {/* Left: Screenshot / Visual */}
            <div className="relative lg:w-[55%] h-72 lg:h-auto bg-black/60 overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/40 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 lg:hidden pointer-events-none" />

              {/* Real screenshot */}
              <img
                src="/henley_zone_preview.png"
                alt="Henley Zone - Full-Stack E-Commerce Platform"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Shine sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10 pointer-events-none" />
            </div>

            {/* Right: Info */}
            <div className="lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full">
                  <Star size={10} fill="currentColor" /> Flagship Project
                </span>
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Full-Stack · 2025</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                Henley Zone
              </h3>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                A full-stack web platform built with <span className="text-gray-200 font-medium">Next.js 14</span> and <span className="text-gray-200 font-medium">Supabase</span>, featuring real-time data, authentication flows, PostgreSQL database management, and a polished TypeScript codebase — deployed on Vercel for seamless performance.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {flagshipTags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary/90 group-hover:bg-primary px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(240,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(240,0,0,0.5)]">
                  <ExternalLink size={15} /> View Live Site
                </span>
                <span className="text-gray-500 text-sm font-mono">henley-zone.vercel.app</span>
              </div>

              {/* Animated arrow */}
              <div className="mt-6 flex items-center gap-2 text-gray-600 text-xs group-hover:text-primary/60 transition-colors duration-300">
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="font-mono tracking-wider uppercase text-[10px]">Click anywhere to open</span>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* ── Other Projects ── */}
      <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-4 font-mono">
        <span className="text-gray-600">— </span> Other Projects
        <div className="h-px bg-white/5 flex-grow max-w-xs ml-2"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
