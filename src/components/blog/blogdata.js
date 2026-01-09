export const blogData = [
    {
        title: 'How AI is Revolutionizing Document Management for Enterprises',
        date: '24 July, 2023',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    },
    {
        title: 'Top 5 Fraud Prevention Strategies for Financial Institutions',
        date: '24 July, 2023',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    },
    {
        title: 'The Future of OCR: From Basic Extraction to AI-Driven Intelligence',
        date: '24 July, 2023',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and..."
    }
];


// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../../images/brand_logo.png';
// import Button from '../common/Button';
// import { Menu, X } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Navbar = ({ showLogo = true }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [activeSection, setActiveSection] = useState('#home');

//     const navigate = useNavigate();
//     const location = useLocation();

//     const navItems = [
//         { name: 'Home', type: 'section', href: '#home' },
//         { name: 'Industries', type: 'section', href: '#industries' },
//         { name: 'Products', type: 'section', href: '#products' },
//         { name: 'Blog', type: 'section', href: '#blog' },
//         { name: 'About Us', type: 'route', path: '/about' },
//         { name: 'Contact Us', type: 'section', href: '#contact' }
//     ];

//     /* ================= SCROLL HANDLER ================= */
//     useEffect(() => {
//         if (location.pathname !== '/') return;

//       const handleScroll = () => {
//   setScrolled(window.scrollY > 20);

//   let newActive = '';

//   navItems
//     .filter(item => item.type === 'section')
//     .forEach(item => {
//       const section = document.querySelector(item.href);
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const topOffset = 120; // height of navbar

//       if (rect.top <= topOffset && rect.bottom > topOffset) {
//         newActive = item.href;
//       }
//     });

//   setActiveSection(newActive);
// };


//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [location.pathname]);

//     /* ================= ROUTE NAV ================= */
//     const handleRouteNav = path => {
//         setIsOpen(false);
//         navigate(path);
//     };
//     const handleSectionNav = href => {
//         setIsOpen(false);

//         // If NOT on home page → go home first
//         if (location.pathname !== '/') {
//             navigate('/');

//             setTimeout(() => {
//                 const el = document.querySelector(href);
//                 if (!el) return;

//                 // ✅ UPDATE URL
//                 window.history.pushState(null, '', href);

//                 window.scrollTo({
//                     top: el.offsetTop - 120,
//                     behavior: 'smooth'
//                 });

//                 setActiveSection(href);
//             }, 150);
//         }
//         // Already on home page
//         else {
//             const el = document.querySelector(href);
//             if (!el) return;

//             // ✅ UPDATE URL
//             window.history.pushState(null, '', href);

//             window.scrollTo({
//                 top: el.offsetTop - 120,
//                 behavior: 'smooth'
//             });

//             setActiveSection(href);
//         }
//     };

//     return (
//         <nav
//             className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//                 scrolled ? 'bg-white/45 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
//             }`}
//         >
//             <div className="max-w-[1380px] mx-auto px-6 flex items-center relative">
//                 {/* LOGO */}
//                 {showLogo && (
//                     <motion.img
//                         src={logo}
//                         alt="Aadrila Logo"
//                         layoutId="aadrila-brand-logo"
//                         className="h-12 cursor-pointer"
//                         onClick={() => navigate('/')}
//                     />
//                 )}

//                 {/* DESKTOP NAV */}
//                 <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
//                     {navItems.map(item =>
//                         item.type === 'route' ? (
//                             <button
//                                 key={item.name}
//                                 onClick={() => handleRouteNav(item.path)}
//                                 className={`font-medium cursor-pointer transition ${
//                                     location.pathname === item.path
//                                         ? 'text-[#3E6EB4]'
//                                         : 'text-gray-700 hover:text-[#3E6EB4]'
//                                 }`}
//                             >
//                                 {item.name}
//                             </button>
//                         ) : (
//                             <button
//                                 key={item.name}
//                                 onClick={() => handleSectionNav(item.href)}
//                                 className={`font-medium cursor-pointer transition ${
//                                     location.pathname === '/' && activeSection === item.href
//                                         ? 'text-[#3E6EB4]'
//                                         : 'text-gray-700 hover:text-[#3E6EB4]'
//                                 }`}
//                             >
//                                 {item.name}
//                             </button>
//                         )
//                     )}
//                 </div>

//                 {/* CTA */}
//                 <div className="ml-auto hidden md:block">
//                     <Button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white hover:bg-[#355fa0]">
//                         Get a Demo
//                     </Button>
//                 </div>

//                 {/* MOBILE MENU ICON */}
//                 <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* MOBILE MENU */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: 'auto', opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="md:hidden bg-white shadow-md"
//                     >
//                         <div className="px-6 py-4 flex flex-col gap-4">
//                             {navItems.map(item =>
//                                 item.type === 'route' ? (
//                                     <button
//                                         key={item.name}
//                                         onClick={() => handleRouteNav(item.path)}
//                                         className={`font-medium cursor-pointer transition ${
//                                             location.pathname === item.path
//                                                 ? 'text-[#3E6EB4]'
//                                                 : 'text-gray-700 hover:text-[#3E6EB4]'
//                                         }`}
//                                     >
//                                         {item.name}
//                                     </button>
//                                 ) : (
//                                     <button
//                                         key={item.name}
//                                         onClick={() => handleSectionNav(item.href)}
//                                         className={`font-medium cursor-pointer transition ${
//                                             location.pathname === '/' && activeSection === item.href
//                                                 ? 'text-[#3E6EB4]'
//                                                 : 'text-gray-700 hover:text-[#3E6EB4]'
//                                         }`}
//                                     >
//                                         {item.name}
//                                     </button>
//                                 )
//                             )}

//                             <Button className="w-full bg-[#3E6EB4] text-white py-3 rounded-full">Get a Demo</Button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;
// import { useState, useEffect } from 'react';
// import Navbar from './components/layout/Navbar';
// import Home from './pages/Home';
// import Hero from './components/home/Hero.JSX';
// import Industries from './pages/Industries.JSX';
// import Products from './pages/Products';
// import Blogs from './pages/Blog';
// import Contact from './pages/Contact';
// import { Routes, Route } from 'react-router-dom';
// import About from './pages/About';
// function App() {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 relative">
//             <Home isLoading={isLoading} />
//             <Navbar showLogo={!isLoading} />

//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <>
//                             <Hero />
//                             <Industries />
//                             <Products />
//                             <Blogs />
//                             <Contact />
//                         </>
//                     }
//                 />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;
