import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import MyPhoto from '../assets/Smriti_photo.jpeg';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 pt-28 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start w-full max-w-7xl">
        <div className="text-left">
          <motion.span 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-2 block"
          >
            Welcome to my space
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-extrabold text-brand-dark mb-6 leading-tight"
          >
            Hi, I'm <br />
            <span className="text-brand-green">
              Smriti Singh
            </span>
          </motion.h1>

          <div className="text-brand-dark/80 text-xl md:text-2xl mb-6 min-h-[180px] max-w-xl font-medium leading-relaxed">
            <TypeAnimation
              sequence={[
                'Building modern, fast, and responsive web apps.',
                400,
                'Building modern, fast, and responsive web apps.\nTurning ideas into beautiful interactive designs.',
                400,
                'Building modern, fast, and responsive web apps.\nTurning ideas into beautiful interactive designs.\nCrafting clean user interfaces with React & Tailwind CSS.',
                400,
                'Building modern, fast, and responsive web apps.\nTurning ideas into beautiful interactive designs.\nCrafting clean user interfaces with React & Tailwind CSS.\nPassionate about creating simple, meaningful digital experiences.',
                3000,
              ]}
              wrapper="p"
              cursor={true}
              speed={75}
              repeat={Infinity}
              style={{ display: 'inline-block', whiteSpace: 'pre-line' }}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mt-12 md:mt-16"
          >
            <a 
              href="#projects" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-brand-orange/20"
            >
              View Work
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-brand-green text-brand-green font-bold px-8 py-3.5 rounded-xl transition-all hover:bg-brand-green hover:text-white"
            >
              Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 mt-8 text-brand-dark/70 font-medium"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
              GitHub
            </a>
            <span className="text-brand-green/30">•</span>
            <a href="mailto:your-email@gmail.com" className="hover:text-brand-orange transition-colors">
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.6, 0.05, 0.1, 0.9] }}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <img 
            src={MyPhoto} 
            alt="Smriti Singh"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover object-top rounded-full border-4 border-brand-green/20 shadow-2xl transition-all duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;