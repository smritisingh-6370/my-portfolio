import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 w-full bg-brand-dark text-center border-t border-brand-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-brand-cream mb-2">
          Get In <span className="text-brand-orange">Touch</span>
        </h2>
        <p className="text-brand-cream/70 mb-8 max-w-md mx-auto">
          Feel free to reach out for collaborations, project opportunities, or just a quick chat!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="mailto:your-email@gmail.com" 
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-orange/20"
          >
            Send an Email
          </a>
        </div>

        <footer className="mt-20 text-brand-cream/50 text-sm border-t border-brand-cream/10 pt-8">
          Made with ❤️ using React & Tailwind CSS • © {new Date().getFullYear()} Smriti Singh
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;