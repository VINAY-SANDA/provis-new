import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersContent from "./CareersContent";

export const metadata = {
    title: "Careers | Provis Biolabs",
    description: "Join the team at Provis Biolabs. Discover opportunities to innovate, grow, and impact the future of biotechnology.",
};

export default function CareersPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <CareersContent />
            </div>
            <Footer />
        </main>
    );
}
