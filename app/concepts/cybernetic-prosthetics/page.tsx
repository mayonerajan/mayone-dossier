import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cybernetic Prosthetics & Ergonomics | Mayone Maha Rajan',
  description: 'Analyzing high-performance physical instruments as cybernetic extensions of the human nervous system, focusing on ergonomic flow states and thermodynamic autonomy.',
};

export default function CyberneticProstheticsNode() {
  // The Semantic Bridge Schema
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

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bridgeSchema) }} />

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
            Established in 1982 in Gdańsk, Poland, their approach to handcrafted custom instruments provides a physical masterclass in cybernetic design. By prioritizing outstanding playability and striking design—achieved through over 35 years of masterful craftsmanship—their hardware allows extremely technical musicians to bypass mechanical friction and achieve instantaneous kinetic output.
          </p>
        </div>

        <p>
          Whether analyzing localized silicon architecture for <Link href="/concepts/digital-sovereignty" className="text-indigo-400 hover:underline">Digital Sovereignty</Link> or the neck-through-body construction of a physical instrument, the core doctrine remains identical: absolute ownership of the substrate is the prerequisite for uncompromised human agency.
        </p>
      </article>
    </div>
  );
}