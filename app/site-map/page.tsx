import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap | Provis Biolabs',
    description: 'Explore the full structure and directory of the Provis Biolabs website.',
};

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24 font-outfit">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 border-b border-[#E2E8F0] pb-8">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] mb-4">Sitemap</h1>
                    <p className="text-[#64748B] text-lg">Navigate through the Provis Biolabs digital presence.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Primary Links */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-sm">Main Sections</h2>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-[#1E3A8A] font-semibold hover:text-[#F26522] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-[#1E3A8A] font-semibold hover:text-[#F26522] transition-colors">About Us</Link></li>
                            <li><Link href="/science" className="text-[#1E3A8A] font-semibold hover:text-[#F26522] transition-colors">Science &amp; Technology</Link></li>
                            <li><Link href="/products" className="text-[#1E3A8A] font-semibold hover:text-[#F26522] transition-colors">All Products</Link></li>
                            <li><Link href="/cdmo" className="text-[#1E3A8A] font-semibold hover:text-[#F26522] transition-colors">CDMO Services</Link></li>

                            <li><Link href="/contact" className="text-[#1E3A8A] font-semibold hover:text-[#F26522] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-sm">Products Directory</h2>
                        <ul className="space-y-4">
                            <li><Link href="/products/bio-apis" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Bio-APIs</Link></li>
                            <li><Link href="/products/recombinant-bio-reagents" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Recombinant Bio-Reagents</Link></li>
                            <li><Link href="/synthetic-peptides" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Synthetic Peptides</Link></li>
                            <li><Link href="/biosimilars" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Biosimilars</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h2 className="text-xl font-bold text-[#F26522] mb-6 uppercase tracking-widest text-sm">Legal &amp; Policies</h2>
                        <ul className="space-y-4">
                            <li><Link href="/privacy-policy" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/terms" className="text-[#1E3A8A] font-medium hover:text-[#F26522] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
