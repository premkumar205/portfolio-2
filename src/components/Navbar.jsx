import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './ui/SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Prem<span className="text-primary">kumar</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dark-muted hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-dark-muted hover:text-white"
          onClick={toggleMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border py-4 px-6 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-lg font-medium text-dark-muted hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-dark-border flex space-x-4">
                <a href="https://github.com/premkumar205" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/chilkamarri-prem-kumar" target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:premkumar.p205@gmail.com" className="text-dark-muted hover:text-white">
                  <Mail size={20} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
