"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

import { products as allProducts } from '../../../lib/data/products';

const apiProducts = allProducts.filter(p => p.category === 'api');

const qualityPoints = [
    "Personnel training records",
    "Manufactured and tested under GMP guidelines",
    "Batch-to-batch consistency",
    "Testing and traceability of raw material",
    "Documentation of QA, QC and Production",
    "Records of maintenance and equipment calibration",
    "Stability monitors of product shelf life",
    "Antibiotic-free and solvent-free manufacturing process",
    "Animal origin free raw materials",
    "TSE/BSE free certified — complies with IP/USP/EP/BP",
    "Following ICH Q7 principles to meet international standards",
    "Drug Master File (DMF) as per ICH M4 guideline",
];

export default function BioApisContent() {
    return (
        <>
            {/* ── Hero ──────────────────────────── */}
            <section className="relative overflow-hidden pt-36 pb-20 bg-[#F8FAFC]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.p {...fade()} className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">
                        Products
                    </motion.p>
                    <motion.h1 {...fade(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight mb-4">
                        Bio-APIs
                    </motion.h1>
                    <motion.p {...fade(0.2)} className="text-base text-[#64748B] max-w-3xl leading-relaxed mb-8">
                        Provis Biolabs manufactures and supplies pharmaceutical-grade Biological Active Pharmaceutical Ingredients (Bio-APIs) — meeting the highest international quality standards for life-saving therapies.
                    </motion.p>
                    <motion.div {...fade(0.3)} className="flex flex-wrap gap-3">
                        <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(242,101,34,0.3)]">
                            Enquire Now →
                        </Link>
                        <Link href="/products" className="px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                            All Products
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Products ──────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fade()} className="mb-12">
                        <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Our Bio-APIs</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">Explore Our Bio-API Products</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {apiProducts.map((p, i) => (
                            <motion.div
                                key={p.id}
                                {...fade(i * 0.08)}
                                className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-2xl hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] hover:border-[#F26522]/30 transition-all duration-500 group flex flex-col overflow-hidden"
                            >
                                <Link href={p.href} className="p-8 flex flex-col h-full cursor-pointer">
                                    {/* Image placeholder */}
                                    <div className="w-full h-48 rounded-xl bg-gray-100 mb-6 border border-[#E2E8F0] group-hover:border-[#F26522]/20 transition-colors relative overflow-hidden shrink-0">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-block px-2.5 py-1 bg-[#FFF0E6] text-[#F26522] text-[10px] font-bold tracking-widest uppercase rounded">
                                            {p.category === 'api' ? 'API' : p.category}
                                        </span>
                                        <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold tracking-widest uppercase rounded">
                                            {p.grade}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#F26522] transition-colors">{p.name}</h3>
                                    <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-grow">{p.shortDescription}</p>
                                    <div className="flex gap-4 mt-auto">
                                        <span className="inline-flex items-center text-sm font-bold text-[#F26522]">
                                            View Product <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quality Statement ─────────────── */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fade()}>
                            <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Quality</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">Our Commitment to Quality</h2>
                            <p className="text-[#475569] text-base leading-relaxed mb-8">
                                At Provis Biolabs, quality is our hallmark. We adhere to stringent international standards, including ISO and cGMP certifications, ensuring that every product meets the highest quality benchmarks.
                            </p>
                            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 mb-6">
                                <h3 className="font-bold text-[#1E3A8A] mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-[#1E3A8A] flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">✦</span>
                                    </span>
                                    GMP Quality Statement
                                </h3>
                                <ul className="grid grid-cols-1 gap-2.5">
                                    {qualityPoints.map((q) => (
                                        <li key={q} className="flex items-start gap-2.5 text-sm text-[#475569]">
                                            <span className="text-[#F26522] font-bold mt-0.5 flex-shrink-0">✓</span>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Accreditations */}
                        <motion.div {...fade(0.1)}>
                            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 mb-6">
                                <h3 className="font-bold text-[#1E3A8A] mb-6 text-lg">Our Accreditations</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {["WHO-GMP", "ISO", "cGMP", "FSSC 22000", "ICH Q7", "AOF"].map((acc) => (
                                        <div key={acc} className="aspect-square bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-xl flex items-center justify-center p-3 text-center hover:border-[#F26522]/30 transition-colors">
                                            <span className="text-xs font-bold text-[#1E3A8A] leading-tight">{acc}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-[#94a3b8] mt-4 text-center">Certification logos — coming soon</p>
                            </div>

                            <div className="bg-[#1E3A8A] rounded-2xl p-8 text-white">
                                <h3 className="font-bold text-lg mb-3">Ready to enquire?</h3>
                                <p className="text-[#93C5FD] text-sm leading-relaxed mb-5">
                                    Contact our team for technical specifications, CoA, DMF access, and pricing.
                                </p>
                                <Link href="/contact" className="inline-block px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all">
                                    Contact Our Team →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
