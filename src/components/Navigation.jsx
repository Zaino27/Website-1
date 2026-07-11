import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X, FileText } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/home', key: 'home' },
  { label: 'About', path: '/about', key: 'about' },
  { label: 'Research', path: '/research', key: 'research' },
  { label: 'Projects', path: '/projects', key: 'projects' },
  { label: 'Publications', path: '/publications', key: 'publications' },
  { label: 'Blog', path: '/blog', key: 'blog' },
  { label: 'CV', path: '/cv', key: 'cv' },
  { label: 'Interests', path: '/interests', key: 'interests' },
  { label: 'Contact', path: '/contact', key: 'contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-obsidian/80 backdrop-blur-md border-b border-slate-core/50">
        <Link to="/" className="flex items-center gap-2 group">
          <Home className="w-4 h-4 text-emerald-pulse opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="font-mono-ui text-vellum group-hover:text-bone transition-colors">Home</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`font-mono-ui transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-emerald-pulse'
                  : 'text-vellum hover:text-bone'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/cv"
            className="hidden md:flex items-center gap-1.5 font-mono-ui text-vellum hover:text-emerald-pulse transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-vellum hover:text-bone transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-2xl transition-colors ${
                      location.pathname === item.path
                        ? 'text-emerald-pulse'
                        : 'text-vellum hover:text-bone'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
