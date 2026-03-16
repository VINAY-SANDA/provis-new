import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CDMOContent from "./CDMOContent";

export const metadata: Metadata = {
    title: "Pharmaceutical CDMO Services & Biomanufacturing | Provis Biolabs",
    description: "Expert Pharmaceutical CDMO Services. Provis Biolabs offers comprehensive contract development and manufacturing for biologics, from fermentation and expression to full-scale commercial GMP production.",
};

export default function CDMOPage() {
    return (
        <main className="bg-[#F8FAFC]">
            <Navbar />
            <CDMOContent />
            <Footer />
        </main>
    );
}
