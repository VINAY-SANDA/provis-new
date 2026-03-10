import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecombinantContent from "./RecombinantContent";

export const metadata: Metadata = {
    title: "Recombinant Bio-Reagents | Provis Biolabs",
    description:
        "100% Animal Origin-Free recombinant proteins and enzymes — GMP-grade, manufactured under ISO, cGMP and FSSC 22000 certified standards.",
};

export default function RecombinantBioReagentsPage() {
    return (
        <main>
            <Navbar />
            <RecombinantContent />
            <Footer />
        </main>
    );
}
