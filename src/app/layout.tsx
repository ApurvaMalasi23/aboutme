import "./globals.css";
import Navbar from "@/components/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apurva Malasi",
  description: "Apurva Malasi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white">  {/* Changed body background to black */}
         <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
