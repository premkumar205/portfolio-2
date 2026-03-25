import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/SocialIcons';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-dark-card/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-dark-muted max-w-xl mx-auto text-lg pt-4">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
            <div className="space-y-6">
              <a href="mailto:premkumar.p205@gmail.com" className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:-translate-y-1 transition-transform group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-muted mb-1">Email</p>
                  <p className="font-medium">premkumar.p205@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/premkumar205" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:-translate-y-1 transition-transform group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-muted mb-1">GitHub</p>
                  <p className="font-medium">github.com/premkumar205</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:-translate-y-1 transition-transform group">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-muted mb-1">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/premkumar</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Name</label>
                <input type="text" className="w-full bg-dark-bg/50 border border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Email</label>
                <input type="email" className="w-full bg-dark-bg/50 border border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Message</label>
                <textarea rows="4" className="w-full bg-dark-bg/50 border border-dark-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-white resize-none" placeholder="Hello..."></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary-glow transition-colors group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
