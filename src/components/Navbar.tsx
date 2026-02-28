import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '01. Fit', path: '/audit' },
    { name: '02. Loops', path: '/installs' },
    { name: '03. Impact', path: '/metrics' },
    { name: '04. Identity', path: '/fixer' },
    { name: '05. Offers', path: '/offers' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-ink/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Activity className="w-5 h-5 text-brand-accent" />
            <span className="font-serif text-xl tracking-tight group-hover:text-brand-accent transition-colors">
              AI Workflow Operator
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-mono uppercase tracking-widest hover:text-brand-accent transition-colors",
                  location.pathname === link.path ? "text-brand-accent" : "text-brand-ink/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/triage"
              className="px-5 py-2 bg-brand-ink text-brand-bg rounded-full text-sm font-mono uppercase tracking-widest hover:bg-brand-accent transition-colors"
            >
              Start Triage
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-brand-ink"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-ink/10 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-serif tracking-tight",
                location.pathname === link.path ? "text-brand-accent" : "text-brand-ink"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/triage"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-4 bg-brand-ink text-brand-bg rounded-full font-bold"
          >
            Start 72-Hour Triage
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
