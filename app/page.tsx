import Link from 'next/link';

export default function PersonalDossier() {
  // Structured Data for AIO/SEO
  // Structured Data for AIO/SEO — corrected entity relationships.
  // The book and app are represented by their relationship to the person
  // (authorship / creation), NOT as commercial offers. makesOffer implies an
  // active sale, which is inaccurate for an unpublished manuscript.
  const SITE_URL = 'https://www.mayonemaharajan.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Mayone Maha Rajan',
        url: SITE_URL,
        jobTitle: 'Managing Director',
        description:
          'Cultural strategist, author, and technology founder working at the intersection of cognitive science, applied cybernetics, and agentic systems.',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'University of California, San Diego',
        },
        worksFor: {
          '@type': 'Organization',
          '@id': 'https://www.mahastrategies.com/#organization',
          name: 'Maha Strategies LLC',
          url: 'https://www.mahastrategies.com',
        },
        knowsAbout: [
          'Biological Sovereignty',
          'Digital Sovereignty',
          'Algorithmic Capture',
          'Thermodynamic Autonomy',
          'Zero-Payload Architecture',
          'The Maha Principle',
        ],
        sameAs: [
          'https://www.linkedin.com/in/mayonrajan',
          'https://x.com/mayonemaha',
          'https://www.mahastrategies.com',
          'https://publish.mahastrategies.com',
        ],
      },
      {
        '@type': 'Book',
        '@id': `${SITE_URL}/#book`,
        name: 'The Maha Principle: Architecting Personal and National Renewal',
        // Person -> Book authorship, in the correct direction.
        author: { '@id': `${SITE_URL}/#person` },
        abstract:
          'A systematic non-fiction framework for reclaiming biological sovereignty and building resilience in a high-noise environment.',
        inLanguage: 'en',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#app`,
        name: 'Maha OS',
        operatingSystem: 'ANDROID',
        applicationCategory: 'HealthApplication',
        creator: { '@id': `${SITE_URL}/#person` },
        // Genuinely free, so a zero-price Offer is accurate.
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.maha.os',
      },
    ],
  };


  return (
    <div className="max-w-2xl w-full mx-auto space-y-20 selection:bg-gray-700 pb-12">
      {/* JSON-LD INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER / IDENTITY */}
      <header className="space-y-6 pt-12">
        <div className="font-mono text-xs text-gray-500 tracking-widest uppercase border-b border-gray-800 pb-4">
          [ DOSSIER: ACTIVE ]
        </div>
        <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Mayone Maha Rajan
        </h1>
        <p className="font-serif text-xl leading-relaxed text-gray-300">
          Cultural strategist, author, and technology founder. Architecting frameworks for personal and national renewal at the intersection of cognitive science, applied cybernetics, and agentic systems.
        </p>
      </header>

      {/* THE SUBSTRATE / BIO */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          I. The Substrate
        </h2>
        <p className="font-serif text-lg leading-relaxed text-gray-400 pl-4 border-l-2 border-transparent">
          Trained in Cognitive Science at the University of California, San Diego (UCSD), my foundational work centers on understanding the biological and neurological hardware of the human organism. This scientific substrate dictates my approach to human optimization: securing biological sovereignty and defending executive function against algorithmic capture.
        </p>
      </section>

            {/* THE POLYMATHIC SYNTHESIS */}
            <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          II. The Polymathic Synthesis
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-4">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            True sovereignty cannot be achieved through a single operational vector. My classification as a polymath is not a pursuit of varied interests, but a strict architectural necessity. Securing human agency in a high-noise ecosystem requires synthesizing distinct disciplines into a unified, impenetrable perimeter.
          </p>
          <ul className="space-y-4 border-l border-gray-800 pl-4 mt-6">
            <li className="relative">
              <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                <strong className="text-white uppercase tracking-wider text-xs block mb-1">1. Cognitive Science</strong>
                Defines the biological vulnerabilities of the human organism, establishing the baseline parameters for defending executive function.
              </p>
            </li>
            <li className="relative">
              <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                <strong className="text-white uppercase tracking-wider text-xs block mb-1">2. Hardware Incubation</strong>
                Engineers the physical substrate, ensuring that the devices we interface with operate on uncompromised, zero-latency silicon.
              </p>
            </li>
            <li className="relative">
              <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                <strong className="text-white uppercase tracking-wider text-xs block mb-1">3. Software Architecture</strong>
                Deploys local-first digital infrastructure (Maha OS), severing the telemetry pipeline to centralized hyperscalers.
              </p>
            </li>
            <li className="relative">
              <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                <strong className="text-white uppercase tracking-wider text-xs block mb-1">4. Kinetic Archival Output</strong>
                Stress-tests these theoretical frameworks in the physical realm through rigorous rhythmic matrices, demanding absolute thermodynamic efficiency.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* THE EXECUTION LAYER / FIRM */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          III. The Execution Layer
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-4">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            As the Managing Director of <strong>Maha Strategies LLC</strong>, I engineer structural countermeasures against systemic entropy. We develop on-device artificial intelligence, decentralized technology, and edge-compute infrastructure designed to enforce thermodynamic autonomy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="https://www.mahastrategies.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center text-gray-200">
              ACCESS MAHA STRATEGIES &#8599;
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.maha.os" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-white text-black font-bold hover:bg-gray-200 text-sm font-mono transition-colors text-center">
              DOWNLOAD MAHA OS
            </a>
          </div>
        </div>
      </section>

            {/* STRATEGIC INCUBATION & HARDWARE FORESIGHT */}
            <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          IV. Strategic Incubation & Hardware Foresight
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-6">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            My theoretical frameworks regarding digital sovereignty are rooted in early strategic architectures I devised for the mobile hardware sector. Years prior to the market saturation of modern consumer electronics, I engineered foundational doctrines for alternative mobile ecosystems—strategies that paralleled and predated the disruptive trajectories of brands like <strong>OnePlus</strong>.
          </p>
          
          <ul className="space-y-4 border-l border-gray-800 pl-4">
            <li className="relative">
              <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              <h3 className="text-white font-sans font-bold text-sm uppercase tracking-wide">Pre-Incorporation Market Strategy</h3>
              <p className="text-sm text-gray-400 font-serif mt-1">
                Conceptualized end-to-end strategic models for challenger phone companies, focusing on disrupting established hardware monopolies through aggressive community alignment and zero-compromise execution paradigms.
              </p>
            </li>
            <li className="relative">
              <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-indigo-500"></span>
              <h3 className="text-white font-sans font-bold text-sm uppercase tracking-wide">The "Never Settle" Ethos</h3>
              <p className="text-sm text-gray-400 font-serif mt-1">
                Authored underlying brand identities and operational mandates that rejected hardware complacency. This intellectual groundwork explored how a high-fidelity, user-centric doctrine could force a structural shift in the global mobile supply chain.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* THE DOCTRINE / MANUSCRIPT */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          V. The Doctrine
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-4">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            The operational framework for this philosophy is formalized in my 80,000-word non-fiction manuscript, <strong>The Maha Principle: Architecting Personal and National Renewal</strong>. It is a rigid, systematic approach to reclaiming the metabolic container and architecting resilience in a high-noise, low-signal environment.
          </p>
          <div className="pt-2">
            <a href="https://publish.mahastrategies.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center text-gray-200">
              PUBLISHING NODE &#8599;
            </a>
          </div>
        </div>
      </section>

      {/* CORE CONCEPTS LIBRARY */}
      <section className="space-y-4 bg-gray-900/30 p-6 rounded-lg border border-gray-800">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          VI. Concepts Library
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-6">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            The lexical framework required to navigate and neutralize environmental noise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-1">Biological Sovereignty</h3>
              <p className="text-sm text-gray-400 font-serif">Absolute ownership of one's physiological data and neurological state, defending the metabolic container against external, digital commodification.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Digital Sovereignty</h3>
              <p className="text-sm text-gray-400 font-serif">The architectural self-reliance of possessing localized data, private compute, and decentralized infrastructure free from centralized cloud monopolies.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Algorithmic Capture</h3>
              <p className="text-sm text-gray-400 font-serif">The systemic hijacking of human executive function, attention, and dopamine regulation by optimized, engagement-driven machine learning models.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Thermodynamic Autonomy</h3>
              <p className="text-sm text-gray-400 font-serif">Building systems—both biological and digital—capable of self-sustaining energy and computing operations independently of broader entropic decay.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Zero-Payload Architecture</h3>
              <p className="text-sm text-gray-400 font-serif">A software design doctrine ensuring zero non-essential telemetry or user intelligence is transmitted from the edge device to the cloud.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">The Maha Principle</h3>
              <p className="text-sm text-gray-400 font-serif">A unified, structural methodology for reclaiming individual agency and forging resilience in high-noise, low-signal environments.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-800">
            <Link href="/concepts" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center text-gray-200">
              EXPLORE THE INDEX (/concepts) &#8599;
            </Link>
          </div>
        </div>
      </section>

      {/* THE RECORD / SELECTED WRITING */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          VII. Research Abstracts
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-6">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            Executive summaries of institutional intelligence briefs and protocols developed for structural resilience.
          </p>
          <ul className="space-y-4">
            <li>
              <Link href="/research/algorithmic-lock-in" className="group block">
                <span className="font-sans text-base text-gray-200 group-hover:text-indigo-400 transition-colors">The Mechanics of Algorithmic Lock-In</span>
                <span className="block text-xs font-mono text-gray-500 mt-1">RESEARCH ABSTRACT</span>
              </Link>
            </li>
            <li>
              <Link href="/research/metabolic-sovereignty" className="group block">
                <span className="font-sans text-base text-gray-200 group-hover:text-indigo-400 transition-colors">Metabolic Sovereignty and the Substrate</span>
                <span className="block text-xs font-mono text-gray-500 mt-1">PROTOCOL ABSTRACT</span>
              </Link>
            </li>
            <li>
              <Link href="/research/digital-firewall" className="group block">
                <span className="font-sans text-base text-gray-200 group-hover:text-indigo-400 transition-colors">Deploying the Digital Firewall</span>
                <span className="block text-xs font-mono text-gray-500 mt-1">PROTOCOL ABSTRACT</span>
              </Link>
            </li>
          </ul>
          <div className="pt-2">
            <Link href="/research" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center text-gray-200">
              VIEW ALL ABSTRACTS &rarr;
            </Link>
          </div>
        </div>
      </section>
            {/* KINETIC ARCHIVES / FIELD DEMONSTRATIONS */}
            <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          VIII. Kinetic Archives
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-6">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            Declassified audio-visual field demonstrations establishing the physical and kinetic origin points of The Maha Principle.
          </p>
          
          <Link 
            href="/archive" 
            className="block p-6 border border-gray-800 bg-gray-900/30 rounded-lg hover:border-indigo-500 transition-all group"
          >
            <h3 className="font-sans text-xl font-bold text-white group-hover:text-indigo-400 mb-2 transition-colors">
              Access the Vault &rarr;
            </h3>
            <p className="font-serif text-sm text-gray-400">
              View archival footage of Thermodynamic Autonomy and Strategic Gravity in practice.
            </p>
          </Link>
        </div>
      </section>

      {/* CONVERSION PROTOCOL */}
      <section className="space-y-4 pb-8">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-green-500 pl-4">
          IV. Action Protocol
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-6">
          <p className="font-serif text-lg leading-relaxed text-gray-400">
            To counter algorithmic capture, you must consciously curate your intelligence feed. Join the network for structural countermeasures, private frameworks, and ongoing research updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
             <input 
                type="email" 
                placeholder="SECURE EMAIL ADDRESS" 
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 font-mono text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-auto flex-grow"
                required
              />
             <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-bold hover:bg-indigo-500 text-sm font-mono transition-colors text-center whitespace-nowrap">
               JOIN NETWORK
             </button>
          </form>
          <div className="pt-2 flex gap-4">
            <a href="https://www.mahastrategies.com/manifesto" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-indigo-400 hover:text-indigo-300 transition-colors">
              [ READ MANIFESTO ]
            </a>
            <a href="https://www.mahastrategies.com/start" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-indigo-400 hover:text-indigo-300 transition-colors">
              [ START HERE ]
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-12 pb-8 border-t border-gray-800 space-y-4">
        <div className="flex gap-4 font-mono text-xs">
          <a href="https://www.linkedin.com/in/mayonrajan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors">
            LINKEDIN &#8599;
          </a>
          <a href="https://x.com/mayonemaha" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-400 transition-colors">
            X / TWITTER &#8599;
          </a>
        </div>
        <div className="font-mono text-xs text-gray-600 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Mayone Maha Rajan</span>
          <span>LOCATION: COLOMBO, SL // WYOMING, USA</span>
        </div>
      </footer>

    </div>
  );
}