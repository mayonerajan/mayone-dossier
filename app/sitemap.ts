import { MetadataRoute } from 'next'

// Canonical host. Must match your canonical tags, robots sitemap URL, and a
// 301 redirect from the non-www apex. Change to the apex if that is your
// canonical host instead.
const baseUrl = 'https://www.mayonemaharajan.com'

// Concept slugs — kept in sync with the /concepts index page (ConceptsIndex).
// If you add or rename a concept page, update this list too.
const conceptSlugs = [
  'biological-sovereignty',
  'digital-sovereignty',
  'algorithmic-capture',
  'thermodynamic-autonomy',
  'zero-payload-architecture',
  'the-maha-principle',
  'cybernetic-prosthetics',
  'astrian-trek',
  'earthists-footprints',
  'red-seas-fire',
]

// Research abstract slugs linked from the homepage. VERIFY these pages exist
// and render real content before relying on them — remove any that 404.
const researchSlugs = [
  'algorithmic-lock-in',
  'metabolic-sovereignty',
  'digital-firewall',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    // ADDED: The new About / Profile architecture
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // ADDED: The new Kinetic Archives page
    { url: `${baseUrl}/archive`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/concepts`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/research`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const conceptRoutes: MetadataRoute.Sitemap = conceptSlugs.map((slug) => ({
    url: `${baseUrl}/concepts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const researchRoutes: MetadataRoute.Sitemap = researchSlugs.map((slug) => ({
    url: `${baseUrl}/research/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...conceptRoutes, ...researchRoutes]
}