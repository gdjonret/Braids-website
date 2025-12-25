'use client';

import { motion } from "framer-motion";

export default function About() {
    return (
       <section id="About" className="relative overflow-hidden bg-gradient-to-b from-[#fff9e6] via-[#f6e0a4] to-[#e8c96f] py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">The Artist</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
                        Meet <span className="font-serif italic">Zena</span>
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative md:order-2"
                    >
                        <div className="relative overflow-hidden rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                            <img 
                                src="/About/photo1.jpg" 
                                alt="About Zboo's Braiding " 
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-[#f3d27f]/50 blur-3xl"></div>
                        <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-[#ffe7a8]/60 blur-3xl"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-6 md:order-1"
                    >
                        <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500 mb-2">
                            Welcome to Zboo's Braiding 
                        </p>
                        <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                            Hi, I'm <span className="font-medium text-neutral-900">Zena</span>, the creative hands behind ZbooBraids, located in Prince George, VA. I'm an experienced African braider with over 15 years of professional experience creating neat, long-lasting, and stylish braids for clients of all ages.
                        </p>
                        <p className="text-base text-neutral-600 leading-relaxed font-light">
                            Braiding isn't just a skill for me; it's a part of my culture and passion. I take pride in every style I create, blending traditional African techniques with modern trends like knotless braids, boho braids, twists, and soft locs. My goal is to make every client feel confident, beautiful, and cared for from start to finish.
                        </p>
                        <p className="text-base text-neutral-600 leading-relaxed font-light">
                            Clients love that my work is neat, fast, and professional, and that my customer service always goes above and beyond. Whether you're looking for a protective style, a vacation look, or a full transformation, you'll leave my chair looking fabulous the Zboo way.
                        </p>

                        {/* Stats or Features */}
                        {/* <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                                <p className="text-3xl font-bold text-yellow-600">15+</p>
                                <p className="text-sm text-neutral-600 mt-1">Years Experience</p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                                <p className="text-3xl font-bold text-yellow-600">500+</p>
                                <p className="text-sm text-neutral-600 mt-1">Happy Clients</p>
                            </div>
                        </div> */}
                    </motion.div>
                </div>
            </div>
       </section>
    )
}