import gradientCircle from '../images/gradient_circle.png';
import { productsData } from '../components/products/pdtData';
import { ProductCard } from '../components/products/productCard';
import dotsLeft1 from '../images/dots_3.png';

const Products = () => {
    const gradientBackgrounds = [
        '-right-[30%] -top-[5%] lg:-right-[10%] lg:-top-[-8%]',
        '-left-[30%] top-[20%] lg:-left-[5%] lg:-top-[-36%]',
        '-right-[30%] -bottom-[5%] lg:-right-[5%] lg:-bottom-[-1%]'
    ];

    return (
        <section id="products" className="relative py-24 bg-gray-50/50 overflow-hidden">
            {/* Gradient Backgrounds */}
            {gradientBackgrounds.map((position, index) => (
                <div
                    key={index}
                    className={`absolute ${position} 
                    w-[400px] h-[400px] 
                    lg:w-[700px] lg:h-[700px] 
                    opacity-85 pointer-events-none z-0`}
                >
                    <img src={gradientCircle} alt="Decorative gradient" className="w-full h-full object-contain" />
                    
                </div>
            ))}
            <img
                src={dotsLeft1}
                alt=""
                className="absolute left-2 top-20 w-50 opacity-140 
                pointer-events-none hidden lg:block"
            />

            <div className="relative z-10 max-w-[1380px] mx-auto px-6 py-5">

                <div className="mb-20 text-center">
                    <span className="block mb-2 text-sm font-semibold tracking-wide  innovation-text-ai text-[24px]">
                        features and benefits.
                    </span>
                    <h3 className="font-raleway text-3xl md:text-5xl text-gray-900 font-semibold text-[48px]">Our Products</h3>
                </div>

        
                <div className="space-y-32">
                    {productsData.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
