import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>This page is outside our brief.</h1>
      <Link href="/" className="signal-button">Back to Aethos Vision Labs</Link>
    </main>
  );
}
