import React, { useState, useEffect, useRef } from 'react';
import { Music2, Music, Gift, Heart } from 'lucide-react';

const MusicPlayer = ({ autoPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (autoPlay) {
            setIsPlaying(true);
        }
    }, [autoPlay]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(err => {
                console.log("Autoplay blocked", err);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <audio ref={audioRef} src="/music.mp3" loop />
            <button
                onClick={togglePlay}
                className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full bg-gradient-to-r from-[#f8a5c2] to-[#f78fb3] flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300"
            >
                {isPlaying ? (
                    <Music className="text-white w-5 h-5 animate-pulse" />
                ) : (
                    <Music2 className="text-white w-5 h-5" />
                )}
            </button>
        </>
    );
};

export default MusicPlayer;
