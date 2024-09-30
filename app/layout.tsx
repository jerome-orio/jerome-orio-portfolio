import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Favicon from './favicon.ico';
import TopNav from "./components/TopNav";

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
  title: "Jerome Orio - Software Developer Portfolio",
  description: "Welcome to my personal portfolio. I am a software developer skilled in JavaScript, React, and Node.js. Explore my projects and get to know my work.",
  icons: [{ rel: 'icon', url: Favicon.src }],
  keywords: ["Jerome Orio", "Software Developer", "Portfolio", "JavaScript", "React", "Next.js", "Web Development"],
  authors: [{ name: "Jerome Orio", url: "https://jerome-orio-portfolio.vercel.app/" }],
  openGraph: {
    title: "Jerome Orio - Software Developer Portfolio",
    description: "Welcome to my personal portfolio. I am a software developer skilled in JavaScript, React, and Node.js. Explore my projects and get to know my work.",
    type: "website",
    url: "https://jerome-orio-portfolio.vercel.app/",
    locale: "en_US",
    siteName: "JeromeOrio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <main className="relative mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
