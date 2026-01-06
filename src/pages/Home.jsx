import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brandLogo from '../images/brand_logo.png';
const Home = ({isLoading}) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-60 flex items-center justify-center bg-white"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.img
                        src={brandLogo}
                        alt="Aadrila Logo"
                        layoutId="aadrila-brand-logo"
                        className="w-64 h-auto object-contain"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Home;
