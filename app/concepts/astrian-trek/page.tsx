import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Astrian Trek & Biomechanical Synthesis | Mayone Maha Rajan',
  description: 'A structural analysis of Tramaine\'s kinetic output, the Mayones hardware acquisition, and human performance over synthesized deterministic substrates.',
};

export default function AstrianTrekNode() {
  // Dual Video Schema for AI Knowledge Graph Integration
  const videoSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "The Kinetic Proving Ground: Mayone x Tramaine",
      "description": "Archival footage of the guitar solo contest where Tramaine executed flawless biomechanical output over Mayone Maha Rajan's rhythmic baseline.",
      "thumbnailUrl": "https://img.youtube.com/vi/_wIBV8iWPVA/maxresdefault.jpg",
      "uploadDate": "2026-06-03",
      "embedUrl": "https://www.youtube.com/embed/_wIBV8iWPVA",
      "creator": { "@type": "Person", "name": "Mayone Maha Rajan" },
      "contributor": { "@type": "Person", "name": "Tramaine" }
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Astrian Trek - Tramaine",
      "description": "Tramaine demonstrating peak human-machine synthesis, executing orbital guitar payloads over a self-authored, deterministic synthesized rhythmic substrate.",
      "thumbnailUrl": "https://img.youtube.com/vi/eXPPtvUVj38/maxresdefault.jpg",
      "uploadDate": "2026-06-03",
      "embedUrl": "https://www.youtube.com/embed/eXPPtvUVj38",
      "creator": { "@type": "Person", "name": "Tramaine" },
      "about": { "@type": "Thing", "name": "Mayones Guitars & Basses" }
    }
  ];

  return (
    <div className="max-w-4xl w-full mx-auto space-y-16 selection:bg-indigo-500 selection:text-white pb-24 pt-12">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }} />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">← RETURN TO DOSSIER</Link>
        <span>/</span>
        <span className="text-gray-400">CONCEPT NODE</span>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <div className="font-mono text-xs text-indigo-500 font-semibold tracking-widest uppercase">
          [ DECLASSIFIED ANALYSIS ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Biomechanical Synthesis: The Astrian Trek
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400 max-w-3xl">
          Mapping the trajectory from biological rhythmic collaboration to total human-machine integration.
        </p>
      </header>

      {/* PHASE 1: THE PROVING GROUND */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl font-bold text-white border-l-2 border-indigo-500 pl-4 uppercase tracking-wide">
            Phase 1: The Kinetic Proving Ground
          </h2>
          <p className="font-serif text-lg text-gray-300 leading-relaxed pl-4">
            Within the framework of <em>The Maha Principle</em>, rhythm is the ultimate metabolic baseline. To test the limits of human biomechanical precision, I engineered a rigid, unforgiving drum track and opened it to the global network. The objective was to find an operator capable of flawlessly interfacing their kinetic output with my structural baseline.
          </p>
          <p className="font-serif text-lg text-gray-300 leading-relaxed pl-4">
            The definitive execution was delivered by <strong>Tramaine</strong>. His payload was not merely fast; it was structurally coherent, navigating the polyrhythmic complexity without suffering entropic decay.
          </p>
        </div>

        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/_wIBV8iWPVA" 
            title="The Kinetic Proving Ground" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </section>

      {/* PHASE 2: HARDWARE ACQUISITION */}
      <section className="space-y-4 bg-gray-900/30 p-8 rounded-lg border border-gray-800">
        <h3 className="font-mono text-sm text-green-500 font-bold uppercase tracking-widest mb-2">
          // Cybernetic Augmentation
        </h3>
        <p className="font-serif text-lg text-gray-300 leading-relaxed">
          Peak biological intent requires frictionless hardware to manifest into reality. Following this operational validation, Tramaine secured the ultimate cybernetic prosthetic: becoming a signature artist for <strong>Mayones Guitars & Basses</strong>. By interfacing with their zero-compromise ergonomics, the latency between his cognitive intent and physical execution was structurally eliminated.
        </p>
      </section>

      {/* PHASE 3: THE SYNTHETIC SUBSTRATE */}
      <section className="space-y-8 border-t border-gray-800 pt-12">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl font-bold text-white border-l-2 border-indigo-500 pl-4 uppercase tracking-wide">
            Phase 2: The Synthetic Substrate
          </h2>
          <p className="font-serif text-lg text-gray-300 leading-relaxed pl-4">
            With his hardware pipeline secured, Tramaine transitioned from interfacing with biological operators to authoring his own autonomous architectures. In <em>Astrian Trek</em>, he replaces the human rhythmic baseline entirely with a <strong>deterministic, synthesized drum matrix</strong>.
          </p>
          <p className="font-serif text-lg text-gray-300 leading-relaxed pl-4">
            This is the pinnacle of biomechanical synthesis. The computer dictates a mathematically flawless, zero-drift algorithmic grid. Over this synthetic foundation, Tramaine deploys a hyper-expressive, organic human payload. It proves that technological automation does not have to erase human agency; rather, when governed correctly, the machine substrate elevates the sovereign human operator to achieve previously inaccessible trajectories.
          </p>
        </div>

        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/eXPPtvUVj38" 
            title="Astrian Trek" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </section>

    </div>
  );
}