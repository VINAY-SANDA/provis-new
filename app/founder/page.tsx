import Navbar from "../components/Navbar";
import Founder from "../components/Founder";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata = {
    title: "Our Founder — Provis Biolabs",
    description: "Learn about Dr. Bala Reddy, Founder & Managing Director of Provis Biolabs.",
};

export default function FounderPage() {
    return (
        <main>
            <Navbar />
            <Founder />
            <CTABanner />
            <Footer />
        </main>
    );
}
