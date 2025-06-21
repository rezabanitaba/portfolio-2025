import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Mail } from 'lucide-react';

interface Project {
  id: string;
  title: string;
}

interface TimelineProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  projects: Project[];
}

const Timeline: React.FC<TimelineProps> = ({ activeSection, onSectionClick, projects }) => {
  const sections = [
    { id: 'hero', label: 'Home', icon: User },
    ...projects.map(project => ({ 
      id: project.id, 
      label: project.title.split(' – ')[0] || project.title,
      icon: Briefcase 
    })),
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <motion.button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className="group relative flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`
                w-3 h-3 rounded-full border-2 transition-all duration-300
                ${isActive 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                  : 'bg-white border-gray-300 group-hover:border-primary'
                }
              `} />
              
              {/* Connecting line */}
              {index < sections.length - 1 && (
                <div className="absolute top-3 left-1.5 w-px h-8 bg-gray-200" />
              )}
              
              {/* Label on hover */}
              <div className={`
                absolute left-6 px-3 py-1 bg-gray-800 text-white text-sm rounded-md
                whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200
                pointer-events-none
              `}>
                {section.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 
                               w-2 h-2 bg-gray-800 rotate-45" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default Timeline;