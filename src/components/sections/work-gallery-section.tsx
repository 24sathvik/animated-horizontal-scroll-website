"use client";

import React from 'react';
import Image from 'next/image';

const WorkGallerySection: React.FC = () => {
  const projects = [
    { id: 1, title: 'Project Alpha', span: 'md:col-span-2' },
    { id: 2, title: 'Project Beta', span: '' },
    { id: 3, title: 'Project Gamma', span: '' },
    { id: 4, title: 'Project Delta', span: '' },
    { id: 5, title: 'Project Epsilon', span: 'md:col-span-2' },
    { id: 6, title: 'Project Zeta', span: '' },
    { id: 7, title: 'Project Eta', span: '' },
  ];

  return (
    <section className="py-20 bg-black">
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${project.span} h-64 bg-slate-800 rounded-lg smooth-transition-slow hover:bg-slate-700 hover-scale overflow-hidden group cursor-pointer fade-in-up-delay-${Math.min(index % 3 + 1, 3)}`}
            >
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                
                {/* Project Title Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallerySection;