import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Provis Biolabs — Pioneering Bioscience for a Healthier World",
  description:
    "Provis Biolabs delivers premium bioreagents, Bio-APIs, and CDMO services to global pharmaceutical and biopharmaceutical innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontBody.variable} ${outfit.variable} font-sans antialiased text-[#475569] bg-[#FFFFFF]`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
