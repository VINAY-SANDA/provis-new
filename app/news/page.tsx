import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsDisplay from "./NewsDisplay";

export const metadata = {
    title: "Corporate News & Milestones | Provis Biolabs",
    description: "Explore the latest corporate news, facility expansions, and significant milestones from Provis Biolabs.",
    alternates: {
        canonical: "https://provisbiolabs.com/news",
        languages: {
            'en-US': 'https://provisbiolabs.com/news',
            'en-GB': 'https://provisbiolabs.com/news',
            'x-default': 'https://provisbiolabs.com/news',
        }
    }
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'News', item: 'https://provisbiolabs.com/news' }
    ]
};

export default function NewsPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="flex-grow">
                <NewsDisplay />
            </div>
            <Footer />
        </main>
    );
}
