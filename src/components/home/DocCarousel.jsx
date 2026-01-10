import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const DocCarousel = ({ documents = [], interval = 4000, containerClass = '' }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const QRScanOverlay = () => {
        return (
            <>
                {/* SVG Scanner Band */}
                <motion.div
                    className="absolute left-0 w-full pointer-events-none"
                    initial={{ top: '0%' }}
                    animate={{ top: '100%' }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            viewBox="0 0 894 69"
                            className="w-full h-[22px]"
                            style={{
                                marginTop: i === 0 ? 0 : -6,
                                opacity: 0.85
                            }}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.20117 64.4154L57.771 4.41541L113.331 64.4154L168.891 4.41541L224.451 64.4154L280.021 4.41541L335.581 64.4154L391.141 4.41541L446.701 64.4154L502.271 4.41541L557.831 64.4154L613.391 4.41541L668.951 64.4154L724.521 4.41541L780.081 64.4154L835.641 4.41541L891.201 64.4154"
                                stroke="#C4B5FD"
                                strokeWidth="6"
                                strokeLinecap="round"
                                filter="drop-shadow(0 0 6px #C4B5FD)"
                            />
                        </svg>
                    ))}
                </motion.div>

                {/* Violet scan glow background */}
                <motion.div
                    className="absolute left-0 w-full h-[130px] pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(139,92,246,0) 0%, rgba(139,92,246,0.18) 50%, rgba(139,92,246,0) 100%)'
                    }}
                    initial={{ top: '0%' }}
                    animate={{ top: '100%' }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </>
        );
    };

    useEffect(() => {
        if (!documents.length) return;

        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % documents.length);
        }, interval);

        return () => clearInterval(timer);
    }, [documents.length, interval]);

    const getPosition = index => {
        const diff = (index - activeIndex + documents.length) % documents.length;
        if (diff === 0) return 'center';
        if (diff === 1) return 'right';
        return 'left';
    };

    const variants = {
        center: {
            x: 0,
            scale: 1,
            zIndex: 30,
            opacity: 1,
            filter: 'blur(0px)',
            rotateY: 0
        },
        left: {
            x: -260,
            scale: 0.75,
            zIndex: 10,
            opacity: 0.6,
            filter: 'blur(3px)',
            rotateY: 0
        },
        right: {
            x: 260,
            scale: 0.75,
            zIndex: 10,
            opacity: 0.6,
            filter: 'blur(3px)',
            rotateY: 0
        }
    };

    return (
        <div
            className={`flex-1 w-full h-[500px] lg:h-[600px] relative flex items-center justify-center ${containerClass}`}
            style={{ perspective: 1000 }}
        >

            {documents.map((doc, index) => {
                const position = getPosition(index);

                return (
                    <motion.div
                        key={doc.id}
                        className="absolute rounded-xl shadow-2xl bg-white overflow-hidden border border-gray-100 origin-bottom"
                        animate={position}
                        variants={variants}
                        transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                        style={{
                            width: '283.67px',
                            height: '374.9px',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <img src={doc.src} alt={doc.alt} className="w-full h-full object-cover" />
                    </motion.div>
                );
            })}

            <div
                className="absolute pointer-events-none"
                style={{
                    width: '283.67px', 
                    height: '374.9px', 
                    left: '50%', 
                    top: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    zIndex: 50 
                }}
            >
                <QRScanOverlay />
            </div>
        </div>
    );
};

export default DocCarousel;
