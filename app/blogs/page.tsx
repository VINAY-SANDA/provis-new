import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogsContent from "./BlogsContent";

export const metadata = {
    title: "Biotechnology Insights & Industry Discoveries | Provis Biolabs Blogs",
    description: "Explore the latest insights, breakthroughs, and trends in the biotechnology industry. Stay updated with Provis Biolabs expert articles on recombinant proteins, mammalian expression, and more.",
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <BlogsContent />
            </div>
            <Footer />
        </main>
    );
}
