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
  title: "Jerome Orio | Expert Software Developer Portfolio",
  description: "Welcome to the portfolio of Jerome Orio, a skilled software developer specializing in Java, JavaScript, React, Next.js, Angular, Svelte, TypeScript, Node.js, Oracle, and NoSQL databases. Discover innovative projects and my approach to web development.",
  keywords: [
    "Jerome Orio",
    "Software Developer",
    "Portfolio",
    "Java Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Expert",
    "Angular Developer",
    "Svelte Developer",
    "Web Development Portfolio",
    "TypeScript Programmer",
    "Node.js Developer",
    "Oracle Developer",
    "NoSQL Database",
    "Tailwind CSS",
    "Software Engineer"
  ],
  icons: [{ rel: 'icon', url: Favicon.src }],
  authors: [{ name: "Jerome Orio", url: "https://jerome-orio-portfolio.vercel.app/" }],
  openGraph: {
    title: "Jerome Orio | Expert Software Developer Portfolio",
    description: "Welcome to the portfolio of Jerome Orio, a skilled software developer specializing in Java, JavaScript, React, Next.js, Angular, Svelte, TypeScript, Node.js, Oracle, and NoSQL databases. Discover innovative projects and my approach to web development.",
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
