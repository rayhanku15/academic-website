import Link from "next/link";
import "./globals.css"; // Ensure Tailwind CSS is imported

export const metadata = {
  title: "Md Sayeed Abu Rayhan – PhD Candidate",
  description: "Epigenetic regulation of Hox genes during cardiac development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">

        {/* Top Navigation Bar */}
        <header className="w-full bg-white border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Rayhan</h1>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/research">Research</Link>
              <Link href="/teaching">Teaching</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 text-center mt-12">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm mb-2">
              © {new Date().getFullYear()} Md Sayeed Abu Rayhan
            </p>
            <div className="flex justify-center gap-4">
              <a href="/Rayhan_CV_10212025.pdf" target="_blank">
                <img src="/icons/cv.png" alt="CV" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
              <a href="https://scholar.google.com/citations?hl=en&user=gbIuT-kAAAAJ" target="_blank">
                <img src="/icons/googlescholar.png" alt="Google Scholar" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
              <a href="https://www.researchgate.net/profile/Sayeed-Abu-Rayhan?ev=hdr_xprf" target="_blank">
                <img src="/icons/researchgate.png" alt="ResearchGate" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
              <a href="https://www.linkedin.com/in/md-sayeed-abu-rayhan-113703165/" target="_blank">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
              <a href="https://orcid.org/0009-0001-7493-5509" target="_blank">
                <img src="/icons/orcid.png" alt="ORCID" className="w-6 h-6 hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
