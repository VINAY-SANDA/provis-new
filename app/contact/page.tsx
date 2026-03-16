import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Provis Biolabs | Partnerships & Business Inquiries",
    description: "Get in touch with the Provis Biolabs team for global partnerships, pharmaceutical CDMO inquiries, career opportunities, and technical support in biotechnology.",
    alternates: {
        canonical: "https://provisbiolabs.com/contact",
        languages: {
            'en-US': 'https://provisbiolabs.com/contact',
            'en-GB': 'https://provisbiolabs.com/contact',
            'x-default': 'https://provisbiolabs.com/contact',
        }
    }
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://provisbiolabs.com/contact' }
    ]
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#F26522]/20 selection:text-[#1E3A8A]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <div className="pt-24 mt-8">
                <ContactContent />
            </div>
            <Footer />
        </main>
    );
}
