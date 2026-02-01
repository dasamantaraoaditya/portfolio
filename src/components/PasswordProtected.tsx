import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/password.css';

interface PasswordProtectedProps {
    onCorrectPassword: () => void;
}

const PasswordProtected: React.FC<PasswordProtectedProps> = ({ onCorrectPassword }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [shakeKey, setShakeKey] = useState(0);

    const correctPassword = 'ilovecats'; // Change this to whatever password you want

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password.toLowerCase() === correctPassword) {
            onCorrectPassword();
        } else {
            setError('Meow! Wrong password! 🐱');
            setShakeKey(prev => prev + 1);
            setPassword('');

            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <div className="password-container">
            <div className="floating-hearts">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-heart"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            rotate: [0, Math.random() * 20 - 10, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    >
                        {i % 5 === 0 ? '💖' : i % 5 === 1 ? '🐱' : i % 5 === 2 ? '🍕' : i % 5 === 3 ? '🧁' : '🎴'}
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="password-card"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
                <motion.div
                    className="cat-guard"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <img
                        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                        alt="Guard cat"
                        className="guard-cat-gif"
                    />
                </motion.div>

                <motion.h1
                    className="password-title"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    🐾 A Special Question Awaits 🐾
                </motion.h1>

                <p className="password-subtitle">
                    Psst! This cat is guarding a very important question... 😻
                    <br />
                    Enter the secret password to continue!
                </p>

                <motion.form
                    key={shakeKey}
                    onSubmit={handleSubmit}
                    className="password-form"
                    animate={error ? {
                        x: [0, -10, 10, -10, 10, 0],
                    } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password..."
                        className="password-input"
                        autoFocus
                    />

                    <motion.button
                        type="submit"
                        className="password-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Unlock! 💝
                    </motion.button>
                </motion.form>

                {error && (
                    <motion.p
                        className="error-message"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {error}
                    </motion.p>
                )}

                <div className="hints">
                    <p className="hint-text">💡 Hint: What do you love? (lowercase, no spaces)</p>
                </div>

                <div className="password-footer">
                    <motion.div
                        animate={{
                            rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    >
                        🎴 🍕 🧁 🐱 💖
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default PasswordProtected;
