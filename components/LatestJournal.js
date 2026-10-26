import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import styles from '@/styles/home.module.css';

/**
 * 首页后续文章，不重复最前面的三篇。
 * @param {{ articles: import('@/lib/content').Article[] }} props
 * @returns {JSX.Element|null}
 */
export default function LatestJournal({ articles }) {
  if (!articles.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <div>
            <p className="kicker">02 — Journal</p>
            <h2>The rest of the pile.</h2>
          </div>
          <Link href="/blog">Browse and search</Link>
        </div>
        <div className={styles.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
