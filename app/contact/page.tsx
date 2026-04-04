export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-6">Contact</h1>

      <p className="mb-4">
        Department of Biology <br/>
        Indiana State University <br/>
        Terre Haute, Indiana 47809, USA
      </p>

      {/* Email */}
      <p className="mb-2">
        Email:{" "}
        <a href="mailto:mrayhan@sycamores.indstate.edu" className="text-blue-600 hover:underline">
          mrayhan@sycamores.indstate.edu
        </a>,{" "}
        <a href="mailto:rayhanku15@gmail.com" className="text-blue-600 hover:underline">
          rayhanku15@gmail.com
        </a>
      </p>

      {/* LinkedIn */}
      <p className="mb-2">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/md-sayeed-abu-rayhan-113703165/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          https://www.linkedin.com/in/md-sayeed-abu-rayhan-113703165/
        </a>
      </p>

      {/* Facebook */}
      <p className="mb-2">
        Facebook:{" "}
        <a
          href="https://www.facebook.com/sayeed.abu.rayhan"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          https://www.facebook.com/sayeed.abu.rayhan
        </a>
      </p>

      {/* Phone */}
      <p className="mb-2">
        Phone:{" "}
        <a href="tel:+18129163675" className="text-blue-600 hover:underline">
          +1-812-916-3675
        </a>
      </p>

    </main>
  );
}