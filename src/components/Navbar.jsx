import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-cream/90 backdrop-blur-md border-b border-brand-green/20 z-50 px-6 py-4 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="text-3xl font-extrabold tracking-tight text-brand-dark flex items-baseline gap-1"
      >
        <span className="text-brand-orange font-serif italic text-4xl">S</span>
        <span className="tracking-widest">mriti</span>
        <span className="text-brand-orange font-serif italic text-4xl ml-2">S</span>
        <span className="tracking-widest">ingh</span>
      </motion.div>

      <div className="hidden md:flex space-x-6 text-brand-dark font-medium">
<a href="#about-me" className="hover:text-brand-orange transition-colors">About</a>        <a href="#skills" className="hover:text-brand-orange transition-colors">Skills</a>
        <a href="#projects" className="hover:text-brand-orange transition-colors">Projects</a>
        <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;