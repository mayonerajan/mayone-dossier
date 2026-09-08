import { NextResponse, type NextRequest } from 'next/server'

const apex = 'mayonemaharajan.com'
const canonical = 'www.mayonemaharajan.com'

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const path = request.nextUrl.pathname
  if (host === apex) {
    if (path === '/sitemap.xml') return NextResponse.rewrite(new URL('/federation-sources-sitemap.xml', request.url))
    if (path === '/sitemap-index.xml') return NextResponse.rewrite(new URL('/federation-sources-sitemap-index.xml', request.url))
    if (path === '/robots.txt') return NextResponse.rewrite(new URL('/federation-sources-robots.txt', request.url))
    if (path.startsWith('/sources/') || path === '/sources-llms.txt') return NextResponse.next()
    const destination = request.nextUrl.clone()
    destination.hostname = canonical
    return NextResponse.redirect(destination, 308)
  }
  if (host === canonical && path.startsWith('/sources/')) {
    const destination = request.nextUrl.clone()
    destination.hostname = apex
    return NextResponse.redirect(destination, 308)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?)$).*)'] }
