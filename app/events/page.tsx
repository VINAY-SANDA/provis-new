import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsDisplay from "./EventsDisplay";

export const metadata = {
    title: "Upcoming Events & Conferences | Provis Biolabs",
    description: "Stay connected with Provis Biolabs at upcoming global biotechnology conferences, seminars, and product launches.",
};

export default function EventsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <Navbar />
            <div className="flex-grow">
                <EventsDisplay />
            </div>
            <Footer />
        </main>
    );
}
