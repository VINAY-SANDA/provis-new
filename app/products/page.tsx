import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsCatalog from "../../app/components/ProductsCatalog";

export const metadata: Metadata = {
    title: "Products | Provis Biolabs",
    description:
        "Explore Provis Biolabs' full product catalog: Bio-APIs, Recombinant Bio-Reagents, Synthetic Peptides, and Biosimilar pipeline products — Animal origin-free. WHO-GMP manufactured.",
};

export default function ProductsPage() {
    return (
        <main>
            <Navbar />
            <ProductsCatalog />
            <Footer />
        </main>
    );
}
