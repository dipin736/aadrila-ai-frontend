import circleBg from '../images/blue_circle.png';
import dotsLeft1 from '../images/dots_3.png';
import IndustryCard from '../components/Industries/IndustryCard';
import { industries } from '../components/Industries/IndustriesData';

const Industries = () => {
    return (
        <section id="industries" className="relative min-h-screen py-12 bg-white overflow-hidden">
            <img
                src={circleBg}
                alt=""
                className="absolute left-0 top-1/2 -translate-y-1/2 
                w-[450px] md:w-[650px] opacity-80 pointer-events-none"
            />

            <img
                src={dotsLeft1}
                alt=""
                className="absolute right-1 bottom-5 w-50 opacity-140 
                pointer-events-none hidden lg:block"
            />

            <div className="relative z-10 max-w-[1380px] mx-auto px-6 py-5">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="innovation-text-ai text-[24px]">AI-driven innovation for growth</span>
                        <br />
                        <span className="font-raleway text-gray-900 font-semibold text-[48px]">Industries We Empower</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pl-5">
                    {industries.map((item, index) => (
                        <IndustryCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
