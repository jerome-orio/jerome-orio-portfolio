import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();
    return [
        {
            url: 'https://jerome-orio-portfolio.vercel.app/',
            lastModified: currentDate,
        },
        {
            url: 'https://jerome-orio-portfolio.vercel.app/about-me',
            lastModified: currentDate,
        },
        {
            url: 'https://jerome-orio-portfolio.vercel.app/projects',
            lastModified: currentDate,
        },
        {
            url: 'https://jerome-orio-portfolio.vercel.app/contact',
            lastModified: currentDate,
        },
    ];
}
