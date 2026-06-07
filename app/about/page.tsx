import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About | Mayone Maha Rajan',
  description: 'The intellectual, physical, and strategic trajectory of Mayone Maha Rajan—synthesizing cognitive science, cybernetics, and decentralized technology into practical architectures for sovereignty.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl w-full mx-auto space-y-16 selection:bg-gray-700 pb-12 pt-12">
      
      {/* NAVIGATION BACKWARD / CONTEXT */}
      <div className="font-mono text-xs text-gray-500 tracking-widest uppercase border-b border-gray-800 pb-4 flex justify-between">
        <Link href="/" className="hover:text-indigo-400 transition-colors">
          &larr; [ RETURN TO DOSSIER ]
        </Link>
        <span>[ ARCHITECTURE / PROFILE ]</span>
      </div>

      {/* METANARRATIVE / INTRODUCTION */}
      <section className="space-y-6">
        <h1 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white">
          The Trajectory
        </h1>
        <p className="font-serif text-lg leading-relaxed text-gray-300">
          My work is anchored in a singular objective: **reclaiming individual autonomy from system-level entropy**. 
        </p>
        <p className="font-serif text-lg leading-relaxed text-gray-400">
          Whether organizing low-frequency transients on an 8-string multi-scale instrument, mapping mobile supply chains years ahead of market shifts, or deploying local-first digital infrastructure via <strong>Maha OS</strong>, every vector of my career is an application of a unified framework. I view the human organism not as a product to be monetized by algorithmic platforms, but as a sovereign metabolic container that must be actively defended.
        </p>
      </section>

      <hr className="border-gray-800" />

      {/* THE THREE CORE PILLARS */}
      <section className="space-y-8">
        <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-indigo-400">
          Operational Synthesis
        </h2>

        <div className="space-y-8 font-sans">
          {/* PILLAR 1: COGNITIVE SCIENCE */}
          <div className="group">
            <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              1. Biological Hardware (Cognitive Science)
            </h3>
            <p className="text-sm text-gray-400 font-serif mt-2 pl-3.5 border-l border-gray-800 group-hover:border-indigo-500 transition-colors">
              Trained at the University of California, San Diego (UCSD), my foundational studies in Cognitive Science focused on the precise neurological and psychological vulnerabilities of the human operating system. This research exposed how engagement-driven machine learning models induce algorithmic capture, laying the groundwork for defensive, user-centric frameworks.
            </p>
          </div>

          {/* PILLAR 2: HARDWARE STRATEGY */}
          <div className="group">
            <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              2. Industrial Foresight & Hardware
            </h3>
            <p className="text-sm text-gray-400 font-serif mt-2 pl-3.5 border-l border-gray-800 group-hover:border-indigo-500 transition-colors">
              True technological self-reliance requires uncompromised silicon. Years prior to the commoditization of the modern enthusiast phone market, I engineered pre-incorporation market doctrines and challenger brand strategies that prioritized user alignment over platform monetization—doctrinal blueprints that mirrored and predated the disruptive execution patterns of networks like OnePlus.
            </p>
          </div>

          {/* PILLAR 3: KINETIC ARCHIVES */}
          <div className="group">
            <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              3. Kinetic & Structural Syncopation
            </h3>
            <p className="text-sm text-gray-400 font-serif mt-2 pl-3.5 border-l border-gray-800 group-hover:border-indigo-500 transition-colors">
              Before deploying digital defense systems, the constraints of thermodynamic efficiency were stress-tested in the physical world. Through percussive architecture and extended-range geometric experimentation with 8-string instruments—collaborating with boundary-pushing projects like **Earthists** (Tragic Hero Records) and **Red Seas Fire**—I used polyrhythmic complexity to explore the biological limits of human motor precision and rhythmic focus.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* CURRENT EXECUTION NODE */}
      <section className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 space-y-4">
        <div className="font-mono text-xs text-indigo-400 tracking-widest uppercase">// CURRENT ACTIVE DEPLOYMENT</div>
        <h2 className="font-sans text-xl font-bold text-white">Maha Strategies LLC</h2>
        <p className="font-serif text-sm text-gray-400 leading-relaxed">
          Today, these independent tracks are unified under **Maha Strategies LLC**, where I serve as Managing Director. We convert theoretical sovereignty frameworks into physical reality: engineering on-device AI, publishing formal systemic research papers, and deploying local-first infrastructure designed to insulate individuals and enterprises from systemic digital capture.
        </p>
        <div className="pt-2">
          <a 
            href="https://www.mahastrategies.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-xs font-mono text-gray-300 transition-colors"
          >
            Maha Strategies Infrastructure &rarr;
          </a>
        </div>
      </section>

      {/* QUICK CROSS-REFERENCE INDEX */}
      <footer className="pt-6 font-mono text-xs text-gray-500 flex flex-wrap justify-between gap-4">
        <Link href="/concepts" className="hover:text-indigo-400 transition-colors">
          [ CONCEPTS INDEX ]
        </Link>
        <Link href="/archive" className="hover:text-indigo-400 transition-colors">
          [ KINETIC ARCHIVE ]
        </Link>
        <a href="https://research.mahastrategies.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
          [ RESEARCH NODE ↗ ]
        </a>
      </footer>

    </div>
  );
}