import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/spinner', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

