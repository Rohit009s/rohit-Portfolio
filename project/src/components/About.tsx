import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, Cloud, Database, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Software Development",
      items: ["MERN Stack", "UI/UX Design", "Full-Stack Development"],
      icon: <Code className="w-6 h-6" />,
      progress: 90
    },
    {
      category: "Embedded Systems & Hardware",
      items: ["MATLAB", "VLSI", "ESP32", "RFID Systems"],
      icon: <Cpu className="w-6 h-6" />,
      progress: 85
    },
    {
      category: "DevOps & Cloud",
      items: ["Git", "GitHub", "Google Apps Script"],
      icon: <Cloud className="w-6 h-6" />,
      progress: 80
    },
    {
      category: "Database & Backend",
      items: ["MongoDB", "MySQL", "Express.js", "Node.js"],
      icon: <Database className="w-6 h-6" />,
      progress: 85
    },
    {
      category: "Problem Solving",
      items: ["Data Structures & Algorithms", "System Design"],
      icon: <Brain className="w-6 h-6" />,
      progress: 90
    }
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-lg text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm an Electronics and Communication Engineering graduate with a passion for building innovative solutions 
            at the intersection of hardware and software. My journey spans from developing embedded systems to 
            creating full-stack applications, always focusing on delivering impactful technology solutions.
          </motion.p>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="glass-card p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-gray-700 rounded-full">
                    <motion.div
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;