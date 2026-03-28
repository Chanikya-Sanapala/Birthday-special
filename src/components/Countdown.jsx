import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = ({ onComplete }) => {
    const [count, setCount] = useState(3);
    const [isStarted, setIsStarted] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const lastMoveTime = useRef(0);

    const moveButton = () => {
        const now = Date.now();
        if (now - lastMoveTime.current < 400) return; // Prevent double triggers
        
        if (attempts < 5) {
            lastMoveTime.current = now;
            // Larger movement range based on viewport
            const newX = (Math.random() - 0.5) * (window.innerWidth * 0.6);
            const newY = (Math.random() - 0.5) * (window.innerHeight * 0.6);
            setPosition({ x: newX, y: newY });
            setAttempts(prev => prev + 1);
        }
    };

    const handleFinalClick = () => {
        if (attempts >= 5) {
            setIsStarted(true);
        } else {
            moveButton();
        }
    };

    useEffect(() => {
        if (isStarted && count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else if (isStarted && count === 0) {
            const timer = setTimeout(() => onComplete(), 1000);
            return () => clearTimeout(timer);
        }
    }, [count, isStarted, onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 overflow-hidden">
            <AnimatePresence mode="wait">
                {!isStarted ? (
                    <motion.button
                        key="start-button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            x: position.x,
                            y: position.y
                        }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        onMouseEnter={moveButton}
                        onClick={handleFinalClick}
                        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition-shadow duration-300 cursor-pointer"
                        style={{ position: 'relative' }}
                    >
                        {attempts < 5 ? "Click to Open Your Surprise! 🎁" : "You got it! Click me! ✨"}
                    </motion.button>
                ) : (
                    <motion.div
                        key={count}
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
                        exit={{ opacity: 0, scale: 2, rotate: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-9xl font-black text-pink-600 drop-shadow-2xl"
                    >
                        {count > 0 ? count : "Ready?"}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Countdown;
