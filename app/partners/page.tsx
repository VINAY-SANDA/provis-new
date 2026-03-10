import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersContent from "./PartnersContent";

export const metadata = {
    title: "Authorized Global Partners | Provis Biolabs",
    description: "Explore our network of authorized global partners providing local support, reliable delivery, and expert advice for Provis Biolabs products worldwide.",
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <PartnersContent />
            </div>
            <Footer />
        </main>
    );
}
