import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy & GDPR Compliance | Provis Biolabs",
    description: "Provis Biolabs Privacy Policy, GDPR Compliance, and Cookie usage information. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-[#F8FAFC]">
            <Navbar />

            <section className="pt-36 pb-20 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Legal</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A8A] leading-tight mb-8">
                        Privacy Policy &amp; GDPR Compliance
                    </h1>
                    <p className="text-[#64748B] text-base mb-12">
                        Last Updated: March 9, 2026
                    </p>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-sm prose prose-slate max-w-none">

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mt-0 mb-4">1. Introduction</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            Provis Biolabs Private Limited ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
                        </p>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            This policy applies to data collected globally, including from residents of the European Economic Area (EEA) and the United Kingdom, in compliance with the General Data Protection Regulation (GDPR) and UK GDPR governing the processing of personal data.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">2. The Data We Collect About You</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, and company name.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">3. How Is Your Personal Data Collected?</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            We use different methods to collect data from and about you including through:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li><strong>Direct interactions:</strong> You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes requesting information about our products or CDMO services.</li>
                            <li><strong>Automated technologies or interactions:</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns using cookies and similar technologies.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">4. How We Use Your Personal Data</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">5. Use of Cookies</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                        </p>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">6. Your Legal Rights (GDPR)</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li>Request access to your personal data.</li>
                            <li>Request correction of your personal data.</li>
                            <li>Request erasure of your personal data.</li>
                            <li>Object to processing of your personal data.</li>
                            <li>Request restriction of processing your personal data.</li>
                            <li>Request transfer of your personal data.</li>
                            <li>Right to withdraw consent.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">7. Contact Details</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
                        </p>
                        <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0] mb-8">
                            <p className="text-[#475569] font-semibold mb-1">Provis Biolabs Private Limited</p>
                            <p className="text-[#475569] mb-1">Email: bd@provisbiolabs.com</p>
                            <p className="text-[#475569] mb-1">Phone (India): +91 9059284828</p>
                            <p className="text-[#475569]">Phone (USA): +1 (650) 996-4951</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
