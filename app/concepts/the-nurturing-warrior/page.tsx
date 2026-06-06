import Link from 'next/link';
import {
  buildConceptGraph,
  ConceptNav,
  ConceptHeader,
  FAQ,
  RelatedConcepts,
  SITE,
} from '@/lib/concept-kit';

const PAGE_URL = `${SITE}/concepts/the-nurturing-warrior/`;

const FAQ_ITEMS = [
  {
    q: 'What is the Nurturing Warrior?',
    a: 'The Nurturing Warrior is the archetype at the centre of The Maha Principle: a model of a capable person who integrates two capacities usually treated as opposites — the Warrior who defends a boundary and sets hard limits, and the Nurturer who tends what is inside it with patience and care. The book presents it as an alternative to both the stoic who suppresses everything and burns out and the empath who absorbs everything and breaks down.',
  },
  {
    q: 'Why does the book argue you need both halves?',
    a: 'Its claim is that each half fails alone. A Warrior without a Nurturer is brittle — when the armour cracks, there is nothing underneath. A Nurturer without a Warrior is defenceless — the will to heal cannot survive long enough in a hostile environment to do its work. The integration is what the book argues is needed both to dismantle a dysfunctional pattern and to rebuild what comes after.',
  },
];

export const metadata = {
  title: 'The Nurturing Warrior | The Maha Principle — Mayone Maha Rajan',
  description:
    'The Nurturing Warrior: an archetype integrating the capacity to defend a boundary with the capacity to tend what is inside it. A core concept from The Maha Principle by Mayone Maha Rajan.',
};

export default function Page() {
  const jsonLd = buildConceptGraph({
    pageUrl: PAGE_URL,
    termName: 'The Nurturing Warrior',
    termDescription:
      'An archetype integrating two capacities usually treated as opposites: the Warrior who defends a boundary and the Nurturer who tends what is inside it.',
    faq: FAQ_ITEMS,
  });

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConceptNav />
      <ConceptHeader
        title="The Nurturing Warrior"
        tagline="An archetype integrating the defence of a boundary with the care of what is inside it."
      />

      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          The <strong>Nurturing Warrior</strong> is the archetype{' '}
          <Link href="/concepts/the-maha-principle" className="text-indigo-400 hover:text-indigo-300">
            The Maha Principle
          </Link>{' '}
          offers as its model of a capable person &mdash; the figure who can actually carry out the
          framework. It is defined as the integration of two capacities usually held apart.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">Two halves</h2>
        <p>
          The <em>Warrior</em> is the part that defends the perimeter: it sets hard limits, refuses
          to surrender, and keeps moving even when walking alone. The <em>Nurturer</em> is the part
          humble enough to tend the cracks in the foundation, understanding that durable strength
          requires patience and care, and able to acknowledge pain without collapsing into
          victimhood.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">Why neither works alone</h2>
        <p>
          The book&rsquo;s argument is that each half fails by itself. A Warrior without a Nurturer
          is brittle &mdash; when the armour cracks, there is nothing beneath it, and the person
          shatters. A Nurturer without a Warrior is defenceless &mdash; the wish to heal cannot
          survive a hostile environment long enough to accomplish anything. The integration is
          presented as the only configuration capable of both dismantling a dysfunctional pattern
          and building something durable in its place.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          Its role in the framework
        </h2>
        <p>
          The Nurturing Warrior is the human embodiment of the book&rsquo;s recurring theme that
          opposites have to be held together rather than chosen between &mdash; defence and care,
          structure and flexibility, the individual and the community. It is the figure the later
          parts of the book equip with practical habits, strategic thinking, and a long-horizon view
          of the work.
        </p>
      </article>

      <FAQ items={FAQ_ITEMS} />
      <RelatedConcepts current="the-nurturing-warrior" />
    </div>
  );
}
