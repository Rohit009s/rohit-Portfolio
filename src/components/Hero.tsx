import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Software Developer',
  'Embedded System Engineer',
  'AI Engineer',
  'Leader',
  'Creative Thinker'
];

const Hero = () => {

  const [currentRole, setCurrentRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentIndex % roles.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentRole(role.substring(0, currentRole.length + 1));
        if (currentRole === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentRole(role.substring(0, currentRole.length - 1));
        if (currentRole === '') {
          setIsDeleting(false);
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [currentRole, currentIndex, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-4xl"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm{' '} 
          <span className="gradient-text">Rohit Neelam</span>
        </motion.h1>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">
          Enthusiastic in
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="gradient-text ml-2"
          >
            {currentRole}
            <span className="animate-pulse">|</span>
          </motion.span>
        </div>

        <motion.p
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building innovative solutions at the intersection of hardware and software.
          Passionate about embedded systems, full-stack development, software Engineer, and creating impactful technology, in the Society.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
