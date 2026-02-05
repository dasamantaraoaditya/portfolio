import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
    const images = ['/profile-1.png', '/profile-2.png', '/profile-3.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="hero-image">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt="Aditya Dasamantharao"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-content"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="hero-title">
                            <span className="gradient-text">Aditya Dasamantharao</span>
                        </h1>
                        <h2 className="hero-subtitle">Full Stack Software Developer</h2>
                        <p className="hero-description">
                            8+ years crafting scalable enterprise solutions with AI-driven automation
                        </p>
                        <div className="hero-stats">
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <div className="stat-number">8+</div>
                                <div className="stat-label">Years Experience</div>
                            </motion.div>
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                            >
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Products Shipped</div>
                            </motion.div>
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <div className="stat-number">99.5%</div>
                                <div className="stat-label">Uptime</div>
                            </motion.div>
                        </div>
                        <div className="hero-cta">
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('experience')}
                            >
                                View Work
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
        </section>
    );
};

export default Hero;
