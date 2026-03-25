import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["AI & Data Science Student", "Machine Learning Enthusiast", "Web Developer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);
    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1000); // Pause before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150); // Reset typing speed
    } else if (!isDeleting && updatedText !== fullText) {
      setTypingSpeed(100);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative px-4">
      <div className="container mx-auto z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-dark-bg overflow-hidden shadow-2xl glass-panel p-1">
              <img 
                src="/portfolio-2/prem.jpg" 
                alt="Premkumar" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Prem+Kumar&background=3b82f6&color=fff&size=256";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide"
          >
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Hi, I'm <span className="gradient-text">Premkumar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium text-dark-muted mb-8 h-10 flex items-center justify-center"
          >
            {text}<span className="animate-pulse ml-1 inline-block w-1 h-8 md:h-10 bg-primary"></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-dark-text/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I build elegant web applications and intelligent data-driven systems. Passionate about leveraging technology to solve complex problems and create meaningful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-glow flex items-center justify-center gap-2 transition-all group shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-dark-card/60 text-white font-medium flex items-center justify-center gap-2 transition-all">
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
