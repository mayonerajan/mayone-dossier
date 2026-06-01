import Link from 'next/link';

export const metadata = {
  title: 'Concepts Library | Mayone Maha Rajan',
  description: 'The lexical framework and core doctrines for navigating high-noise environments, including Biological Sovereignty and Algorithmic Capture.',
};

export default function ConceptsIndex() {
  const concepts = [
    { title: "Biological Sovereignty", slug: "biological-sovereignty", desc: "Defending the metabolic container against external digital commodification." },
    { title: "Digital Sovereignty", slug: "digital-sovereignty", desc: "Architectural self-reliance via localized data and private compute." },
    { title: "Algorithmic Capture", slug: "algorithmic-capture", desc: "The systemic hijacking of human executive function by machine learning." },
    { title: "Thermodynamic Autonomy", slug: "thermodynamic-autonomy", desc: "Self-sustaining energy and computing operations independent of entropic decay." },
    { title: "Zero-Payload Architecture", slug: "zero-payload-architecture", desc: "Software doctrine ensuring zero non-essential telemetry to the cloud." },
    { title: "The Maha Principle", slug: "the-maha-principle", desc: "Unified methodology for reclaiming individual agency." },
    { title: "Cybernetic Prosthetics", slug: "cybernetic-prosthetics", desc: "Analyzing high-performance physical instruments as cybernetic extensions of the human nervous system." }
  ];

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12">
        <Link href="/" className="hover:text-indigo-400 transition-colors">&larr; RETURN TO DOSSIER</Link>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <div className="font-mono text-xs text-indigo-400 tracking-widest uppercase">
          [ DIRECTORY: ACTIVE ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Concepts Library
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400">
          The lexical framework required to navigate and neutralize environmental noise. Select a node to access the expanded definition and operational parameters.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 pt-4">
        {concepts.map((concept) => (
          <Link 
            key={concept.slug} 
            href={`/concepts/${concept.slug}`} 
            className="block p-6 border border-gray-800 rounded-lg hover:border-indigo-500 transition-all group"
          >
            <h2 className="font-sans text-xl font-bold text-white group-hover:text-indigo-400 mb-2 transition-colors">
              {concept.title} &rarr;
            </h2>
            <p className="font-serif text-gray-400">{concept.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}