import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BioApisContent from "./BioApisContent";

export const metadata: Metadata = {
    title: "Bio-APIs | Provis Biolabs",
    description:
        "Provis Biolabs Bio-APIs — GMP-grade biological active pharmaceutical ingredients including L-Asparaginase, Pegaspargase, Streptokinase, and Sodium Hyaluronate.",
};

export default function BioApisPage() {
    return (
        <main>
            <Navbar />
            <BioApisContent />
            <Footer />
        </main>
    );
}
