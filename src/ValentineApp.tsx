import { useState, useEffect, useCallback } from 'react';
import PasswordProtected from './components/PasswordProtected';
import Valentine from './components/Valentine';
import StinkInspector from './components/StinkInspector';
import './styles/valentine.css';

const ValentineApp = () => {
    const [step, setStep] = useState<'password' | 'inspecting' | 'valentine'>('password');

    const handleCorrectPassword = () => {
        setStep('inspecting');
    };

    const handleInspectionComplete = () => {
        setStep('valentine');
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (Math.random() > 0.8) {
            const cat = document.createElement('div');
            cat.innerHTML = ['🐱', '😸', '😻', '😺', '🐈'][Math.floor(Math.random() * 5)];
            cat.className = 'mouse-cat-particle';
            cat.style.left = e.clientX + 'px';
            cat.style.top = e.clientY + 'px';
            cat.style.fontSize = (Math.random() * 20 + 20) + 'px';
            document.body.appendChild(cat);

            setTimeout(() => {
                cat.remove();
            }, 2000);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    return (
        <>
            {step === 'password' && (
                <PasswordProtected onCorrectPassword={handleCorrectPassword} />
            )}
            {step === 'inspecting' && (
                <StinkInspector onComplete={handleInspectionComplete} />
            )}
            {step === 'valentine' && (
                <Valentine />
            )}
        </>
    );
};

export default ValentineApp;
