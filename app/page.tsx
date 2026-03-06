export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Navigation */}
      <nav className="w-full border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Rayhan</h1>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#research" className="hover:text-blue-600">Research</a>
            <a href="#teaching" className="hover:text-blue-600">Teaching</a>
            <a href="#publications" className="hover:text-blue-600">Publications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home / Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold leading-tight">
            Md Sayeed Abu Rayhan
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Ph.D. Candidate, Department of Biology <br />
            Indiana State University
          </p>

          <p className="mt-6 text-lg text-gray-700">
            Epigenetic regulation of Hox genes during cardiac development and
            its implications for congenital heart defects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/Rayhan_CV_10212025.pdf"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800"
            >
              Download CV
            </a>

            <a
              href="https://scholar.google.com/citations?hl=en&user=gbIuT-kAAAAJ"
              target="_blank"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Google Scholar
            </a>

            <a
              href="https://www.linkedin.com/in/md-sayeed-abu-rayhan-113703165/"
              target="_blank"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              LinkedIn
            </a>

            <a
              href="https://orcid.org/my-orcid?orcid=0009-0001-7493-5509"
              target="_blank"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              ORCID
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/headshot.jpg.png"
            alt="Rayhan"
            className="w-64 h-64 object-cover rounded-2xl shadow-md"
          />
        </div>

      </section>


      {/* About */}
      <section id="about" className="bg-gray-50 py-24 px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-serif font-semibold">
            About Me
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            I am a Ph.D. candidate in the Department of Biology at the Indiana
            State University. My research focuses on the epigenetic regulation
            of developmental genes during cardiac morphogenesis.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Using the Drosophila embryonic dorsal vessel as a model system, I
            investigate how chromatin regulators coordinate spatiotemporal
            expression of Hox genes during heart development.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            My long-term goal is to establish an independent research program
            investigating chromatin-mediated gene regulatory mechanisms that
            contribute to congenital heart defects.
          </p>

        </div>

      </section>


      {/* Research */}
      <section id="research" className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-serif font-semibold text-center">
            Research Program
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {[
              "Define genome-wide binding dynamics of trx and Pc during cardiac development using chromatin profiling approaches",

              "Dissect the role of PRC2 components including Ezh2 homologs in heart-specific gene regulatory networks",

              "Identify chromatin-dependent regulatory elements governing cardiac Hox expression",

              "Establish translational links between Drosophila cardiac epigenetics and vertebrate heart development models"
            ].map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg text-gray-700">
                  {item}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Publications */}
      <section id="publications" className="bg-gray-50 py-24 px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-serif font-semibold text-center">
            Publications
          </h2>

          <ul className="mt-10 space-y-6 text-lg text-gray-700">

            <li>
              Farmer, A.J., et al. (2025).  trithorax is an 
essential regulator of cardiac Hox gene expression and anterior-posterior patterning of the 
Drosophila embryonic heart tube. 
              <em> Biol Open. 2025 Apr 15;14(4): bio061919. doi: 
10.1242/bio.061919.</em>.
            </li>

            <li>
              Rayhan, M. S. A., et al. (2023).  Estimating peak breeding season, 
size at first maturity and variation in fecundity and egg-size at different sizes of Hilsa (Tenualosa 
ilisha).
              <em> Heliyon. 2023 Aug 23;9(9): e19420. doi: 10.1016/j.heliyon. 2023.e19420.</em>.
            </li>

            <li>
              Ali, M.Y., et al. (2025). Identification and comparative analysis of Heat 
Shock Protein genes Hsp70 and Hsp90 from gill transcriptomes of three Australian crayfish. 
              <em> Egyptian journal of Aquatic Biology and Fisheries (In revision)</em>.
            </li>

          </ul>

          <div className="mt-8 text-center">

            <a
              href="https://scholar.google.com/citations?hl=en&user=gbIuT-kAAAAJ"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View full publication list on Google Scholar
            </a>

          </div>

        </div>

      </section>


      {/* Teaching */}
      <section id="teaching" className="py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-serif font-semibold">
            Teaching & Mentorship
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            I am committed to evidence-based biology education that integrates
            primary literature, experimental design, and quantitative
            reasoning. My goal is to train students to think critically about
            developmental biology as an evolving research discipline grounded
            in experimental discovery.
          </p>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-semibold">
            Contact
          </h2>

          <p className="mt-6 text-lg">
            mrayhan@sycamores.indstate.edu
          </p>

          <div className="mt-6 flex justify-center gap-6">

            <a
              href="https://scholar.google.com/citations?hl=en&user=gbIuT-kAAAAJ"
              className="hover:underline"
              target="_blank"
            >
              Google Scholar
            </a>

            <a
              href="https://www.linkedin.com/in/md-sayeed-abu-rayhan-113703165/"
              className="hover:underline"
              target="_blank"
            >
              LinkedIn
            </a>

          </div>

          <p className="mt-10 text-sm text-gray-400">
            © {new Date().getFullYear()} Md Sayeed Abu Rayhan
          </p>

        </div>

      </section>

    </main>
  );
}
