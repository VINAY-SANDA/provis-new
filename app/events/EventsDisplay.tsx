"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Rocket, Users, Presentation } from "lucide-react";

const eventItems = [
    {
        id: "future-event-placeholder",
        day: "28",
        month: "OCT",
        year: "2024",
        category: "Upcoming Innovation",
        title: "Launch of Next-Generation Recombinant Portfolio",
        description: "Building on our existing microbial and mammalian expression capabilities, Provis Biolabs is preparing to unveil a comprehensive suite of advanced recombinant proteins and high-fidelity enzymes tailored for cell and gene therapy applications.",
        icon: Rocket,
        location: "Global Digital Release",
        type: "Product Launch"
    },
    {
        id: "bio-summit-2024",
        day: "15",
        month: "NOV",
        year: "2024",
        category: "Scientific Summit",
        title: "Advances in Bioprocessing & Strain Engineering",
        description: "Join our senior scientists as they present the latest breakthroughs in high-density fermentation and mammalian cell line optimization. A deep dive into ICH-validated analytical methods.",
        icon: Presentation,
        location: "Tech Hub, Hyderabad",
        type: "Seminar"
    },
    {
        id: "partner-meet-2024",
        day: "05",
        month: "DEC",
        year: "2024",
        category: "Networking",
        title: "Provis Annual CDMO Partnership Meet",
        description: "An exclusive gathering for our global partners to discuss future roadmap, facility scale-ups, and collaborative R&D opportunities in the biologics space.",
        icon: Users,
        location: "Grand Regency Hotel",
        type: "Conference"
    }
];

export default function EventsDisplay() {
    return (
        <section className="bg-[#F8FAFC] py-24 font-outfit min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#F26522] font-black tracking-[0.2em] uppercase text-xs mb-4"
                        >
                            Global Engagement
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl font-black text-[#1E3A8A] leading-tight"
                        >
                            Upcoming <span className="text-[#94A3B8]">Events</span>
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-[#64748B] text-sm sm:text-base font-medium"
                    >
                        Stay updated with our latest participation in global biotech summits, seminars, and exclusive product launch events.
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {eventItems.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[32px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden"
                        >
                            {/* Accent Background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522]/5 rounded-full blur-3xl group-hover:bg-[#F26522]/10 transition-colors" />

                            {/* Header: Date Badge & Category */}
                            <div className="flex justify-between items-start mb-10">
                                <div className="flex flex-col items-center justify-center w-16 h-20 bg-[#1E3A8A] rounded-2xl text-white shadow-lg relative z-10">
                                    <span className="text-xl font-black tracking-tighter">{event.day}</span>
                                    <span className="text-[10px] font-bold tracking-widest opacity-80">{event.month}</span>
                                    <div className="absolute -bottom-1 w-8 h-[2px] bg-[#F26522]" />
                                </div>
                                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#F26522]">
                                    <event.icon className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mb-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#F26522]">
                                    {event.type}
                                </span>
                            </div>

                            <h3 className="text-xl font-black text-[#1E3A8A] mb-4 leading-snug group-hover:text-[#F26522] transition-colors">
                                {event.title}
                            </h3>

                            <p className="text-[#64748B] text-sm leading-relaxed mb-8 flex-grow font-medium">
                                {event.description}
                            </p>

                            {/* Footer */}
                            <div className="pt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[#475569] text-xs font-bold">
                                    <MapPin className="w-4 h-4 text-[#F26522]" />
                                    {event.location}
                                </div>
                                <button className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center hover:bg-[#F26522] transition-colors shadow-md">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Box */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 sm:p-12 bg-[#1E3A8A] rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                    <div className="relative z-10 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Want to meet us?</h2>
                        <p className="text-blue-200/70 font-medium">Subscribe to our newsletter to receive event invites.</p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F26522] min-w-[280px]"
                        />
                        <button className="px-8 py-4 rounded-2xl bg-[#F26522] text-white font-black uppercase tracking-widest text-sm hover:bg-[#d95a1e] transition-all shadow-lg">
                            Notify Me
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
