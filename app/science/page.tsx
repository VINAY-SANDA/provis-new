import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SciencePageContent from "./SciencePageContent";

export const metadata: Metadata = {
    title: "Advanced Biologics Research & Development Capabilities | Provis Biolabs",
    description: "Explore the cutting-edge science at Provis Biolabs. From specialized expression systems to advanced bioprocess development, learn how our technology drives the future of biologics.",
};

export default function SciencePage() {
    return (
        <div className="min-h-screen flex flex-col pt-24 font-outfit">
            <Navbar />
            <main className="flex-grow">
                <SciencePageContent />
            </main>
            <Footer />
        </div>
    );
}
