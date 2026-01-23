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
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <motion.a
                                onClick={() => scrollToSection(item.id)}
                                className={activeSection === item.id ? 'active' : ''}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
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
