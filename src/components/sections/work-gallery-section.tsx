"use client";

import React, { useRef, useState } from 'react';

const WorkGallerySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    { id: 1, title: 'Project Alpha', width: 'w-[400px]', color: 'from-purple-900/40 to-slate-900' },
    { id: 2, title: 'Project Beta', width: 'w-[320px]', color: 'from-blue-900/40 to-slate-900' },
    { id: 3, title: 'Project Gamma', width: 'w-[380px]', color: 'from-violet-900/40 to-slate-900' },
    { id: 4, title: 'Project Delta', width: 'w-[350px]', color: 'from-indigo-900/40 to-slate-900' },
    { id: 5, title: 'Project Epsilon', width: 'w-[420px]', color: 'from-purple-800/40 to-slate-900' },
    { id: 6, title: 'Project Zeta', width: 'w-[340px]', color: 'from-fuchsia-900/40 to-slate-900' },
    { id: 7, title: 'Project Eta', width: 'w-[390px]', color: 'from-pink-900/40 to-slate-900' },
    { id: 8, title: 'Project Theta', width: 'w-[360px]', color: 'from-purple-900/40 to-slate-900' },
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white fade-in-up">
            Crafted by Zyxen
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto fade-in-up-delay-1">
            Explore our portfolio of innovative solutions and transformative projects
          </p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-slate-800"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#9333EA #1E293B'
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${project.width} h-80 flex-shrink-0 bg-slate-800 rounded-lg relative overflow-hidden group cursor-pointer transition-all duration-500 ease-out`}
              style={{
                transform: hoveredId === project.id ? 'scale(1.08)' : 'scale(1)',
                zIndex: hoveredId === project.id ? 10 : 1,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              
              {/* Hover overlay with project details */}
              <div 
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  A glimpse into innovative solutions crafted with precision and elegance.
                </p>
                <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <span className="px-4 py-2 bg-purple-600/80 rounded-md text-sm text-white">
                    AI-Powered
                  </span>
                  <span className="px-4 py-2 bg-slate-700/80 rounded-md text-sm text-white">
                    2024
                  </span>
                </div>
              </div>

              {/* Subtle shine effect on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            ← Scroll horizontally to explore more projects →
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkGallerySection;