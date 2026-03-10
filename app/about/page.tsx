import Navbar from "../components/Navbar";
import About from "../components/About";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us — Provis Biolabs",
  description:
    "Learn about Provis Biolabs — our story, vision, mission, and the PROVIS values that drive us.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
        <About />
      <CTABanner />
      <Footer />
    </main>
  );
}
