import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import dotsLeft2 from '../images/dots_1.png';
const Contact = () => {
    return (
        <section id="contact" className="relative bg-white pt-25 px-7 pb-[260px] lg:pb-0 overflow-hidden">
            {/* Blue Footer Background Strip - Absolute positioned to sit at the bottom */}
            {/* Footer Area */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#4374B9] z-0">
                <div className="container mx-auto px-12 py-10 relative z-10">
                    <div className="text-white/80 text-sm space-y-5 pt-10">
                        <p>© 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688</p>
                        <p className="max-w-md bg-transparent">
                            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow, Uttar Pradesh, India,
                            226024
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Decorative dots */}
                    <img
                        src={dotsLeft2}
                        alt=""
                        className="absolute left-0 bottom-180 w-30 opacity-140 
                     pointer-events-none hidden lg:block"
                    />
                    <motion.div
                        className="flex flex-col justify-between h-full pb-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Top Section (on White) */}
                        <div className="mb-20">
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
                            <p className="gradient-text-ai text-lg mb-1 leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and
                            </p>
                            <p className="text-[#4374B9] text-lg mb-12 leading-relaxed">
                                typesetting industry. Lorem Ipsum has been the industry's.
                            </p>

                            <div className="space-y-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin className="text-[#D96324]" size={20} />
                                        <h4 className="font-bold text-gray-900 border-b-2 border-black inline-block pb-0.5">
                                            U.S. Office
                                        </h4>
                                    </div>
                                    <p className="text-gray-900 max-w-sm text-sm leading-relaxed pl-7">
                                        Aadrila Technologies INC,
                                        <br />8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin className="text-[#D96324]" size={20} />
                                        <h4 className="font-bold text-gray-900 border-b-2 border-black inline-block pb-0.5">
                                            India Office
                                        </h4>
                                    </div>
                                    <p className="text-gray-700 max-w-sm text-sm leading-relaxed pl-7">
                                        Aadrila Technologies Private Limited,
                                        <br />
                                        Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar,
                                        Andheri West, Mumbai, Maharashtra 400053.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-[2rem] p-8 md:p-15 shadow-2xl md:mb-15"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-[#4374B9] focus:ring-1 focus:ring-[#4374B9] outline-none transition-all"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-[#4374B9] focus:ring-1 focus:ring-[#4374B9] outline-none transition-all"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-[#4374B9] focus:ring-1 focus:ring-[#4374B9] outline-none transition-all"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        className="w-full px-4 py-4 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-[#4374B9] focus:ring-1 focus:ring-[#4374B9] outline-none transition-all"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    className="w-full px-4 py-4 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-[#4374B9] focus:ring-1 focus:ring-[#4374B9] outline-none transition-all"
                                    placeholder="Inquiry Type"
                                />
                            </div>

                            <div>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    rows="6"
                                    className="w-full px-4 py-4 rounded-xl border border-gray-300 placeholder-gray-400 focus:border-[#4374B9] focus:ring-1 focus:ring-[#4374B9] outline-none transition-all resize-none"
                                    placeholder="Message"
                                ></motion.textarea>
                            </div>

                            <div className="pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 text-lg font-medium rounded-full bg-[#4374B9] text-white shadow-lg shadow-blue-500/30 hover:bg-[#365d91] transition-colors"
                                    type="button"
                                >
                                    Send Inquiry
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
