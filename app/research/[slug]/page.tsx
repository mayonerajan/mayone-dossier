import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 1. Define strict types for the database
interface AbstractData {
  title: string;
  date: string;
  destinationUrl: string;
  body: string;
}

// Next.js 16 Page Props interface specifying params as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 2. The Abstracts Database (Keys updated to fix 404 routing mismatches)
const abstractsDatabase: Record<string, AbstractData> = {
  "algorithmic-lock-in": {
    title: "The Mechanics of Algorithmic Lock-In",
    date: "2026-05-29",
    destinationUrl: "https://www.mahastrategies.com/intelligence/briefs/algorithmic-lock-in",
    body: "The modern digital environment is not a neutral substrate; it is an optimized extraction engine. Algorithmic lock-in refers to the structural methodologies employed by centralized hyperscalers to gradually degrade a user's digital and biological sovereignty, replacing autonomous executive function with predictable, engagement-driven behavioral loops. In my work defining Algorithmic Capture, the fundamental vulnerability identified is the human dopamine reward pathway. Reversing this state requires an architectural pivot to Zero-Payload Architecture."
  },
  "metabolic-sovereignty": {
    title: "Metabolic Sovereignty and the Substrate",
    date: "2026-05-30",
    destinationUrl: "https://www.mahastrategies.com/protocols/metabolic-sovereignty",
    body: "The human organism is a finite metabolic engine operating within an increasingly infinite, high-noise digital ecosystem. Metabolic Sovereignty is the foundational protocol for securing this biological container. Before any higher-order cognitive optimization can occur, an individual must establish a rigid defensive perimeter to prevent the continuous, systemic extraction of their physiological and attentional energy by engagement-optimized networks. This protocol dictates that the human nervous system cannot engage in prolonged conflict with hyperscale machine learning models without suffering entropic decay. When biometric telemetry, sleep cycles, and neurochemical proxies are silently outsourced to the cloud, the organism becomes uniquely vulnerable to Algorithmic Capture. The metabolic cost of filtering this artificially generated noise inherently drains the executive function required for deep, autonomous execution. To achieve true Biological Sovereignty, the individual must physically isolate their biometric data layer. This requires the deployment of Thermodynamic Autonomy at the edge. By processing health telemetry and personal intelligence strictly on localized hardware governed by Zero-Payload Architecture, the user cuts the parasitic tether to the macro-grid. The bodily container ceases to be a data-generating substrate for the cloud and returns to its proper state: a fortified, self-sustaining node."
  },
  "soil-gut-brain-axis": {
    title: "The Soil-Gut-Brain Axis Protocol",
    date: "2026-05-31",
    destinationUrl: "https://www.mahastrategies.com/doctrine/briefs/soil-gut-brain-axis",
    body: "Cognitive processing speed and executive function are not purely software problems; they are fundamentally constrained by the biological hardware of the human organism. The Soil-Gut-Brain Axis Protocol examines the direct neurochemical pipeline from external nutrient inputs to high-level cognitive output. Industrialized, entropic food systems degrade the gut microbiome, which is responsible for synthesizing critical neurotransmitters like serotonin and dopamine. When this metabolic supply chain is compromised, the brain experiences thermodynamic friction, artificially lowering the threshold for cognitive fatigue. In this degraded state, the individual's defense mechanisms are weakened, leaving the prefrontal cortex highly susceptible to Algorithmic Capture. Securing Biological Sovereignty requires recognizing that the physical substrate—beginning at the microbial level of the soil and ending in the neurological network of the brain—must be fiercely protected from systemic degradation. By optimizing external nutrient inputs and repairing the gut-brain signaling pathways, an individual restores Thermodynamic Autonomy to their biological engine. This protocol dictates the strict curation of the metabolic supply chain, treating dietary input not merely as caloric sustenance, but as the foundational neuro-infrastructure required to execute The Maha Principle in high-noise environments."
  },
  "neurotechnology-commercial-outlook": { // KEY FIXED
    title: "Neurotechnology Commercial Outlook",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/intelligence/briefs/neurotechnology-non-medical-outlook",
    body: "The commercialization of non-medical neurotechnology represents the final frontier of biometric commodification. Consumer-grade brain-computer interfaces (BCIs), EEG wearables, and neural telemetry devices are rapidly entering the consumer market under the guise of cognitive optimization and wellness tracking. However, the current deployment architecture relies almost exclusively on cloud synchronization, meaning raw neurological data—focus states, emotional baseline markers, and cognitive fatigue levels—is continuously extracted and processed on remote servers. This constitutes a critical breach of the human metabolic container. When centralized platforms gain real-time access to the central nervous system, the mechanisms of Algorithmic Capture evolve from behavioral prediction to direct, neuro-optimized feedback loops. A system that can read your cognitive state can dynamically alter your digital environment to bypass your executive function entirely. To defend against this asymmetric threat, Biological Sovereignty must be aggressively extended to the neural level. Any hardware interfacing with human cognition must strictly adhere to Zero-Payload Architecture, ensuring that neural telemetry is processed entirely at the edge and never exported to a macro-grid. Until Digital Sovereignty is mathematically guaranteed at the hardware layer, consumer neurotechnology remains an unacceptable structural liability, acting as a surveillance node rather than an instrument of human agency."
  },
  "overclocked": {
    title: "Overclocked: Metabolic Exhaustion Systems",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/doctrine/briefs/overclocked",
    body: "The human brain, much like high-performance silicon, operates within a strict thermodynamic limit. 'Overclocking' occurs when the biological organism is forced to continuously process an unsustainable volume of environmental noise, hyper-novel stimuli, and digital demands. Centralized platforms are structurally architected to push the human nervous system into this state of continuous overclocking, artificially maximizing engagement metrics at the direct expense of the user's metabolic reserves. This systemic metabolic exhaustion dismantles executive function, leaving the individual completely vulnerable to Algorithmic Capture. When the prefrontal cortex is starved of recovery periods and depleted of neurochemical energy, it defaults to low-friction, high-dopamine consumption loops, effectively surrendering Biological Sovereignty to the network. Reversing this state is not a matter of psychological endurance; it is a mechanical problem of heat dissipation and energy management. To restore baseline cognitive function, an individual must engineer Thermodynamic Autonomy into their daily operational architecture. By rigorously applying The Maha Principle, users introduce kinetic friction into their digital interactions, effectively throttling the external data firehose. This protocol details the strict boundaries of cognitive load, providing the architectural blueprints necessary to prevent systemic burnout and reclaim the energy required for deep, strategic execution."
  },
  "consumer-to-producer": {
    title: "The Pivot from Consumer to Producer",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/doctrine/briefs/consumer-to-producer",
    body: "The default state of the modern digital ecosystem is meticulously designed to enforce passive consumption. Centralized platforms architect their interfaces to reduce the human user to a data-generating endpoint, a predictable node in a broader extraction network. To dismantle this dynamic, an individual must enact a structural operational shift: the absolute pivot from consumer to producer. This transition is not about digital content creation; it is a fundamental reorganization of attentional physics. When a user is locked in a state of frictionless consumption, their executive function is actively suppressed by Algorithmic Capture, surrendering neurological agency to predictive machine learning models. Conversely, the act of production requires deliberate, localized execution that shatters the cycle of variable-ratio dopamine reinforcement. Enforcing this shift is a core tenet of The Maha Principle, demanding that individuals ruthlessly prioritize output over input to reclaim their cognitive momentum. This pivot leverages Thermodynamic Autonomy by taking the metabolic energy normally bled into the void of infinite scrolling and redirecting it toward constructive, sovereign tasks. Ultimately, true production requires a robust architectural foundation, necessitating a move toward Digital Sovereignty—where the operator builds on localized infrastructure they actually own, rather than perpetually renting space on a hyperscaler's centralized server."
  },
  "digital-firewall": {
    title: "Deploying the Digital Firewall",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/protocols/digital-firewall",
    body: "Achieving true Digital Sovereignty requires more than a shift in software preferences; it demands the implementation of a rigid, network-wide containment perimeter. Deploying the Digital Firewall details the technical protocols necessary to isolate an individual's local computational substrate from extractive macro-grids. Standard commercial consumer electronics are intrinsically designed to operate as open telemetry nodes, continuously leaking usage metrics, locations, and behavioral proxies to hyperscale cloud systems. This telemetry acts as the primary feed for the predictive machine learning models that drive Algorithmic Capture. To break this dependency, this protocol implements network-level packet filtering, encrypted DNS routing, and local-first data isolation. By enforcing these strict boundaries, the operator forces data transactions to adhere to a Zero-Payload Architecture, ensuring that no unencrypted personal identifiers or behavioral telemetry can escape the local hardware boundary. This firewall functions as the primary digital checkpoint for executing The Maha Principle, systematically starving macro-networks of the behavioral data they require to predict and manipulate individual intent, while providing a clean, noise-isolated environment for high-level tactical execution."
  },
  "hardware-sovereignty-operational-standard": {
    title: "Hardware Sovereignty Operational Standard",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/protocols/hardware-sovereignty-operational-standard",
    body: "The final and most critical vulnerability in any defensive perimeter is the underlying physical silicon. The Hardware Sovereignty Operational Standard establishes the strict compliance metrics required to liberate an operator's physical devices from upstream supply chain compromise. Traditional consumer and enterprise hardware features proprietary, closed-source firmware and baseband processors that function as immutable, backdoored master keys. Without absolute sovereignty at the motherboard layer, any software-defined privacy protocol remains a superficial layer over a compromised foundation. This standard dictates the systematic transition to open-source boot firmware, neutralized management engines, and air-gapped cryptographic hardware modules. By executing these physical modifications, the user transitions from renting a device to genuinely owning their computational substrate. This hardware-level isolation is mandatory for maintaining a secure Zero-Payload Architecture, preventing hardware-level telemetry leaks from subverting your broader Digital Sovereignty. By ensuring that keys, encryption loops, and local data compilation occur on verifiably audited silicon, this standard protects your local ecosystem from macro-grid interference, providing the uncompromised physical infrastructure required to achieve long-term Biological Sovereignty and complete Thermodynamic Autonomy."
  },
  "hyperscaler-storage-disposition": {
    title: "Hyperscaler Storage Disposition Analysis",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/intelligence/briefs/hyperscaler-storage-disposition",
    body: "The delegation of personal and corporate memory to hyperscale cloud infrastructure represents a critical strategic vulnerability. This Hyperscaler Storage Disposition Analysis evaluates the long-term risks of hosting sensitive intelligence, operational data, and cognitive offload within centralized, third-party macro-grids. In the modern cloud paradigm, remote storage is structurally designed to act as an extraction mechanism; the stored payload is continuously indexed, scanned, and modeled to feed proprietary predictive analytics. When an operator places their intelligence in these environments, they surrender the cryptographic authority required for true Digital Sovereignty. This asymmetric relationship transforms personal archives into raw training data, directly fueling the machine learning models responsible for Algorithmic Capture. To sever this extractive supply chain, operators must strictly adhere to a Zero-Payload Architecture, migrating from leased cloud buckets to encrypted, locally hosted, and physically possessed storage arrays. By internalizing this infrastructure, the user not only shields their intellectual property from algorithmic surveillance but also achieves Thermodynamic Autonomy, ensuring that access to their own digital memory remains permanently decoupled from the entropic vulnerabilities, censorship risks, and energy failures of global hyperscale networks."
  },
  "geopolitics-foundry-sovereignization": {
    title: "The Geopolitics of Foundry Sovereignization",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/intelligence/briefs/geopolitics-foundry-sovereignization",
    body: "Semiconductors are the physical substrate of modern geopolitical power and the mandatory foundation for any sovereign digital architecture. The Geopolitics of Foundry Sovereignization examines the rapid uncoupling of globalized silicon supply chains as nation-states recognize the catastrophic vulnerability of offshore fabrication. The concentration of advanced logic foundries in contested geopolitical chokepoints means that a single kinetic or economic disruption could paralyze a nation's computational capacity. This macro-level pivot toward domestic semiconductor production directly mirrors the micro-level imperatives of Digital Sovereignty. A nation cannot secure its critical infrastructure, artificial intelligence pipelines, or defense networks if it does not control the physical fabrication of the silicon that powers them. Relying on fragile, highly entropic international supply chains is a failure of Thermodynamic Autonomy at the state level. Furthermore, trusted, verifiably secure hardware is the absolute prerequisite for implementing Zero-Payload Architecture; a sovereign software stack cannot run on compromised or backdoored foreign silicon. By understanding these macro-geopolitical tectonic shifts, operators applying The Maha Principle can better anticipate the hardware landscape, ensuring their personal and corporate edge compute deployments are insulated from global supply chain weaponization."
  },
  "architecting-personal-and-national-renewal": {
    title: "Architecting Personal and National Renewal",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/doctrine/briefs/architecting-personal-and-national-renewal",
    body: "The stabilization of a deteriorating macro-state begins at the level of the individual node. Architecting Personal and National Renewal bridges the operational gap between micro-level human resilience and macro-level geopolitical stability. A nation cannot forge strategic gravity or secure its future if its populace is systematically degraded by Algorithmic Capture. When a population's executive function is outsourced to centralized engagement engines, the collective capacity for long-term planning, innovation, and civic cohesion dissolves into localized noise. Therefore, national renewal is entirely dependent on the widespread reclamation of Biological Sovereignty at the citizen level. By defending the metabolic container and restoring cognitive clarity, individuals rebuild the foundational unit of a resilient society. This bottom-up approach scales directly into structural infrastructure. As individuals and enterprises adopt Digital Sovereignty, deploying localized compute and secure edge networks, the nation inherently develops a decentralized, anti-fragile computational grid. This methodology, codified as The Maha Principle, dictates that true structural renewal is not achieved through fragile, top-down policy mandates, but through the deliberate aggregation of highly autonomous, thermodynamically efficient nodes. When the populace secures its biological and digital perimeters, the nation ceases to be a vulnerable consumer state and transitions into an impenetrable fortress of sovereign production."
  },
  "protocol-of-precision": {
    title: "The Protocol of Precision",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/protocols/protocol-of-precision",
    body: "The Protocol of Precision is the tactical execution of intent within a high-noise environment. Every digital interaction, cognitive engagement, and physical action carries a strict metabolic cost. Without rigid operational precision, the human organism bleeds valuable energy into the void of infinite scrolling, undirected browsing, and ambient digital friction, severely compromising Thermodynamic Autonomy. Centralized platforms are architected to exploit ambiguity; passive, uncurated states of attention are the exact vulnerabilities that allow Algorithmic Capture to hijack executive function. The Protocol of Precision mandates that every engagement with the technological substrate must be deliberate, kinetic, and strictly bounded. It demands the absolute elimination of 'idle' processing. As a foundational behavioral pillar of The Maha Principle, this protocol transforms the individual from a reactive node into a sovereign operator. By defining exact parameters and exit criteria before interfacing with any network or device, the user drastically reduces their cognitive surface area. This disciplined reduction of exposure is the psychological prerequisite for maintaining both Digital Sovereignty and Biological Sovereignty. By eliminating entropic waste, the operator ensures their metabolic bandwidth is weaponized exclusively for sovereign production, rather than passively sustaining the telemetry demands of the macro-grid."
  },
  "strategic-gravity-and-environmental-manipulation": {
    title: "Strategic Gravity and Environmental Manipulation",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/doctrine/briefs/strategic-gravity-and-environmental-manipulation",
    body: "Strategic gravity is the capacity of an individual or an organization to draw resources, opportunities, and insights toward themselves through the sheer weight of their focused execution. It is the direct opposite of a reactive, frantic existence. Achieving this state requires environmental manipulation—the deliberate restructuring of your immediate physical and digital architecture to aggressively eliminate cognitive friction. Relying on sheer willpower to maintain focus while remaining embedded in a hyper-stimulating environment is a structural failure. The platform interfaces that dominate modern life are weaponized to dismantle intent and force Algorithmic Capture upon the user. By redesigning the environment—removing distracting hardware, utilizing grayscale displays, enforcing strict physical boundaries between consumption and production, and isolating deep-work spaces—the operator creates an unshakeable defensive perimeter. This systematic curation of inputs protects the metabolic container, preserving the baseline neurochemical reserves necessary to maintain Biological Sovereignty. Enforcing this environmental design is a core tactical directive of The Maha Principle. By altering the physics of your immediate workspace, you secure Thermodynamic Autonomy, ensuring that your precious cognitive capital is preserved to build massive strategic gravity, rather than being fractured and bled out into a high-noise network."
  },
  "the-ordeal": { // KEY FIXED
    title: "The Ordeal: Psychological Resilience Vectors",
    date: "2026-06-01",
    destinationUrl: "https://www.mahastrategies.com/doctrine/briefs/the-ordeal-psychological-resilience-vectors",
    body: "The execution of any sovereign doctrine inevitably forces the operator into a state of acute friction with the prevailing macro-system. 'The Ordeal' represents the psychological tax of deliberate isolation, non-conformity, and architectural resistance. Psychological Resilience Vectors maps the necessary mental conditioning required to withstand this pressure without succumbing to cognitive degradation. When an individual rejects centralized infrastructure, they are actively fighting against highly optimized machine learning models specifically engineered to exploit human vulnerability and enforce Algorithmic Capture. Navigating this psychological landscape requires more than ideological conviction; it demands a deep understanding of neurochemical conservation. Without structured mental resilience vectors, the cognitive stress of maintaining an independent operational perimeter will exhaust the prefrontal cortex, leading to systemic burnout. To prevent this, operators must anchor their identity in localized execution, treating the psychological friction not as an obstacle, but as a mandatory metabolic stressor that tempers executive function. By executing the protocols within The Maha Principle, the individual transforms this ordeal into a strategic advantage. Securing your Biological Sovereignty and enforcing Thermodynamic Autonomy allows the operator to maintain internal baseline stability regardless of external systemic volatility, ensuring that psychological resilience translates directly into long-term strategic gravity."
  },
};

// 3. Dynamic Metadata Generation
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const data = abstractsDatabase[resolvedParams.slug];
  
  if (!data) return { title: 'Abstract Not Found' };
  
  return { title: `${data.title} (Abstract) | Mayone Maha Rajan` };
}

// 4. Schema Mapping Engine
function parseAndHyperlinkConcepts(text: string) {
  const mapping = [
    { text: "Biological Sovereignty", url: "/concepts/biological-sovereignty" },
    { text: "Digital Sovereignty", url: "/concepts/digital-sovereignty" },
    { text: "Algorithmic Capture", url: "/concepts/algorithmic-capture" },
    { text: "Thermodynamic Autonomy", url: "/concepts/thermodynamic-autonomy" },
    { text: "Zero-Payload Architecture", url: "/concepts/zero-payload-architecture" },
    { text: "The Maha Principle", url: "/concepts/the-maha-principle" },
  ];

  let parts: (string | React.ReactNode)[] = [text];

  mapping.forEach((concept) => {
    const newParts: (string | React.ReactNode)[] = [];
    parts.forEach((part) => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }

      const regex = new RegExp(`(${concept.text})`, 'g');
      const splitText = part.split(regex);
      
      splitText.forEach((subtext, index) => {
        if (subtext === concept.text) {
          newParts.push(
            <Link 
              key={`${concept.text}-${index}`} 
              href={concept.url} 
              className="text-indigo-400 hover:underline font-medium decoration-indigo-500/50"
            >
              {subtext}
            </Link>
          );
        } else if (subtext !== "") {
          newParts.push(subtext);
        }
      });
    });
    parts = newParts;
  });

  return parts;
}

// 5. Main Component Renderer (Next.js 16 Async)
export default async function ResearchAbstractRenderer({ params }: PageProps) {
  const resolvedParams = await params;
  const data = abstractsDatabase[resolvedParams.slug];
  
  if (!data) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "author": {
      "@type": "Person",
      "name": "Mayone Maha Rajan",
      "url": "https://www.mayonemaharajan.com"
    },
    "datePublished": data.date,
    "abstract": data.body
  };

  return (
    <div className="max-w-2xl w-full mx-auto space-y-12 selection:bg-gray-700 pb-16 pt-12">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} 
      />

      <nav className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-8 flex gap-2">
        <Link href="/research" className="hover:text-indigo-400 transition-colors">
          INDEX
        </Link>
        <span>/</span>
        <span className="text-gray-400">NODE DISPATCH</span>
      </nav>

      <header className="space-y-4 border-b border-gray-800 pb-6">
        <div className="font-mono text-xs text-indigo-500 font-semibold">
          [ COMPILED BRIEF: {data.date} ]
        </div>
        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-white leading-tight">
          {data.title}
        </h1>
      </header>

      <article className="font-serif text-lg leading-relaxed text-gray-300 space-y-6">
        <p>{parseAndHyperlinkConcepts(data.body)}</p>
      </article>

      <div className="bg-gray-900/40 p-6 rounded border border-gray-800 space-y-4 mt-8">
        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">
          [ Institutional Document Connection ]
        </h4>
        <p className="font-serif text-sm text-gray-400">
          The underlying technical engineering, market analytics, and procedural guidelines are isolated on the firm surface network.
        </p>
        <a 
          href={data.destinationUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-white text-black text-xs font-mono font-bold px-4 py-2 hover:bg-gray-200 transition-colors uppercase tracking-tight"
        >
          Read Full Document at Maha Strategies &#8599;
        </a>
      </div>
    </div>
  );
}