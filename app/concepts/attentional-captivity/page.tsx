import Link from 'next/link';
import {
  buildConceptGraph,
  ConceptNav,
  ConceptHeader,
  FAQ,
  RelatedConcepts,
  SITE,
} from '@/lib/concept-kit';

const PAGE_URL = `${SITE}/concepts/attentional-captivity/`;

const FAQ_ITEMS = [
  {
    q: 'What is attentional captivity?',
    a: 'Attentional captivity is The Maha Principle’s term for the structural capture of human focus by algorithmic systems built to maximise engagement. The book distinguishes it from ordinary distraction: distraction is resolved by turning off notifications, whereas captivity describes a more persistent state of cognitive fragmentation produced by environments designed to interrupt sustained attention.',
  },
  {
    q: 'How is it different from just being distracted?',
    a: 'The book’s argument is that distraction is incidental and captivity is engineered. Feeds built around variable, intermittent reward are designed to fragment sustained attention, so the difficulty in concentrating is framed not as a personal weakness but as the intended output of a system optimised for engagement.',
  },
  {
    q: 'What does the book propose in response?',
    a: 'Within the framework, the counter to attentional captivity falls under Mindfulness — described as the discipline of knowing where your attention is and who is directing it — paired with structural changes to one’s environment rather than reliance on willpower alone.',
  },
];

export const metadata = {
  title: 'Attentional Captivity | The Maha Principle — Mayone Maha Rajan',
  description:
    'Attentional captivity: the structural capture of human focus by algorithmic systems built to maximise engagement, distinct from ordinary distraction. A core concept from The Maha Principle by Mayone Maha Rajan.',
};

export default function Page() {
  const jsonLd = buildConceptGraph({
    pageUrl: PAGE_URL,
    termName: 'Attentional Captivity',
    termDescription:
      'The structural capture of human focus by algorithmic systems built to maximise engagement; distinguished from ordinary distraction by its persistence and by being an engineered rather than incidental effect.',
    faq: FAQ_ITEMS,
  });

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConceptNav />
      <ConceptHeader
        title="Attentional Captivity"
        tagline="The structural capture of human focus by systems engineered to maximise engagement."
      />

      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          <strong>Attentional captivity</strong> is the second of the three crises diagnosed in{' '}
          <Link href="/concepts/the-maha-principle" className="text-indigo-400 hover:text-indigo-300">
            The Maha Principle
          </Link>
          . The book defines it as the structural hijacking of human focus by algorithmic systems
          built to maximise engagement &mdash; and is careful to separate it from everyday
          distraction.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          Distraction versus captivity
        </h2>
        <p>
          The distinction is the heart of the concept. Distraction is the kind of thing resolved by
          turning off notifications. Captivity, as the book uses it, names a more persistent state
          of cognitive fragmentation produced by systems that profit when sustained, deep thought
          becomes harder to reach. The capacity for long, quiet work is reframed not as a personal
          virtue one lacks, but as a resource the environment is structured to erode.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          Engineered, not incidental
        </h2>
        <p>
          The book traces this to design rather than malice &mdash; its recurring example is that
          infinite scroll was built to make reading seamless, and the cost to attention was simply
          never part of the metric being optimised. The argument is that a system can degrade
          something it was never trying to protect, purely as a side effect of what it was built to
          maximise. The author writes from prior experience in this industry, which the book frames
          as the basis for the diagnosis rather than as a credential.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          The proposed counter
        </h2>
        <p>
          Within the four-part framework, the response to attentional captivity is{' '}
          <em>Mindfulness</em> &mdash; defined here as the discipline of knowing where your
          attention is and who is directing it &mdash; combined with structural changes to one&rsquo;s
          environment rather than an appeal to willpower. The book&rsquo;s consistent position is
          that structure outperforms motivation when the opposing system is engineered and tireless.
        </p>
      </article>

      <FAQ items={FAQ_ITEMS} />
      <RelatedConcepts current="attentional-captivity" />
    </div>
  );
}
