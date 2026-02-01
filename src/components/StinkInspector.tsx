import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StinkInspectorProps {
    onComplete: () => void;
}

const StinkInspector: React.FC<StinkInspectorProps> = ({ onComplete }) => {
    const [status, setStatus] = useState('Sniffing for stinky humans...');
    const [passed, setPassed] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStatus('Detecting aromatic profiles...');
        }, 2000);

        const timer2 = setTimeout(() => {
            setStatus('Almost done... wait for it...');
        }, 4000);

        const timer3 = setTimeout(() => {
            setPassed(true);
            setStatus('✅ YOU PASSED THE STINK INSPECTION! 😸');
        }, 5500);

        const timer4 = setTimeout(() => {
            onComplete();
        }, 7500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [onComplete]);

    return (
        <div className="stink-inspector-container">
            <motion.div
                className="inspector-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
            >
                <div className="cat-wrapper">
                    <motion.img
                        src={passed
                            ? "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGEzdjB3bW45N3VxYnI2aDA5Y3hpODV1MngzM3hya2JuYXZnbTFuaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rMEJyjch7L1tlRlCl3/giphy.gif"
                            : "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTlvZ2M0eXN3NWhuazQxbGxwdWhtd3k3NmFvOW5ua2QweXU2Mm5jaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q1KLLp3PWOnA5VWO8h/giphy.gif"
                        }
                        alt={passed ? "Happy cat" : "Sniffing cat"}
                        className="sniffing-cat"
                        animate={!passed ? {
                            x: [-20, 20, -10, 10, 0],
                            y: [0, -5, 5, -5, 0],
                            scale: [1, 1.05, 0.95, 1.05, 1]
                        } : {
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    {!passed && <div className="magnifying-glass">🔍</div>}
                </div>

                <div className="inspector-badge">
                    STINK INSPECTOR IN PROGRESS
                </div>

                <motion.div
                    key={status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`status-text ${passed ? 'passed' : ''}`}
                >
                    {status}
                </motion.div>

                {!passed && (
                    <div className="progress-bar-container">
                        <motion.div
                            className="progress-bar"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5.5, ease: "linear" }}
                        />
                    </div>
                )}

                <AnimatePresence>
                    {passed && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="passed-badge"
                        >
                            🎖️ STINK-FREE CERTIFIED
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default StinkInspector;
