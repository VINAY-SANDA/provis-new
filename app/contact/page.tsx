import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Provis Biolabs | Partnerships & Business Inquiries",
    description: "Get in touch with the Provis Biolabs team for global partnerships, pharmaceutical CDMO inquiries, career opportunities, and technical support in biotechnology.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#F26522]/20 selection:text-[#1E3A8A]">
            <Navbar />
            <div className="pt-24 mt-8">
                <ContactContent />
            </div>
            <Footer />
        </main>
    );
}
