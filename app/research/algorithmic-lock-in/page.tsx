import Link from 'next/link';

export const metadata = {
  title: 'Abstract: Algorithmic Lock-In | Mayone Maha Rajan',
  description: 'An executive summary on algorithmic lock-in, behavioral capture, and the structural countermeasures required to maintain executive function.',
};

export default function AlgorithmicLockInAbstract() {
  // Article Schema for the Abstract
  const abstractSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Abstract: Algorithmic Lock-In",
    "author": {
      "@type": "Person",
      "name": "Mayone Maha Rajan",
      "url": "https://www.mayonemaharajan.com"
    },
    "description": "Executive summary detailing the mechanics of systemic behavioral capture and cognitive optimization by centralized platforms.",
    "url": "https://www.mayonemaharajan.com/research/algorithmic-lock-in"
  };

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(abstractSchema) }}
      />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">&larr; DOSSIER</Link>
        <span>/</span>
        <span className="text-gray-400">RESEARCH ABSTRACTS</span>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <div className="font-mono text-xs text-indigo-400 tracking-widest uppercase">
          [ RESEARCH ABSTRACT ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          The Mechanics of Algorithmic Lock-In
        </h1>
      </header>

      {/* EXECUTIVE SUMMARY (200-300 words) */}
      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          The modern digital environment is not a neutral substrate; it is an optimized extraction engine. <strong>Algorithmic lock-in</strong> refers to the structural methodologies employed by centralized hyperscalers to gradually degrade a user's digital and biological sovereignty, replacing autonomous executive function with predictable, engagement-driven behavioral loops.
        </p>
        
        <p>
          In my work defining <em>Algorithmic Capture</em>, the fundamental vulnerability identified is the human dopamine reward pathway. Machine learning models, operating at a scale and speed incomprehensible to human cognition, isolate psychological vulnerabilities and construct highly personalized feedback loops. The friction required to exit these ecosystems artificially increases over time, locking the user into a passive state of consumption.
        </p>

        <p>
          Reversing this state requires more than behavioral discipline; it requires an architectural pivot. We must transition from centralized cloud dependencies to localized, on-device intelligence. By severing the telemetry pipeline that feeds these predictive models, we establish the foundational perimeter necessary for true cognitive autonomy.
        </p>
      </article>

      {/* CALL TO ACTION / HAND-OFF TO CORPORATE */}
      <section className="mt-12 pt-8 border-t border-gray-800">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 space-y-4">
          <h2 className="font-sans text-lg font-bold tracking-tight text-white">
            Full Intelligence Brief Available
          </h2>
          <p className="font-serif text-sm text-gray-400">
            This abstract summarizes institutional research published by Maha Strategies. The full brief covers the technical integration of localized LLMs, edge-compute constraints, and specific protocols for mitigating behavioral lock-in.
          </p>
          <div className="pt-4">
            <a 
              href="https://www.mahastrategies.com/intelligence/briefs/algorithmic-lock-in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold hover:bg-indigo-500 text-sm font-mono transition-colors text-center"
            >
              ACCESS FULL BRIEF ON MAHA STRATEGIES &#8599;
            </a>
          </div>
        </div>
      </section>

      {/* RELATED CONCEPTS */}
      <section className="mt-12">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4 mb-6">
          Lexical Alignment
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/concepts/algorithmic-capture" className="px-3 py-1 border border-gray-800 text-xs font-mono text-gray-400 hover:text-indigo-400 hover:border-indigo-500 transition-colors">
            ALGORITHMIC CAPTURE
          </Link>
          <Link href="/concepts/digital-sovereignty" className="px-3 py-1 border border-gray-800 text-xs font-mono text-gray-400 hover:text-indigo-400 hover:border-indigo-500 transition-colors">
            DIGITAL SOVEREIGNTY
          </Link>
        </div>
      </section>
    </div>
  );
}