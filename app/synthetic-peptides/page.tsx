import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PeptidesContent from "./PeptidesContent";

export const metadata: Metadata = {
    title: "Custom Synthetic Peptide Manufacturing & GMP Services | Provis Biolabs",
    description: "Premium custom synthetic peptide services at Provis Biolabs. We provide GMP manufacturing, >99% purity, and scale from grams to kilograms for clinical and commercial applications.",
    alternates: {
        canonical: "https://provisbiolabs.com/synthetic-peptides",
        languages: {
            'en-US': 'https://provisbiolabs.com/synthetic-peptides',
            'en-GB': 'https://provisbiolabs.com/synthetic-peptides',
            'x-default': 'https://provisbiolabs.com/synthetic-peptides',
        }
    }
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://provisbiolabs.com' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://provisbiolabs.com/products' },
        { '@type': 'ListItem', position: 3, name: 'Synthetic Peptides', item: 'https://provisbiolabs.com/synthetic-peptides' }
    ]
};

export default function SyntheticPeptidesPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Navbar />
            <PeptidesContent />
            <Footer />
        </main>
    );
}
