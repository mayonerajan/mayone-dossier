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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mayone Maha Rajan | Managing Director, Maha Strategies",
  description:
    "Cultural strategist, author, and technology founder. Architecting personal and national renewal through applied cognitive science and edge-compute intelligence.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Mayone Maha Rajan | Managing Director, Maha Strategies",
    description:
      "Cultural strategist, author, and technology founder. Founder of Maha Strategies and author of The Maha Principle.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mayone Maha Rajan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayone Maha Rajan | Managing Director, Maha Strategies",
    description:
      "Cultural strategist, author, and technology founder. Founder of Maha Strategies and author of The Maha Principle.",
    images: ["/og-image.jpg"],
    creator: "@mayonemaha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema — the entity record search engines and AI engines read to
  // establish who you are. Keep every fact here truthful and corroborable.
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
      name: "University of California, San Diego",
    },
    worksFor: {
      "@type": "Organization",
      "@id": "https://www.mahastrategies.com/#organization",
      name: "Maha Strategies LLC",
      url: "https://www.mahastrategies.com",
    },
    knowsAbout: [
      "Cognitive Science",
      "Edge Computing",
      "On-Device AI",
      "Digital Privacy",
    ],
    url: SITE_URL,
    // sameAs disambiguates you from others with the same name and merges your
    // web presence into one entity.
    sameAs: [
      "https://www.linkedin.com/in/mayonrajan",
      "https://x.com/mayonemaha",
      "https://www.mahastrategies.com",
      "https://publish.mahastrategies.com",
    ],
  };

  // Marks you as the author of the manuscript, strengthening the
  // person <-> work relationship for entity graphs.
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
