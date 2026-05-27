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

export const metadata: Metadata = {
  title: 'Mayone Maha Rajan | Managing Director, Maha Strategies',
  description: 'Cultural strategist, author, and technology founder. Architecting personal and national renewal through applied cybernetics and edge-compute intelligence.',
  alternates: { canonical: 'https://www.mayonemaharajan.com' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // THE BI-DIRECTIONAL PERSON SCHEMA
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.mayonemaharajan.com/#person",
    "name": "Mayone Maha Rajan",
    "jobTitle": "Managing Director",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of California, San Diego (UCSD)"
    },
    "worksFor": {
      "@type": "Organization",
      "@id": "https://www.mahastrategies.com/#organization",
      "name": "Maha Strategies LLC",
      "url": "https://www.mahastrategies.com"
    },
    "url": "https://www.mayonemaharajan.com",
    "sameAs": [
      "https://www.linkedin.com/in/your-linkedin-profile", // Update this
      "https://publish.mahastrategies.com"
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} 
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