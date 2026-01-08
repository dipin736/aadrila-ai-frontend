import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Hero from './components/home/Hero.JSX';
import Industries from './pages/Industries.JSX';
import Products from './pages/Products';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 relative">
            <Home isLoading={isLoading} />
            <Navbar showLogo={!isLoading} />

            <main>
                <Hero />
                <Industries />
                <Products />
            </main>
        </div>
    );
}

export default App;
