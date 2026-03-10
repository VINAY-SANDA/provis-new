import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Provis Biolabs',
    description: 'Terms and conditions for using the Provis Biolabs website and services.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24 font-outfit">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 border-b border-[#E2E8F0] pb-8">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] mb-4">Terms and Conditions</h1>
                    <p className="text-[#64748B] text-lg">
                        The following terms constitute a legal agreement between you and Provis Biolabs ("the Company"). By accessing, browsing, or using this website, you confirm that you have read, understood, and agree to be bound by these terms and comply with all applicable laws and regulations.
                    </p>
                </div>

                <div className="prose prose-lg prose-slate max-w-none text-[#475569]">

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-10 mb-4">Restrictions on Use of Content</h2>
                    <p className="mb-6 leading-relaxed">
                        This site may contain a range of content, including but not limited to, text, data, photographs, graphics, videos, and other materials ("Content"). Unless explicitly made available for download, most content particularly proprietary materials and works licensed from third parties may not be reproduced or distributed without prior permission.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-10 mb-4">Linked Sites</h2>
                    <div className="space-y-4 mb-6">
                        <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-[#E2E8F0]">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Links to Third-Party Sites:</h3>
                            <p className="leading-relaxed text-[#475569]">
                                This site may include links to websites operated by third parties. These links are provided for convenience only and do not signify our endorsement of the content, services, or practices of such external sites. Access to these sites is at your own discretion and is subject to their individual privacy and usage policies.
                            </p>
                        </div>
                        <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-[#E2E8F0]">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Linking to Our Site:</h3>
                            <p className="leading-relaxed text-[#475569]">
                                You may not link to our website from any external site, blog, or platform without obtaining written consent from Provis Biolabs in advance.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-10 mb-4">Modifications to the Terms</h2>
                    <p className="mb-6 leading-relaxed">
                        Provis Biolabs reserves the right to modify these Terms of Service at any time without prior notice. By continuing to use the site after such changes are posted, you agree to be bound by the revised terms. It is recommended that users periodically review these terms for updates.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-10 mb-4">Trademarks Notice</h2>
                    <p className="mb-6 leading-relaxed">
                        All trademarks displayed on this website are either owned by Provis Biolabs or licensed from third parties. Product and company names mentioned may be trademarks of their respective owners. You may not use any trademarks or logos from this site without express written permission.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-10 mb-4">Copyright Notice</h2>
                    <div className="bg-[#1E3A8A] text-white p-6 rounded-2xl mt-4 mb-6">
                        <p className="font-bold text-lg mb-4">© 2025 Provis Biolabs. All rights reserved.</p>
                        <p className="text-white/80 leading-relaxed text-sm">
                            All content and services provided through this site are protected by intellectual property laws and are owned by Provis Biolabs or its licensors. Except where expressly permitted, no content may be copied, modified, distributed, republished or transmitted without prior written approval from the Company. Use of any content in violation of these terms may result in legal action.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
