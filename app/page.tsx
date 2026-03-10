import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutStrip from "./components/AboutStrip";
import Products from "./components/Products";
import CDMO from "./components/CDMO";
import Founder from "./components/Founder";
import Certifications from "./components/Certifications";
import MissionQuote from "./components/MissionQuote";
import GlobalReach from "./components/GlobalReach";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStrip />
      <Products />
      <CDMO />
      {/* <Founder /> */}
      {/* <Certifications /> */}
      <MissionQuote />
      <GlobalReach />
      <CTABanner />
      <Footer />
    </main>
  );
}
