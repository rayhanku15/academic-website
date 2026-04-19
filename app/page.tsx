export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-14 mt-6">

      {/* Left Content */}
      <div className="md:col-span-2">

        <h2 className="text-lg font-semibold mb-4">Home</h2>

        <p className="text-gray-700 text-sm leading-relaxed">
          Welcome! I am a Ph.D. candidate in the Department of Biology at the Indiana State
          University. My research focuses on genetic and epigenetic regulation of Hox genes
          during cardiac development.
        </p>

        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          Using the Drosophila embryonic dorsal vessel as a model system,
          I investigate how chromatin regulators coordinate gene expression through hox control
          during heart development.
        </p>

      </div>

      {/* Right Sidebar */}
      <div> 
        <h3 className="text-md font-semibold mb-2">Contact</h3>

        <p className="text-sm text-gray-700">
          Email:
          <br />
          <a
            href="mailto:mrayhan@sycamores.indstate.edu"
            className="text-black-600 hover:underline"
          >
            mrayhan@sycamores.indstate.edu
          </a>
        </p>

        <p className="mt-4 text-sm">
          <a
            href="/Rayhan_CV_10212025.pdf"
            className="text-black-600 hover:underline"
          >
            Download CV
          </a>
        </p>

      </div>

    </div>
  );
}