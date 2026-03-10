import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CDMOContent from "./CDMOContent";

export const metadata: Metadata = {
    title: "CDMO Services | Provis Biolabs",
    description: "Provis Biolabs CDMO Services. Comprehensive contract development and manufacturing from early-stage development to full-scale commercial GMP production.",
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
