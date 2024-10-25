import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Favicon from './favicon.ico';
import TopNav from '@/components/TopNav';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Jerome Orio | Software Developer Portfolio',
  description:
    'I’m Jerome Orio, a software developer skilled in JavaScript, React, Angular, Svelte, TypeScript, Node.js, Java, Oracle, and NoSQL. Explore my projects!',
  keywords: [
    'Jerome Orio',
    'Software Developer',
    'Portfolio',
    'Java Developer',
    'JavaScript Developer',
    'React Developer',
    'Next.js Expert',
    'Angular Developer',
    'Svelte Developer',
    'Web Development Portfolio',
    'TypeScript Programmer',
    'Node.js Developer',
    'Oracle Developer',
    'NoSQL Database',
    'Tailwind CSS',
    'Software Engineer',
    'Projects',
  ],
  icons: [{ rel: 'icon', url: Favicon.src }],
  authors: [
    { name: 'Jerome Orio', url: 'https://jerome-orio-portfolio.vercel.app/' },
  ],
  openGraph: {
    title: 'Jerome Orio | Software Developer Portfolio',
    description:
      'I’m Jerome Orio, a software developer skilled in JavaScript, React, Angular, Svelte, TypeScript, Node.js, Java, Oracle, and NoSQL. Explore my projects!',
    type: 'website',
    url: 'https://jerome-orio-portfolio.vercel.app/',
    locale: 'en_US',
    siteName: 'JeromeOrio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased min-h-screen !scroll-smooth animate-blurIn`} >
        {/* <!-- Toaster Message --> */}
        <Toaster position='top-center' />

        {/* <!-- Sticky Top Navigation --> */}
        <TopNav />

        {/* <!-- Main Content --> */}
        <main className='container mx-auto p-0 min-h-[calc(100vh-76px)] flex'>
          <div className='hero min-h-min bg-gradient-to-br from-neutral to-secondary-content'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
