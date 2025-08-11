import type { Metadata, Viewport } from "next";
import "../../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({
 subsets: ["latin"],
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 variable: "--font-poppins",
 display: "swap",
});

export const viewport: Viewport = {
 width: "device-width",
 initialScale: 1,
};

export const metadata: Metadata = {
 title: "AfyaNutrix - Professional Nutrition Management Platform",
 description:
  "Empower your nutrition practice with cutting-edge tools designed for modern healthcare professionals. Scale from individual practice to enterprise-level operations.",
 generator: "AfyaNutrix",
 keywords:
  "nutrition, healthcare, client management, meal planning, nutritionist tools",
 authors: [{ name: "AfyaNutrix Team" }],
};

export default function PublicLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className={poppins.className}>
   <body className="min-h-screen bg-white">
    <Header />
    {/* Add padding-top to account for fixed header */}
    <main className="pt-16">{children}</main>
   </body>
  </html>
 );
}
