"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
    Building2, 
    FlaskConical, 
    PackageCheck, 
    TrendingUp, 
    Globe2, 
    Award, 
    Network,
    Quote
} from "lucide-react";

const timelineData = [
    {
        id: "2025",
        year: "2025",
        title: "USA Operations",
        description: "Established Provis Biolabs LLC in East Hartford, Connecticut. Expanded global presence with Animal Origin Free (AOF) biotechnology products.",
        icon: Network,
        accent: "from-rose-500 to-pink-600",
        color: "#E11D48",
        bgLight: "bg-rose-50"
    },
    {
        id: "2024",
        year: "2024",
        title: "Global Certifications & Jadcherla Facility",
        description: "Achieved WHO-GMP, GLP, Halal and Kosher certifications strengthening regulatory compliance. Initiated construction of a state-of-the-art fermentation manufacturing facility in Jadcherla near Hyderabad.",
        icon: Award,
        accent: "from-amber-500 to-orange-500",
        color: "#F59E0B",
        bgLight: "bg-amber-50"
    },
    {
        id: "2023",
        year: "2023",
        title: "Global Market Expansion",
        description: "Expanded distribution through global B2B platforms including IndiaMART. Product portfolio expanded with synthetic peptides and additional recombinant enzymes.",
        icon: Globe2,
        accent: "from-sky-500 to-blue-600",
        color: "#0EA5E9",
        bgLight: "bg-sky-50"
    },
    {
        id: "2022",
        year: "2022",
        title: "Operational Expansion",
        description: "Expanded R&D and manufacturing capabilities across multiple product programs. Launched CDMO (Contract Development & Manufacturing Organization) services.",
        icon: TrendingUp,
        accent: "from-purple-500 to-fuchsia-600",
        color: "#C026D3",
        bgLight: "bg-purple-50"
    },
    {
        id: "2021",
        year: "2021",
        title: "First Commercial Products",
        description: "Launched first recombinant enzyme products commercially. Established GMP manufacturing facility in Balanagar, Hyderabad with ISO 9001:2015 certification.",
        icon: PackageCheck,
        accent: "from-orange-500 to-red-600",
        color: "#EA580C",
        bgLight: "bg-orange-50"
    },
    {
        id: "2020",
        year: "2020",
        title: "Pipeline Development",
        description: "Developed a pipeline of 10+ biotechnology products including Bio-APIs and recombinant reagents. Established core fermentation and downstream bioprocessing platform.",
        icon: FlaskConical,
        accent: "from-emerald-500 to-teal-600",
        color: "#10B981",
        bgLight: "bg-emerald-50"
    },
    {
        id: "2019",
        year: "2019",
        title: "Company Founded",
        description: "Provis Biolabs Pvt. Ltd. founded by Dr. Bala Reddy in Hyderabad. R&D operations began at Aspire-BioNest incubator at University of Hyderabad.",
        icon: Building2,
        accent: "from-indigo-500 to-blue-600",
        color: "#4F46E5",
        bgLight: "bg-indigo-50"
    }
];

export default function NewsDisplay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="bg-[#F8FAFC] py-24 sm:py-32 font-outfit relative overflow-hidden">
            {/* Soft Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/40 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100/40 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-24 md:mb-32 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 text-[#1E3A8A] font-bold tracking-[0.15em] uppercase text-xs mb-6 border border-blue-100 shadow-sm">
                          News & Milestones
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
                            Building the Future of <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
                                Biotechnology
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                            Since our inception in 2019, Provis Biolabs has continuously pushed the boundaries of sustainable biotech manufacturing, transforming ideas into globally trusted solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="relative" ref={containerRef}>
                    {/* Seamless vertical timeline track */}
                    <div className="absolute left-[38px] md:left-1/2 top-4 bottom-4 w-1.5 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#0EA5E9] origin-top rounded-full"
                            style={{ scaleY, height: '100%' }}
                        />
                    </div>

                    <div className="space-y-16 sm:space-y-24">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 sm:p-20 bg-[#F8FAFC] rounded-[60px] border border-[#E2E8F0] text-center relative overflow-hidden"
                >
                    <Quote className="absolute top-10 left-10 w-20 h-20 text-[#1E3A8A]/5 rotate-180" />
                    <Quote className="absolute bottom-10 right-10 w-20 h-20 text-[#1E3A8A]/5 " />
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-6 italic">
                        &quot;Innovation is at the heart of our journey. Every milestone we achieve is a step closer to a sustainable biotech future&quot;
                    </h3>
                </motion.div>

              
            </div>
        </section>
    );
}

const TimelineItem = ({ item, index }: { item: typeof timelineData[0], index: number }) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${
                isLeft ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            {/* Desktop spacer to push content left or right */}
            <div className="hidden md:block md:w-[45%]" />

            {/* Center line dot / icon marker */}
            <div className="absolute left-[38px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 mt-8 md:mt-0">
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-4 border-[#F8FAFC] shadow-lg flex items-center justify-center bg-gradient-to-br ${item.accent} relative z-20 cursor-default transition-all duration-300 hover:shadow-xl hover:shadow-${item.color}/20`}
                >
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
            </div>

            {/* Content Card container */}
            <div className={`w-full pl-24 pr-4 md:px-0 md:w-[45%] ${isLeft ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"} mt-0`}>
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="p-6 sm:p-8 lg:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
                >
                    {/* Very subtle background wash from the brand color */}
                    <div 
                        className="absolute inset-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06]"
                        style={{ backgroundColor: item.color }} 
                    />
                    
                    <div className="relative z-10 flex flex-col h-full justify-center">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit mb-5 ${item.bgLight} border border-white/50 shadow-sm`}>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="font-bold text-sm tracking-wide" style={{ color: item.color }}>
                                {item.year}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-800 mb-4 leading-[1.2]">
                            {item.title}
                        </h3>
                        
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
        
    );
};
