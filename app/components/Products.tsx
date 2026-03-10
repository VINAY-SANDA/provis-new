"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
    {
        id: "BIO-APIS",
        title: "Bio-APIs",
        shortDesc: "Pharmaceutical grade active ingredients.",
        href: "/products/bio-apis"
    },
    {
        id: "RECOMBINANT BIO-REAGENTS",
        title: "Recombinant Bio-Reagents",
        shortDesc: "100% Animal Origin-Free essential reagents.",
        href: "/products/recombinant-bio-reagents"
    },
    {
        id: "SYNTHETIC PEPTIDES",
        title: "Synthetic Peptides",
        shortDesc: "Custom peptide synthesis services.",
        href: "/synthetic-peptides"
    },
    {
        id: "BIOSIMILARS",
        title: "Biosimilars",
        shortDesc: "End-to-End complex biologics pipeline.",
        href: "/biosimilars"
    }
];

const products = [
    {
        category: "BIO-APIS",
        tag: "Oncology",
        name: "L-Asparaginase",
        desc: "WHO-GMP bulk enzyme for acute lymphoblastic leukemia (ALL) treatment — depletes asparagine to inhibit tumor cell growth.",
    },
    {
        category: "BIO-APIS",
        tag: "Oncology",
        name: "Pegaspargase",
        desc: "PEGylated L-Asparaginase with extended half-life — reduces immunogenicity and dosing frequency in ALL protocols.",
    },
    {
        category: "BIO-APIS",
        tag: "Cardiology",
        name: "Streptokinase",
        desc: "Thrombolytic enzyme for acute myocardial infarction and pulmonary embolism.",
    },
    {
        category: "BIO-APIS",
        tag: "Orthopedics",
        name: "Sodium Hyaluronate",
        desc: "Injectable-grade hyaluronic acid for viscosupplementation and ophthalmic applications.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Bioprocessing, Cell & Gene Therapy",
        name: "Provinase®",
        desc: "Recombinant endonuclease (Benzonase® alternative) — WHO-GMP, AOF, USP-grade for host cell DNA removal in biologics.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Cell Culture",
        name: "Recombinant Trypsin",
        desc: "USP-grade AOF trypsin for cell dissociation, viral vaccine production, and recombinant insulin processing.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Insulin Production",
        name: "Carboxypeptidase B",
        desc: "Recombinant serine protease for C-terminal lysine and arginine residue removal in insulin production.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Vaccine Stabilizer, Cell Culture",
        name: "Recombinant Human Albumin",
        desc: "AOF vaccine stabilizer and cell culture supplement — replaces bovine serum albumin.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Diagnostics",
        name: "Streptavidin",
        desc: "High-purity biotin-binding protein for diagnostics, purification, and imaging applications.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Glycobiology",
        name: "PNGase F",
        desc: "Recombinant N-glycosidase for complete deglycosylation of glycoproteins in antibody characterization.",
    },
    {
        category: "RECOMBINANT BIO-REAGENTS",
        tag: "Protein Production",
        name: "Enterokinase",
        desc: "Highly specific protease for fusion tag cleavage in recombinant protein production.",
    },
    {
        category: "SYNTHETIC PEPTIDES",
        tag: "Custom Synthesis",
        name: "Custom Peptide Synthesis",
        desc: "GMP and research-grade synthetic peptides for therapeutics, diagnostics, and vaccine development.",
    },
    {
        category: "BIOSIMILARS",
        tag: "Pipeline",
        name: "Biosimilar Pipeline",
        desc: "Active development of biosimilar candidates targeting high-unmet-need therapeutic areas.",
    },
];

export default function Products() {
    const [active, setActive] = useState("BIO-APIS");
    const filtered = products.filter((p) => p.category === active);
    const activeCategory = categories.find((c) => c.id === active)!;

    return (
        <section id="products" className="py-24 lg:py-32 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header matching the mockup styling */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-14 text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E3A8A] mb-4 leading-tight">
                        <span className="text-[#F26522]">Our Products</span> <br />
                    </h3>
                </motion.div>

                {/* Highly Prominent Category Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {categories.map((cat, i) => {
                        const isActive = active === cat.id;
                        return (
                            <motion.button
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                                onClick={() => setActive(cat.id)}
                                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 overflow-hidden group ${isActive
                                    ? "bg-white border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.15)] ring-1 ring-[#F26522]"
                                    : "bg-white/50 border-[#E2E8F0] hover:bg-white hover:border-[#1E3A8A]/30 hover:shadow-md"
                                    }`}
                            >
                                <div className="mb-4">
                                    <div className="w-full h-32 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl border border-[#E2E8F0] flex items-center justify-center group-hover:border-[#1E3A8A]/20 transition-colors">
                                        <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest px-3 py-1 bg-white rounded-md shadow-sm">
                                            Image Placeholder
                                        </span>
                                    </div>
                                </div>
                                <h4 className={`text-lg font-bold mb-2 transition-colors ${isActive ? "text-[#F26522]" : "text-[#1E3A8A]"}`}>
                                    {cat.title}
                                </h4>
                                <p className="text-sm text-[#64748B] leading-relaxed">
                                    {cat.shortDesc}
                                </p>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Details Section for the Active Category */}
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E2E8F0] shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#F1F5F9] pb-8">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#FFF0E6] text-[#F26522] text-[10px] font-outfit font-bold tracking-widest uppercase rounded mb-3">
                                Category Overview
                            </span>
                            <h3 className="text-2xl font-bold text-[#1E3A8A]">
                                {activeCategory.title}
                            </h3>
                        </div>
                        <Link
                            href={activeCategory.href}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#F26522] hover:bg-[#d95a1e] transition-all duration-300 flex-shrink-0"
                        >
                            Explore Full Category <span className="text-lg leading-none">→</span>
                        </Link>
                    </div>

                    {/* Products Grid */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filtered.map((product, i) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                                    className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-md hover:border-[#1E3A8A]/20 transition-all duration-300 flex flex-col h-full group"
                                >
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {product.tag.split(',').map((t, idx) => (
                                            <span key={idx} className="inline-block px-2.5 py-1 bg-white border border-[#E2E8F0] text-[#1E3A8A] text-[10px] font-outfit font-bold tracking-widest uppercase rounded shadow-sm">
                                                {t.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-[17px] font-bold text-[#1E3A8A] mb-2 leading-tight">
                                        {product.name}
                                    </h4>

                                    <p className="text-[#64748B] text-[13px] leading-relaxed mb-6 flex-grow">
                                        {product.desc}
                                    </p>

                                    <Link href={activeCategory.href} className="mt-auto inline-flex items-center text-sm font-bold text-[#F26522] cursor-pointer">
                                        View Details
                                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
