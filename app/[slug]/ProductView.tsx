"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product, products as allProducts } from "../../lib/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProductView({ product }: { product: Product }) {
    // Find related products in the same category (max 3)
    const relatedProducts = allProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="bg-white selection:bg-[#F26522]/20 pb-24">
            {/* Header Section */}
            <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {product.shortDescription && (
                            <p className="text-[#F26522] font-bold tracking-widest uppercase text-xs mb-4">
                                {product.shortDescription}
                            </p>
                        )}
                        <h1 className="text-4xl sm:text-5xl font-outfit font-black text-[#1E3A8A] mb-4">
                            {product.name}
                        </h1>
                        {product.casNumber && (
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">CAS Number</span>
                                <span className="font-mono font-bold text-gray-900">{product.casNumber}</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Placeholder Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] mb-16 relative border border-gray-200 shadow-sm"
                    >
                        {product.image ? (
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover opacity-90"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Product Image Placeholder</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/10 to-transparent mix-blend-multiply" />
                    </motion.div>

                    <div className="space-y-16">

                        {/* Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white"
                        >
                            <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-6 flex items-center gap-4">
                                Overview
                                <div className="h-px bg-gray-200 flex-grow" />
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                {product.description}
                                {product.longDescription && <span className="block mt-4">{product.longDescription}</span>}
                            </p>
                        </motion.div>

                        {/* Key Features */}
                        {product.keyFeatures && product.keyFeatures.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-6 flex items-center gap-4">
                                    Key Features
                                    <div className="h-px bg-gray-200 flex-grow" />
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {product.keyFeatures.map((feature, i) => (
                                        <li key={i} className="flex gap-3 items-start p-4 bg-[#FAFAFA] rounded-xl border border-gray-100">
                                            <CheckCircle2 className="w-5 h-5 text-[#F26522] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Applications */}
                        {product.applications && product.applications.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-outfit font-black text-[#1E3A8A] mb-6 flex items-center gap-4">
                                    Applications
                                    <div className="h-px bg-gray-200 flex-grow" />
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {product.applications.map((app, i) => (
                                        <span key={i} className="px-5 py-2.5 rounded-full bg-[#EFF6FF] text-[#1E3A8A] font-semibold text-sm border border-blue-100/50">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Call to Action Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20 p-8 sm:p-12  rounded-[2.5rem] text-center text-white  relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-outfit font-black mb-4 bg-gradient-to-br ">
                                    Interested in {product.name}?
                                </h3>
                                <p className="text-orange-500 font-bold mb-8 max-w-xl mx-auto text-lg transition-colors">
                                    Contact our team for pricing, CoA, and technical documentation.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex justify-center items-center gap-2 bg-gradient-to-br from-[#F26522] to-[#FF8C55] text-white hover:bg-gray-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
                                >
                                    Request Quote
                                </Link>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-gray-50 border-t border-gray-100 mt-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-outfit font-black text-[#1E3A8A]">
                                Related Products
                            </h2>
                            <Link href="/products" className="group flex items-center text-sm font-bold text-[#F26522]">
                                Back to All Products
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProducts.map((relProduct, idx) => (
                                <Link
                                    key={relProduct.id}
                                    href={relProduct.href}
                                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#F26522]/30 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-block px-2.5 py-1 bg-[#EFF6FF] text-[#1E3A8A] text-[10px] font-bold tracking-widest uppercase rounded">
                                            {relProduct.category === 'api' ? 'API' : relProduct.category === 'reagent' ? 'REAGENT' : 'CDMO'}
                                        </span>
                                        {relProduct.casNumber && (
                                            <span className="text-[10px] font-mono text-gray-400">CAS: {relProduct.casNumber}</span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#F26522] transition-colors line-clamp-1">
                                        {relProduct.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow font-medium leading-relaxed">
                                        {relProduct.shortDescription || relProduct.tagline}
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-bold text-[#F26522]">
                                        View Details
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
