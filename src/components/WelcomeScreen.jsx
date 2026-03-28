import React from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onNext }) => {
    return (
        <div
            className="relative z-10 flex h-screen items-center justify-center p-4 bg-cover bg-[center_top_40%]"
            style={{ backgroundImage: "url('/images/image 3.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/30 z-[-1]" />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl px-8"
            >
                <div className="flex flex-col items-start gap-6 text-left">
                    <img
                        alt="Cute birthday animation topper"
                        className="w-[140px] md:w-[180px] object-cover"
                        src="/gifs/intro.gif"
                    />
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-300 pb-2 drop-shadow-lg whitespace-nowrap">
                            My girl was born 21 years ago today!
                        </h1>
                        <p className="mt-4 text-pink-600 font-medium italic">
                            Yes, it’s YOU! A little surprise awaits...
                        </p>
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={onNext}
                            className="flex items-center gap-2 bg-gradient-to-r from-[#f8a5c2] to-[#f78fb3] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
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
