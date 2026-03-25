import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: "Master/Bachelor's in Artificial Intelligence & Data Science",
      organization: "University Name",
      period: "2020 - Present",
      description: "Focusing on advanced machine learning algorithms, deep learning, and scalable data architectures. Active participant in coding clubs and AI research groups."
    },
    {
      type: 'experience',
      title: "Data Science Intern",
      organization: "Tech Solutions Inc.",
      period: "Summer 2025",
      description: "Developed predictive models for customer churn. Optimized existing SQL queries reducing data retrieval time by 40%."
    },
    {
      type: 'certification',
      title: "AWS Certified Machine Learning – Specialty",
      organization: "Amazon Web Services",
      period: "Jan 2026",
      description: "Validated expertise in building, training, tuning, and deploying machine learning models on AWS."
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'education': return <GraduationCap size={20} />;
      case 'experience': return <Briefcase size={20} />;
      case 'certification': return <Award size={20} />;
      default: return <Briefcase size={20} />;
    }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="gradient-text">Milestones</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:space-y-16 space-y-12 pb-8">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring', stiffness: 100 }}
                className="relative pl-8 md:pl-16 group"
              >
                {/* Minimalist Timeline Dot */}
                <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-dark-bg border-2 border-dark-muted group-hover:border-primary group-hover:bg-primary transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />
                
                {/* Horizontal connection line that reveals on hover (Desktop only) */}
                <div className="hidden md:block absolute left-0 top-3 h-px w-10 bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0" />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-primary transition-colors">{exp.title}</h3>
                  <span className="text-sm font-medium text-dark-muted font-mono tracking-wider uppercase shrink-0">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-base font-medium text-dark-text/80 mb-4 flex items-center gap-2">
                  {getIcon(exp.type)}
                  {exp.organization}
                </h4>
                
                <p className="text-dark-muted leading-relaxed font-light max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
