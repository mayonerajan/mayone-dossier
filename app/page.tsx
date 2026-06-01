import Link from 'next/link';

export default function PersonalDossier() {
  // Structured Data for AIO/SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mayone Maha Rajan",
    "url": "https://www.mayonemaharajan.com",
    "jobTitle": ["Cultural Strategist", "Author", "Technology Founder"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of California, San Diego (UCSD)",
      "department": "Cognitive Science"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Maha Strategies LLC"
    },
    "knowsAbout": [
      "Biological Sovereignty",
      "Digital Sovereignty",
      "Algorithmic Capture",
      "Thermodynamic Autonomy",
      "Zero-Payload Architecture",
      "Cognitive Infrastructure"
    ],
    "makesOffer": [
      {
        "@type": "SoftwareApplication",
        "name": "Maha OS"
      },
      {
        "@type": "Book",
        "name": "The Maha Principle: Architecting Personal and National Renewal"
      }
    ]
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

      {/* THE EXECUTION LAYER / FIRM */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          II. The Execution Layer
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

      {/* THE DOCTRINE / MANUSCRIPT */}
      <section className="space-y-4">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-indigo-500 pl-4">
          III. The Doctrine
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
          IV. Concepts Library
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
          V. Research & Essays
        </h2>
        <div className="pl-4 border-l-2 border-transparent space-y-6">
          <ul className="space-y-4">
            <li>
              <a href="https://www.maha-os.com/blog/biological-digital-sovereignty-defined" target="_blank" rel="noopener noreferrer" className="group block">
                <span className="font-sans text-base text-gray-200 group-hover:text-indigo-400 transition-colors">What is Digital and Biological Sovereignty?</span>
              </a>
            </li>
            <li>
              <a href="https://www.maha-os.com/blog/local-ai-vs-cloud-biometrics" target="_blank" rel="noopener noreferrer" className="group block">
                <span className="font-sans text-base text-gray-200 group-hover:text-indigo-400 transition-colors">Local AI vs. Cloud AI: The Battle for Biometric Privacy</span>
              </a>
            </li>
            <li>
              <a href="https://www.maha-os.com/blog/cloud-health-telemetry-risks" target="_blank" rel="noopener noreferrer" className="group block">
                <span className="font-sans text-base text-gray-200 group-hover:text-indigo-400 transition-colors">The Silent Leak: Why Cloud Health Telemetry is a Liability</span>
              </a>
            </li>
          </ul>
          <div className="pt-2">
            <a href="https://www.maha-os.com/blog" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-gray-700 hover:border-gray-400 text-sm font-mono transition-colors text-center text-gray-200">
              RESEARCH LIBRARY &#8599;
            </a>
          </div>
        </div>
      </section>

      {/* CONVERSION PROTOCOL */}
      <section className="space-y-4 pb-8">
        <h2 className="font-sans text-sm font-semibold tracking-widest uppercase text-white border-l-2 border-green-500 pl-4">
          VI. Action Protocol
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