"use client";

import React, { useRef, useState, useEffect } from 'react';

const WorkGallerySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const animationFrameRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      width: 'w-[400px]', 
      height: 'h-80', 
      preview: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      video: 'https://player.vimeo.com/progressive_redirect/playback/1046993261/rendition/360p/file.mp4?loc=external&signature=56e4f91cf281bb3dc4d5c6b3ffa5e3c1fd2d4ce55e42f28c6e3fa22ec46de37f'
    },
    { 
      id: 2, 
      title: 'SaaS Dashboard', 
      width: 'w-[450px]', 
      height: 'h-80', 
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      video: 'https://player.vimeo.com/progressive_redirect/playback/1046993261/rendition/360p/file.mp4?loc=external&signature=56e4f91cf281bb3dc4d5c6b3ffa5e3c1fd2d4ce55e42f28c6e3fa22ec46de37f'
    },
    { 
      id: 3, 
      title: 'Mobile App Design', 
      width: 'w-[380px]', 
      height: 'h-80', 
      preview: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      video: 'https://player.vimeo.com/progressive_redirect/playback/1046993261/rendition/360p/file.mp4?loc=external&signature=56e4f91cf281bb3dc4d5c6b3ffa5e3c1fd2d4ce55e42f28c6e3fa22ec46de37f'
    },
    { 
      id: 4, 
      title: 'AI Analytics Tool', 
      width: 'w-[420px]', 
      height: 'h-80', 
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      video: 'https://player.vimeo.com/progressive_redirect/playback/1046993261/rendition/360p/file.mp4?loc=external&signature=56e4f91cf281bb3dc4d5c6b3ffa5e3c1fd2d4ce55e42f28c6e3fa22ec46de37f'
    },
    { 
      id: 5, 
      title: 'Fintech Solution', 
      width: 'w-[440px]', 
      height: 'h-80', 
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      video: 'https://player.vimeo.com/progressive_redirect/playback/1046993261/rendition/360p/file.mp4?loc=external&signature=56e4f91cf281bb3dc4d5c6b3ffa5e3c1fd2d4ce55e42f28c6e3fa22ec46de37f'
    },
    { 
      id: 6, 
      title: 'Healthcare Portal', 
      width: 'w-[390px]', 
      height: 'h-80', 
      preview: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      video: 'https://player.vimeo.com/progressive_redirect/playback/1046993261/rendition/360p/file.mp4?loc=external&signature=56e4f91cf281bb3dc4d5c6b3ffa5e3c1fd2d4ce55e42f28c6e3fa22ec46de37f'
    },
  ];

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPositionRef.current += 0.5;
        
        // Reset scroll position for infinite loop
        const maxScroll = container.scrollWidth / 3;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center space-y-4 fade-in-up">
          <div className="inline-block">
            <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white fade-in-up-delay-1">
            Crafted by Zyxen
          </h2>
          <p className="text-gray-400 fade-in-up-delay-2">
            Explore our portfolio of innovative solutions and transformative projects
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-hidden py-8 px-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className={`${project.width} ${project.height} flex-shrink-0 relative group cursor-pointer overflow-visible`}
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredIndex(null);
              }}
              style={{
                transform: hoveredIndex === index ? 'scale(1.4)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 50 : 1,
                transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Video Preview (shows on hover for 2-3 seconds) */}
              {hoveredIndex === index ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={project.video}
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${project.preview})`,
                  }}
                />
              )}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg" />
              
              {/* Project title - always visible at bottom */}
              <div className="absolute inset-0 flex items-end p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              {/* Glowing border on hover */}
              <div
                className={`absolute inset-0 rounded-lg pointer-events-none transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'border-4 border-purple-500 shadow-[0_0_50px_rgba(147,51,234,0.9)]'
                    : 'border-2 border-slate-700/50'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Gradient overlays on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default WorkGallerySection;