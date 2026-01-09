import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Hero from './components/home/Hero';
import Industries from './pages/Industries';
import Products from './pages/Products';
import Blogs from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [hash, setHash] = useState(window.location.hash || '#home');

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash || '#home');
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const isAbout = hash === '#about';

    return (
        <div className="min-h-screen bg-white relative">
            <Home isLoading={isLoading} />
            <Navbar showLogo={!isLoading} />

            <main>
                {!isAbout && (
                    <>
                        <Hero />
                        <Industries />
                        <Products />
                        <Blogs />
                        <Contact />
                    </>
                )}

                {isAbout && <About />}
            </main>
        </div>
    );
}

export default App;
