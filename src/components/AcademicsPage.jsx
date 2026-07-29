import React from 'react';
import { motion } from 'framer-motion';

// Import custom PNG icons
import btechIcon from '../assets/btech_icon.png';
import class12Icon from '../assets/class12_icon.png';
import class10Icon from '../assets/class10_icon.png';

const AcademicsPage = ({ onBack }) => {
  const academicData = [
    {
      title: "Bachelor of Technology (B.Tech)",
      subtitle: "Computer Science & Business Systems",
      institution: "Techno Main Salt Lake",
      period: "2024 - 2028",
      description: "Pursuing B.Tech CSBS, focusing on modern web technologies, software engineering core subjects, and business systems integration.",
      gradeCardUrl: null, // Update when available
      icon: btechIcon
    },
    {
      title: "Higher Secondary (Class XII)",
      subtitle: "Science Stream",
      institution: "Senior Secondary School",
      period: "2022 - 2024",
      description: "Completed higher secondary education with a strong focus on Physics, Chemistry, and Mathematics.",
      gradeCardUrl: "/class12_gradecard.pdf",
      icon: class12Icon
    },
    {
      title: "Secondary Education (Class X)",
      subtitle: "General Academics",
      institution: "High School",
      period: "2022",
      description: "Successfully cleared secondary board examinations with commendable academic performance.",
      gradeCardUrl: "/class10_gradecard.pdf",
      icon: class10Icon
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark px-6 py-12 md:py-20 max-w-5xl mx-auto">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="mb-10 inline-flex items-center gap-2 text-brand-dark hover:text-brand-orange bg-brand-green/10 hover:bg-brand-green/20 border border-brand-green/20 px-5 py-2.5 rounded-xl transition-all cursor-pointer font-medium"
      >
        ← Back to Portfolio
      </motion.button>

      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Academic <span className="text-brand-orange">Details</span>
        </h1>
        <p className="text-brand-dark/70 text-lg">
          My educational background, timeline, and academic records.
        </p>
      </motion.div>

      {/* Full Page Vertical Timeline */}
      <div className="relative border-l-2 border-brand-yellow ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
        {academicData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Custom PNG Timeline Icon Node */}
            <div className="absolute -left-[45px] md:-left-[61px] top-0 w-10 h-10 rounded-full bg-brand-cream border-2 border-brand-yellow p-1.5 shadow-lg shadow-brand-yellow/20 group-hover:scale-110 transition-transform">
              <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
            </div>

            {/* Academic Card Content */}
            <div className="bg-white/50 border border-brand-green/10 hover:border-brand-yellow/50 p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all shadow-xl hover:shadow-brand-yellow/10">
              <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-1">{item.title}</h2>
                  <p className="text-brand-green font-medium text-base">
                    {item.subtitle} • <span className="text-brand-dark/80">{item.institution}</span>
                  </p>
                </div>
                <span className="text-xs md:text-sm font-semibold text-brand-dark bg-brand-yellow/20 border border-brand-yellow/40 px-4 py-1.5 rounded-full">
                  {item.period}
                </span>
              </div>

              <p className="text-brand-dark/70 text-base leading-relaxed my-5">
                {item.description}
              </p>

              {/* Grade Card Button */}
              {item.gradeCardUrl && (
                <a
                  href={item.gradeCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shadow-brand-orange/20"
                >
                  📄 Grade Card / Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AcademicsPage;