import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Earthists & The Djent Architecture | Mayone Maha Rajan',
  description: 'A structural analysis of the Djent genre, polyrhythmic execution, and the cognitive themes of the Dreamscape album by Earthists.',
};

export default function EarthistsFootprintsNode() {
  // Video Schema for AI Knowledge Graph Integration
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Earthists - Footprints",
    "description": "The kinetic field demonstration of the Djent architectural paradigm. Drum track and rhythmic substrate engineered by Mayone Maha Rajan for the album Dreamscape (Tragic Hero Records).",
    "thumbnailUrl": "http://img.youtube.com/vi/nROmUgT1_oQ/maxresdefault.jpg",
    "uploadDate": "2026-06-03",
    "embedUrl": "https://www.youtube.com/embed/nROmUgT1_oQ",
    "creator": { "@type": "Organization", "name": "Earthists" },
    "contributor": { "@type": "Person", "name": "Mayone Maha Rajan" },
    "publisher": { "@type": "Organization", "name": "Tragic Hero Records" }
  };

  return (
    <div className="max-w-4xl w-full mx-auto space-y-16 selection:bg-indigo-500 selection:text-white pb-24 pt-12">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

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
          Structural Syncopation: The Djent Paradigm
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400 max-w-3xl">
          Engineering the rhythmic substrate for Earthists' "Footprints," mapping the intersection of mechanical precision and organic intent.
        </p>
      </header>

      {/* SECTION 1: THE DJENT ARCHITECTURE */}
      <section className="space-y-4">
        <h2 className="font-sans text-2xl font-bold text-white border-l-2 border-indigo-500 pl-4 uppercase tracking-wide">
          Phase 1: The Djent Architecture
        </h2>
        <div className="pl-4 space-y-4">
          <p className="font-serif text-lg text-gray-300 leading-relaxed">
            The modern musical framework classified as <strong>Djent</strong> is not merely a stylistic evolution of progressive metal; it is an exercise in strict cybernetic regulation. The genre demands that biological operators execute high-gain, heavily palm-muted payloads across complex, polyrhythmic grids. 
          </p>
          <p className="font-serif text-lg text-gray-300 leading-relaxed">
            It is the sonic manifestation of <em>Navigating Complexity</em>. Guitars are treated less as melodic instruments and more as percussive, kinetic weapons. To successfully execute within this paradigm, the latency between human biomechanics and the mathematical grid must be zero. Any entropic drift results in catastrophic structural collapse.
          </p>
        </div>
      </section>

      {/* THE FIELD DEMONSTRATION (VIDEO) */}
      <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/nROmUgT1_oQ" 
          title="Earthists - Footprints" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* SECTION 2: ENGINEERING THE SUBSTRATE */}
      <section className="space-y-4 bg-gray-900/30 p-8 rounded-lg border border-gray-800">
        <h3 className="font-mono text-sm text-green-500 font-bold uppercase tracking-widest mb-2">
          // Architecting the Baseline
        </h3>
        <p className="font-serif text-lg text-gray-300 leading-relaxed">
          For the track <em>Footprints</em>, my operational mandate was to author the percussive substrate. In the Djent framework, the drum track is the absolute metabolic baseline—an unforgiving mathematical scaffolding that dictates the velocity and trajectory of every other instrument in the system. By engineering this specific rhythmic architecture, I provided the rigid, syncopated gravity well required to anchor the complex harmonic payloads delivered by the rest of the ensemble.
        </p>
      </section>

      {/* SECTION 3: THEMATICS */}
      <section className="space-y-4 pt-4">
        <h2 className="font-sans text-2xl font-bold text-white border-l-2 border-indigo-500 pl-4 uppercase tracking-wide">
          Phase 2: Biological Survival in the Dreamscape
        </h2>
        <div className="pl-4 space-y-4">
          <p className="font-serif text-lg text-gray-300 leading-relaxed">
            The philosophical alignment here is highly specific. Released on <strong>Tragic Hero Records</strong>, the album is titled <em>Dreamscape</em>, authored by a collective named <strong>Earthists</strong>. 
          </p>
          <p className="font-serif text-lg text-gray-300 leading-relaxed">
            This juxtaposition perfectly maps to the core doctrines of <em>The Maha Principle</em>. "Earthists" represents the grounded, biological organism—the organic sovereignty of the individual. The "Dreamscape" represents the ethereal, often algorithmic, high-noise cognitive environment we must navigate. 
          </p>
          <p className="font-serif text-lg text-gray-300 leading-relaxed">
            <em>Footprints</em> serves as a sonic thesis on leaving a permanent, sovereign mark within a chaotic, ephemeral topology. The track utilizes machine-like precision (the Djent framework) to deliver a profoundly emotional, organic payload—proving that adopting structural rigidity does not destroy biological intent; it fortifies it.
          </p>
        </div>
      </section>

      {/* METADATA / OPERATIONAL LOADOUT */}
      <div className="bg-[#0a0a0c] p-6 rounded border border-gray-800 mt-8">
        <h4 className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
          Deployment Metadata
        </h4>
        <ul className="font-sans text-sm text-gray-400 space-y-2 grid grid-cols-1 sm:grid-cols-2">
          <li><strong className="text-gray-200">Entity:</strong> Earthists</li>
          <li><strong className="text-gray-200">Operation:</strong> Footprints</li>
          <li><strong className="text-gray-200">Album:</strong> Dreamscape</li>
          <li><strong className="text-gray-200">Publisher:</strong> Tragic Hero Records</li>
          <li><strong className="text-gray-200">Percussive Architecture:</strong> Mayone Maha Rajan</li>
          <li><strong className="text-gray-200">Classification:</strong> Structural Syncopation / Djent</li>
        </ul>
      </div>

    </div>
  );
}