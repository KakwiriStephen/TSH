import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Treshaw International School",
  description: "Treshaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
