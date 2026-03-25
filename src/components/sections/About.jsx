import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cards = [
    {
      icon: <Database size={24} className="text-emerald-400" />,
      title: "Data Science",
      description: "Extracting actionable insights from messy data using statistical analysis and machine learning."
    },
    {
      icon: <Code size={24} className="text-blue-400" />,
      title: "AI & ML",
      description: "Building predictive models, recommendation systems, and exploring the frontiers of artificial intelligence."
    },
    {
      icon: <Globe size={24} className="text-purple-400" />,
      title: "Web Development",
      description: "Crafting modern, responsive frontend interfaces and robust fast backend services."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-dark-muted max-w-2xl mx-auto text-lg pt-4">
            Hello! I'm an ambitious AI & Data Science student exploring the intersection of data, algorithms, and web technologies. I love transforming complex concepts into accessible, functional applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
             <motion.div 
               key={index}
               variants={itemVariants}
               className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
             >
               <div className="w-14 h-14 rounded-xl bg-dark-bg/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 {card.icon}
               </div>
               <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
               <p className="text-dark-muted leading-relaxed">{card.description}</p>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
