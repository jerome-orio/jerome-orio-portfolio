import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Favicon from './favicon.ico';
import TopNav from '@/components/nav/TopNav';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import { Analytics } from '@vercel/analytics/react';

// Font Imports
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff2',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  preload: true,
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  preload: true,
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://jerome-orio-portfolio.vercel.app/'),
  title: 'Jerome Orio | Software Developer Portfolio',
  description: 'I’m Jerome Orio, a software developer skilled in JavaScript, React, Angular, Svelte, TypeScript, Node.js, Java, Oracle, and NoSQL. Explore my projects!',
  keywords: [
    'Jerome Orio', 'Software Developer', 'Portfolio', 'Java Developer', 'JavaScript Developer',
    'React Developer', 'Next.js Expert', 'Angular Developer', 'Svelte Developer',
    'Web Development Portfolio', 'TypeScript Programmer', 'Node.js Developer',
    'Oracle Developer', 'NoSQL Database', 'Tailwind CSS', 'Software Engineer', 'Projects',
  ],
  icons: {
    icon: [{ url: Favicon.src }],
    apple: [{ url: Favicon.src }],
  },
  authors: [{ name: 'Jerome Orio', url: 'https://jerome-orio-portfolio.vercel.app/' }],
  openGraph: {
    title: 'Jerome Orio | Software Developer Portfolio',
    description: 'I’m Jerome Orio, a software developer skilled in various technologies. Explore my projects!',
    type: 'website',
    url: 'https://jerome-orio-portfolio.vercel.app/',
    locale: 'en_US',
    siteName: 'JeromeOrio',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased min-h-screen !scroll-smooth animate-blurIn`}>
        <Toaster position='top-center' />
        <TopNav />
        <main className='mx-auto p-0 min-h-[calc(100vh-76px)] flex'>
          <div className='hero min-h-min bg-gradient-to-br from-neutral to-secondary-content'>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
