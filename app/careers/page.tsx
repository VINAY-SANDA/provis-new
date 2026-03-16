import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersContent from "./CareersContent";

export const metadata = {
    title: "Careers | Provis Biolabs",
    description: "Join the team at Provis Biolabs. Discover opportunities to innovate, grow, and impact the future of biotechnology.",
    alternates: {
        canonical: "https://provisbiolabs.com/careers",
        languages: {
            'en-US': 'https://provisbiolabs.com/careers',
            'en-GB': 'https://provisbiolabs.com/careers',
            'x-default': 'https://provisbiolabs.com/careers',
        }
    }
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://provisbiolabs.com/careers' }
    ]
};

export default function CareersPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="flex-grow">
                <CareersContent />
            </div>
            <Footer />
        </main>
    );
}
