"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex text-left items-center overflow-hidden bg-white">

            {/* Background Video with Reliable Poster Fallback */}
            <div className="absolute inset-0 z-0 bg-[#F8FAFC]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply filter contrast-125"
                >
                    <source
                        src="/8940760-uhd_3840_2160_25fps.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Ultra-clean white gradient overlay to fade the video into the background, 
                    creating an Apple-like pristine white environment where the video is just subtle motion */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/69 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">



                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl sm:text-7xl lg:text-[5.5rem] font-outfit font-black tracking-tight leading-[1.1] text-[#1E3A8A] mb-8"
                    > Empowered  <br/>
                        by 
                        <span className="text-[#F26522]"> Science.</span><br />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl sm:text-2xl text-[#475569] font-normal leading-relaxed mb-12 max-w-2xl"
                    >
                    Premium animal-origin-free bioreagents, therapeutic enzymes, and GMP-grade APIs for global pharmaceutical and biopharmaceutical innovators.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <a
                            href="/products"
                            className="px-8 py-4 rounded-full font-bold text-white bg-[#F26522] hover:bg-[#E85B18] shadow-[0_8px_30px_rgb(242,101,34,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Explore Products
                        </a>
                        <a
                            href="/cdmo"
                            className="group px-8 py-4 rounded-full font-bold text-[#1E3A8A] bg-transparent hover:bg-[#F8FAFC] border border-[#E2E8F0] transition-all flex items-center gap-2"
                        >
                            CDMO Services
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
