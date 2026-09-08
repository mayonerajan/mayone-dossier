import Link from 'next/link';
import {
  buildConceptGraph,
  ConceptNav,
  ConceptHeader,
  FAQ,
  RelatedConcepts,
} from '@/lib/concept-kit';

const PAGE_URL = 'https://www.mayonemaharajan.com/concepts/algorithmic-capture';

const FAQ_ITEMS = [
  {
    q: 'What is algorithmic capture?',
    a: 'In The Maha Principle, algorithmic capture is Mayone Maha Rajan’s term for a condition in which feedback-driven digital systems increasingly shape what a person notices, chooses, and repeats. It is an author-defined analytical frame, not a clinical diagnosis or a claim that every recommendation system produces the same effect.',
  },
  {
    q: 'How is algorithmic capture related to attentional captivity?',
    a: 'Attentional captivity names the narrowing of sustained attention; algorithmic capture is the wider frame that also includes behavioural feedback, dependency, and reduced practical exit options. The relationship is conceptual within The Maha Principle and should not be treated as an independently validated scientific taxonomy.',
  },
  {
    q: 'What does this concept not establish?',
    a: 'The concept does not establish that a particular platform manipulated a particular person, prove intent by a system designer, diagnose addiction, or replace empirical evaluation of a concrete product and user population.',
  },
];

export const metadata = {
  title: 'Algorithmic Capture | The Maha Principle — Mayone Maha Rajan',
  description:
    'Algorithmic capture is an author-defined framework for examining how feedback-driven systems can narrow attention, shape repeated choices, and increase dependency.',
  alternates: { canonical: PAGE_URL },
};

export default function AlgorithmicCapturePage() {
  const jsonLd = buildConceptGraph({
    pageUrl: PAGE_URL,
    termName: 'Algorithmic Capture',
    termDescription:
      'An author-defined analytical frame for how feedback-driven digital systems can narrow attention, shape repeated choices, and increase dependency.',
    faq: FAQ_ITEMS,
  });

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConceptNav />
      <ConceptHeader
        title="Algorithmic Capture"
        tagline="A bounded framework for examining when adaptive systems begin to direct attention and repeated choice."
      />

      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          <strong>Algorithmic capture</strong> is an author-defined concept in{' '}
          <Link href="/concepts/the-maha-principle" className="text-indigo-400 hover:text-indigo-300">
            The Maha Principle
          </Link>
          . It describes a feedback relationship in which a digital system learns from behaviour,
          selects what appears next, and can gradually narrow the practical range of attention and
          choice. The term names a governance problem: the person supplies signals while the system
          controls the adaptation loop.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The feedback loop</h2>
        <p>
          The framework separates a single recommendation from capture. A recommendation becomes
          relevant to the concept only when observation, prediction, selection, and repeated response
          reinforce one another over time. This makes the object of analysis the relationship between
          a person and an adaptive environment, not an isolated item of content.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">Related concepts</h2>
        <p>
          <Link href="/concepts/attentional-captivity" className="text-indigo-400 hover:text-indigo-300">
            Attentional captivity
          </Link>{' '}
          concerns the loss of sustained attention.{' '}
          <Link href="/concepts/digital-sovereignty" className="text-indigo-400 hover:text-indigo-300">
            Digital sovereignty
          </Link>{' '}
          concerns control over infrastructure and data.{' '}
          <Link href="/concepts/biological-sovereignty" className="text-indigo-400 hover:text-indigo-300">
            Biological sovereignty
          </Link>{' '}
          supplies the normative boundary: the person’s cognitive and metabolic systems are not merely
          inputs for an optimization process.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">Evidence boundary</h2>
        <p>
          This page defines the term as the author uses it. It does not establish a clinical disorder,
          prove that any named platform intentionally manipulates a user, or transfer the framework to
          a specific product without separate evidence about that product, population, and context.
        </p>
      </article>

      <FAQ items={FAQ_ITEMS} />
      <RelatedConcepts current="algorithmic-capture" />
    </div>
  );
}
