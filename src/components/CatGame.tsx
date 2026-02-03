import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CatGame = () => {
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle');
    const [cats, setCats] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);
    const [timeLeft, setTimeLeft] = useState(20);

    const startGame = () => {
        setScore(0);
        setTimeLeft(20);
        setGameState('playing');
        setCats([]);
    };

    const spawnCat = useCallback(() => {
        if (gameState !== 'playing') return;

        const emojis = ['🐱', '😸', '😻', '😺', '🐈', '😽', '❤️', '🍕', '🧁'];
        const newCat = {
            id: Date.now() + Math.random(),
            x: Math.random() * 80 + 10, // 10% to 90%
            y: Math.random() * 80 + 10,
            emoji: emojis[Math.floor(Math.random() * emojis.length)]
        };

        setCats(prev => [...prev, newCat]);

        // Remove cat after 1.5 seconds if not clicked
        setTimeout(() => {
            setCats(prev => prev.filter(c => c.id !== newCat.id));
        }, 1500);
    }, [gameState]);

    useEffect(() => {
        let timer: any;
        let spawnInterval: any;

        if (gameState === 'playing') {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setGameState('ended');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            spawnInterval = setInterval(spawnCat, 600);
        }

        return () => {
            clearInterval(timer);
            clearInterval(spawnInterval);
        };
    }, [gameState, spawnCat]);

    const handleCatClick = (id: number) => {
        setScore(prev => prev + 10);
        setCats(prev => prev.filter(c => c.id !== id));

        // Add a little floating score effect could go here
    };

    return (
        <div className="cat-game-wrapper">
            <div className="game-status">
                <div className="score">Score: <span>{score}</span></div>
                <div className="timer">Time: <span>{timeLeft}s</span></div>
            </div>

            <div className="game-area">
                <AnimatePresence>
                    {gameState === 'idle' && (
                        <motion.div
                            className="game-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <button onClick={startGame} className="start-button">
                                Start Cat Catch! 🎮
                            </button>
                            <p className="game-hint">Catch as many cats and treats as you can!</p>
                        </motion.div>
                    )}

                    {gameState === 'playing' && cats.map(cat => (
                        <motion.button
                            key={cat.id}
                            className="cat-target"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={() => handleCatClick(cat.id)}
                            style={{
                                left: `${cat.x}%`,
                                top: `${cat.y}%`,
                            }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            {cat.emoji}
                        </motion.button>
                    ))}

                    {gameState === 'ended' && (
                        <motion.div
                            className="game-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <h3>Game Over! 🐾</h3>
                            <div className="final-score">Final Score: {score}</div>
                            <button onClick={startGame} className="start-button">
                                Play Again 🔄
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
                .cat-game-wrapper {
                    margin-top: 2rem;
                    background: rgba(255, 182, 193, 0.15);
                    border-radius: 30px;
                    padding: 1.5rem;
                    border: 2px dashed #ff69b4;
                    position: relative;
                }
                .game-status {
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 1rem;
                    font-weight: 800;
                    color: #ff1493;
                    font-size: 1.2rem;
                }
                .game-status span {
                    background: #ff1493;
                    color: white;
                    padding: 0.2rem 0.8rem;
                    border-radius: 20px;
                    margin-left: 0.5rem;
                }
                .game-area {
                    height: 300px;
                    background: white;
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
                }
                .game-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.8);
                    z-index: 10;
                    backdrop-filter: blur(4px);
                }
                .start-button {
                    background: linear-gradient(135deg, #ff1493, #ff69b4);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-size: 1.2rem;
                    font-weight: 800;
                    cursor: pointer;
                    box-shadow: 0 10px 20px rgba(255, 20, 147, 0.3);
                    transition: transform 0.2s;
                }
                .start-button:hover {
                    transform: scale(1.05);
                }
                .game-hint {
                    margin-top: 1rem;
                    color: #ff69b4;
                    font-weight: 600;
                }
                .cat-target {
                    position: absolute;
                    background: none;
                    border: none;
                    font-size: 3rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    z-index: 5;
                    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
                }
                .final-score {
                    font-size: 2rem;
                    font-weight: 900;
                    color: #ff1493;
                    margin: 1.5rem 0;
                }
            `}</style>
        </div>
    );
};

export default CatGame;
