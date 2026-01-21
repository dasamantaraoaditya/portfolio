import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/portfolioData';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                <div className="exp-tabs">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            className={`exp-tab-btn ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                <div className="exp-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="experience-card"
                        >
                            <h3 className="exp-title">
                                {experiences[activeTab].title}
                            </h3>
                            <div className="exp-company-link">
                                @ {experiences[activeTab].company}
                            </div>
                            <div className="exp-meta">
                                <span className="exp-period">{experiences[activeTab].period}</span>
                                <span className="exp-location">{experiences[activeTab].location}</span>
                            </div>
                            <ul className="exp-highlights">
                                {experiences[activeTab].highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Experience;
