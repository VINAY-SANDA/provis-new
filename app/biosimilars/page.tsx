import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiosimilarsContent from "./BiosimilarsContent";

export const metadata: Metadata = {
    title: "Biosimilar Development & Analytical Characterization | Provis Biolabs",
    description: "End-to-End expertise in Biosimilar development. Provis Biolabs provides comprehensive services spanning the complete product lifecycle — from discovery and molecular characterization to commercial manufacturing.",
};

export default function BiosimilarsPage() {
    return (
        <main>
            <Navbar />
            <BiosimilarsContent />
            <Footer />
        </main>
    );
}
