import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
                {projects.map((project: any, index: number) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3 className="project-title">{project.name}</h3>
                        <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.period}</div>
                        <p className="project-description">{project.description}</p>

                        <div className="project-links">
                            {project.githubRepo && (
                                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <Github size={18} /> Source Code
                                </a>
                            )}
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
