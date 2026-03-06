import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-start">

      {/* Left Column: Name, Description, Education, Interests */}
      <div className="order-2 md:order-1">
        <h1 className="text-4xl font-serif font-semibold">
          Md Sayeed Abu Rayhan
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Ph.D. Candidate, Department of Biology <br />
          Indiana State University
        </p>
    
        {/* Education */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-2 text-gray-700 list-disc list-inside">
            <li>Ph.D., Biology, 2027 – Indiana State University (Expected)</li>
            <li>M.S., Fish Genetics and Biotechnology, 2020 – [Khulna University]</li>
            <li>B.S., Biology, 2018 – [Khulna University]</li>
          </ul>
        </div>

        {/* Interests */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Interests</h2>
          <p className="mt-2 text-gray-700">
            Developmental biology, epigenetics, molecular biology, cardiac morphogenesis, Hox gene regulation,
            translational research.
          </p>
        </div>
      </div>

      {/* Right Column: Headshot and Quick Links */}
      <div className="flex flex-col items-center order-1 md:order-2">
        <img
          src="/headshot.jpg.png"
          alt="Rayhan"
          className="w-64 h-64 object-cover rounded-2xl shadow-md"
        />

        {/* Clickable Logos */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="/Rayhan_CV_10212025.pdf" target="_blank">
            <img src="/icons/cv.png" alt="Download CV" className="w-10 h-10 hover:opacity-80 transition" />
          </a>

          <a href="https://scholar.google.com/citations?hl=en&user=gbIuT-kAAAAJ" target="_blank">
            <img src="/icons/googlescholar.png" alt="Google Scholar" className="w-10 h-10 hover:opacity-80 transition" />
          </a>

          <a href="https://www.researchgate.net/profile/Sayeed-Abu-Rayhan?ev=hdr_xprf" target="_blank">
            <img src="/icons/researchgate.png" alt="Researchgate" className="w-10 h-10 hover:opacity-80 transition" />
          </a>

          <a href="https://www.linkedin.com/in/md-sayeed-abu-rayhan-113703165/" target="_blank">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition" />
          </a>

          <a href="https://orcid.org/0009-0001-7493-5509" target="_blank">
            <img src="/icons/orcid.png" alt="ORCID" className="w-10 h-10 hover:opacity-80 transition" />
          </a>
        </div>
      </div>

    </main>
  );
}