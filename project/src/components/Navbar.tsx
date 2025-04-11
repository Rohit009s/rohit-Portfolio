import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl sm:text-2xl font-bold gradient-text hover-scale"
            whileHover={{ scale: 1.05 }}
          >
            RN 🕸🕷
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
            <motion.a
              href="https://rohit-neelam-resume.my.canva.site/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors hover-scale"
              whileHover={{ 
                scale: 1.05,
                textShadow: [
                  "0 0 4px rgb(14 165 233 / 0.3)",
                  "0 0 8px rgb(14 165 233 / 0.3)",
                  "0 0 12px rgb(14 165 233 / 0.3)"
                ]
              }}
            >
              <FileText size={18} />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <a href="#about" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <motion.a
              href="https://rohit-neelam-resume.my.canva.site/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors hover-scale justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText size={18} />
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;