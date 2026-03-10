import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BiosimilarsContent from "./BiosimilarsContent";

export const metadata: Metadata = {
    title: "Biosimilars | Provis Biolabs",
    description:
        "End-to-End expertise for biosimilar development. Comprehensive development services spanning the complete product lifecycle — from early discovery through commercial manufacturing.",
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
