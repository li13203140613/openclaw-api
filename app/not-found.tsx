import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-wrap">
      <section className="card">
        <h1>Page Not Found</h1>
        <p className="section-copy">
          The requested model page does not exist. Return to homepage and pick
          another model.
        </p>
        <p>
          <Link href="/" className="btn-link">
            Back to OpenClaw API Homepage
          </Link>
        </p>
      </section>
    </main>
  );
}
