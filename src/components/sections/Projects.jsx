import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Loader2, Star, GitFork, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from '../ui/SocialIcons';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

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
                  layoutId={`project-${project.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`glass-panel rounded-3xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:-translate-y-2 ${project.isHighlighted ? 'border-primary/40 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-primary/20' : 'hover:border-white/10 hover:shadow-2xl'}`}
                >
                  <div className="p-8 flex-1 flex flex-col relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Github size={24} />
                      </div>
                      <div className="flex space-x-3 text-dark-muted z-10">
                        {project.homepage && project.homepage !== "" && (
                          <a href={project.homepage} target="_blank" rel="noreferrer" title="Live Demo" onClick={(e) => e.stopPropagation()} className="p-2 hover:bg-white/5 rounded-full hover:text-primary transition-all flex items-center gap-1">
                            <ExternalLink size={20} />
                          </a>
                        )}
                        <a href={project.html_url} target="_blank" rel="noreferrer" title="Source Code" onClick={(e) => e.stopPropagation()} className="p-2 hover:bg-white/5 rounded-full hover:text-white transition-all flex items-center gap-1">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors capitalize tracking-tight font-heading">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    
                    <p className="text-dark-muted mb-8 flex-1 text-sm leading-relaxed line-clamp-3 font-light">
                      {project.description || "A comprehensive project demonstrating modern software development concepts, algorithms, and clean architecture."}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-semibold text-dark-text/60 mt-auto pt-5 border-t border-white/5">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>{project.language || 'Code'}</span>
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

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#030303]/80 backdrop-blur-xl isolate"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-[2rem] no-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50 group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Modal Header */}
              <div className="px-8 pt-12 md:px-16 md:pt-16 pb-12 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 blur-2xl"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                    {selectedProject.category} Case Study
                  </span>
                  <h3 className="text-4xl md:text-6xl font-extrabold mb-6 capitalize font-heading tracking-tight text-white">
                    {selectedProject.name.replace(/-/g, ' ')}
                  </h3>
                  <p className="text-xl md:text-2xl text-dark-muted font-light leading-relaxed max-w-3xl mb-8">
                    {selectedProject.description || "An in-depth look at the architecture, problem-solving methodologies, and technical outcomes of this application."}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.homepage && selectedProject.homepage !== "" && (
                      <a href={selectedProject.homepage} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-glow flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        View Live Site <ArrowUpRight size={18} />
                      </a>
                    )}
                    <a href={selectedProject.html_url} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all">
                      View Source <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
                 <div className="lg:col-span-2 space-y-12">
                    <section>
                       <h4 className="text-2xl font-bold mb-4 font-heading text-white flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-light text-dark-muted border border-white/10">01</span>
                          The Challenge
                       </h4>
                       <p className="text-dark-muted text-lg leading-relaxed font-light">
                         Developing a highly scalable solution required navigating stringent performance requirements while ensuring a seamless user experience. The core challenge involved integrating complex, disparate architectural domains into a cohesive and heavily optimized application flow designed for high concurrency.
                       </p>
                    </section>
                    <section>
                       <h4 className="text-2xl font-bold mb-4 font-heading text-white flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-light text-dark-muted border border-white/10">02</span>
                          Solution Architecture
                       </h4>
                       <p className="text-dark-muted text-lg leading-relaxed font-light mb-6">
                          Leveraging modern frameworks and cloud-native services, we architected a flexible modular approach. The frontend acts as a stateless presentation layer communicating exclusively via secure RESTful APIs to an auto-scaling backend ecosystem.
                       </p>
                    </section>
                 </div>
                 
                 <div className="space-y-10 lg:pl-10 lg:border-l border-white/5">
                    <section>
                       <h4 className="text-xs font-bold text-dark-muted uppercase tracking-widest mb-4">Core Technologies</h4>
                       <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-dark-text/80 font-medium shadow-sm">{selectedProject.language || 'Code Framework'}</span>
                          <span className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-dark-text/80 font-medium shadow-sm">React/Vite</span>
                          <span className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-dark-text/80 font-medium shadow-sm">REST API</span>
                       </div>
                    </section>
                    <section>
                       <h4 className="text-xs font-bold text-dark-muted uppercase tracking-widest mb-4">Project Metrics</h4>
                       <ul className="space-y-4 text-dark-muted font-light">
                          <li className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5"><Star size={16}/></div>
                            <div><strong className="text-white block">{selectedProject.stargazers_count}</strong> Stars</div>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5"><GitFork size={16}/></div>
                            <div><strong className="text-white block">{selectedProject.forks_count}</strong> Forks</div>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                            <div><strong className="text-white block">Production</strong> Ready</div>
                          </li>
                       </ul>
                    </section>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
