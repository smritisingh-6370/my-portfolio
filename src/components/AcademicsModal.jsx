import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const academicData = [
    {
      title: "Bachelor of Technology (B.Tech)",
      subtitle: "Computer Science & Business Systems",
      institution: "Techno Main Salt Lake",
      period: "2024 - 2028",
      description: "Focusing on software development, web technologies, computer science core subjects, and business systems integration.",
      badge: "Current"
    },
    {
      title: "Higher Secondary (Class XII)",
      subtitle: "Science Stream",
      institution: "Senior Secondary School",
      period: "2022 - 2024",
      description: "Completed secondary education with a strong emphasis on Physics, Chemistry, and Mathematics.",
      badge: "Completed"
    },
    {
      title: "Secondary Education (Class X)",
      subtitle: "General Academics",
      institution: "High School",
      period: "2022",
      description: "Successfully cleared secondary board examinations with high distinction.",
      badge: "Completed"
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        
        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 md:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl font-bold"
          >
            ✕
          </button>

          {/* Modal Header */}
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span>🎓</span> Academic <span className="text-cyan-400">Journey</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">My educational milestones and qualifications</p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-cyan-500/40 ml-4 md:ml-6 space-y-8 pl-6 md:pl-8">
            {academicData.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform"></div>

                {/* Card */}
                <div className="bg-slate-800/50 border border-slate-700/60 p-5 rounded-2xl hover:border-cyan-400/50 transition-all backdrop-blur-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-cyan-300 font-medium text-sm">{item.subtitle} • <span className="text-slate-300">{item.institution}</span></p>
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AcademicsModal;