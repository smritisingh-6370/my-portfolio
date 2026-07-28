import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeSkillTitle, setActiveSkillTitle] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample placeholder images for interactive soft skills
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      caption: "Hosting & Stage Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      caption: "Collaborative Workshop & Problem Solving"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      caption: "Team Discussions & Event Execution"
    }
  ];

  // Auto-play carousel logic (changes image every 3 seconds)
  useEffect(() => {
    let interval;
    if (isGalleryOpen) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isGalleryOpen, galleryImages.length]);

  const openSkillGallery = (title) => {
    setActiveSkillTitle(title);
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const technicalSkills = [
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  ];

  const softSkills = [
    'Public Speaking',
    'Problem Solving',
    'Event Anchoring',
    'Team Leadership'
  ];

  return (
    <section id="skills" className="py-24 w-full bg-brand-green border-t border-brand-green/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Section Heading matching About Me */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-cream mb-3">
            My <span className="text-brand-yellow">Skills</span>
          </h2>
          <p className="text-brand-cream/70 text-lg max-w-xl mx-auto">
            Technologies, programming languages, tools, and soft skills I bring to the table.
          </p>
        </div>

        {/* Technical & Programming Stack */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
            <span></span> Languages & Web Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 border border-white/20 hover:border-brand-yellow/60 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 text-brand-cream font-medium backdrop-blur-sm transition-all shadow-md hover:shadow-brand-yellow/10 group"
              >
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`} 
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-sm text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Design Platforms */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
            <span></span> Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 border border-white/20 hover:border-brand-yellow/60 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 text-brand-cream font-medium backdrop-blur-sm transition-all shadow-md hover:shadow-brand-yellow/10 group"
              >
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} icon`} 
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-sm text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section with Ultra-Smooth Spring Transitions */}
        <div>
          <h3 className="text-xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
            <span></span> Soft Skills & Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.button 
                key={index}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => openSkillGallery(skill)}
                className="bg-white/10 border border-white/20 hover:border-brand-yellow p-4 rounded-2xl text-center text-brand-cream hover:text-brand-yellow font-semibold text-sm cursor-pointer shadow-md hover:shadow-brand-yellow/10 transition-colors duration-200 ease-out will-change-transform"
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Soft Skill Image Slider Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl bg-brand-cream border border-brand-green/20 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-5 right-5 text-brand-dark/70 hover:text-brand-dark bg-brand-green/10 hover:bg-brand-green/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-lg z-10 cursor-pointer"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-brand-dark mb-1">
                {activeSkillTitle}
              </h3>
              <p className="text-brand-dark/70 text-sm mb-6">Highlights & Moments</p>

              {/* Moving Image Frame */}
              <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-brand-green/20 bg-brand-dark">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={galleryImages[currentImageIndex].url}
                    alt={activeSkillTitle}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent p-4 text-center">
                  <p className="text-brand-cream text-sm font-medium">
                    {galleryImages[currentImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      idx === currentImageIndex ? 'bg-brand-orange w-6' : 'bg-brand-green/20 hover:bg-brand-green/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;