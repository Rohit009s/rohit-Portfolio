import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center hover-scale">
          Get in <span className="gradient-text">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass-card p-6 sm:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 hover-scale">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rohithnneelam87@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 social-icon text-sm sm:text-base break-all"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>rohithnneelam87@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Rohit009s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 social-icon text-sm sm:text-base"
                >
                  <Github className="w-5 h-5 flex-shrink-0" />
                  <span>github.com/Rohit009s</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/neelam-rohit09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 social-icon text-sm sm:text-base"
                >
                  <Linkedin className="w-5 h-5 flex-shrink-0" />
                  <span>linkedin.com/in/neelam-rohit09</span>
                </a>
                <a
                  href="https://rohit-neelam-resume.my.canva.site/"
                  target="_blank"
                  className="flex items-center gap-3 sm:gap-4 social-icon text-sm sm:text-base"
                >
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span>View Resume</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 hover-scale">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-100 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-100 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-100 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors hover-scale text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;