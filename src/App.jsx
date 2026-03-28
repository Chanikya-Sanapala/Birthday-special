import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import CakeSection from './components/CakeSection';
import PhotoStack from './components/PhotoStack';
import MessageSection from './components/MessageSection';
import MusicPlayer from './components/MusicPlayer';
import FallingHearts from './components/FallingHearts';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep(prev => prev + 1);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const renderStep = () => {
        switch (step) {
            case 0: return <WelcomeScreen onNext={nextStep} />;
            case 1: return <CakeSection onNext={nextStep} />;
            case 2: return <PhotoStack onNext={nextStep} />;
            case 3: return <MessageSection />;
            default: return <WelcomeScreen onNext={nextStep} />;
        }
    };

    return (
        <div className="gradient-bg selection:bg-pink-200 min-h-screen relative">
            <FallingHearts />
            <MusicPlayer />

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                >
                    {renderStep()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default App;
