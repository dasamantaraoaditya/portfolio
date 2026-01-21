import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const skills = {
        languages: [
            { name: 'Java', icon: '☕', color: '#f89820' },
            { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
            { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
            { name: 'Python', icon: '🐍', color: '#3776ab' },
            { name: 'SQL', icon: '🗄️', color: '#00758f' }
        ],
        frameworks: [
            { name: 'Spring Boot', icon: '🍃', color: '#6db33f' },
            { name: 'Angular', icon: '🅰️', color: '#dd0031' },
            { name: 'Vue.js', icon: '💚', color: '#42b883' },
            { name: 'React', icon: '⚛️', color: '#61dafb' },
            { name: 'Node.js', icon: '🟢', color: '#339933' }
        ],
        aiml: [
            { name: 'Generative AI', icon: '🤖', color: '#ff6b6b' },
            { name: 'Palantir', icon: '🔮', color: '#9b59b6' },
            { name: 'OpenAI APIs', icon: '🧠', color: '#10a37f' },
            { name: 'Agentic AI', icon: '🎯', color: '#e74c3c' }
        ],
        cloud: [
            { name: 'AWS', icon: '☁️', color: '#ff9900' },
            { name: 'Azure DevOps', icon: '🔵', color: '#0078d4' },
            { name: 'Jenkins', icon: '⚙️', color: '#d24939' },
            { name: 'Docker', icon: '🐳', color: '#2496ed' },
            { name: 'CI/CD', icon: '🔄', color: '#6366f1' }
        ],
        databases: [
            { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
            { name: 'MySQL', icon: '🐬', color: '#4479a1' },
            { name: 'MongoDB', icon: '🍃', color: '#47a248' },
            { name: 'Couchbase', icon: '🛋️', color: '#ea2328' },
            { name: 'Elastic Search', icon: '🔍', color: '#005571' }
        ]
    };

    const experiences = [
        {
            title: 'Full Stack Software Developer',
            company: 'Velocity Clinical Research, Inc.',
            period: 'Aug 2022 – Present',
            location: 'Hyderabad, India',
            highlights: [
                'Pioneering industry-first generative AI solution for clinical trial automation',
                'Reduced trial management time by 40% with end-to-end recruitment portal',
                'Achieved 99.5% uptime with Azure DevOps CI/CD pipelines'
            ]
        },
        {
            title: 'Full Stack Software Developer',
            company: 'GE Digital',
            period: 'Aug 2019 – Aug 2022',
            location: 'Hyderabad, India',
            highlights: [
                'Improved performance by 35% migrating iOS UIWebView to WKWebView',
                'Served 10,000+ global users with asset management platform',
                'Reduced deployment time from 4 hours to 30 minutes'
            ]
        },
        {
            title: 'Full Stack Software Engineer',
            company: 'OpenText',
            period: 'Dec 2016 – Aug 2019',
            location: 'Hyderabad, India',
            highlights: [
                'Supported 500+ enterprise clients with analytics products',
                'Reduced build failures by 60% with CI/CD migration',
                'Integrated LDAP and Active Directory authentication'
            ]
        }
    ];

    const projects = [
        {
            name: 'Nothingness',
            period: 'Nov 2017 – Feb 2018',
            description: 'Interactive hub for games and utilities using HTML5, CSS/SCSS, jQuery, and Bootstrap'
        },
        {
            name: 'Gat-A-Grip',
            period: 'Aug 2017',
            description: 'Task management application inspired by Slack and Jira, built with Django and Bootstrap'
        }
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="portfolio">
            {/* Navigation */}
            <motion.nav
                className="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="nav-content">
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                    >
                        AD
                    </motion.div>
                    <ul className="nav-links">
                        {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                            <li key={section}>
                                <motion.a
                                    onClick={() => scrollToSection(section)}
                                    className={activeSection === section ? 'active' : ''}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <motion.div
                    className="hero-content"
                    style={{ opacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
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
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>
            </section>

            {/* About Section */}
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

            {/* Experience Section */}
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

            {/* Skills Section */}
            <section id="skills" className="skills">
                <h2 className="section-title">Technical Arsenal</h2>
                <div className="skills-container">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <h3 className="skill-category-title">
                                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                            </h3>
                            <div className="skill-hexagons">
                                {items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-hexagon"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: catIndex * 0.1 + index * 0.05,
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 360,
                                            transition: { duration: 0.6 }
                                        }}
                                        style={{
                                            background: `linear-gradient(135deg, ${skill.color}22 0%, ${skill.color}44 100%)`,
                                            borderColor: skill.color
                                        }}
                                    >
                                        <div className="skill-icon" style={{ filter: `drop-shadow(0 0 8px ${skill.color})` }}>
                                            {skill.icon}
                                        </div>
                                        <div className="skill-name">{skill.name}</div>
                                        <div className="skill-glow" style={{ background: `radial-gradient(circle, ${skill.color}44 0%, transparent 70%)` }}></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
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
                            whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(99, 102, 241, 0.4)" }}
                        >
                            <h3 className="project-name">{project.name}</h3>
                            <div className="project-period">{project.period}</div>
                            <p className="project-description">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Let's Connect</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <motion.a
                                href="mailto:dasamantarao.aditya@gmail.com"
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                <span className="contact-icon">📧</span>
                                <span>dasamantarao.aditya@gmail.com</span>
                            </motion.a>
                            <motion.a
                                href="tel:+918978015596"
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                <span className="contact-icon">📱</span>
                                <span>+91-8978015596</span>
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/adityadasamantharao"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                <span className="contact-icon">💼</span>
                                <span>LinkedIn</span>
                            </motion.a>
                            <motion.a
                                href="https://github.com/dasamantaraoaditya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                <span className="contact-icon">💻</span>
                                <span>GitHub</span>
                            </motion.a>
                            <motion.a
                                href="https://adityadasamantarao.wordpress.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10 }}
                            >
                                <span className="contact-icon">✍️</span>
                                <span>Blog</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2026 Aditya Dasamantharao. Built with React & Framer Motion. 🚀 Auto-deployed via Vercel</p>
                <div className="footer-interests">
                    <span>🧩 Problem Solving</span>
                    <span>✈️ Travelling</span>
                    <span>🎌 Anime</span>
                </div>
            </footer>
        </div>
    );
};

export default App;
