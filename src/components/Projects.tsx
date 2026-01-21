import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
