import { federationSitemapRows } from '@/lib/federation-adapter'
const host = 'mayonemaharajan.com'
const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
export function GET() {
  const rows = federationSitemapRows(host).map((row) => `<url><loc>${escapeXml(row.url)}</loc><lastmod>${new Date(row.lastModified as Date).toISOString()}</lastmod></url>`).join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rows}</urlset>\n`, { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=0, s-maxage=3600' } })
}
