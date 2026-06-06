import Link from 'next/link';
import {
  buildConceptGraph,
  ConceptNav,
  ConceptHeader,
  FAQ,
  RelatedConcepts,
  SITE,
} from '@/lib/concept-kit';

const PAGE_URL = `${SITE}/concepts/biological-sovereignty/`;

const FAQ_ITEMS = [
  {
    q: 'What is biological sovereignty?',
    a: 'In The Maha Principle, biological sovereignty is the claim that an individual has the right to protect their metabolic, cognitive, and autonomic systems from external extraction — from food systems engineered to override the body’s stop signals, and from attention platforms engineered to predict and direct behaviour. It is framed as a right to be defended rather than a medical state to be diagnosed.',
  },
  {
    q: 'Why does the book frame it as sovereignty rather than wellness?',
    a: 'The book argues that the language of personal wellness places the burden entirely on individual willpower while leaving the extracting systems unexamined. Framing the body as territory under occupation, rather than a self to be optimised, shifts the question from “why can’t I resist?” to “what is being extracted, by whom, and how do I structurally limit it?”',
  },
];

export const metadata = {
  title: 'Biological Sovereignty | The Maha Principle — Mayone Maha Rajan',
  description:
    'Biological sovereignty: an individual\u2019s right to protect their metabolic, cognitive, and autonomic systems from external algorithmic extraction. A core concept from The Maha Principle by Mayone Maha Rajan.',
};

export default function Page() {
  const jsonLd = buildConceptGraph({
    pageUrl: PAGE_URL,
    termName: 'Biological Sovereignty',
    termDescription:
      'The claim that an individual has the right to protect their metabolic, cognitive, and autonomic systems from external, high-frequency extraction by commercial systems.',
    faq: FAQ_ITEMS,
  });

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConceptNav />
      <ConceptHeader
        title="Biological Sovereignty"
        tagline="The right to protect your metabolic, cognitive, and autonomic systems from external extraction."
      />

      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          <strong>Biological sovereignty</strong> is the organising claim behind{' '}
          <Link href="/concepts/the-maha-principle" className="text-indigo-400 hover:text-indigo-300">
            The Maha Principle
          </Link>
          : that an individual has the right to protect their metabolic, cognitive, and autonomic
          systems from external, high-frequency extraction. It is stated as a right to be defended,
          not a clinical condition to be diagnosed.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">Body as territory</h2>
        <p>
          The book uses the language of occupation deliberately. It argues that two industries
          extract value by degrading the territory they occupy: a food system that profits from
          metabolic dysfunction, and a technology system that profits from predicting and directing
          behaviour. Sovereignty, in this framing, is the refusal to treat that extraction as either
          inevitable or as a personal failing.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The basis for the concern</h2>
        <p>
          The argument draws on published research the book cites rather than asserts on its own
          authority. Work in <em>digital phenotyping</em> &mdash; the use of passive smartphone
          signals such as typing speed and scroll patterns as indicators of psychological state
          &mdash; has been studied at institutions including Stanford and Harvard. The book&rsquo;s
          point is not that any single prediction is certain, but that systems can hold a
          higher-resolution model of a person&rsquo;s likely behaviour than the person holds in
          conscious awareness, which is what makes &ldquo;freely made choice&rdquo; harder to defend
          in those environments.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">A claim, not a cure</h2>
        <p>
          Biological sovereignty is a stance toward one&rsquo;s own systems, not a treatment or a
          health outcome. The protocols the book attaches to it are framed as personal practices for
          reflection and resilience, not as medical interventions, and the book directs readers to
          qualified healthcare providers before changing diet, exercise, or health routines.
        </p>
      </article>

      <FAQ items={FAQ_ITEMS} />
      <RelatedConcepts current="biological-sovereignty" />
    </div>
  );
}
