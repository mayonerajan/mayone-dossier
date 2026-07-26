import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.mayonemaharajan.com";

// Sitewide SEO and AIO Baseline
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mayone Maha Rajan | Cognitive Science, Digital Sovereignty & The Maha Principle",
  description:
    "Personal dossier of Mayone Maha Rajan. Cultural strategist, author, and technology founder architecting structural countermeasures against algorithmic capture.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Mayone Maha Rajan | Cognitive Science & Digital Sovereignty",
    description:
      "Architecting frameworks for personal and national renewal at the intersection of cognitive science and agentic systems.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mayone Maha Rajan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayone Maha Rajan | Cognitive Science & Digital Sovereignty",
    description:
      "Architecting frameworks for personal and national renewal at the intersection of cognitive science and agentic systems.",
    images: ["/og-image.jpg"],
    creator: "@mayonemaha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema — High-density structured data for AI parsing.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Mayone Maha Rajan",
    jobTitle: "Managing Director",
    description:
      "Cultural strategist, author, and technology founder working at the intersection of cognitive science, applied cybernetics, and agentic systems.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of California, San Diego (UCSD)",
      department: "Cognitive Science"
    },
    worksFor: {
      "@type": "Organization",
      "@id": "https://www.mahastrategies.com/#organization",
      name: "Maha Strategies LLC",
      url: "https://www.mahastrategies.com",
    },
    knowsAbout: [
      "Cognitive Science",
      "Biological Sovereignty",
      "Digital Sovereignty",
      "Algorithmic Capture",
      "Thermodynamic Autonomy",
      "Zero-Payload Architecture",
      "Cognitive Infrastructure"
    ],
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/mayonrajan",
      "https://x.com/mayonemaha",
      "https://www.mahastrategies.com",
      "https://publish.mahastrategies.com",
    ],
    makesOffer: [
      {
        "@type": "SoftwareApplication",
        "name": "Maha OS"
      }
    ]
  };

  // Book schema — Strengthens the entity-work relationship.
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "The Maha Principle: Architecting Personal and National Renewal",
    author: { "@id": `${SITE_URL}/#person` },
    abstract:
      "A systematic non-fiction framework for reclaiming biological sovereignty and building resilience in a high-noise environment.",
    inLanguage: "en",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="alternate" type="text/plain" title="Mayone Maha Rajan machine-readable site guide" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
      </head>
      <body className="min-h-full bg-[#0a0a0c] text-[#e0e0e0] flex flex-col">
        <main className="flex-grow flex items-center justify-center p-6 sm:p-12">
          {children}
        </main>
      </body>
    </html>
  );
}
