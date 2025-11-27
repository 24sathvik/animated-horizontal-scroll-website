"use client";

import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Set flag to skip loading animation when navigating to Work section
    sessionStorage.setItem('skipLoading', 'true');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 smooth-transition hover:opacity-80">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1a995666-d28e-47d3-94a2-4468b330f1b8-zyxen-web-vercel-app/assets/icons/logo-1.png"
            alt="ZYXEN Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-logo text-white font-bold">ZYXEN</span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="/about"
            className="text-nav-link text-gray-300 hover:text-white smooth-transition"
          >
            About
          </a>
          <a
            href="/#crafted"
            onClick={handleWorkClick}
            className="text-nav-link text-gray-300 hover:text-white smooth-transition"
          >
            Work
          </a>
          <a
            href="/contact"
            className="text-nav-link text-gray-300 hover:text-white smooth-transition"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;