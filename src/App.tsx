import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      <div className="nebula" />
      <div className="stars" />
      <div className="black-hole" />
      <div className="interstellar-waves" />
      <div className="asteroid" />
      <div className="asteroid" />
      <div className="asteroid" />
      <div className="asteroid" />
      <div className="sun" />
      <div className="planet planet-mars" />
      <div className="planet planet-earth">
        <div className="earth-clouds" />
      </div>
      <div className="spaceship spaceship-1" />
      <div className="spaceship spaceship-2" />
      <div className="spaceship spaceship-3" />
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-16 space-y-32">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <footer className="glass-card mt-32 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-medium gradient-text hover-scale">
              Innovating the Future, One Project at a Time
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://github.com/Rohit009s/" target="_blank" rel="noopener noreferrer" 
                 className="social-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/neelam-rohit09/" target="_blank" rel="noopener noreferrer"
                 className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rohithnneelam87@gmail.com"
                 className="social-icon">
                <Mail size={24} />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 hover-scale">
              © 2024 Rohit Neelam. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;