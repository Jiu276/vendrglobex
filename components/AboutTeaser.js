import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

/**
 * 首页关于条。
 * @returns {JSX.Element}
 */
export default function AboutTeaser() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.split}>
          <div className={styles.media}>
            <Image
              src="/images/about.jpg"
              alt="A small team working on laptops around a wooden table"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p className="kicker">04 — The desk</p>
            <h2>We keep what survives a real week.</h2>
            <p>
              Vendrglobex writes for people who buy on behalf of other people. A score here is an editorial judgment from studio use, not a lab certificate and not a placement.
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/about">How a note gets published</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
