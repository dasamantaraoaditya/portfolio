import { motion } from 'framer-motion';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    return (
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
                    onClick={() => scrollToSection('home')}
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
    );
};

export default Navbar;
