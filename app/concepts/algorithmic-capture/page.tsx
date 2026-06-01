import Link from 'next/link';

export const metadata = {
  title: 'Algorithmic Capture Explained | Mayone Maha Rajan Concepts',
  description: 'An in-depth analysis of Algorithmic Capture: the systemic hijacking of human executive function and dopamine regulation by machine learning models.',
};

export default function AlgorithmicCapturePage() {
  // FAQ Schema for AIO/SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Algorithmic Capture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Algorithmic Capture is the systemic hijacking of human executive function, attention, and dopamine regulation by highly optimized, engagement-driven machine learning models deployed by centralized platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How does Algorithmic Capture affect the human brain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It targets the dopaminergic reward pathways using variable ratio reinforcement schedules. Over time, this constant micro-stimulation degrades the prefrontal cortex's ability to maintain deep focus, execute long-term planning, and resist immediate gratification."
        }
      },
      {
        "@type": "Question",
        "name": "What is the defense against Algorithmic Capture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Defeating capture requires architectural countermeasures, not just willpower. This involves deploying The Maha Principle, establishing kinetic friction between the user and digital inputs, and transitioning to Zero-Payload Architecture to blind the predictive models."
        }
      }
    ]
  };

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      {/* INJECT FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">&larr; DOSSIER</Link>
        <span>/</span>
        <Link href="/concepts" className="hover:text-indigo-400 transition-colors">CONCEPTS</Link>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Algorithmic Capture
        </h1>
        <p className="font-serif text-xl leading-relaxed text-indigo-400">
          The systemic hijacking of human executive function and neurological agency.
        </p>
      </header>

      {/* EXPANDED DEFINITION (500+ Words) */}
      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          In the architecture of modern digital platforms, human attention is the primary metabolic fuel. <strong>Algorithmic Capture</strong> is the phenomenon wherein a user’s autonomous decision-making apparatus is bypassed, predictably manipulated, and ultimately hijacked by hyperscale machine learning models designed to maximize engagement time.
        </p>
        
        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The Dopaminergic Attack Vector</h2>
        <p>
          Algorithmic capture is not a metaphor; it is a structural interface with human neurobiology. By utilizing vast datasets of behavioral telemetry, centralized AI systems continuously run A/B tests against the human organism. These models identify the exact variable ratio reinforcement schedules required to trigger dopamine release in individual users. 
        </p>
        <p>
          The platform presents a continuous stream of hyper-novel, emotionally resonant stimuli. Over time, the biological hardware adapts to this high-noise environment. The baseline for dopaminergic satisfaction shifts upwards, rendering slow, deliberate, or deep-work processes cognitively agonizing. The user is effectively "captured"—locked into a consumption loop where the algorithm dictates their emotional state and temporal allocation.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The Erosion of Executive Function</h2>
        <p>
          The most critical casualty of this capture is the prefrontal cortex—the biological seat of executive function. Executive function governs the ability to pause between stimulus and response, coordinate long-term planning, and regulate impulses. As predictive models become more adept at serving frictionless micro-gratifications, the metabolic cost of exercising executive function becomes artificially high.
        </p>
        <p>
          When algorithms predict your desires before you consciously formulate them, they preempt the need for choice. Agency atrophies. The individual transitions from an active architect of their reality to a passive node in a broader, machine-directed network.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">Countermeasures and Friction</h2>
        <p>
          Relying on psychological discipline or "willpower" to combat asymmetric AI is a mathematically losing strategy. The human biological container cannot out-process a hyperscaler. Therefore, the countermeasure to Algorithmic Capture must be architectural.
        </p>
        <p>
          We must introduce systemic friction. By adopting <em>The Maha Principle</em>, individuals can establish rigid, non-negotiable protocols for digital engagement. By transitioning to <em>Digital Sovereignty</em> and local AI models, we blind the external algorithms, cutting off the telemetry feed they require to update their predictive models. You reclaim executive function not by resisting the algorithm, but by exiting its operational theater entirely.
        </p>
      </article>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="font-sans text-xl font-bold tracking-tight text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">What is Algorithmic Capture?</h3>
            <p className="font-serif text-gray-400 leading-relaxed">Algorithmic Capture is the systemic hijacking of human executive function, attention, and dopamine regulation by highly optimized, engagement-driven machine learning models deployed by centralized platforms.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">How does Algorithmic Capture affect the human brain?</h3>
            <p className="font-serif text-gray-400 leading-relaxed">It targets the dopaminergic reward pathways using variable ratio reinforcement schedules. Over time, this constant micro-stimulation degrades the prefrontal cortex's ability to maintain deep focus, execute long-term planning, and resist immediate gratification.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">What is the defense against Algorithmic Capture?</h3>
            <p className="font-serif text-gray-400 leading-relaxed">Defeating capture requires architectural countermeasures, not just willpower. This involves deploying The Maha Principle, establishing kinetic friction between the user and digital inputs, and transitioning to Zero-Payload Architecture to blind the predictive models.</p>
          </div>
        </div>
      </section>

      {/* RELATED CONCEPTS */}
      <section className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white mb-4">
          Related Concepts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/concepts/the-maha-principle" className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors">
            <h3 className="font-bold text-white mb-1">The Maha Principle</h3>
            <p className="text-xs font-serif text-gray-500">The structural methodology for reclaiming individual agency.</p>
          </Link>
          <Link href="/concepts/biological-sovereignty" className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors">
            <h3 className="font-bold text-white mb-1">Biological Sovereignty</h3>
            <p className="text-xs font-serif text-gray-500">Defending the metabolic container against commodification.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}