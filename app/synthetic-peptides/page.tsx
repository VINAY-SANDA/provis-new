import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";

export const metadata: Metadata = {
    title: "Custom Synthetic Peptide Manufacturing & GMP Services | Provis Biolabs",
    description: "Premium custom synthetic peptide services at Provis Biolabs. We provide GMP manufacturing, >99% purity, and scale from grams to kilograms for clinical and commercial applications.",
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
