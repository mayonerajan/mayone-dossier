import Link from 'next/link';

// ---------------------------------------------------------------------------
// Canonical identifiers. These MUST match the @id values used in your existing
// bio-page Person schema and book-page Book schema, so the whole site resolves
// to one author and one book rather than creating duplicate entities.
// ---------------------------------------------------------------------------
export const PERSON_ID = 'https://mayonemaharajan.com/#person';
export const BOOK_ID = 'https://mayonemaharajan.com/the-maha-principle/#book';
export const SITE = 'https://mayonemaharajan.com';

// Single source of truth for the concept set. Add a term here and it appears
// in every page's "Related Concepts" automatically.
export const ALL_CONCEPTS = [
  {
    slug: 'the-maha-principle',
    title: 'The Maha Principle',
    blurb: 'The four-part framework addressing three crises with one structural root.',
  },
  {
    slug: 'biological-sovereignty',
    title: 'Biological Sovereignty',
    blurb: 'The right to protect your metabolic, cognitive, and autonomic systems from extraction.',
  },
  {
    slug: 'attentional-captivity',
    title: 'Attentional Captivity',
    blurb: 'The structural capture of human focus by systems engineered to maximise engagement.',
  },
  {
    slug: 'metabolic-colonialism',
    title: 'Metabolic Colonialism',
    blurb: 'An extractive model in which industrial food systems profit from biological dysfunction.',
  },
  {
    slug: 'the-nurturing-warrior',
    title: 'The Nurturing Warrior',
    blurb: 'An archetype integrating the defence of a boundary with the care of what is inside it.',
  },
] as const;

export type FaqItem = { q: string; a: string };

// Builds the @graph: Person + Book (stub references) + this page's DefinedTerm
// + a FAQPage whose text mirrors the visible FAQ. Person/Book carry only @id-
// level identity here; their full definitions live on the bio and book pages.
export function buildConceptGraph(opts: {
  pageUrl: string;
  termName: string;
  termDescription: string;
  faq: FaqItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Person', '@id': PERSON_ID, name: 'Mayone Maha Rajan', url: SITE + '/' },
      {
        '@type': 'Book',
        '@id': BOOK_ID,
        name: 'The Maha Principle: Reclaiming Biological Sovereignty',
        author: { '@id': PERSON_ID },
      },
      {
        '@type': 'DefinedTerm',
        '@id': opts.pageUrl + '#term',
        name: opts.termName,
        description: opts.termDescription,
        inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'The Maha Principle', '@id': BOOK_ID },
      },
      {
        '@type': 'FAQPage',
        '@id': opts.pageUrl + '#faq',
        mainEntity: opts.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

export function ConceptNav() {
  return (
    <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex gap-2">
      <Link href="/" className="hover:text-indigo-400 transition-colors">&larr; DOSSIER</Link>
      <span>/</span>
      <Link href="/concepts" className="hover:text-indigo-400 transition-colors">CONCEPTS</Link>
    </nav>
  );
}

export function ConceptHeader({ title, tagline }: { title: string; tagline: string }) {
  return (
    <header className="space-y-4 border-b border-gray-800 pb-8">
      <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h1>
      <p className="font-serif text-xl leading-relaxed text-indigo-400">{tagline}</p>
      <p className="font-mono text-xs text-gray-500 tracking-wide">
        A concept from{' '}
        <em className="text-gray-400">The Maha Principle: Reclaiming Biological Sovereignty</em> by
        Mayone Maha Rajan.
      </p>
    </header>
  );
}

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <section className="mt-16 pt-8 border-t border-gray-800">
      <h2 className="font-sans text-xl font-bold tracking-tight text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.q}>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">{item.q}</h3>
            <p className="font-serif text-gray-400 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RelatedConcepts({ current }: { current: string }) {
  const others = ALL_CONCEPTS.filter((c) => c.slug !== current).slice(0, 4);
  return (
    <section className="mt-16 pt-8 border-t border-gray-800">
      <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white mb-4">
        Related Concepts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {others.map((c) => (
          <Link
            key={c.slug}
            href={`/concepts/${c.slug}`}
            className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <h3 className="font-bold text-white mb-1">{c.title}</h3>
            <p className="text-xs font-serif text-gray-500">{c.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
