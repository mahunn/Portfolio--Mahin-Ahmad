import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, link, tags, image }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden liquid-glass border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col h-full">
      {/* Image Container / Placeholder */}
      <div className="w-full h-48 bg-black/50 relative overflow-hidden flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60 z-10"></div>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <span className="text-gray-600 font-mono text-sm tracking-widest z-0 uppercase">{title}</span>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="text-[10px] font-mono text-muted bg-white/5 px-2 py-1 rounded-md border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={link} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors ml-auto"
            title="Source code link if available"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg> Code
          </a>
        </div>
      </div>
      

    </div>
  );
};

export default ProjectCard;
