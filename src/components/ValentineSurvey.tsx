import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ValentineSurveyProps {
    onComplete: () => void;
}

const ValentineSurvey = ({ onComplete }: ValentineSurveyProps) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showSadMeme, setShowSadMeme] = useState(false);
    const [showHappyMeme, setShowHappyMeme] = useState(false);

    // Memes
    const massageYesMeme = "https://i.pinimg.com/originals/73/b1/79/73b179e8b7b111399288d4a597d4c8ab.gif";
    const massageNoMeme = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3EyNmxhMThpNWlrdGU5azh4djBqYnNnM2c2azJmN2FvNTNnNzRxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ev477g37MJORyOWfdG/giphy.gif"; // Sad cat
    const drinkMeme = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTljMnd6aG9tazNvMWhxb3M0ZnplejQ3NXUxNGY3ZTg1cW9yNmF0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nPuGJbsZ4EkCu0tC9l/giphy.gif"; // Cat drinking
    const flowerMeme = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGpqMmpxZjdwM2JnemkxbXkwZG1yYjE3d2E5MWh6ZXJuYmRybXowNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif"; // Cat smelling flower
    const giftMeme = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnc1M25ka3UxeG5hZXJleXdoNDBoNDRlb3NldzBpbWZwNTI0N2praSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6C5LFuLcnhTZeypW0E/giphy.gif"; // Cat in box/gift

    const questions = [
        {
            id: 'massage',
            question: "Are you up for a really great massage & skincare relaxation session? 💆‍♀️✨",
            type: 'yes_no_force',
            meme: massageYesMeme,
            sadMeme: massageNoMeme,
            happyMessage: "Yeah boi! Nice choice! 😼💅",
            sadMessage: "Wrong answer! Try again... 😾"
        },
        {
            id: 'drink',
            question: "What should we drink tonight? 🥂",
            type: 'choice',
            options: ["Beer 🍺", "Wine 🍷", "Mocktails 🍹", "Just Water 💧"],
            meme: drinkMeme
        },
        {
            id: 'flowers',
            question: "What flowers do you prefer? 💐",
            type: 'choice',
            options: ["Red Roses 🌹", "White Lilies 🌸", "Sunflowers 🌻", "Surprise Me! 🎁"],
            meme: flowerMeme
        },
        {
            id: 'gift',
            question: "What kind of surprise gift are you expecting? 🎁",
            type: 'choice',
            options: ["Jewelry 💍", "Tech Gadgets 📱", "Handmade with Love 💌", "Something naughty 😉"],
            meme: giftMeme
        }
    ];

    const handleAnswer = (answer: string) => {
        const currentQ = questions[currentQuestion];

        if (currentQ.type === 'yes_no_force') {
            if (answer === 'no') {
                setShowSadMeme(true);
                setTimeout(() => setShowSadMeme(false), 2000);
            } else {
                setShowHappyMeme(true);
                setTimeout(() => {
                    setShowHappyMeme(false);
                    nextQuestion();
                }, 2500); // Show happy meme for 2.5s
            }
        } else {
            nextQuestion();
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div className="valentine-container survey-mode">
            <motion.div
                className="survey-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <AnimatePresence mode="wait">
                    {showHappyMeme ? (
                        <motion.div
                            key="happy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="meme-overlay"
                        >
                            <img src={questions[currentQuestion].meme} alt="Happy Cat" />
                            <h2>{questions[currentQuestion].happyMessage}</h2>
                        </motion.div>
                    ) : showSadMeme ? (
                        <motion.div
                            key="sad"
                            initial={{ x: -10, rotate: -5 }}
                            animate={{ x: 10, rotate: 5 }}
                            exit={{ scale: 0 }}
                            className="meme-overlay sad"
                        >
                            <img src={questions[currentQuestion].sadMeme} alt="Sad Cat" />
                            <h2>{questions[currentQuestion].sadMessage}</h2>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={currentQuestion}
                            className="question-content"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                        >
                            <div className="cat-header-small">
                                <img src={questions[currentQuestion].meme} alt="Topic Cat" className="topic-cat-gif" />
                            </div>

                            <h2 className="survey-question">{questions[currentQuestion].question}</h2>

                            <div className="survey-options">
                                {questions[currentQuestion].type === 'yes_no_force' ? (
                                    <>
                                        <motion.button
                                            className="survey-btn yes"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleAnswer('yes')}
                                        >
                                            YES! 😍
                                        </motion.button>
                                        <motion.button
                                            className="survey-btn no"
                                            whileHover={{ scale: 0.95 }}
                                            onClick={() => handleAnswer('no')}
                                        >
                                            No... 😒
                                        </motion.button>
                                    </>
                                ) : (
                                    questions[currentQuestion].options?.map((opt, idx) => (
                                        <motion.button
                                            key={idx}
                                            className="survey-btn choice"
                                            whileHover={{ scale: 1.05, backgroundColor: '#ff69b4', color: 'white' }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleAnswer(opt)}
                                        >
                                            {opt}
                                        </motion.button>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <style>{`
                .survey-mode {
                    background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
                }
                .survey-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 30px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                    border: 4px solid #ff1493;
                }
                .topic-cat-gif {
                    width: 180px;
                    height: 180px;
                    border-radius: 20px;
                    object-fit: cover;
                    border: 3px solid #ff69b4;
                    margin-bottom: 1.5rem;
                }
                .survey-question {
                    color: #ff1493;
                    font-size: 1.8rem;
                    margin-bottom: 2rem;
                    font-weight: 800;
                }
                .survey-options {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .survey-btn {
                    padding: 1rem 2rem;
                    font-size: 1.2rem;
                    border: 2px solid #ff69b4;
                    border-radius: 50px;
                    background: white;
                    color: #ff69b4;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .survey-btn.yes {
                    background: linear-gradient(135deg, #ff1493, #ff69b4);
                    color: white;
                    border: none;
                }
                .survey-btn.no {
                    background: #eee;
                    border-color: #ccc;
                    color: #666;
                }
                .meme-overlay {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .meme-overlay img {
                    width: 300px;
                    height: 300px;
                    border-radius: 20px;
                    object-fit: cover;
                }
                .meme-overlay.sad h2 {
                     color: #555;
                }
            `}</style>
        </div>
    );
};

export default ValentineSurvey;
