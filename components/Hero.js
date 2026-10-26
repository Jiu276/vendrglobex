import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/content';
import styles from '@/styles/home.module.css';

/**
 * 首页首屏。背景是一张工作室走廊照片。
 * @param {{ latest: import('@/lib/content').Article }} props
 * @returns {JSX.Element}
 */
export default function Hero({ latest }) {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <Image
        className={styles.heroImg}
        src="/images/hero.jpg"
        alt="A long, quiet office corridor with glass rooms and a kitchen at the end"
        fill
        priority
        sizes="100vw"
      />
      <div className={`container ${styles.heroInner}`}>
        <p className="kicker">Vendrglobex · Journal</p>
        <h1>
          Buy with a longer <em>memory.</em>
        </h1>
        <p className={styles.lede}>
          Product reviews, platform picks, and bench notes for people who choose tools for a whole team.
        </p>
        <div className={styles.actions}>
          <Link className="btn btn-primary" href="/blog">Read the journal</Link>
          <Link className="btn btn-ghost" href="/products">Visit the bench</Link>
        </div>
        <Link className={styles.latestLink} href={`/blog/${latest.slug}`}>
          Latest dispatch · {formatDate(latest.date)}
          <strong>{latest.title}</strong>
        </Link>
      </div>
    </section>
  );
}
