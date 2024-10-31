import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: '/private/',
            },
        ],
        sitemap: 'https://jerome-orio-portfolio.vercel.app/sitemap.xml',
    }
}
