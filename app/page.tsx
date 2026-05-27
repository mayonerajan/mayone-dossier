import Link from 'next/link';

export default function PersonalDossier() {
  return (
    <div className="max-w-2xl w-full mx-auto space-y-20 selection:bg-gray-700">
      
      {/* HEADER / IDENTITY */}
      <header className="space-y-6">
        <div className="font-mono text-xs text-gray-500 tracking-widest uppercase border-b border-gray-800 pb-4">
          [ DOSSIER: ACTIVE ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Mayone Maha Rajan
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-300">
          Cultural strategist, author, and technology founder. Architecting frameworks for personal and national renewal at the intersection of cognitive science, applied cybernetics, and agentic systems.
        </p>
      </header>

      {/* THE SUBSTRATE / BIO */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          I. The Substrate
        </h2>
        <p className="font-serif text-lg leading-relaxed text-gray-400 pl-4 border-l-2 border-transparent">
          Trained in Cognitive Science at the University of California, San Diego (UCSD), my foundational work centers on understanding the biological and neurological hardware of the human organism. This scientific substrate dictates my approach to human optimization: securing biological sovereignty and defending executive function against algorithmic capture.
        </p>
      </section>

      {/* THE EXECUTION LAYER / FIRM */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          II. The Execution Layer
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-4">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            As the Managing Director of <strong>Maha Strategies LLC</strong>, I engineer structural countermeasures against systemic entropy. We develop on-device artificial intelligence, decentralized technology, and edge-compute infrastructure designed to enforce thermodynamic autonomy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="https://www.mahastrategies.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center">
              ACCESS MAHA STRATEGIES ↗
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mahastrategies.os" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-white text-black font-bold hover:bg-gray-200 text-sm font-mono transition-colors text-center">
              DOWNLOAD MAHA OS
            </a>
          </div>
        </div>
      </section>

      {/* THE DOCTRINE / MANUSCRIPT */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          III. The Doctrine
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-4">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            The operational framework for this philosophy is formalized in my 95,000-word non-fiction manuscript, <strong>The Maha Principle: Architecting Personal and National Renewal</strong>. It is a rigid, systematic approach to reclaiming the metabolic container and architecting resilience in a high-noise, low-signal environment.
          </p>
          <div className="pt-2">
            <a href="https://publish.mahastrategies.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center">
              PUBLISHING NODE ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-12 pb-8 border-t border-gray-800">
        <div className="font-mono text-xs text-gray-600 flex justify-between">
          <span>© {new Date().getFullYear()} Mayone Maha Rajan</span>
          <span>LOCATION: COLOMBO, SL // WYOMING, USA</span>
        </div>
      </footer>

    </div>
  );
}