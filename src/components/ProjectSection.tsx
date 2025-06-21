import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  role: string;
  techStack: string[];
  description: string[];
  impact?: string;
  links?: {
    github?: string;
    live?: string;
  };
  imageUrl?: string;
}

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <section 
      id={project.id} 
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-6"
      style={{ backgroundColor: isEven ? '#fafafa' : '#ffffff' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
          {/* Content */}
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {project.title}
              </h2>
              
              <div className="mb-6">
                <p className="text-primary font-semibold text-lg mb-2">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg text-gray-400 mb-6">
                {project.description.map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {project.impact && (
                  <p className="font-semibold text-primary">{project.impact}</p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
            <motion.div
              initial={{ opacity: 0, x: isEven ? 30 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 30 : -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl overflow-hidden">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400 font-medium">Project Preview</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 rounded-full blur-lg" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;