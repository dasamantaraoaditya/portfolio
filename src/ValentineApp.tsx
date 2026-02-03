import { useState, useEffect, useCallback, useMemo } from 'react';
import PasswordProtected from './components/PasswordProtected';
import Valentine from './components/Valentine';
import StinkInspector from './components/StinkInspector';
import Loader from './components/Loader';
import './styles/valentine.css';

const ValentineApp = () => {
    const [step, setStep] = useState<'loading' | 'password' | 'inspecting' | 'valentine'>('loading');
    const [loadProgress, setLoadProgress] = useState(0);

    const assets = useMemo(() => [
        "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGEzdjB3bW45N3VxYnI2aDA5Y3hpODV1MngzM3hya2JuYXZnbTFuaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rMEJyjch7L1tlRlCl3/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTlvZ2M0eXN3NWhuazQxbGxwdWhtd3k3NmFvOW5ua2QweXU2Mm5jaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q1KLLp3PWOnA5VWO8h/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDkxYzVvMHh6eXU0YTFzbG1nZnJrMXBybmxxd3RxY2txNnZkeGYzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qZgHBlenHa1zKqy6Zn/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHd4c3N5a3pjenYxNHA0MWdyYXh1MGNzMzF3dXR0Y250bWR6MXdtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wr7oA0rSjnWuiLJOY5/giphy.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJtMXg4eXRqeHVzZ3JlbWJ5bzZ6em13MHV1b3d5aWkycDg4cHpmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mi4ec226vjAkehSLk0/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXViaXY1dWZhc3FndDFwbjdldnZpOTdtaG5rbzA1a3IyZHppenRjdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZEstBAhXtUK7Dw2ZFJ/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdsOHhiN2Fmem5reW80Y2t3YzV5M3llcTcwejdqdnFzdWxiYWRyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wfS4vDyVsASQygl4mN/giphy.gif",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnR4Y29ueHY3bTJwbmpjNTQ0YjJ1Z2JjNm5lMjZ6aDRwN3JyeHlqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BK1EfIsdkKZMY/giphy.gif",
        "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"
    ], []);

    useEffect(() => {
        let loadedCount = 0;
        const totalAssets = assets.length;

        if (totalAssets === 0) {
            setStep('password');
            return;
        }

        const loadAsset = (url: string) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve; // Continue even if one fails
            });
        };

        const preloadAll = async () => {
            for (const asset of assets) {
                await loadAsset(asset);
                loadedCount++;
                setLoadProgress((loadedCount / totalAssets) * 100);
            }
            // Small delay for smooth transition
            setTimeout(() => setStep('password'), 800);
        };

        preloadAll();
    }, [assets]);

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
        if (step !== 'loading') {
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [handleMouseMove, step]);

    return (
        <>
            {step === 'loading' && <Loader progress={loadProgress} />}
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
