import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const CakeSection = ({ onNext }) => {
    const [isCut, setIsCut] = useState(false);

    const handleSwipe = () => {
        if (!isCut) {
            setIsCut(true);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FF69B4', '#FFB6C1', '#FFC0CB']
            });
            setTimeout(onNext, 2000);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 px-4 overflow-hidden">
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 pb-4 drop-shadow-sm"
            >
                {isCut ? "Happy Birthday!" : "Swipe anywhere to cut the cake!"}
            </motion.h2>

            <div
                className="relative cursor-pointer touch-none"
                onMouseDown={(e) => {
                    const startX = e.clientX;
                    const onMouseMove = (moveEvent) => {
                        if (Math.abs(moveEvent.clientX - startX) > 50) {
                            handleSwipe();
                            document.removeEventListener('mousemove', onMouseMove);
                        }
                    };
                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', () => document.removeEventListener('mousemove', onMouseMove), { once: true });
                }}
                onTouchStart={(e) => {
                    const startX = e.touches[0].clientX;
                    const onTouchMove = (moveEvent) => {
                        if (Math.abs(moveEvent.touches[0].clientX - startX) > 50) {
                            handleSwipe();
                            document.removeEventListener('touchmove', onTouchMove);
                        }
                    };
                    document.addEventListener('touchmove', onTouchMove);
                }}
            >
                <motion.img
                    alt="Birthday Cake"
                    className="w-72 md:w-96 select-none"
                    src="/cake2.gif"
                    animate={isCut ? { scale: [1, 1.1, 1] } : {}}
                />
            </div>
        </div>
    );
};

export default CakeSection;
