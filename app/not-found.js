import Link from 'next/link';

/**
 * 未找到页面。
 * @returns {JSX.Element}
 */
export default function NotFound() {
  return (
    <div className="container" style={{ padding: '80px 0' }}>
      <p className="kicker">404</p>
      <h1>That page is not on the desk.</h1>
      <p style={{ margin: '12px 0 20px', color: 'var(--muted)' }}>The note may have moved, or the link is older than the journal.</p>
      <Link className="btn btn-primary" href="/">Back home</Link>
    </div>
  );
}
