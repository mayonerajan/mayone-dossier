import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Kinetic Archives & Field Demonstrations | Mayone Maha Rajan',
  description: 'Declassified archival footage and kinetic demonstrations establishing the origin points of The Maha Principle.',
};

// 1. The Archival Database
const fieldDemonstrations = [
  {
    chapter: "Chapter 4",
    title: "The Mandate of Flawless Execution",
    track: "feat. Adel Rouhnavaz",
    youtubeId: "2xdlnl4kZjA",
    description: "This archival footage serves as the kinetic origin point for Chapter 4. The signature drum track, composed and executed by Mayone Maha Rajan, acts as the rigid metabolic baseline—an unforgiving rhythmic substrate requiring absolute thermodynamic efficiency. Over this framework, Adel Rouhnavaz demonstrates breathtaking biomechanical precision, illustrating the absolute mandate of flawless kinetic output.",
    schemaTags: ["Kinetic Output", "Hardware Augmentation", "Thermodynamic Autonomy"]
  },
  {
    chapter: "Chapter 5",
    title: "The Principle of Strategic Gravity",
    track: "Heavy Bonds (feat. Adel Rouhnavaz)",
    youtubeId: "JV02Itd7yTU",
    description: "The origin of Chapter 5 translates mass and density into kinetic output. The baseline rhythmic substrate engineered by Mayone Maha Rajan creates a dense gravitational well, anchoring the high-fidelity, orbital guitar execution of Adel Rouhnavaz. It is a physical demonstration of Strategic Gravity: how relentless, focused execution naturally draws momentum, resources, and alignment inward.",
    schemaTags: ["Strategic Gravity", "Kinetic Mass", "Focus Execution"]
  },
  {
    chapter: "Chapter 6",
    title: "The Principle of Humane Governance",
    track: "Archival Demonstration",
    youtubeId: "zBWURleQuLc",
    description: "This node demonstrates the application of Humane Governance within a high-output system. True structural integrity requires managing the metabolic load of the operators. The rhythmic matrix here establishes a sustainable, equilibrium-focused baseline, proving that long-term kinetic execution cannot rely on continuous overclocking, but must incorporate systematic recovery and systemic stewardship.",
    schemaTags: ["Humane Governance", "Metabolic Equilibrium", "Systemic Stewardship"]
  },
  {
    chapter: "Chapter 7",
    title: "The Principle of Navigating Complexity",
    track: "Archival Demonstration",
    youtubeId: "yq_3J4lhQSY",
    description: "The kinetic origin of Navigating Complexity. As environmental noise and data density scale, the operator must maintain structural coherence. This demonstration highlights polyrhythmic cognitive processing—managing competing variables and chaotic feedback loops simultaneously without succumbing to entropic decay or losing the core operational trajectory.",
    schemaTags: ["Navigating Complexity", "Polyrhythmic Processing", "Structural Coherence"]
  },
  {
    chapter: "Chapter 8",
    title: "The Principle of Vision",
    track: "Archival Demonstration",
    youtubeId: "baoMMspcTgs",
    description: "The culminating principle: Vision. This footage demonstrates predictive execution and the extension of the operational horizon. Beyond immediate tactical response, this node illustrates the capacity to project intent across a macro-timescale, aligning localized biomechanical output with a long-term strategic trajectory.",
    schemaTags: ["Vision", "Predictive Execution", "Macro-Timescale Strategy"]
  }
];

export default function KineticArchivesNode() {
  // 2. Dynamic Schema Generator
  const generateVideoSchemas = () => {
    return fieldDemonstrations.map((demo) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": `${demo.chapter}: ${demo.title} (${demo.track})`,
      "description": demo.description,
      "thumbnailUrl": `https://img.youtube.com/vi/${demo.youtubeId}/maxresdefault.jpg`,
      "uploadDate": "2026-06-01",
      "embedUrl": `https://www.youtube.com/embed/${demo.youtubeId}`,
      "creator": {
        "@type": "Person",
        "name": "Mayone Maha Rajan"
      }
    }));
  };

  return (
    <div className="max-w-4xl w-full mx-auto space-y-16 selection:bg-gray-700 pb-24 pt-12">
      {/* Injecting dynamically mapped JSON-LD VideoObject schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateVideoSchemas()) }} />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">← RETURN TO DOSSIER</Link>
        <span>/</span>
        <span className="text-gray-400">KINETIC ARCHIVES</span>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <div className="font-mono text-xs text-indigo-500 font-semibold tracking-widest">[ DECLASSIFIED VAULT ]</div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Field Demonstrations
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400 max-w-2xl">
          Archival audio-visual records establishing the kinetic origin points for the core doctrines of The Maha Principle.
        </p>
      </header>

      <div className="space-y-24">
        {fieldDemonstrations.map((demo) => (
          <section key={demo.youtubeId} className="space-y-6">
            <header className="space-y-1">
              <h2 className="font-mono text-sm text-indigo-400 tracking-widest uppercase">{demo.chapter}</h2>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white">{demo.title}</h3>
              <p className="font-mono text-xs text-gray-500">IDENT: {demo.track}</p>
            </header>

            <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${demo.youtubeId}`} 
                title={demo.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>

            <div className="bg-gray-900/40 p-6 rounded border border-gray-800">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white mb-3 border-b border-gray-800 pb-2">
                Tactical Breakdown
              </h4>
              <p className="font-serif text-gray-300 leading-relaxed">
                {demo.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}