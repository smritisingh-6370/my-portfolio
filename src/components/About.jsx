import React from 'react';
import { motion } from 'framer-motion';
import MyPhoto from '../assets/Smriti_photo.jpeg';

const About = ({ onOpenAcademics }) => {
  return (
    <section id="about-me" className="py-24 px-6 max-w-6xl mx-auto border-t border-brand-green/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center"
      >
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-brand-orange to-brand-yellow opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500"></div>
            <img 
              src={MyPhoto} 
              alt="Smriti Singh" 
              className="relative w-72 h-96 md:w-80 md:h-[420px] object-cover rounded-[40px] border-4 border-brand-green shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="md:col-span-7 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            About <span className="text-brand-orange">Me</span>
          </h2>

          <p className="text-brand-dark/80 text-lg md:text-xl leading-relaxed font-normal">
            A passionate web developer and second-year <span className="text-brand-dark font-bold">Computer Science & Business Systems</span> student at Techno Main Salt Lake. With a strong command over <span className="text-brand-green font-bold">React.js, JavaScript, Tailwind CSS, HTML, and CSS</span>, I focus on building clean, user-friendly, and responsive digital interfaces.
          </p>

          <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed">
            Beyond web development, I have a strong foundation in public speaking and event anchoring, enabling clear communication and seamless teamwork. I thrive in creative environments and am constantly driven to merge technological excellence with practical, real-world impact.
          </p>

          <div className="pt-4">
            <button 
              onClick={onOpenAcademics}
              className="inline-flex items-center gap-2 bg-brand-yellow/20 border-2 border-brand-yellow hover:border-brand-orange text-brand-dark hover:text-white px-6 py-3 rounded-2xl text-base font-semibold transition-all hover:bg-brand-orange shadow-lg shadow-brand-orange/20 cursor-pointer"
            >
              <span>🎓</span> Academics & Highlights
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;