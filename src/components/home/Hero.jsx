
import Button from '../common/Button';
import heroBg from '../../images/hero_bg.png';
import licenseCard from '../../images/license_card.png';
import invoiceDoc from '../../images/invoice_document.png';
import growthDoc from '../../images/docimgnew.png';
import DocCarousel from './DocCarousel';


const heroDocs = [
    { id: 1, src: licenseCard, alt: "License" },
    { id: 2, src: invoiceDoc, alt: "Invoice" },
    { id: 3, src: growthDoc, alt: "DocSim" }
];

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-5 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <img src={heroBg} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        <span className="gradient-text-ai">AI-Powered</span>
                        <br />
                        <span className="text-gray-900 font-semibold  text-[48px]">
                            Document Automation <br /> & Fraud Detection
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-900 max-w-xl text-[20px]">
                        Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless
                        document processing and fraud prevention.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Button
                            variant="custom"
                            className="bg-[#3E6EB4] hover:bg-[#355FA0] px-8 sm:px-16 py-4 text-base rounded-full w-full sm:w-auto"
                        >
                            Get a Demo
                        </Button>

                        <Button
                            variant="custom"
                            className="bg-[#3E6EB4] hover:bg-[#355FA0] px-8 sm:px-16 py-4 text-base rounded-full w-full sm:w-auto"
                        >
                            Explore Solution
                        </Button>
                    </div>
                </div>

                {/* RIGHT 3D CAROUSEL */}
                <div className="w-full flex justify-center items-center py-20 bg-gray-50">
                    <DocCarousel documents={heroDocs} interval={4000} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
