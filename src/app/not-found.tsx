import Link from 'next/link';
export default function NotFound() {
  return <main className="not-found"><a href="/" className="footer-wordmark">aethos<span>vision labs</span></a><h1>This page took<br/>a different direction.</h1><p>Let’s get you back to the good stuff.</p><Link href="/" className="signal-button">Back to the studio</Link></main>;
}
