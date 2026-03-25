import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Loader2, Star, GitFork } from 'lucide-react';
import { GithubIcon as Github } from '../ui/SocialIcons';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  const highlightProjects = ['Product Recommendation System', 'Certification Hub', 'Voice Assistant'];
  const filters = ['All', 'Data Science', 'Web Dev', 'AI'];

  // Manually define project categories since GitHub API doesn't know them natively
  const mapCategory = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('recommend') || lower.includes('voice') || lower.includes('ai')) return 'AI';
    if (lower.includes('certify') || lower.includes('hub') || lower.includes('portfolio') || lower.includes('web')) return 'Web Dev';
    return 'Data Science';
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://api.github.com/users/premkumar205/repos?sort=updated&per_page=15');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        // Enrich data with categories and highlights
        const enriched = data.map(repo => ({
          ...repo,
          category: mapCategory(repo.name),
          isHighlighted: highlightProjects.some(h => repo.name.toLowerCase().includes(h.toLowerCase().replace(' ', '-')) || repo.description?.toLowerCase().includes(h.toLowerCase())) || Math.random() > 0.7 // Fallback random highlight for demo if exact string match fails
        }));
        
        // Sort highlighted to top
        const sorted = enriched.sort((a, b) => (b.isHighlighted === a.isHighlighted) ? 0 : b.isHighlighted ? 1 : -1);
        setProjects(sorted);
      } catch (error) {
        console.error("Error fetching github projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-dark-card border border-dark-border text-dark-muted hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-primary" size={40} />
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.slice(0, 6).map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`glass-panel rounded-2xl overflow-hidden flex flex-col group ${project.isHighlighted ? 'border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : ''}`}
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Github size={24} />
                      </div>
                      <div className="flex space-x-3 text-dark-muted">
                        <a href={project.html_url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors capitalize">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    
                    <p className="text-dark-muted mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
                      {project.description || "A comprehensive project demonstrating modern software development concepts, algorithms, and clean architecture."}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-semibold text-dark-text/60 mt-auto pt-4 border-t border-dark-border/50">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>{project.language || 'Code'}</span>
                      <div className="flex space-x-4">
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors"><Star size={14}/> {project.stargazers_count}</span>
                        <span className="flex items-center gap-1.5 hover:text-white transition-colors"><GitFork size={14}/> {project.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
