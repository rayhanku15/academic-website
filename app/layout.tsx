import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Nav from "./_components/Nav";
import Band from "./_components/Band";
import ThemeToggle from "./_components/ThemeToggle";
import { profile } from "./_data/profile";

const description =
  "Md. Sayeed Abu Rayhan is a Ph.D. candidate at Indiana State University studying how Polycomb and trithorax group genes control Hox expression and pattern the Drosophila heart. Open to postdoctoral positions from summer 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Md. Sayeed Abu Rayhan | Developmental genetics and chromatin",
    template: "%s | Md. Sayeed Abu Rayhan",
  },
  description,
  keywords: [
    "Md. Sayeed Abu Rayhan",
    "Sayeed Abu Rayhan",
    "Polycomb",
    "trithorax",
    "Hox genes",
    "Drosophila heart",
    "cardiac development",
    "congenital heart defects",
    "chromatin",
    "developmental genetics",
    "Indiana State University",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    siteName: profile.name,
    title: "Md. Sayeed Abu Rayhan | Developmental genetics and chromatin",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Md. Sayeed Abu Rayhan, developmental genetics and chromatin" }],
  },
  twitter: { card: "summary_large_image", title: profile.name, description, images: ["/og.jpg"] },
};

// Structured data so search engines connect this site with the same person's
// Google Scholar, ORCID and LinkedIn profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: ["Sayeed Abu Rayhan", "Rayhan MSA", "Abu Rayhan MS"],
  url: profile.siteUrl,
  image: `${profile.siteUrl}/images/portrait.jpg`,
  email: `mailto:${profile.email}`,
  jobTitle: "Ph.D. Candidate in Biology",
  affiliation: { "@type": "CollegeOrUniversity", name: "Indiana State University" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Khulna University" },
  knowsAbout: ["Polycomb group proteins", "trithorax group", "Hox genes", "Drosophila genetics", "cardiac development", "epigenetics"],
  sameAs: [profile.scholar, profile.orcid, profile.linkedin],
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies a saved light or dark choice before the page paints, so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <header className="border-b border-line bg-card">
          <div className="mx-auto flex max-w-[68rem] flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 sm:px-8">
            <Link href="/" className="mr-auto font-serif text-[1.3rem] font-semibold leading-tight tracking-tight">
              {profile.name}
            </Link>
            {/* On small screens the menu drops to its own row and the theme switch stays beside the name. */}
            <div className="order-3 w-full lg:order-2 lg:w-auto">
              <Nav />
            </div>
            <div className="order-2 lg:order-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <Band />

        <main id="main" className="mx-auto w-full max-w-[68rem] flex-1 px-5 py-12 sm:px-8 sm:py-16">
          {children}
        </main>

        <footer className="border-t border-line bg-card">
          <div className="mx-auto flex max-w-[68rem] flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 py-8 text-[0.9rem] text-muted sm:px-8">
            <p>
              {profile.name} · {profile.role}, {profile.university}
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              <a className="link" href={`mailto:${profile.email}`}>Email</a>
              <a className="link" href={profile.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <a className="link" href={profile.orcid} target="_blank" rel="noopener noreferrer">ORCID</a>
              <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="w-full text-[0.8rem]">Last updated {profile.updated}.</p>
          </div>
        </footer>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
