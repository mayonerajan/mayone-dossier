import Link from 'next/link';
import {
  buildConceptGraph,
  ConceptNav,
  ConceptHeader,
  FAQ,
  RelatedConcepts,
  SITE,
} from '@/lib/concept-kit';

const PAGE_URL = `${SITE}/concepts/metabolic-colonialism/`;

const FAQ_ITEMS = [
  {
    q: 'What is metabolic colonialism?',
    a: 'Metabolic colonialism is The Maha Principle’s term for an economic model in which industrial food and pharmaceutical systems profit from human biological dysfunction. The book draws an analogy to historical colonial extraction: raw value is taken and degradation is left behind. It is used as a critical economic framing, not as a clinical or diagnostic term.',
  },
  {
    q: 'Is this a claim about specific foods being toxic?',
    a: 'The book makes a narrower, hedged claim than that. Its argument about seed oils, for example, is that industrial processing can render certain polyunsaturated fats chemically unstable, producing oxidised compounds that, consumed at scale, may contribute to metabolic problems — and that consumption trends track rising metabolic disease. It presents this as a model to be tested, with published conditions under which it would revise the claim, rather than as established fact.',
  },
  {
    q: 'What does the book propose in response?',
    a: 'Within the framework, the counter to metabolic colonialism is Health — reclaiming the body as a source of strength rather than a target for extraction. The associated practices are framed as personal choices for reflection, not medical prescriptions, and the book directs readers to consult a qualified healthcare provider before changing their diet.',
  },
];

export const metadata = {
  title: 'Metabolic Colonialism | The Maha Principle — Mayone Maha Rajan',
  description:
    'Metabolic colonialism: an economic model in which industrial food and pharmaceutical systems profit from biological dysfunction. A core concept from The Maha Principle by Mayone Maha Rajan.',
};

export default function Page() {
  const jsonLd = buildConceptGraph({
    pageUrl: PAGE_URL,
    termName: 'Metabolic Colonialism',
    termDescription:
      'An economic model in which industrial food and pharmaceutical systems profit from human biological dysfunction, framed by analogy to historical colonial resource extraction.',
    faq: FAQ_ITEMS,
  });

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConceptNav />
      <ConceptHeader
        title="Metabolic Colonialism"
        tagline="An extractive model in which industrial food systems profit from biological dysfunction."
      />

      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          <strong>Metabolic colonialism</strong> is the first of the three crises diagnosed in{' '}
          <Link href="/concepts/the-maha-principle" className="text-indigo-400 hover:text-indigo-300">
            The Maha Principle
          </Link>{' '}
          &mdash; and the one the book treats as foundational, since it argues that little else is
          accessible from a depleted body. The term names an economic model in which industrial food
          and pharmaceutical systems profit from biological dysfunction.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The colonial analogy</h2>
        <p>
          The book draws the comparison deliberately: just as colonial powers extracted raw material
          from occupied territory and left degradation behind, it argues that the industrial food
          complex extracts value from the body by selling hyper-palatable, nutrient-poor products
          engineered to override the brain&rsquo;s natural stop signal. The framing is economic and
          critical &mdash; a way of naming whose interests a system serves &mdash; rather than a
          clinical category.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          How the book handles the evidence
        </h2>
        <p>
          This is the concept where calibration matters most, and the manuscript is careful with it.
          On seed oils, for instance, it argues that industrial processing can render certain
          polyunsaturated fats chemically unstable, producing oxidised compounds that, consumed at
          scale, <em>may contribute</em> to metabolic dysfunction &mdash; and that consumption trends
          track the rise of metabolic disease in Western populations. The claims are framed as a
          model to be tested, accompanied by published conditions under which the author commits to
          revising them, rather than as settled science.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The proposed counter</h2>
        <p>
          Within the four-part framework, the response is <em>Health</em>: reclaiming the body as a
          generator of strength rather than a passive target for extraction. The practices the book
          attaches to this &mdash; dietary changes, eating windows, cold exposure &mdash; are
          presented as personal choices for reflection, and the book explicitly directs readers to
          consult a qualified healthcare provider before making changes, noting that some practices
          are not appropriate for people with certain pre-existing conditions.
        </p>
      </article>

      <FAQ items={FAQ_ITEMS} />
      <RelatedConcepts current="metabolic-colonialism" />
    </div>
  );
}
