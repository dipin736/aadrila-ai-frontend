import { BlogCard } from '../components/blog/blogcard';
import { blogData } from '../components/blog/blogdata';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import dotsLeft1 from '../images/dots_industry_2.png';
import dotsLeft2 from '../images/dots_3.png';

const Blogs = () => {
    // Container animation (controls stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    // Card animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <>
            <section id="blog" className="relative py-20 bg-white overflow-hidden">
                <div className="max-w-[1300px] mx-auto px-3">
                    {/* Decorative dots */}
                    <img
                        src={dotsLeft1}
                        alt=""
                        className="absolute left-5 bottom-110 w-45 opacity-120 
                       pointer-events-none hidden lg:block"
                    />

                    {/* Heading */}
                    <div className="text-center mb-15">
                        <h2 className="font-raleway text-4xl md:text-5xl font-semibold text-gray-900">Blogs</h2>
                        <p className="innovation-text-ai text-[24px] mt-4 text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <br />
                            Lorem Ipsum has been the industry's standard.
                        </p>
                    </div>

                    {/* BLOG GRID WITH ANIMATION */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
                    >
                        {blogData.map((item, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <BlogCard
                                    title={item.title}
                                    date={item.date}
                                    description={item.description}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative dots */}
                <img
                    src={dotsLeft2}
                    alt=""
                    className="absolute right-10 bottom-70 w-60 opacity-140 
                     pointer-events-none hidden lg:block"
                />
            </section>

            {/* Navigation Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mt-10">
                <button className="w-12 h-12 rounded-lg bg-[#537CD3] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    <ArrowLeft size={24} />
                </button>
                <button className="w-12 h-12 rounded-lg bg-[#537CD3] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    <ArrowRight size={24} />
                </button>
            </div>
        </>
    );
};

export default Blogs;
