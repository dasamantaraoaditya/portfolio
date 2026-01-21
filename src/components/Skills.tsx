import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items], catIndex) => (
                    <motion.div
                        key={category}
                        className="skill-category-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    >
                        <div className="skill-category-header">
                            <h3 className="skill-category-title">
                                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                            </h3>
                            <div className="skill-count-badge">{items.length} Skills</div>
                        </div>

                        <div className="skill-items">
                            {items.map((skill: any, index: number) => (
                                <div key={index} className="skill-item-row">
                                    <div className="skill-info">
                                        <div className="skill-main">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <span className="skill-years">{skill.years} yrs</span>
                                    </div>
                                    <div className="skill-gauge-wrapper">
                                        <motion.div
                                            className="skill-gauge-bar"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                                            style={{ backgroundColor: skill.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
