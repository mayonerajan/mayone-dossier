import Link from 'next/link';

export const metadata = {
  title: 'Research Library & Abstracts | Mayone Maha Rajan',
  description: 'An indexed compilation of executive summaries, structural countermeasures, and tactical briefs covering applied cognitive cybernetics.',
};

export default function ResearchIndex() {
  const clusters = [
    {
      name: "I. Biological Sovereignty",
      abstracts: [
        { title: "Metabolic Sovereignty and the Substrate", slug: "metabolic-sovereignty", desc: "Physical defense parameters for the human organism." },
        { title: "The Soil-Gut-Brain Axis Protocol", slug: "soil-gut-brain-axis", desc: "Evaluating external nutrient inputs on cognitive processing speeds." },
        { title: "Neurotechnology Commercial Outlook", slug: "neurotechnology-non-medical-outlook", desc: "Analyzing risks of centralized neurotechnology data extraction." }
      ]
    },
    {
      name: "II. Algorithmic Capture",
      abstracts: [
        { title: "The Mechanics of Algorithmic Lock-In", slug: "algorithmic-lock-in", desc: "Systemic behavioral capture frameworks deployed by platforms." },
        { title: "Overclocked: Metabolic Exhaustion Systems", slug: "overclocked", desc: "Managing thermodynamic cognitive limits in high-stimulus zones." },
        { title: "The Pivot from Consumer to Producer", slug: "consumer-to-producer", desc: "Operational shifts to dismantle passive attention models." }
      ]
    },
    {
      name: "III. Digital & Hardware Sovereignty",
      abstracts: [
        { title: "Deploying the Digital Firewall", slug: "digital-firewall", desc: "Tactical configurations for zero-payload consumer routing." },
        { title: "Hardware Sovereignty Operational Standard", slug: "hardware-sovereignty", desc: "Isolating computing processes onto verifiable local silicon." },
        { title: "Hyperscaler Storage Disposition Analysis", slug: "hyperscaler-storage-disposition", desc: "Evaluating structural risks embedded inside cloud storage grids." },
        { title: "The Geopolitics of Foundry Sovereignization", slug: "us-foundry-sovereignization", desc: "Macro supply-chain realities of localized semiconductor manufacturing." }
      ]
    },
    {
      name: "IV. The Maha Principle & Doctrine",
      abstracts: [
        { title: "Architecting National & Personal Renewal", slug: "architecting-renewal", desc: "The macro-thesis for system-wide stabilization operations." },
        { title: "The Protocol of Precision", slug: "protocol-of-precision", desc: "Establishing strict rulesets to protect individual attention pipelines." },
        { title: "Strategic Gravity and Environment Manipulation", slug: "strategic-gravity", desc: "Maintaining cognitive momentum against high-noise variables." },
        { title: "The Ordeal: Psychological Resilience Vectors", slug: "the-ordeal", desc: "Building systematic tolerances to psychological environmental pressures." }
      ]
    }
  ];

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12">
        <Link href="/" className="hover:text-indigo-400 transition-colors">&larr; RETURN TO DOSSIER</Link>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <div className="font-mono text-xs text-indigo-400 tracking-widest uppercase">
          [ INDEX NODES: ACTIVE ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Research Abstracts
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400">
          A modular collection of architectural blueprints, technical executive summaries, and field protocols mapped to the Maha Principle.
        </p>
      </header>

      <div className="space-y-12 pt-4">
        {clusters.map((cluster) => (
          <div key={cluster.name} className="space-y-4">
            <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-indigo-400 border-b border-gray-900 pb-2">
              {cluster.name}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {cluster.abstracts.map((abstract) => (
                <Link 
                  key={abstract.slug} 
                  href={`/research/${abstract.slug}`} 
                  className="block p-4 border border-gray-900 bg-gray-950/20 rounded hover:border-gray-700 transition-colors group"
                >
                  <h3 className="font-sans font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {abstract.title} &rarr;
                  </h3>
                  <p className="text-sm font-serif text-gray-400 mt-1">{abstract.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}