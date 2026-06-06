import Link from 'next/link';

export const metadata = {
  title: 'Concepts | Mayone Maha Rajan',
  description:
    'A directory of concepts across Mayone Maha Rajan\u2019s work: the framework of The Maha Principle, the Maha OS sovereignty architecture, and analyses in music and instrument design.',
};

// Three distinct project families. Keeping them grouped (rather than flattened
// into one list) ensures each concept resolves to the right parent project for
// readers and for AI retrieval, instead of implying a single framework.
const GROUPS: {
  id: string;
  heading: string;
  intro: string;
  parentNote?: string;
  concepts: { title: string; slug: string; desc: string }[];
}[] = [
  {
    id: 'the-maha-principle',
    heading: 'The Maha Principle',
    intro:
      'Concepts from the book The Maha Principle: Reclaiming Biological Sovereignty \u2014 a four-part framework arguing that three modern crises share a single structural root.',
    concepts: [
      {
        title: 'The Maha Principle',
        slug: 'the-maha-principle',
        desc: 'The four-part framework (Mindfulness, Authenticity, Health, Action) addressing three compounding crises with one structural root.',
      },
      {
        title: 'Biological Sovereignty',
        slug: 'biological-sovereignty',
        desc: 'The right to protect your metabolic, cognitive, and autonomic systems from external extraction.',
      },
      {
        title: 'Attentional Captivity',
        slug: 'attentional-captivity',
        desc: 'The structural capture of human focus by systems engineered to maximise engagement \u2014 distinct from ordinary distraction.',
      },
      {
        title: 'Metabolic Colonialism',
        slug: 'metabolic-colonialism',
        desc: 'An economic model in which industrial food systems profit from biological dysfunction.',
      },
      {
        title: 'The Nurturing Warrior',
        slug: 'the-nurturing-warrior',
        desc: 'An archetype integrating the defence of a boundary with the care of what is inside it.',
      },
    ],
  },
  {
    id: 'maha-os',
    heading: 'Maha OS',
    intro:
      'Concepts from Maha OS \u2014 the sovereignty-oriented software architecture that applies the book\u2019s principles in practice. These are product and engineering ideas, distinct from the book\u2019s argument.',
    concepts: [
      {
        title: 'Digital Sovereignty',
        slug: 'digital-sovereignty',
        desc: 'Self-reliance through local data and private compute rather than dependence on hyperscale cloud services.',
      },
      {
        title: 'Zero-Payload Architecture',
        slug: 'zero-payload-architecture',
        desc: 'A design approach that minimises non-essential telemetry sent off-device by default.',
      },
      {
        title: 'Thermodynamic Autonomy',
        slug: 'thermodynamic-autonomy',
        desc: 'A design goal of operating with minimal external dependency \u2014 used as a guiding metaphor for self-sufficient systems.',
      },
    ],
  },
  {
    id: 'music-instrument',
    heading: 'Music & Instrument Analysis',
    intro:
      'Analyses of instrument design, performance technique, and the relationship between musician and instrument \u2014 a separate body of work from the books.',
    concepts: [
      {
        title: 'Cybernetic Prosthetics',
        slug: 'cybernetic-prosthetics',
        desc: 'Reading high-performance instruments as extensions of the player\u2019s nervous system and intent.',
      },
      {
        title: 'Biomechanical Synthesis',
        slug: 'astrian-trek',
        desc: 'How localised kinetic collaboration scales into the coordination of complex, distributed performance systems.',
      },
      {
        title: 'Structural Syncopation',
        slug: 'earthists-footprints',
        desc: 'An analysis of polyrhythmic complexity and the rhythmic baseline underneath it.',
      },
      {
        title: 'Extended Range Geometry',
        slug: 'red-seas-fire',
        desc: 'Low-frequency transient tracking and structural transitions on multi-scale 8-string instruments.',
      },
    ],
  },
];

export default function ConceptsIndex() {
  return (
    <div className="max-w-3xl w-full mx-auto space-y-16 selection:bg-gray-700 pb-16 pt-12">
      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-4">
        <Link href="/" className="hover:text-indigo-400 transition-colors">
          &larr; RETURN TO DOSSIER
        </Link>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <div className="font-mono text-xs text-indigo-400 tracking-widest uppercase">
          [ DIRECTORY ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Concepts
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-400">
          A directory of concepts across three areas of work: the framework of{' '}
          <em>The Maha Principle</em>, the Maha OS sovereignty architecture, and analyses in music
          and instrument design. Each section is its own body of work.
        </p>
      </header>

      {GROUPS.map((group) => (
        <section key={group.id} className="space-y-6">
          <div className="space-y-2 border-b border-gray-900 pb-4">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-white">
              {group.heading}
            </h2>
            <p className="font-serif text-gray-500 leading-relaxed">{group.intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {group.concepts.map((concept) => (
              <Link
                key={concept.slug}
                href={`/concepts/${concept.slug}`}
                className="block p-6 border border-gray-800 rounded-lg hover:border-indigo-500 transition-all group"
              >
                <h3 className="font-sans text-xl font-bold text-white group-hover:text-indigo-400 mb-2 transition-colors">
                  {concept.title} &rarr;
                </h3>
                <p className="font-serif text-gray-400">{concept.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
