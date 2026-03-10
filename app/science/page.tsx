import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SciencePageContent from "./SciencePageContent";

export const metadata: Metadata = {
    title: "Science & Technology | Provis Biolabs",
    description: "Discover Provis Biolabs' research focus, specialized technologies, capabilities, and our cutting-edge development pipeline for biologics and bioreagents.",
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
