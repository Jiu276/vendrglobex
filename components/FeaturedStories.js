import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/content';
import styles from '@/styles/home.module.css';

/**
 * 首页主推荐：一篇大图，两篇侧栏。
 * @param {{ articles: import('@/lib/content').Article[] }} props
 * @returns {JSX.Element|null}
 */
export default function FeaturedStories({ articles }) {
  const [lead, ...side] = articles;
  if (!lead) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <div>
            <p className="kicker">01 — From the desk</p>
            <h2>Three to read before you buy.</h2>
          </div>
          <Link href="/blog">All stories</Link>
        </div>
        <div className={styles.feature}>
          <Link className={styles.featureMain} href={`/blog/${lead.slug}`}>
            <div className={styles.media}>
              <Image src={lead.image} alt={lead.imageAlt} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.copy}>
              <p className="kicker">{lead.category}</p>
              <h3>{lead.title}</h3>
              <p className={styles.dek}>{lead.dek}</p>
              <p className={styles.meta}>{formatDate(lead.date)}</p>
            </div>
          </Link>
          <div className={styles.sideStack}>
            {side.map((article) => (
              <Link className={styles.sideCard} key={article.slug} href={`/blog/${article.slug}`}>
                <div className={styles.media}>
                  <Image src={article.image} alt={article.imageAlt} fill sizes="140px" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.copy}>
                  <p className="kicker">{article.category}</p>
                  <h3>{article.title}</h3>
                  <p className={styles.meta}>{formatDate(article.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
