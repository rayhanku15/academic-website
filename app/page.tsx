export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            Md Sayeed Abu Rayhan, MS.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ph.D. Candidate, Department of Biology <br />
            Indiana State University
          </p>
          <p className="mt-6 text-xl font-medium text-gray-700">
            Epigenetic regulation of Hox genes during cardiac development
            and its implications for congenital heart defects.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/Rayhan_CV_10212025.pdf"
              className="bg-gray-900 text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
            >
              Download CV
            </a>
            <a
              href="#research"
              className="border border-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
            >
              View Research
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center">
            <span className="text-gray-500">Headshot</span>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section id="research" className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold">Research Overview</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Congenital heart defects (CHDs) are among the most common birth defects
            in the United States, affecting approximately 2.4 million individuals.
            Proper cardiac morphogenesis requires precise spatial and temporal
            control of developmental gene regulatory networks.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            My research investigates how antagonistic chromatin regulators,
            Trithorax (trx) and Polycomb (Pc), coordinate Hox gene expression
            during heart development. Using the Drosophila embryonic dorsal
            vessel as a model system, I examine how trx and Pc interact to
            regulate abdominal-A (abd-A) during posterior cardiac patterning.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            My findings demonstrate that trx activity is an absolute requirement
            for cardiac Hox activation, and removal of Pc-mediated repression
            alone is insufficient to restore gene expression. This work
            establishes a mechanistic framework linking epigenetic regulation
            to cardiac patterning and provides insight into how chromatin
            dysregulation may contribute to CHD pathogenesis.
          </p>
        </div>
      </section>

      {/* Future Research Program */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-center">
            Future Research Program
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              "Define genome-wide binding dynamics of trx and Pc during cardiac development using chromatin profiling approaches",
              "Dissect the role of PRC2 components, including Ezh2 homologs, in heart-specific gene regulatory networks",
              "Identify chromatin-dependent regulatory elements governing cardiac Hox expression",
              "Establish translational links between Drosophila cardiac epigenetics and vertebrate heart development models"
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-center">
            Selected Publications
          </h2>
          <ul className="mt-10 space-y-6 text-lg text-gray-700">
            <li>Ahmed, R., Smith, J., & Doe, A. (2024). Title of article. Developmental Biology, 500, 12–25.</li>
            <li>Ahmed, R., Johnson, K., & Lee, T. (2023). Another article title. Genetics, 215, 101–115.</li>
            <li>Ahmed, R., et al. (2022). Example paper title. Cell Reports, 40, 100875.</li>
          </ul>
        </div>
      </section>

      {/* Teaching */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold">Teaching & Mentorship</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            I am committed to evidence-based biology education that integrates
            primary literature, experimental design, and quantitative reasoning.
            My goal is to train students to think critically about developmental
            biology as an evolving research discipline grounded in experimental
            discovery.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-lg">mrayhan@sycamores.indstate.edu</p>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} Md Sayeed Abu Rayhan
          </p>
        </div>
      </section>

    </main>
  );
}
