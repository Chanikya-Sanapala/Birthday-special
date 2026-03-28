import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const PhotoStack = ({ onNext }) => {
    const photos = [
        { src: 'images/image 1.jpeg', alt: 'Moment 1' },
        { src: 'images/image 2.jpeg', alt: 'Moment 2' },
        { src: 'images/image 3.jpeg', alt: 'Moment 3' },
        { src: 'images/image 4.jpeg', alt: 'Moment 4' },
    ];

    return (
        <div className="px-4 md:px-6 pt-10 pb-4 flex flex-col items-center min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-4 px-2"
            >
                <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow pb-2">
                    Some Sweet Moments
                </h2>
                <p className="text-sm text-pink-400/80 mt-2 italic">(Swipe the cards)</p>
            </motion.div>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[90vw] max-w-[300px] h-[400px] md:w-[340px] md:h-[460px]"
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index} className="bg-white">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback to a placeholder if image fails to load
                                e.target.src = `https://picsum.photos/seed/${index + 1}/400/600`;
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6"
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-[#f8a5c2] to-[#f78fb3] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                >
                    Open My Message
                </button>
            </motion.div>
        </div>
    );
};

export default PhotoStack;
