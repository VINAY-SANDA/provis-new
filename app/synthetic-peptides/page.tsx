import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";

export const metadata: Metadata = {
    title: "Synthetic Peptides | Provis Biolabs",
    description:
        "Custom peptide synthesis services — GMP manufacturing, purity >99%, from gram to multi-gram scale across research and commercial applications.",
};

export default function SyntheticPeptidesPage() {
    return (
        <main>
            <Navbar />
            <PeptidesContent />
            <Footer />
        </main>
    );
}
