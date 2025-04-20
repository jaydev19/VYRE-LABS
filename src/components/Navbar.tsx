import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg px-4 py-3">
        <Logo />
        <div className="flex items-center gap-2">
          <a
            href="#testimonials"
            className="px-4 py-1 text-white/90 hover:text-cyan-400 text-base font-medium transition-colors rounded-full"
          >
            Testimonials
          </a>
          <a
            href="#docs"
            className="px-4 py-1 text-white/90 hover:text-cyan-400 text-base font-medium transition-colors rounded-full"
          >
            Docs
          </a>
          <a
            href="#signup"
            className="px-4 py-1 text-white font-semibold text-base relative transition-all rounded-full
              before:absolute before:inset-0 before:rounded-full before:bg-cyan-500/30 before:blur before:opacity-60 before:-z-10
              hover:before:opacity-90 animate-pulse"
            style={{ boxShadow: '0 0 16px 0 #22d3ee80' }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;