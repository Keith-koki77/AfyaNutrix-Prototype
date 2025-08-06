import type { Metadata } from "next";
import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
 subsets: ["latin"],
 weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights you plan to use
 variable: "--font-poppins", // Optional: Define a CSS variable for easier use with TailwindCSS
 display: "swap", // Ensures text remains visible during font loading
});

export const metadata: Metadata = {
 title: "AfyaNutrix",
 description: "A platform for nutrition professionals to manage their practice",
 generator: "AfyaNutrix",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" className={poppins.className}>
   <body>{children}</body>
  </html>
 );
}
