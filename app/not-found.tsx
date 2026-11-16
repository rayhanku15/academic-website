import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-10">
      <p className="label">Page not found</p>
      <h1 className="mt-3 text-4xl font-semibold">That page does not exist.</h1>
      <p className="mt-4 text-muted">
        It may have moved when the site was reorganized.{" "}
        <Link className="link" href="/">Go to the home page</Link>.
      </p>
    </div>
  );
}
