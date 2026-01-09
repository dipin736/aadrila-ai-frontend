import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../common/Button';
import dotsLeft1 from '../../images/dots_industry_2.png';
import dotsLeft2 from '../../images/dots_3.png';
export const ProductCard = ({ product }) => {
    const containerRef = useRef(null);
    const isLeftAligned = product.layout === 'left';

    /* ------------------ 3D Tilt Logic ------------------ */
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);

    const smoothX = useSpring(tiltX, { stiffness: 120, damping: 20 });
    const smoothY = useSpring(tiltY, { stiffness: 120, damping: 20 });

    const rotateX = useTransform(smoothY, [-0.5, 0.5], ['14deg', '-14deg']);
    const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-14deg', '14deg']);

    const updateTilt = e => {
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

        tiltX.set(offsetX);
        tiltY.set(offsetY);
    };

    const resetTilt = () => {
        tiltX.set(0);
        tiltY.set(0);
    };

    return (
        <div
            className={`flex flex-col ${
                isLeftAligned ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-12 lg:gap-20 mb-32 last:mb-0`}
        >
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: isLeftAligned ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <Button className="px-8 my-2 rounded-full bg-[#3E6EB4] text-white hover:bg-[#355fa0] docsim-text-ai text-[24px] shadow-blue-500/30">
                    {product.buttonLabel}
                </Button>

                <h3 className="font-raleway text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {product.title}
                </h3>
                <img
                    src={dotsLeft1}
                    alt=""
                    className="absolute right-30 bottom-270 w-30 opacity-120 
                pointer-events-none hidden lg:block"
                />
                <div className="space-y-6 mb-8">
                    {renderList('Features', product.features)}
                    {renderList('Benefits', product.benefits)}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 text-white">
                    <Button
                        variant="custom"
                        className="bg-[#3E6EB4] hover:bg-[#355FA0] px-8 sm:px-16 py-4 text-base rounded-full w-full sm:w-auto"
                    >
                        Learn More
                    </Button>

                    <Button
                        variant="custom"
                        className="bg-[#3E6EB4] hover:bg-[#355FA0] px-8 sm:px-16 py-4 text-base rounded-full w-full sm:w-auto"
                    >
                        Schedule a Demo
                    </Button>
                </div>
            </motion.div>
            <img
                src={dotsLeft2}
                alt=""
                className="absolute left-55 bottom-130 w-50 opacity-120 
                pointer-events-none hidden lg:block"
            />
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: isLeftAligned ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <motion.div
                    ref={containerRef}
                    onMouseMove={updateTilt}
                    onMouseLeave={resetTilt}
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden 
                               bg-[#0B1120] border border-gray-800 
                               shadow-2xl perspective-1000"
                >
                    {/* Gradient Layers */}
                    {visualLayers(product.visualColor)}

                    <div className="absolute inset-0" style={{ transform: 'translateZ(50px)' }}>
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const renderList = (title, items) => {
    if (!items) return null;

    return (
        <div className="font-1">
            <h4 className="text-xl font-semibold">{title}:</h4>
            <ul className="space-y-2">
                {items.map((text, i) => (
                    <li key={i} className="flex gap-3">
                        <span className="text-gray-400">•</span>
                        <p className="text-gray-700 text-[16px] leading-relaxed">{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const visualLayers = color => (
    <>
        <div
            className={`absolute -top-1/2 -right-1/2 
            w-[500px] h-[500px] 
            bg-gradient-to-br ${color} 
            opacity-20 blur-3xl rounded-full`}
        />
        <div
            className="absolute -bottom-1/2 -left-1/2 
            w-[300px] h-[300px] 
            bg-blue-900/30 blur-3xl rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '24px 24px'
            }}
        />
    </>
);
