import Link from 'next/link';

export const metadata = {
  title: 'Biological Sovereignty Explained | Mayone Maha Rajan Concepts',
  description: 'An in-depth analysis of Biological Sovereignty: defending the human metabolic container against algorithmic capture and digital commodification.',
};

export default function BiologicalSovereigntyPage() {
  // FAQ Schema for AIO/SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Biological Sovereignty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biological Sovereignty is the absolute ownership of one's physiological data, biometric telemetry, and neurological state. It is the defensive posture required to protect the human metabolic container against external digital commodification."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Biological Sovereignty under threat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is threatened by the proliferation of cloud-connected biometric wearables, engagement-optimized algorithms, and structural data harvesting that extract biological signals to train centralized AI models without reciprocal value or consent."
        }
      },
      {
        "@type": "Question",
        "name": "How does Biological Sovereignty relate to Digital Sovereignty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biological Sovereignty relies on Digital Sovereignty as its infrastructure. You cannot maintain ownership of your biological data if the devices processing that data are tethered to centralized cloud servers. Local AI and edge computing are the technological prerequisites for biological defense."
        }
      }
    ]
  };

  return (
    <div className="max-w-3xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      {/* INJECT FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-12">
        <Link href="/" className="hover:text-indigo-400 transition-colors">&larr; RETURN TO DOSSIER</Link>
        <span className="mx-2">/</span>
        <Link href="/concepts" className="hover:text-indigo-400 transition-colors">CONCEPTS</Link>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-8">
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Biological Sovereignty
        </h1>
        <p className="font-serif text-xl leading-relaxed text-indigo-400">
          The defense of the human metabolic container against algorithmic commodification.
        </p>
      </header>

      {/* EXPANDED DEFINITION (500+ Words) */}
      <article className="prose prose-invert prose-lg font-serif text-gray-300 max-w-none space-y-6">
        <p>
          In the contemporary technological paradigm, the human organism is increasingly treated not as a sovereign entity, but as a biological substrate for data extraction. <strong>Biological Sovereignty</strong> is the framework for reclaiming absolute ownership over one's physiological data, biometric telemetry, and neurological state.
        </p>
        
        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The Commodification of the Substrate</h2>
        <p>
          We are currently witnessing a massive migration of human biometric data—heart rate variability, sleep cycles, respiratory rates, and neurochemical proxies—from the private physical domain into centralized cloud infrastructure. Wearable technology, while ostensibly designed for health optimization, frequently operates as a trojan horse for continuous surveillance capital. 
        </p>
        <p>
          When your physiological state is processed on a server you do not control, you lose biological sovereignty. The data is weaponized to build highly accurate predictive models of your behavior, leaving your executive function vulnerable to <em>Algorithmic Capture</em>.
        </p>

        <h2 className="text-white font-sans text-2xl font-bold mt-8 mb-4">The Countermeasure: Edge Infrastructure</h2>
        <p>
          To achieve Biological Sovereignty, the individual must sever the umbilical cord to the cloud. This requires a transition to <em>Zero-Payload Architecture</em> and on-device artificial intelligence. By processing physiological intelligence locally—at the edge, on the user's immediate hardware—we eliminate the telemetry leak. The device serves the organism, not the network.
        </p>
        <p>
          This is not merely a privacy preference; it is a thermodynamic imperative. A system that constantly exports its most vital metabolic data to an external network is highly entropic. It expends energy to feed a foreign host. Securing the perimeter of the human body through local compute is the foundational step in architecting personal resilience.
        </p>
      </article>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="font-sans text-xl font-bold tracking-tight text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">What is Biological Sovereignty?</h3>
            <p className="font-serif text-gray-400 leading-relaxed">Biological Sovereignty is the absolute ownership of one's physiological data, biometric telemetry, and neurological state. It is the defensive posture required to protect the human metabolic container against external digital commodification.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">Why is Biological Sovereignty under threat?</h3>
            <p className="font-serif text-gray-400 leading-relaxed">It is threatened by the proliferation of cloud-connected biometric wearables, engagement-optimized algorithms, and structural data harvesting that extract biological signals to train centralized AI models without reciprocal value or consent.</p>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg text-indigo-400 mb-2">How does Biological Sovereignty relate to Digital Sovereignty?</h3>
            <p className="font-serif text-gray-400 leading-relaxed">Biological Sovereignty relies on Digital Sovereignty as its infrastructure. You cannot maintain ownership of your biological data if the devices processing that data are tethered to centralized cloud servers. Local AI and edge computing are the technological prerequisites.</p>
          </div>
        </div>
      </section>

      {/* RELATED CONCEPTS */}
      <section className="mt-16 pt-8 border-t border-gray-800">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white mb-4">
          Related Concepts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/concepts/algorithmic-capture" className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors">
            <h3 className="font-bold text-white mb-1">Algorithmic Capture</h3>
            <p className="text-xs font-serif text-gray-500">The systemic hijacking of human executive function.</p>
          </Link>
          <Link href="/concepts/zero-payload-architecture" className="block p-4 border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors">
            <h3 className="font-bold text-white mb-1">Zero-Payload Architecture</h3>
            <p className="text-xs font-serif text-gray-500">Software design doctrine ensuring zero non-essential telemetry.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}