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
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  title: {
    template: 'Jerome Orio | %s | Full-Stack Software Developer | Portfolio',
    default: 'Jerome Orio | Home | Full-Stack Software Developer | Portfolio',
  },
  description: 'I’m Jerome Orio, a software developer skilled in JavaScript, React, Angular, Svelte, TypeScript, Node.js, Java, Oracle, and NoSQL. Explore my projects!',
  keywords: [
    // Personal Branding
    'Jerome Orio', 'Orio', 'Jerome', 'Jerome Orio Software Developer', 'Jerome Orio Portfolio',

    // Roles and Titles
    'Software Developer', 'Software Engineer', 'Java Developer', 'JavaScript Developer',
    'TypeScript Programmer', 'Front-end Developer', 'Back-end Developer', 'Full-stack Developer',
    'Web Developer', 'React Developer', 'Next.js Expert', 'Angular Developer', 'Svelte Developer',
    'Node.js Developer', 'Oracle Developer',

    // Technologies and Frameworks
    'React', 'Next.js', 'Angular', 'Svelte', 'Node.js', 'Java', 'JavaScript', 'TypeScript',
    'Oracle', 'NoSQL Database', 'Tailwind CSS', 'RESTful API', 'Spring Boot', 'Elasticsearch',
    'Kibana', 'Vite', 'SvelteKit', 'Redux', 'GraphQL',

    // Development Skills
    'Web Development', 'Front-end Development', 'Back-end Development', 'Full-stack Development',
    'Microservices Architecture', 'Single-page Applications', 'Responsive Web Design',
    'Client-side Architecture', 'Server-side Development', 'Database Management',
    'Real-time Applications', 'API Integration', 'Data Visualization', 'Performance Optimization',

    // Tools and Platforms
    'Vercel', 'GitHub', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Firebase', 'Heroku',
    'Webpack', 'Babel', 'Postman', 'Figma', 'Jira', 'Agile Development',

    // Project Types and Specializations
    'Web Development Portfolio', 'Real-time Chat Applications', 'E-commerce Platforms',
    'Content Management Systems', 'Progressive Web Apps', 'Enterprise Solutions',
    'Custom Software Solutions', 'Interactive Dashboards', 'Data Analytics Tools',
    'Mobile-responsive Websites', 'SEO Optimization',

    // Additional Relevant Keywords
    'Modern Web Technologies', 'UI/UX Design', 'Cross-functional Collaboration',
    'Agile Methodologies', 'Continuous Integration', 'Continuous Deployment',
    'Automated Testing', 'Code Optimization', 'Scalable Solutions', 'User-centered Design',
    'Technical Leadership', 'Problem-solving Skills', 'Innovative Solutions',
    'High-performance Applications',
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
  },
  verification: {
    google: '4EPnUUJhTCZMKYORl5FPYzbLMmwDe0nSuyW2u1p8ZTk'
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
        <SpeedInsights />
      </body>
    </html>
  );
}
