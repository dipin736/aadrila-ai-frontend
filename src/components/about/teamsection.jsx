import React, { useEffect, useState } from 'react';
import { Eye, Target, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import circleBg from '../../images/blue_circle.png';
import dotsLeft2 from '../../images/dots_industry_2.png';
const Teamsection = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % teamMembers.length);
    };

    const handlePrev = () => {
        setActiveIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    const teamMembers = [
        {
            id: 1,
            name: 'MANSI SHUKLA',
            role: 'CEO FutureSphere',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
            quote: 'For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make banking not feel out of place.'
        },
        {
            id: 2,
            name: 'ALEX RIVERA',
            role: 'CTO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
            quote: "Innovation isn't just about new technology, it's about solving old problems in new, efficient ways."
        },
        {
            id: 3,
            name: 'SARAH CHEN',
            role: 'Head of AI Research',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
            quote: 'Our AI models are designed to understand context, not just process data. This is the future of intelligent automation.'
        }
    ];

    return (
        <div className="flex flex-col items-center pt-14">
            <img
                src={circleBg}
                alt=""
                className="absolute left-0 top-1/2 -translate-y-1/2
      w-[450px] md:w-[650px] opacity-60 pointer-events-none z-0"
            />
        
                    <img
                        src={dotsLeft2}
                        alt=""
                        className="absolute right-30  w-40 opacity-140 
                        pointer-events-none hidden lg:block"
                    />
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-12"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet our team</h2>

                <p className="gradient-text-ai font-semibold text-[22px] max-w-2xl mx-auto">
                    Meet our passionate and talented team, committed to delivering exceptional results, driving
                    innovation, and transforming your vision into reality.
                </p>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={handlePrev}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Avatars Row */}
            <div className="flex justify-center items-center gap-4 md:gap-12 mb-12 h-32 relative w-full max-w-3xl">
                <AnimatePresence mode="popLayout">
                    {teamMembers.map((member, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={member.id}
                                layout
                                animate={{
                                    scale: isActive ? 1.4 : 0.8,
                                    opacity: isActive ? 1 : 0.5,
                                    filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                                    zIndex: isActive ? 10 : 1
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className={`relative rounded-full overflow-hidden border-2 cursor-pointer transition-colors duration-300 ${
                                    isActive ? 'border-orange-500 shadow-2xl skew-y-0' : 'border-gray-200'
                                }`}
                                style={{ width: '80px', height: '80px', flexShrink: 0 }}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                {/* Active Ring Animation */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-ring"
                                        className="absolute inset-0 rounded-full border-2 border-orange-500"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Member Details Card */}
            <div className="w-full max-w-3xl relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#3B66BC] rounded-xl p-8 md:p-10 text-white shadow-2xl relative text-center mx-4 md:mx-0"
                    >
                        {/* Triangle Pointer */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#3B66BC] rotate-45 transform origin-center"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold tracking-wider mb-2">{teamMembers[activeIndex].name}</h3>
                            <p className="text-orange-300 text-sm mb-6 uppercase tracking-widest font-semibold">
                                {teamMembers[activeIndex].role}
                            </p>

                            <p className="max-w-2xl mx-auto text-blue-50 leading-relaxed mb-8 italic">
                                "{teamMembers[activeIndex].quote}"
                            </p>

                            <div className="flex justify-center gap-6">
                                <a
                                    href="#"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Teamsection;
