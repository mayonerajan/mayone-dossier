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
      {
        // LLM crawlers & generative engines — allowed, so the personal
        // entity (bio, concepts, authorship) can be ingested and cited.
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'anthropic-ai',
          'ClaudeBot',
          'Claude-Web',
          'Claude-SearchBot',
          'Google-Extended',
          'PerplexityBot',
          'Perplexity-User',
          'CCBot',
          'cohere-ai',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}