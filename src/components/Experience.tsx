import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Star, Mic, Code, Crown, MessageSquare } from 'lucide-react';

const Experience = () => {
  const experiences = [
     {
      title: "HP Dreams-unlocked",
      role: "President & Head Coordinator",
      date: "Runner-up",
      description: "Participated in the national-level HP Hackathon held at Mehboob Studio, Mumbai, and secured the Runner-Up position among top innovators.Rewarded with an HP OmniBook X14 Flip Gen AI (worth ₹1.5L) for pitching a creative idea in the Filmmaking & AI category, guided by industry mentors from HP and Bollywood.",
      icon: <Crown className="w-6 h-6 text-primary" />
    },
    
    {
      title: "SoulStepperz Dance Club",
      role: "President & Head Coordinator",
      date: "2024-2025",
      description: "Led CVR College's premier dance club, organizing performances and fostering community engagement. Successfully managed team dynamics and club growth.",
      icon: <Crown className="w-6 h-6 text-primary" />
    },
    {
      title: "Personal Tutor ",
      role: "Private Tutor for School Students ",
      date: "2022 - 2025",
      description: "Personal tutor for 6th-class to 12th-class students, including EAMCET and JEE Mains coaching",
      icon: <Mic className="w-6 h-6 text-primary" />
    },
    {
      title: "National-Level Hackathon on AI & IoT",
      role: "Winner",
      date: "2024",
      description: "Developed an innovative AI-powered IoT solution, securing Winner place among 200+ teams.",
      icon: <Star className="w-6 h-6 text-primary" />
    },
    {
      title: "Open Source Summit 2024",
      role: "Speaker",
      date: "2024",
      description: "Delivered a talk on emerging trends in embedded systems and IoT technologies.",
      icon: <Mic className="w-6 h-6 text-primary" />
    },
    {
      title: "SAE Aerothon Competition",
      role: "Team Lead",
      date: "2024",
      description: "Top 2 in Telangana at National Level. Led drone surveillance project for disaster management.",
      icon: <Trophy className="w-6 h-6 text-primary" />
    },
    {
      title: "Campus Groove Dance Competition",
      role: "Event Organizer",
      date: "2023",
      description: "Successfully planned and executed a major dance competition, demonstrating strong event management and leadership skills.",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Model United Nations",
      role: "Runner-up",
      date: "2023",
      description: "Secured runner-up position at Vardhaman Engineering College MUN, showcasing diplomatic and negotiation skills.",
      icon: <MessageSquare className="w-6 h-6 text-primary" />
    },
    {
      title: "Youth Parliament",
      role: "Winner",
      date: "2023",
      description: "Won the Youth Parliament competition at CVR College, showcasing leadership and public speaking abilities.",
      icon: <Mic className="w-6 h-6 text-primary" />
    },
    {
      title: "Global Embedded Systems Challenge",
      role: "Top 5 Finalist",
      date: "2023",
      description: "Showcased expertise in embedded systems development on an international platform.",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: "CVR College MUN",
      role: "Runner-up",
      date: "2022",
      description: "Demonstrated excellence in debate and international relations discourse, securing second place.",
      icon: <MessageSquare className="w-6 h-6 text-primary" />
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="experience" className="py-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience & <span className="gradient-text">Achievements</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative pl-20 pb-12"
                variants={itemVariants}
              >
                <div className="absolute left-0 p-4 glass-card rounded-full">
                  {exp.icon}
                </div>
                <div className="glass-card p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.role}</p>
                    </div>
                    <span className="text-gray-400">{exp.date}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
