import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsDisplay from "./NewsDisplay";

export const metadata = {
    title: "Corporate News & Milestones | Provis Biolabs",
    description: "Explore the latest corporate news, facility expansions, and significant milestones from Provis Biolabs.",
};

export default function NewsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <NewsDisplay />
            </div>
            <Footer />
        </main>
    );
}
