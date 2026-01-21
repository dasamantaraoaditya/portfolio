import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-compact">
                {Object.entries(skills).map(([category, items], catIndex) => (
                    <motion.div
                        key={category}
                        className="skill-group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                    >
                        <h3 className="skill-group-title">
                            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                        </h3>
                        <div className="skill-tags">
                            {items.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="skill-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <span className="skill-tag-icon">{skill.icon}</span>
                                    <span className="skill-tag-name">{skill.name}</span>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
