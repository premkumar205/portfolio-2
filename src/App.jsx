import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-dark-bg text-dark-text min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-white font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[0] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen opacity-50"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-50"></div>
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
