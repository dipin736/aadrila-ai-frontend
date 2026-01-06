import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../images/brand_logo.png';
import Button from '../common/Button';
import { Menu, X } from 'lucide-react';

const Navbar = ({ showLogo = true }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'Industries', 'Products', 'Blog', 'Contact Us', 'About Us'];
    return (
        <nav
            className={`sticky  top-0 w-full z-50 transition-all duration-300
            ${scrolled ? "bg-white/5 backdrop-blur-md shadow-sm" : 'bg-transparent py-6'}`}
             style={{
                backdropFilter: scrolled ? "blur(10px)" : "none",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center relative">
                <div className="flex items-center">
                    {showLogo && (
                        <motion.img
                            src={logo}
                            alt="Aadrila Logo"
                            layoutId="aadrila-brand-logo"
                            className="h-12 w-auto object-contain cursor-pointer"
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                    )}
                </div>

                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href="#"
                            className="text-gray-700 hover:text-[#3E6EB4]-600 font-medium transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="ml-auto hidden md:block">
                    <Button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white hover:bg-[#355fa0] shadow-lg shadow-blue-500/30">
                        Get a Demo
                    </Button>
                </div>

                <button
                    className="md:hidden ml-auto text-gray-700"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-md"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navItems.map(item => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-700 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}

                            <Button className="w-full bg-[#3E6EB4] text-white px-8 py-3 rounded-full">
                                Get a Demo
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
