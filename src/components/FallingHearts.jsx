import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Heart = ({ id, x, delay, duration, size }) => {
    return (
        <motion.div
            key={id}
            initial={{ y: -20, x: x, opacity: 0 }}
            animate={{
                y: '110vh',
                opacity: [0, 0.6, 0.6, 0],
                rotate: [0, 45, -45, 0]
            }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "linear",
                repeat: Infinity
            }}
            className="fixed pointer-events-none z-0"
            style={{ left: `${x}%`, fontSize: `${size}px` }}
        >
            <span className="text-pink-300/40">❤️</span>
        </motion.div>
    );
};

const FallingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Generate an initial pool of hearts
        const initialHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 10 + Math.random() * 15,
            size: 15 + Math.random() * 15
        }));
        setHearts(initialHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map(heart => (
                <Heart key={heart.id} {...heart} />
            ))}
        </div>
    );
};

export default FallingHearts;
