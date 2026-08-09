import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, Mic, Code, Crown, MessageSquare, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Infosys",
      role: "Software Development Engineer",
      date: "2025 - Present",
      description: "Currently working at Infosys, contributing to professional growth, technical learning, and project responsibilities in a dynamic software development environment.",
      icon: <Briefcase className="w-6 h-6 text-primary" />
    },
    
    {
      title: "Holpin",
      role: "Internship",
      date: "2025 • 3 months",
      description: "Completed a three-month internship at Holpin, building practical experience in fast-paced project execution and professional teamwork.",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: "eBox",
      role: "Internship",
      date: "2024 • 6 months",
      description: "Completed a six-month internship at eBox, gaining hands-on experience in development workflows, collaboration, and real-world problem-solving.",
      icon: <Code className="w-6 h-6 text-primary" />
    },
  ];

  const achievements = [
    {
      title: "HP Dreams-unlocked",
      role: "President & Head Coordinator",
      date: "Runner-up",
      description: "Participated in the national-level HP Hackathon held at Mehboob Studio, Mumbai, and secured the Runner-Up position among top innovators. Rewarded with an HP OmniBook X14 Flip Gen AI (worth ₹1.5L) for pitching a creative idea in the Filmmaking & AI category, guided by industry mentors from HP and Bollywood.",
      icon: <Crown className="w-6 h-6 text-primary" />
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

  const renderTimeline = (items: Array<{ title: string; role: string; date: string; description: string; icon: React.ReactNode }>, heading: string) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-8 text-center sm:text-left">{heading}</h3>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700" />

          {items.map((item) => (
            <motion.div
              key={item.title}
              className="relative pl-20 pb-12"
              variants={itemVariants}
            >
              <div className="absolute left-0 p-4 glass-card rounded-full">
                {item.icon}
              </div>
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-primary">{item.role}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

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

        <div className="max-w-6xl mx-auto">
          {renderTimeline(experiences, "Experience")}
          {renderTimeline(achievements, "Achievements")}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
