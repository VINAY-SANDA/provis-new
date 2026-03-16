import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsDisplay from "./EventsDisplay";

export const metadata = {
    title: "Upcoming Events & Conferences | Provis Biolabs",
    description: "Stay connected with Provis Biolabs at upcoming global biotechnology conferences, seminars, and product launches.",
    alternates: {
        canonical: "https://provisbiolabs.com/events",
        languages: {
            'en-US': 'https://provisbiolabs.com/events',
            'en-GB': 'https://provisbiolabs.com/events',
            'x-default': 'https://provisbiolabs.com/events',
        }
    }
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://provisbiolabs.com/events' }
    ]
};

export default function EventsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="flex-grow">
                <EventsDisplay />
            </div>
            <Footer />
        </main>
    );
}
