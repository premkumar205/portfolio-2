import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-dark-border ml-3 md:ml-6 space-y-12 pb-8">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] top-1 h-10 w-10 flex items-center justify-center rounded-full bg-dark-bg border border-primary/50 text-primary shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  {getIcon(exp.type)}
                </div>
                
                <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-dark-muted mb-4 flex items-center gap-2">
                    {exp.organization}
                  </h4>
                  <p className="text-dark-text/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
