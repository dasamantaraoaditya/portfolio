import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
    progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
    return (
        <div className="loader-container">
            <motion.div
                className="loader-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="loader-cat-animation">
                    <motion.span
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ display: 'inline-block', fontSize: '4rem' }}
                    >
                        🐱
                    </motion.span>
                    <div className="loading-hearts">
                        {[...Array(3)].map((_, i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            >
                                💖
                            </motion.span>
                        ))}
                    </div>
                </div>

                <h2 className="loader-text">Preparing the Purr-fect Experience...</h2>

                <div className="loader-progress-container">
                    <motion.div
                        className="loader-progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <p className="loader-percentage">{Math.round(progress)}%</p>

                <div className="loader-tips">
                    <p>💡 Tip: Cats love pizza and poker!</p>
                </div>
            </motion.div>

            <style>{`
                .loader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }
                .loader-content {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 3rem;
                    border-radius: 30px;
                    box-shadow: 0 15px 35px rgba(255, 105, 180, 0.3);
                    max-width: 400px;
                    width: 90%;
                }
                .loader-cat-animation {
                    margin-bottom: 2rem;
                }
                .loading-hearts {
                    font-size: 1.5rem;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                }
                .loader-text {
                    color: #ff1493;
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    font-weight: 800;
                }
                .loader-progress-container {
                    height: 10px;
                    background: #eee;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-bottom: 0.5rem;
                }
                .loader-progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #ff69b4, #ff1493);
                }
                .loader-percentage {
                    color: #ff69b4;
                    font-weight: 700;
                    font-size: 1.2rem;
                }
                .loader-tips {
                    margin-top: 2rem;
                    font-style: italic;
                    color: #888;
                }
            `}</style>
        </div>
    );
};

export default Loader;
