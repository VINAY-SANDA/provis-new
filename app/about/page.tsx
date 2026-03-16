import Navbar from "../components/Navbar";
import About from "../components/About";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Provis Biolabs — Leading Biotechnology & Bioprocessing Experts",
  description:
    "Learn about Provis Biolabs — our journey as a global leader in bioscience, our mission to innovate for a healthier world, and the core PROVIS values that drive our excellence.",
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
