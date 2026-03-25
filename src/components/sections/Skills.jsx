import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
      ]
    },
    {
      title: "Data & AI",
      skills: [
        { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
        { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
        { name: "Scikit-Learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo_2016.svg" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "FastAPI", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/FastAPI_logo.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-dark-card/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="gradient-text">Skills</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 flex-center text-dark-text/90">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-dark-bg/50 border border-dark-border/50 hover:bg-dark-border/80 hover:border-primary/50 transition-all group">
                    <div className="h-10 mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img src={skill.logo} alt={skill.name} className="max-h-10 max-w-[2.5rem] object-contain drop-shadow" />
                    </div>
                    <span className="text-sm font-medium text-dark-muted group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
