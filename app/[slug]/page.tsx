import { getProductBySlug } from "../../lib/data/products";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductView from "./ProductView";

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
