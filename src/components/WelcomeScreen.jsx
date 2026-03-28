import React from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onNext }) => {
    return (
        <div
            className="relative z-10 flex h-screen items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/image 3.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/40 z-[-1]" />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl"
            >
                <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <img
                        alt="Cute birthday animation topper"
                        className="w-[120px] md:w-[180px] object-cover"
                        src="/gifs/intro.gif"
                    />
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 pb-2 drop-shadow-lg leading-tight">
                            My girl was born 21 years ago today!
                        </h1>
                        <p className="text-lg md:text-xl text-pink-500 font-medium italic drop-shadow-sm">
                            Yes, it’s YOU! A little surprise awaits...
                        </p>
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={onNext}
                            className="bg-gradient-to-r from-[#f8a5c2] to-[#f78fb3] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
                        >
                            Start the surprise
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WelcomeScreen;
