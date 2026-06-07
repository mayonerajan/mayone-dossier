import Link from 'next/link';
import SignupForm from './SignupForm'; // colocated client component; posts to /api/subscribe

export const metadata = {
  title: 'The Maha Principle | A Framework for Biological Sovereignty — Mayone Maha Rajan',
  description:
    'The Maha Principle is a four-part framework (Mindfulness, Authenticity, Health, Action) arguing that three modern crises — metabolic, attentional, and relational — share a single root: systems optimised for engagement and growth rather than human flourishing. By Mayone Maha Rajan.',
  alternates: {
    canonical: 'https://www.mayonemaharajan.com/concepts/the-maha-principle',
  },
};

// Canonical identifiers — referenced across the site so crawlers and AI
// retrieval resolve one author, one book, one set of defined terms.
const PERSON_ID = 'https://mayonemaharajan.com/#person';
const BOOK_ID = 'https://mayonemaharajan.com/the-maha-principle/#book';
const PAGE_URL = 'https://mayonemaharajan.com/concepts/the-maha-principle/';

export default function MahaPrinciplePage() {
  // Structured data: a @graph linking the DefinedTerm to the Book and the
  // Book to its author (Person). FAQPage text mirrors the visible FAQ below.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Mayone Maha Rajan',
        url: 'https://mayonemaharajan.com/',
        jobTitle: 'Strategist and researcher',
        description:
          'Strategist and researcher writing at the intersection of cognitive science, metabolic health, and digital autonomy. Author of The Maha Principle.',
      },
      {
        '@type': 'Book',
        '@id': BOOK_ID,
        name: 'The Maha Principle: Reclaiming Biological Sovereignty',
        author: { '@id': PERSON_ID },
        inLanguage: 'en',
        about: [
          'Biological sovereignty',
          'Attention',
          'Metabolic health',
          'Digital autonomy',
        ],
        abstract:
          'A four-part framework — Mindfulness, Authenticity, Health, Action — arguing that three compounding modern crises (metabolic, attentional, and relational) share a single structural cause: systems optimised for engagement and growth rather than for the people inside them.',
        url: PAGE_URL,
      },
      {
        '@type': 'DefinedTerm',
        '@id': PAGE_URL + '#term',
        name: 'The Maha Principle',
        description:
          'A four-part framework (Mindfulness, Authenticity, Health, Action) for responding to three compounding modern crises that the framework attributes to a single structural cause: systems optimised for engagement and growth rather than for human flourishing.',
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'The Maha Principle',
          '@id': BOOK_ID,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': PAGE_URL + '#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is The Maha Principle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Maha Principle is a four-part framework — Mindfulness, Authenticity, Health, and Action — set out in the book of the same name by Mayone Maha Rajan. It argues that three modern crises (metabolic, attentional, and relational) are not separate problems but compounding symptoms of a single structural cause: systems optimised for engagement and growth rather than for the people inside them. It is presented as a model for individual practice, not as medical advice.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does the framework argue is the root cause?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The framework\u2019s central argument is that food systems, attention platforms, and supply chains are each optimised for a narrow metric — palatability, engagement, efficiency — that does not account for long-term human or ecological cost. The book frames the damage not as the result of malice but as a predictable side effect of design that has an accelerator and no brakes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is The Maha Principle medical or health advice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The book is a work of strategy and philosophy by a researcher, not a medical professional, and it states this explicitly. Its self-assessment tools are designed for personal reflection, not clinical diagnosis. Readers are advised to consult a qualified healthcare provider before changing their diet, exercise, or health regimen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where do the ideas come from?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The author spent a decade working in cultural and brand strategy connected to the digital economy, then withdrew from that work and relocated to Colombo, Sri Lanka, where he studied the intersection of cognitive science, metabolic health, and the conditions for human flourishing. The book presents itself as a model to be tested, not a settled doctrine, and includes a published set of conditions under which its core claims should be revised.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12 flex gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">
          &larr; DOSSIER
        </Link>
        <span>/</span>
        <Link href="/concepts" className="hover:text-indigo-400 transition-colors">
          CONCEPTS
        </Link>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          The Maha Principle
        </h1>
        <p className="font-serif text-xl leading-relaxed text-indigo-400">
          A four-part framework for responding to three compounding crises that share a single root.
        </p>
        <p className="font-mono text-xs text-gray-500 tracking-wide">
          A concept from the book{' '}
          <em className="text-gray-400">The Maha Principle: Reclaiming Biological Sovereignty</em>{' '}
          by Mayone Maha Rajan.
        </p>
      </header>

      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          <strong>The Maha Principle</strong> is the central argument of the book of the same
          name. It holds that three of the most visible problems of modern life &mdash; declining
          metabolic health, fragmented attention, and the erosion of close community &mdash; are
          not separate crises. They compound one another, and they share a common structural
          cause.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          One root beneath three crises
        </h2>
        <p>
          The argument is not that any of these systems is run by bad actors. It is that each is
          optimised for a single narrow metric &mdash; palatability and shelf life in food,
          engagement in media, efficiency in supply chains &mdash; and that none of those metrics
          accounts for the long-term cost borne by the person or the ecology on the other side.
          The book&rsquo;s shorthand for this is that the system has an accelerator and no brakes.
          The damage is framed as a predictable side effect of design, not as a conspiracy.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          The framework: Mindfulness, Authenticity, Health, Action
        </h2>
        <p>
          <em>Maha </em> means &ldquo;great&rdquo; in Sanskrit, and the word also names a four-part
          framework. <strong>Health </strong> is treated as the foundation &mdash; reclaiming the
          body as a source of strength rather than a target for industrial extraction &mdash;
          because the book argues that little else is accessible from a depleted body, which is why
          the practical sequence begins there. <strong>Mindfulness</strong> is the discipline of
          knowing where your attention is and who is directing it.{' '}
          <strong>Authenticity</strong> is the willingness to be a real, unperformed person in a
          real room. <strong>Action</strong> converts internal clarity into external work. The
          acronym names the destination; the order in which the book teaches them names the path.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          Structure over willpower
        </h2>
        <p>
          A recurring claim is that durable change comes from structure rather than from
          motivation alone. Rather than asking a person to out-discipline systems engineered to
          capture attention, the book argues for changing the conditions &mdash; the environment,
          the defaults, the daily practices &mdash; so that the desired behaviour becomes the path
          of least resistance. The protocols are designed to be internalised over time and carried
          without the tools that introduced them.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">
          A model to be tested, not a doctrine
        </h2>
        <p>
          The book is explicit that it is offering a model, not a finished truth. It presents its
          ideas as the most useful available account of the present moment while publishing the
          specific conditions under which those claims should be revised or withdrawn. It is a work
          of strategy and philosophy by a researcher &mdash; not medical advice &mdash; and it says
          so plainly.
        </p>
      </article>

      <section className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="font-sans text-xl font-bold tracking-tight text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">
              What is The Maha Principle?
            </h3>
            <p className="font-serif text-gray-400 leading-relaxed">
              The Maha Principle is a four-part framework &mdash; Mindfulness, Authenticity, Health,
              and Action &mdash; set out in the book of the same name by Mayone Maha Rajan. It argues
              that three modern crises (metabolic, attentional, and relational) are not separate
              problems but compounding symptoms of a single structural cause: systems optimised for
              engagement and growth rather than for the people inside them. It is presented as a
              model for individual practice, not as medical advice.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">
              What does the framework argue is the root cause?
            </h3>
            <p className="font-serif text-gray-400 leading-relaxed">
              The framework&rsquo;s central argument is that food systems, attention platforms, and
              supply chains are each optimised for a narrow metric &mdash; palatability, engagement,
              efficiency &mdash; that does not account for long-term human or ecological cost. The
              book frames the damage not as the result of malice but as a predictable side effect of
              design that has an accelerator and no brakes.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">
              Is The Maha Principle medical or health advice?
            </h3>
            <p className="font-serif text-gray-400 leading-relaxed">
              No. The book is a work of strategy and philosophy by a researcher, not a medical
              professional, and it states this explicitly. Its self-assessment tools are designed for
              personal reflection, not clinical diagnosis. Readers are advised to consult a qualified
              healthcare provider before changing their diet, exercise, or health regimen.
            </p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">
              Where do the ideas come from?
            </h3>
            <p className="font-serif text-gray-400 leading-relaxed">
              The author spent a decade working in cultural and brand strategy connected to the
              digital economy, then withdrew from that work and relocated to Colombo, Sri Lanka,
              where he studied the intersection of cognitive science, metabolic health, and the
              conditions for human flourishing. The book presents itself as a model to be tested, not
              a settled doctrine, and includes a published set of conditions under which its core
              claims should be revised.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 pt-10 border-t border-gray-800">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-white">
            Read the book as it&rsquo;s written
          </h2>
          <p className="font-serif text-gray-400 leading-relaxed">
            <em>The Maha Principle: Reclaiming Biological Sovereignty</em> is being released in stages.
            Get the introduction and new chapters as they&rsquo;re published &mdash; no noise, just the work.
          </p>
          <div className="pt-2">
            <SignupForm />
          </div>
        </div>
      </section>

      <section className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white mb-4">
          Related Concepts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/concepts/biological-sovereignty"
            className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <h3 className="font-bold text-white mb-1">Biological Sovereignty</h3>
            <p className="text-xs font-serif text-gray-500">
              An individual&rsquo;s claim to protect their metabolic, cognitive, and autonomic
              systems from high-frequency algorithmic extraction.
            </p>
          </Link>
          <Link
            href="/concepts/attentional-captivity"
            className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <h3 className="font-bold text-white mb-1">Attentional Captivity</h3>
            <p className="text-xs font-serif text-gray-500">
              The structural capture of human focus by systems engineered to maximise engagement.
            </p>
          </Link>
          <Link
            href="/concepts/metabolic-colonialism"
            className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <h3 className="font-bold text-white mb-1">Metabolic Colonialism</h3>
            <p className="text-xs font-serif text-gray-500">
              An extractive model in which industrial food systems trade long-term vitality for
              short-term palatability.
            </p>
          </Link>
          <Link
            href="/concepts/the-nurturing-warrior"
            className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors"
          >
            <h3 className="font-bold text-white mb-1">The Nurturing Warrior</h3>
            <p className="text-xs font-serif text-gray-500">
              An archetype integrating the capacity to defend a boundary with the capacity to
              tend what is inside it.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
