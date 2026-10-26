import Image from 'next/image';
import Link from 'next/link';
import { formatCount, formatDate } from '@/lib/content';
import styles from '@/styles/home.module.css';

/**
 * 文章卡片。日期由调用方先排序，卡片本身不再改顺序。
 * @param {{ article: import('@/lib/content').Article & { views?: number } }} props
 * @returns {JSX.Element}
 */
export default function ArticleCard({ article }) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${article.slug}`}>
        <div className={styles.media}>
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 720px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.copy}>
          <p className="kicker">{article.category}</p>
          <h3>{article.title}</h3>
          <p className={styles.dek}>{article.dek}</p>
          <p className={styles.meta}>
            {formatDate(article.date)}
            {article.views ? ` · ${formatCount(article.views)} reads` : ''}
          </p>
        </div>
      </Link>
    </article>
  );
}
