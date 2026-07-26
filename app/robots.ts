import { MetadataRoute } from 'next'

const SITE_URL = 'https://www.mayonemaharajan.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard search engines — full access to the public site.
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
