import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Reverse parallax tracking
      const x = (e.clientX / innerWidth - 0.5) * -100;
      const y = (e.clientY / innerHeight - 0.5) * -100;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#030303] text-dark-text min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-white font-sans">
      {/* Dynamic Parallax Background */}
      <div className="fixed inset-0 z-[0] overflow-hidden pointer-events-none">
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen opacity-50"
        />
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-[20%] right-[-10%] w-[35%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen opacity-50"
        />
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-50"
        />
      </div>
      
      <Navbar />
      
      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
