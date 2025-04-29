import React from 'react';
import { motion } from 'framer-motion';
import TypewriterEffect from 'typewriter-effect';

const Hero = () => {
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TypewriterEffect
              options={{
                strings: [
                  'Software Developer',
                  'Project Manager',
                  'Embedded System Engineer',
                  'Innovator',
                  'Leader',
                  'MERN-Stack Developer'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
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
