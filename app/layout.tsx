import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1f3b5b] py-8">

        {/* Centered white container */}
        <div className="max-w-3xl mx-auto bg-white min-h-screen shadow-lg">

          {/* Header */}
          <div className="px-6 py-6 border-b">
            <h1 className="text-xl font-semibold">
              Md Sayeed Abu Rayhan
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Ph.D. Candidate, Department of Biology <br />
              Indiana State University
            </p>
          </div>

          {/* Navigation */}
          <nav className="px-6 py-3 border-b text-sm flex flex-wrap gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/fellowships">Fellowships & Awards</Link>
            <Link href="/presentations">Presentations</Link>
            <Link href="/teaching">Teaching</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Banner */}
          <div className="px-6 py-4">
            <img
              src="/banner.png"
              alt="Banner"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Page content */}
          <div className="px-8 pb-12">
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}