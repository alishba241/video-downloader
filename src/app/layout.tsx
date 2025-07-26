import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

import { Syne } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
})

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
  icons: {
    icon: "/favicon.png?v=2",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-syne`}
      >
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
