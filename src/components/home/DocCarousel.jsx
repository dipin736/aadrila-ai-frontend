import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const DocCarousel = ({ documents = [], interval = 4000, containerClass = '' }) => {
    const [activeIndex, setActiveIndex] = useState(0);

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
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                            width: '283.67px',
                            height: '374.9px',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <img src={doc.src} alt={doc.alt} className="w-full h-full object-cover" />

                        {position !== 'center' && <div className="absolute inset-0 bg-white/40" />}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default DocCarousel;
