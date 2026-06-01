import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock DB of abstracts mapped by dynamic slug matching your sitemap definitions
const abstractsDatabase: Record<string, { title: string; date: string; destinationUrl: string; body: string }> = {
  "algorithmic-lock-in": {
    title: "The Mechanics of Algorithmic Lock-In",
    date: "2026-05-29",
    destinationUrl: "https://www.mahastrategies.com/intelligence/briefs/algorithmic-lock-in",
    body: "The modern digital environment is not a neutral substrate; it is an optimized extraction engine. Algorithmic lock-in refers to the structural methodologies employed by centralized hyperscalers to gradually degrade a user's digital and biological sovereignty, replacing autonomous executive function with predictable, engagement-driven behavioral loops. In my work defining Algorithmic Capture, the fundamental vulnerability identified is the human dopamine reward pathway. Reversing this state requires an architectural pivot to Zero-Payload Architecture."
  },
  "metabolic-sovereignty": {
    title: "Metabolic Sovereignty and the Substrate",
    date: "2026-05-30",
    destinationUrl: "https://www.mahastrategies.com/protocols/metabolic-sovereignty",
    body: "Securing the bodily container is the initial tactical move in any environment experiencing extreme cognitive noise. This protocol details the boundaries of Metabolic Sovereignty, forcing data collectors away from the perimeter of human biology. By utilizing local models and strictly processing on hardware components that you completely own, the user constructs an initial layer of defense protecting physiological integrity from continuous cloud synchronization."
  }
  // Add remaining slugs from your sitemap here
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = abstractsDatabase[params.slug];
  if (!data) return { title: 'Abstract Not Found' };
  return { title: `${data.title} (Abstract) | Mayone Maha Rajan` };
}

// Helper utility to turn flat strings into rich cluster elements
function parseAndHyperlinkConcepts(text: string) {
  const mapping = [
    { text: "Biological Sovereignty", url: "/concepts/biological-sovereignty" },
    { text: "Digital Sovereignty", url: "/concepts/digital-sovereignty" },
    { text: "Algorithmic Capture", url: "/concepts/algorithmic-capture" },
    { text: "Thermodynamic Autonomy", url: "/concepts/thermodynamic-autonomy" },
    { text: "Zero-Payload Architecture", url: "/concepts/zero-payload-architecture" },
    { text: "The Maha Principle", url: "/concepts/the-maha-principle" },
  ];

  let parts: (string | React.ReactNode)[] = [text];

  mapping.forEach((concept) => {
    const newParts: (string | React.ReactNode)[] = [];
    parts.forEach((part) => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }

      const regex = new RegExp(`(${concept.text})`, 'g');
      const splitText = part.split(regex);
      
      splitText.forEach((subtext, index) => {
        if (subtext === concept.text) {
          newParts.push(
            <Link key={concept.text + index} href={concept.url} className="text-indigo-400 hover:underline font-medium decoration-indigo-500/50">
              {subtext}
            </Link>
          );
        } else if (subtext !== "") {
          newParts.push(subtext);
        }
      });
    });
    parts = newParts;
  });

  return parts;
}

export default function ResearchAbstractRenderer({ params }: { params: { slug: string } }) {
  const data = abstractsDatabase[params.slug];
  if (!data) return notFound();

  // AUDIT FIX: Explicitly setting @type to Article and adding abstract property
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "author": {
      "@type": "Person",
      "name": "Mayone Maha Rajan",
      "url": "https://www.mayonemaharajan.com"
    },
    "datePublished": data.date,
    "abstract": data.body
  };

  return (
    <div className="max-w-2xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      {/* INJECT ARTICLE SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-8 flex gap-2">
        <Link href="/research" className="hover:text-indigo-400 transition-colors">INDEX</Link>
        <span>/</span>
        <span className="text-gray-400">NODE DISPATCH</span>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-6">
        <div className="font-mono text-xs text-indigo-500 font-semibold">[ COMPILED BRIEF: {data.date} ]</div>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white leading-tight">{data.title}</h1>
      </header>

      <article className="font-serif text-lg leading-relaxed text-gray-300 space-y-6">
        <p>{parseAndHyperlinkConcepts(data.body)}</p>
      </article>

      <div className="bg-gray-900/40 p-6 rounded border border-gray-800 space-y-4 mt-8">
        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">[ Institutional Document Connection ]</h4>
        <p className="font-serif text-sm text-gray-400">The underlying technical engineering, market analytics, and procedural guidelines are isolated on the firm surface network.</p>
        <a href={data.destinationUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black text-xs font-mono font-bold px-4 py-2 hover:bg-gray-200 transition-colors uppercase tracking-tight">
          Read Full Document at Maha Strategies &#8599;
        </a>
      </div>
    </div>
  );
}