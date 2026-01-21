import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <motion.div
                        className="about-card"
                        whileHover={{ y: -10 }}
                    >
                        <p className="about-text">
                            Full-stack software engineer with 8+ years of experience building scalable enterprise
                            applications across healthcare, asset management, and analytics domains. Specialized in
                            AI-driven automation, cloud infrastructure, and end-to-end product development.
                        </p>
                        <p className="about-text">
                            Currently pioneering generative AI solutions for clinical trial automation at Velocity
                            Clinical Research. Strong expertise in modern web frameworks, microservices architecture,
                            and DevOps practices.
                        </p>
                        <div className="achievements">
                            <div className="achievement-item">
                                <span className="achievement-icon">🚀</span>
                                <span>First-in-industry generative AI for clinical trials</span>
                            </div>
                            <div className="achievement-item">
                                <span className="achievement-icon">⚡</span>
                                <span>Reduced deployment cycles by 87%</span>
                            </div>
                            <div className="achievement-item">
                                <span className="achievement-icon">🎯</span>
                                <span>Cross-platform solutions (Web, iOS, Android)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
