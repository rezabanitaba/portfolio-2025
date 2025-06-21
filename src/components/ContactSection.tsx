import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmadreza.banitaba@gmail.com',
      href: 'mailto:ahmadreza.banitaba@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ahmadrezabanitaba',
      href: 'https://linkedin.com/in/ahmadrezabanitaba',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rezabanitaba',
      href: 'https://github.com/rezabanitaba',
      color: 'hover:text-gray-800'
    }
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat about technology, 
            feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group bg-gray-700 rounded-2xl p-10 md:min-w-[220px] min-h-[200px] shadow-md hover:bg-gray-600 transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-8 h-8 text-primary group-hover:text-current mx-auto mb-4 transition-colors duration-300" />
                <h3 className="text-white font-semibold text-lg mb-2">{link.label}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex items-center justify-center">
                  {link.value}
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
