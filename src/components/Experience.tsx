import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="timeline-content">
                            <motion.div
                                className="experience-card"
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(99, 102, 241, 0.3)" }}
                            >
                                <h3 className="exp-title">{exp.title}</h3>
                                <div className="exp-company">{exp.company}</div>
                                <div className="exp-meta">
                                    <span className="exp-period">{exp.period}</span>
                                    <span className="exp-location">{exp.location}</span>
                                </div>
                                <ul className="exp-highlights">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
