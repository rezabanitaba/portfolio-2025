import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Cloud, Database } from 'lucide-react';

interface HeroSectionProps {
  onViewProjects: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onViewProjects }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            RB
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Reza</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            A full stack and cloud engineer building scalable systems across web, cloud, and edge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <Code className="w-6 h-6 text-primary" />
            <span className="font-medium">Full Stack</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Cloud className="w-6 h-6 text-primary" />
            <span className="font-medium">Cloud</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Database className="w-6 h-6 text-primary" />
            <span className="font-medium">Infrastructure</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={onViewProjects}
          className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Projects</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;