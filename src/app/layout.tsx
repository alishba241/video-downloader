import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from 'next/font/google';
import Header from "./components/header";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Free Online Video Downloader - Download HD Videos Fast",
  description: "Download videos from YouTube , Facebook , TikTok & more in HD with our free online video downloader. Fast , secure & no app required. Try it now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
