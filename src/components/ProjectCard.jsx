import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, link, tags, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-2xl overflow-hidden liquid-glass border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`View ${title} live demo`}
    >
      {/* Animated top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

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

        {/* "Open" badge on hover */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-primary/90 text-white text-[10px] font-mono px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight size={10} /> Open
        </div>
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

        {/* Links Row */}
        <div className="flex items-center gap-4 mt-auto">
          <span className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            <ExternalLink size={16} /> Live Demo
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors ml-auto">
            <ArrowUpRight size={12} /> Click to visit
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
