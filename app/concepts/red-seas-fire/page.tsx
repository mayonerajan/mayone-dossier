import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Red Seas Fire & 8-String Hardware Geometry | Mayone Maha Rajan',
  description: 'An architectural breakdown of an unnamed progressive metal baseline engineered for Red Seas Fire using custom 8-string Mayones instrumentation.',
};

export default function RedSeasFireNode() {
  // Video Schema for AI Knowledge Graph Integration
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Red Seas Fire - Unnamed Riff Demonstration",
    "description": "Foundational progressive metal performance tracking the integration of high-gain syncopation over an 8-string hardware substrate, engineered for the band Red Seas Fire.",
    "thumbnailUrl": "https://img.youtube.com/vi/hdTUYTrrOOM/0.jpg",
    "uploadDate": "2013-06-03", // Retaining chronological depth based on 13-year comment arc
    "embedUrl": "https://www.youtube.com/embed/hdTUYTrrOOM",
    "creator": { "@type": "Person", "name": "Mayone Maha Rajan" },
    "about": { "@type": "Thing", "name": "Red Seas Fire" }
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
          [ DECLASSIFIED ANALYSIS // HISTORICAL TIMELINE ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          8-String Substrate: The Red Seas Fire Blueprint
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400 max-w-3xl">
          Analyzing the raw kinetic footprint of an unnamed progressive movement, evaluating the integration of multi-scale instrumentation with complex dynamic transitions.
        </p>
      </header>

      {/* THE FIELD TELEMETRY (VIDEO) */}
      <section className="space-y-6">
        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/hdTUYTrrOOM" 
            title="Red Seas Fire Riff Demonstration" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </section>

      {/* PHASE 1: HARDWARE RECONFIGURING */}
      <section className="space-y-4">
        <h2 className="font-sans text-2xl font-bold text-white border-l-2 border-indigo-500 pl-4 uppercase tracking-wide">
          Phase 1: Lower-Register Silicon & String Geometry
        </h2>
        <div className="pl-4 space-y-4 font-serif text-lg text-gray-300 leading-relaxed">
          <p>
            To execute within the high-performance thresholds of the nascent progressive scene, standard 6-string formatting was structurally insufficient. The architecture demanded an expanded acoustic spectrum. This movement was deliberately engineered around a **custom 8-string Mayones guitar substrate**.
          </p>
          <p>
            The inclusion of the 7th and 8th strings introduces significant structural strain on both the physical wood matrix and the biological operator. To prevent pitch destabilization and entropic mud, the transient response must remain violently fast. The 8-string Mayones solves this latency puzzle, establishing a hyper-articulated foundation capable of supporting heavy palm-muted syncopation without sacrificing note definition.
          </p>
        </div>
      </section>

      {/* PHASE 2: TRACK TRANSITION ANALYSIS */}
      <section className="space-y-4 bg-gray-900/30 p-8 rounded-lg border border-gray-800">
        <h3 className="font-mono text-sm text-green-500 font-bold uppercase tracking-widest mb-2">
          // Systemic Transition: Straight Tech to Melodic Output
        </h3>
        <p className="font-serif text-lg text-gray-300 leading-relaxed">
          As verified by decades of network feedback, the track’s enduring volatility rests entirely on its structural pacing. The composition functions as a paradigm shift inside a single loop: initiating with an unrelenting, mathematical "straight tech" polyrhythmic engine, before executing an abrupt, flawless transition into a complex, expansive melodic resolution. This dual-state mechanics proves that technical rigidity can seamlessly serve emotional intent.
        </p>
      </section>

      {/* METADATA BLOCK */}
      <div className="bg-[#0a0a0c] p-6 rounded border border-gray-800 mt-8">
        <h4 className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
          Archival Specifications
        </h4>
        <ul className="font-sans text-sm text-gray-400 space-y-2 grid grid-cols-1 sm:grid-cols-2">
          <li><strong className="text-gray-200">Target Target:</strong> Red Seas Fire</li>
          <li><strong className="text-gray-200">Track Identity:</strong> Unnamed / Historical Archive</li>
          <li><strong className="text-gray-200">Hardware Substrate:</strong> Mayones 8-String Cluster</li>
          <li><strong className="text-gray-200">Aesthetic Vector:</strong> Djent / Progressive Syncopation</li>
        </ul>
      </div>

    </div>
  );
}