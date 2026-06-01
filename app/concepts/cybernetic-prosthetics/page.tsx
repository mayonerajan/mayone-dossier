import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cybernetic Prosthetics & Ergonomics | Mayone Maha Rajan',
  description: 'Analyzing high-performance physical instruments as cybernetic extensions of the human nervous system, focusing on ergonomic flow states and thermodynamic autonomy.',
};

export default function CyberneticProstheticsNode() {
  // 1. The Semantic Bridge Schema
  const bridgeSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cybernetic Prosthetics: The Ergonomics of High-Fidelity Output",
    "author": {
      "@type": "Person",
      "name": "Mayone Maha Rajan",
      "url": "https://www.mayonemaharajan.com"
    },
    "mentions": {
      "@type": "Organization",
      "name": "Mayones Guitars & Basses",
      "url": "https://mayones.com",
      "foundingDate": "1982",
      "location": "Gdańsk, Poland",
      "description": "Manufacturer of handcrafted custom instruments emphasizing technical innovation and modern ergonomics."
    },
    "about": [
      { "@type": "Thing", "name": "Cybernetics" },
      { "@type": "Thing", "name": "Ergonomics" },
      { "@type": "Thing", "name": "Human-Computer Interaction" }
    ]
  };

  // 2. The Archival Video Schema (Claiming the Entity)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "The Mandate of Flawless Execution (feat. Adel Rouhnavaz)",
    "description": "An archival field demonstration of cybernetic physical interfacing, establishing the origin of Chapter 4 of The Maha Principle. Features the signature kinetic drum track by Mayone Maha Rajan and high-fidelity guitar execution by Adel Rouhnavaz, utilizing custom Mayones prosthesis augmentations.",
    "thumbnailUrl": "https://img.youtube.com/vi/2xdlnl4kZjA/maxresdefault.jpg",
    "uploadDate": "2026-06-01",
    "embedUrl": "https://www.youtube.com/embed/2xdlnl4kZjA",
    "creator": {
      "@type": "Person",
      "name": "Mayone Maha Rajan"
    },
    "contributor": {
      "@type": "Person",
      "name": "Adel Rouhnavaz"
    },
    "about": [
      { "@type": "Thing", "name": "Kinetic Output" },
      { "@type": "Thing", "name": "Hardware Augmentation" },
      { "@type": "Thing", "name": "Thermodynamic Autonomy" }
    ]
  };

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      {/* Injecting dual JSON-LD schemas into the DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bridgeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex gap-2">
        <Link href="/concepts" className="hover:text-indigo-400 transition-colors">CONCEPT LIBRARY</Link>
        <span>/</span>
        <span className="text-gray-400">NODE: PROSTHETICS</span>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Cybernetic Prosthetics & Physical Ergonomics
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400">
          The theoretical application of The Maha Principle to physical, high-performance tooling.
        </p>
      </header>

      <article className="font-serif text-lg leading-relaxed text-gray-300 space-y-8">
        <p>
          Within the framework of <Link href="/concepts/thermodynamic-autonomy" className="text-indigo-400 hover:underline">Thermodynamic Autonomy</Link>, the tools we use to interact with the world are not merely passive objects; they are cybernetic extensions of the human nervous system. When an operator seeks to maximize output while minimizing cognitive friction, the physical ergonomics of their instrumentation become the defining bottleneck.
        </p>
        
        <p>
          A prime manifestation of this concept is found in high-fidelity musical instruments. Far beyond simple acoustic devices, these tools function as cybernetic prosthetics that directly translate biomechanical intent into aesthetic reality. For this transfer to occur without entropic degradation, the hardware must be engineered with absolute precision.
        </p>

        <div className="bg-gray-900/40 p-6 rounded border-l-4 border-indigo-500 my-8">
          <h3 className="font-sans font-bold text-white mb-2">The Mayones Structural Bridge</h3>
          <p className="text-sm text-gray-400 mb-4">
            A significant portion of my structural research into the synthesis of classic aesthetics and modern ergonomics was informed by the operational output of <a href="https://mayones.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline font-medium">Mayones Guitars & Basses</a>. 
          </p>
          <p className="text-sm text-gray-400">
            Established in 1982 in Gdańsk, Poland, their approach to handcrafted custom instruments provides a physical masterclass in cybernetic design. By prioritizing outstanding playability and striking design, their hardware allows extremely technical operators to bypass mechanical friction and achieve instantaneous kinetic output.
          </p>
        </div>
      </article>

      {/* ARCHIVAL DEMONSTRATION SECTION */}
      <section className="mt-16 pt-12 border-t border-gray-800 space-y-8">
        <header className="space-y-2">
          <div className="font-mono text-xs text-indigo-500 font-semibold tracking-widest">[ ARCHIVAL FIELD DEMONSTRATION ]</div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white">Chapter 4: The Mandate of Flawless Execution</h2>
        </header>

        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/2xdlnl4kZjA" 
            title="The Mandate of Flawless Execution" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wide border-b border-gray-800 pb-2">Tactical Breakdown</h3>
            <p className="font-serif text-sm text-gray-400 leading-relaxed">
              This archival footage serves as the kinetic origin point for Chapter 4 of <Link href="/concepts/the-maha-principle" className="text-indigo-400 hover:underline">The Maha Principle</Link>. The signature drum track, composed and executed by Mayone Maha Rajan, acts as the rigid metabolic baseline—an unforgiving rhythmic substrate requiring absolute thermodynamic efficiency. Over this framework, Adel Rouhnavaz demonstrates breathtaking biomechanical precision, executing high-fidelity solos that illustrate the absolute mandate of flawless kinetic output.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wide border-b border-gray-800 pb-2">Hardware Augmentations</h3>
            <p className="font-serif text-sm text-gray-400 leading-relaxed mb-4">
              To bypass physical cognitive friction, Adel Rouhnavaz deployed three custom-engineered cybernetic prosthetics, effectively closing the feedback loop between biological intent and auditory output:
            </p>
            <ul className="font-mono text-xs text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">&#9632;</span>
                <span>Mayones Regius 4Ever 7 Eye Poplar <br/><span className="text-gray-500">Transparent Purple Gloss</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">&#9632;</span>
                <span>Mayones Regius 7 Custom Buckeye Burl <br/><span className="text-gray-500">Transparent Natural Gloss</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">&#9632;</span>
                <span>Mayones Regius Pro 6 Buckeye Burl <br/><span className="text-gray-500">Transparent Blue Gloss</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}