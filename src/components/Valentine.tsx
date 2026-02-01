import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/valentine.css';

const Valentine = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [isShocked, setIsShocked] = useState(false);

    const noMessages = [
        "No",
        "Are you sure? 🥺",
        "Really sure? 😿",
        "But... but... the cats! 🐱",
        "Think of the pizza we could share! 🍕",
        "What about cupcakes? 🧁",
        "We could play carrom together! 🎯",
        "Poker night? 🎴",
        "The cats are crying now... 😭",
        "Please reconsider! 💔",
        "You're breaking my heart! 💔",
        "One more chance? 🙏",
        "The cats won't forgive you! 😾",
        "Think about it... 🤔",
        "Last chance! ⚠️",
        "Fine, the button is tired now 😴"
    ];

    const disappointedGifs = [
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDkxYzVvMHh6eXU0YTFzbG1nZnJrMXBybmxxd3RxY2txNnZkeGYzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qZgHBlenHa1zKqy6Zn/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHd4c3N5a3pjenYxNHA0MWdyYXh1MGNzMzF3dXR0Y250bWR6MXdtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wr7oA0rSjnWuiLJOY5/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJtMXg4eXRqeHVzZ3JlbWJ5bzZ6em13MHV1b3d5aWkycDg4cHpmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mi4ec226vjAkehSLk0/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXViaXY1dWZhc3FndDFwbjdldnZpOTdtaG5rbzA1a3IyZHppenRjdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZEstBAhXtUK7Dw2ZFJ/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdsOHhiN2Fmem5reW80Y2t3YzV5M3llcTcwejdqdnFzdWxiYWRyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wfS4vDyVsASQygl4mN/giphy.gif"
    ];

    const [disappointedGif, setDisappointedGif] = useState(disappointedGifs[0]);

    const handleNoClick = () => {
        setNoCount(prev => prev + 1);
        setIsShocked(true);

        // Randomly select a disappointed GIF
        const randomIndex = Math.floor(Math.random() * disappointedGifs.length);
        setDisappointedGif(disappointedGifs[randomIndex]);

        // Reset shocked state after 3 seconds
        setTimeout(() => setIsShocked(false), 3000);

        // Move button to random position
        const padding = 100;
        const maxX = window.innerWidth - padding * 2;
        const maxY = window.innerHeight - padding * 2;
        const randomX = padding + Math.random() * maxX;
        const randomY = padding + Math.random() * maxY;

        setNoButtonPosition({ x: randomX, y: randomY });
    };

    const handleYesClick = () => {
        setYesPressed(true);
        createConfetti();
    };

    const createConfetti = () => {
        const duration = 4000;
        const animationEnd = Date.now() + duration;

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            for (let i = 0; i < particleCount; i++) {
                const emoji = ['💖', '🐱', '😻', '💕', '🍕', '🧁', '🎴'][Math.floor(Math.random() * 7)];
                const particle = document.createElement('div');
                particle.innerHTML = emoji;
                particle.className = 'confetti-particle';
                particle.style.left = randomInRange(0, 100) + '%';
                particle.style.animationDuration = randomInRange(2, 4) + 's';
                particle.style.fontSize = randomInRange(20, 40) + 'px';
                document.body.appendChild(particle);

                setTimeout(() => particle.remove(), 4000);
            }
        }, 250);
    };

    const getNoButtonText = () => {
        return noMessages[Math.min(noCount, noMessages.length - 1)];
    };

    if (yesPressed) {
        return (
            <div className="valentine-container success">
                <motion.div
                    className="success-content"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 1.2 }}
                >
                    <div className="celebration-header">
                        <img
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnR4Y29ueHY3bTJwbmpjNTQ0YjJ1Z2JjNm5lMjZ6aDRwN3JyeHlqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BK1EfIsdkKZMY/giphy.gif"
                            alt="Celebrating cat"
                            className="celebration-gif"
                        />
                    </div>

                    <motion.h1
                        className="success-title"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                        }}
                    >
                        YAAAY! 🎉💖
                    </motion.h1>

                    <p className="success-message">
                        The cats are SO happy! 😻<br />
                        I can't wait to spend time with my Valentine! 🐱💕
                    </p>

                    <div className="celebration-icons">
                        <motion.span
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            🍕
                        </motion.span>
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            💖
                        </motion.span>
                        <motion.span
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            🧁
                        </motion.span>
                    </div>

                    <div className="celebration-activities">
                        <p>Now we can enjoy together:</p>
                        <ul>
                            <li>🎴 Poker games</li>
                            <li>🎯 Carrom matches</li>
                            <li>🍕 Delicious pizza dates</li>
                            <li>🧁 Sweet cupcake moments</li>
                            <li>😻 And lots of cat cuddles!</li>
                        </ul>
                    </div>

                    <motion.div
                        className="final-message"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        You just made me the happiest person! 💝
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="valentine-container">
            <div className="floating-cats">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-cat"
                        animate={{
                            y: [0, -25, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            rotate: [0, Math.random() * 15 - 7.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        style={{
                            left: `${(i * 10) + 5}%`,
                            top: `${Math.random() * 90}%`,
                        }}
                    >
                        {['🐱', '😻', '😺', '🐈', '😸'][i % 5]}
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="valentine-card"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1 }}
            >
                <div className="cat-header">
                    <img
                        src={isShocked
                            ? disappointedGif
                            : "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
                        }
                        alt={isShocked ? "Disappointed cat" : "Cute cat"}
                        className="header-cat-gif"
                    />
                </div>

                <motion.h1
                    className="valentine-title"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    Will You Be My Valentine? 💖
                </motion.h1>

                <p className="valentine-subtitle">
                    These cats (and I) would be purr-fectly happy if you said yes! 😻
                    <br />
                    <span className="interests">🍕 🧁 🎴 🎯</span>
                </p>

                <div className="buttons-container">
                    <motion.button
                        className="yes-button"
                        onClick={handleYesClick}
                        whileTap={{ scale: 0.95 }}
                    >
                        Yes! 💕
                    </motion.button>

                    {noCount === 0 && (
                        <motion.button
                            className="no-button"
                            onClick={handleNoClick}
                            whileHover={{ scale: 1.05 }}
                        >
                            {getNoButtonText()}
                        </motion.button>
                    )}
                </div>

                {noCount >= 5 && (
                    <motion.p
                        className="hint-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The cats are getting sad... 🥺 Maybe just say yes?
                    </motion.p>
                )}

                {noCount >= 10 && (
                    <motion.div
                        className="extra-plea"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <p>Think of all the fun we'll have! 🎴🎯🍕🧁</p>
                    </motion.div>
                )}

                <div className="cat-footer">
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        🐾 💕 🐾
                    </motion.div>
                </div>
            </motion.div>
            <AnimatePresence>
                {noCount > 0 && noCount < noMessages.length - 1 && (
                    <motion.button
                        key="jumping-no"
                        className="no-button"
                        onClick={handleNoClick}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            fontSize: `${Math.max(60, 100 - noCount * 3)}%`,
                            position: 'fixed',
                            left: `${noButtonPosition.x}px`,
                            top: `${noButtonPosition.y}px`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10000,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        {getNoButtonText()}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Valentine;
