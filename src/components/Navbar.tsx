import { motion } from 'framer-motion';
import { Home, User, Briefcase, Cpu, FolderCode, Mail } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'skills', label: 'Skills', icon: Cpu },
        { id: 'projects', label: 'Projects', icon: FolderCode },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="nav-content">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollToSection('home')}
                >
                    AD
                </motion.div>
                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <motion.a
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="active-bg"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <item.icon size={18} className="nav-icon" />
                                <span className="nav-label">{item.label}</span>
                            </motion.a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
