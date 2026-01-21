import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Let's Connect</h2>
                <div className="contact-content">
                    <p className="contact-description">
                        Ready to build something amazing together? Let's connect and discuss how we can create innovative solutions.
                    </p>
                    <div className="contact-links">
                        <motion.a
                            href="mailto:dasamantarao.aditya@gmail.com"
                            className="contact-link"
                            whileHover={{ y: -5 }}
                        >
                            <span className="contact-icon">📧</span>
                            <div className="contact-info">
                                <h4>Email</h4>
                                <p>dasamantarao.aditya@gmail.com</p>
                            </div>
                        </motion.a>
                        <motion.a
                            href="tel:+918978015596"
                            className="contact-link"
                            whileHover={{ y: -5 }}
                        >
                            <span className="contact-icon">📱</span>
                            <div className="contact-info">
                                <h4>Phone</h4>
                                <p>+91-8978015596</p>
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/adityadasamantharao"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            whileHover={{ y: -5 }}
                        >
                            <span className="contact-icon">💼</span>
                            <div className="contact-info">
                                <h4>LinkedIn</h4>
                                <p>Connect with me</p>
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://github.com/dasamantaraoaditya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            whileHover={{ y: -5 }}
                        >
                            <span className="contact-icon">💻</span>
                            <div className="contact-info">
                                <h4>GitHub</h4>
                                <p>Check out my code</p>
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://adityadasamantarao.wordpress.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            whileHover={{ y: -5 }}
                        >
                            <span className="contact-icon">✍️</span>
                            <div className="contact-info">
                                <h4>Blog</h4>
                                <p>Read my articles</p>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
