import React from 'react';
import ProjectCard from './ProjectCard';

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

  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-foreground/50 font-mono text-xl">02.</span> Projects Showcase
        <div className="h-px bg-white/10 flex-grow max-w-xs ml-4"></div>
      </h2>
      
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
