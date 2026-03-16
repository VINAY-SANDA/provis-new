import { getProductBySlug } from "../../lib/data/products";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductView from "./ProductView";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    
    if (!product) return {};
    
    return {
        title: `${product.name} | Provis Biolabs`,
        description: product.shortDescription,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [product.image],
        },
    };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />
            <ProductView product={product} />
            <Footer />
        </main>
    );
}
