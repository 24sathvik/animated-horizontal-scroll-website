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
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1764251607419.png"
            alt="ZYXEN Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
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