import React from 'react';
import { motion } from 'framer-motion';

const MessageSection = () => {
    return (
        <div className="relative z-10 flex min-h-screen items-start justify-center p-4 pt-20">
            <div className="w-full max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center border border-pink-100"
                >
                    <motion.h2
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 pb-2 leading-tight"
                    >
                        A Special Message
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-pink-800 text-lg md:text-xl leading-relaxed space-y-4"
                    >
                        <p>
                            Happy Birthday, My Girl! 🎂 You deserve all the happiness, love, and smiles in the world today and always.
                        </p>
                        <p>
                            You have this special way of making everything around you brighter—your smile, your kindness, and the way you make people feel truly cared for.
                        </p>
                        <p>
                            I hope your day is filled with laughter, surprises, and moments that make your heart happy. You’re truly one of a kind. 💖
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 1 }}
                        className="mt-8 flex justify-center"
                    >
                        <div className="bg-pink-100 p-4 rounded-full">
                            <span className="text-4xl text-pink-500">✨💗✨</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default MessageSection;
