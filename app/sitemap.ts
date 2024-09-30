import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://jerome-orio-portfolio.vercel.app/',
            lastModified: new Date()
        },
        {
            url: 'https://jerome-orio-portfolio.vercel.app/about-me',
            lastModified: new Date(),
        },
        {
            url: 'https://jerome-orio-portfolio.vercel.app/projects',
            lastModified: new Date(),
        },
        {
            url: 'https://jerome-orio-portfolio.vercel.app/contact',
            lastModified: new Date(),
        },
    ]
}