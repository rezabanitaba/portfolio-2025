import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Users, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'GraphQL', 'REST APIs', 'Python'] },
    { category: 'Cloud', items: ['AWS', 'Lambda', 'CloudFront', 'S3'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  ];

  const highlights = [
    {
      icon: Award,
      title: '6+ Years Experience',
      description: 'Building full stack and cloud solutions'
    },
    {
      icon: Code,
      title: 'Full Stack Expertise',
      description: 'From frontend UX to scalable backends'
    },
    {
      icon: Zap,
      title: 'Cloud Architecture',
      description: 'Serverless and edge computing specialist'
    },
    {
      icon: Users,
      title: 'Real Impact',
      description: 'Solutions serving thousands of users'
    },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full stack and cloud engineer with over 6 years of experience 
            building scalable systems and elegant user experiences. I love solving complex 
            problems with clean design and efficient infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">What I Bring</h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{highlight.title}</h4>
                      <p className="text-gray-400">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-primary mb-3">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800 hover:border-primary transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-400 italic">
              "I believe in the power of clean code, thoughtful design, and infrastructure 
              that scales. Every project is an opportunity to solve real problems and create 
              meaningful impact."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;