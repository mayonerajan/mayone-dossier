const host = 'https://mayonemaharajan.com'
export function GET() { return new Response(`User-Agent: *\nAllow: /sources/\nDisallow: /api/\nDisallow: /private/\n\nHost: ${host}\nSitemap: ${host}/sitemap-index.xml\nSitemap: ${host}/sitemap.xml\n`, { headers: { 'content-type': 'text/plain; charset=utf-8' } }) }
