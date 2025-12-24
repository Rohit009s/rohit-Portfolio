import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Prism - College Food Ordering Platform",
      description: "A comprehensive MERN stack food ordering system for CVR College canteen that reduces wait times by 60% and enables digital payments via Stripe. Features interactive menu grid, real-time order tracking, and streamlined checkout process.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Vercel"],
      features: [
        "Interactive Menu Grid",
        "Real-time Order Tracking",
        "Cart & GST Integration",
        "Secure Online Payments",
        "Admin Dashboard"
      ],
      metrics: [
        "60% reduced wait times",
        "40% faster processing",
        "100% digital payments",
        "Enhanced efficiency"
      ],
      liveUrl: "https://prism-canteen-cvr-rohit.vercel.app/",
      github: "https://github.com/Rohit009s/Prism-Food-CVR.git"
    },
    {
      title: "Smart Parking System",
      description: "An advanced IoT-based parking management solution combining RFID technology, ESP32 microcontrollers, and real-time monitoring. Features include automated entry/exit management, real-time occupancy tracking, and comprehensive admin controls.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=2070",
      tech: ["ESP32", "Arduino-IDE", "React.js", "Node.js", "MySQL", "Google Apps Script"],
      features: [
        "RFID-based authentication",
        "Real-time occupancy tracking",
        "Automated gate control",
        "Payment integration",
        "Admin dashboard"
      ],
      metrics: [
        "50% reduction in wait times",
        "99.9% authentication accuracy",
        "30% improved space utilization"
      ],
      liveUrl: "https://smart-parking-system-hardware.vercel.app/",
      github: "https://github.com/Rohit009s/Smart-Parking-hardware-intigration-"
    },
    {
      title: "Online Code Editor",
      description: "A web-based code editor for HTML, CSS, and JavaScript with instant live preview. Perfect for testing code snippets and rapid prototyping with a user-friendly interface and responsive design.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2069",
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      features: [
        "Multi-language support",
        "Live Preview",
        "Responsive Layout",
        "Code Highlighting",
        "Easy Sharing"
      ],
      metrics: [
        "Instant preview updates",
        "3 editor tabs",
        "Mobile responsive",
        "Cloud deployment"
      ],
      liveUrl: "https://online-code-editorr-rohit.vercel.app/",
      github: "https://github.com/Rohit009s/Online-Code-Editor"
    },
    {
      title: "Brain Flip Challenge Memory Game",
      description: "An engaging memory challenge game built with React that tests and enhances cognitive abilities through card-matching mechanics. Features smooth animations, score tracking, and progressive difficulty levels to keep players engaged and challenged.",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=2070",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Vercel"],
      features: [
        "Interactive card flipping",
        "Score tracking system",
        "Progressive difficulty",
        "Responsive design",
        "Smooth animations"
      ],
      metrics: [
        "100% responsive",
        "Fast load times",
        "Optimized performance",
        "Cross-browser compatible"
      ],
      liveUrl: "https://brain-flip-rohit.vercel.app/",
      github: "https://github.com/Rohit009s/Brain-Flip-Game"
    },
    {
      title: "Drone-based Surveillance System",
      description: "Advanced drone system for disaster management and surveillance operations, integrating LiDAR and thermal imaging for enhanced detection capabilities. Optimized for search and rescue operations.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2070",
      tech: ["Python", "OpenCV", "LiDAR", "Thermal Imaging", "Drone Control Systems", "Ardu-pilot"],
      features: [
        "Real-time thermal imaging",
        "LiDAR-based mapping",
        "Automated flight control",
        "Object detection"
      ],
      metrics: [
        "30% increase in detection accuracy",
        "40% size reduction",
        "25% weight optimization",
        "50% improved surveillance"
      ],
    },
    {
      title: "High-Speed RIS Communications",
      description: "Multi-RIS system implementation for high-speed communications utilizing positioning information, achieving significant improvements in spectral efficiency and signal quality.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
      tech: ["Signal Processing", "RF Engineering", "MATLAB", "Communication Systems"],
      features: [
        "Multi-RIS architecture",
        "Position-based optimization",
        "Spectral efficiency enhancement",
        "SNR optimization"
      ],
      metrics: [
        "6.8 bit/s/Hz efficiency",
        "500m effective range",
        "Optimized SNR ratio",
        "Reduced power consumption"
      ],
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 overflow-hidden h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 mb-6 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs sm:text-sm text-slate-300 flex items-center gap-1">
                          <Shield className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Metrics</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.metrics.map((metric) => (
                        <li key={metric} className="text-xs sm:text-sm text-slate-300 flex items-center gap-1">
                          <Database className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="line-clamp-1">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {(project.liveUrl || project.github) && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
