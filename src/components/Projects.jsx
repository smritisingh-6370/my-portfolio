import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      title: "Water Logging Detection & Automated Sludge System",
      category: "IoT Hardware & Web Dashboard",
      description: "An automated urban drainage solution utilizing ultrasonic sensor logic, lamp post alarm indicators, and real-time monitoring to detect water accumulation and trigger automated sludge clearing mechanisms.",
      techStack: ["React.js", "Tailwind CSS", "IoT Logic", "Sensors"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-brand-yellow/10 via-brand-cream to-brand-orange/10",
      borderColor: "border-brand-yellow/30 hover:border-brand-orange/60"
    },
    {
      title: "Higher Education Student Platform",
      category: "Hackathon Project • SIH",
      description: "A centralized digital ecosystem designed to streamline higher education resources, student collaboration, and academic tracking with an intuitive, modern user interface.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-brand-orange/10 via-brand-cream to-brand-yellow/10",
      borderColor: "border-brand-orange/30 hover:border-brand-yellow/60"
    }
  ];

  return (
    <section id="projects" className="relative border-t border-brand-green/20">
      
      {/* Section Header matching My Skills & About Me size */}
      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-3">
          Featured <span className="text-brand-orange">Projects</span>
        </h2>
        <p className="text-brand-dark/70 text-lg max-w-xl mx-auto">
          A showcase of recent web applications and technical solutions I've engineered.
        </p>
      </div>

      {/* Hardware-Accelerated Stacking Container */}
      <div className="relative max-w-5xl mx-auto px-6 pb-32 space-y-16">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="sticky top-28 min-h-[65vh] md:min-h-[70vh] flex items-center justify-center transform-gpu"
          >
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                ease: [0.16, 1, 0.3, 1] // Custom ultra-smooth cubic-bezier curve
              }}
              className={`w-full bg-brand-cream bg-gradient-to-br ${project.accentColor} border ${project.borderColor} rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl flex flex-col justify-between transition-colors duration-300 transform-gpu will-change-transform`}
            >
              <div>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-4 py-1.5 rounded-full inline-block mb-6">
                  {project.category}
                </span>

                <h3 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                  {project.title}
                </h3>

                <p className="text-brand-dark/80 text-base md:text-xl leading-relaxed max-w-3xl mb-8 font-normal">
                  {project.description}
                </p>

                {/* Tech Stack Pills with Smooth Spring Hover */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech, tIndex) => (
                    <motion.span 
                      key={tIndex} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="bg-brand-green/10 border border-brand-green/20 text-brand-dark text-sm font-medium px-4 py-2 rounded-xl cursor-default transition-colors hover:border-brand-green/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Instant Tactile Feedback */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-brand-green/20">
                <motion.a 
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-orange/20 text-sm md:text-base flex items-center gap-2"
                >
                   Live Demo
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="border-2 border-brand-green hover:border-brand-green text-brand-green hover:text-brand-cream px-7 py-3.5 rounded-xl transition-colors hover:bg-brand-green text-sm md:text-base flex items-center gap-2"
                >
                   Source Code
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;