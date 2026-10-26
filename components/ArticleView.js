import Image from 'next/image';
import Link from 'next/link';
import ArticleBody from '@/components/ArticleBody';
import ArticleCard from '@/components/ArticleCard';
import ReadingProgress from '@/components/ReadingProgress';
import RichText from '@/components/RichText';
import { formatCount, formatDate, readingMinutes } from '@/lib/content';
import styles from '@/styles/story.module.css';

/**
 * 文章详情：题头、正文、相关产品与其他文章。
 * @param {{ article: import('@/lib/content').Article & { views?: number }, related: import('@/lib/content').Article[], products: import('@/lib/content').Product[] }} props
 * @returns {JSX.Element}
 */
export default function ArticleView({ article, related, products }) {
  const minutes = readingMinutes(article.body);

  return (
    <article className={styles.wrap}>
      <ReadingProgress />
      <div className="container">
        <p className={styles.crumb}>
          <Link href="/">Home</Link>
          {' / '}
          <Link href="/blog">Journal</Link>
          {' / '}
          {article.category}
        </p>
        <header className={styles.storyHead}>
          <p className="kicker">{article.category}</p>
          <h1>
            <RichText text={article.title} />
          </h1>
          <p className={styles.dek}>
            <RichText text={article.dek} />
          </p>
          <p className={styles.byline}>
            <span>{article.author}</span>
            <span>{formatDate(article.date)}</span>
            <span>{minutes} min read</span>
            {article.views ? <span>{formatCount(article.views)} reads</span> : null}
          </p>
        </header>
        <div className={styles.heroMedia}>
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <ArticleBody blocks={article.body} />
        {article.tags?.length ? (
          <div className={styles.tags}>
            {article.tags.map((tag) => (
              <Link key={tag} href={`/blog?q=${encodeURIComponent(tag)}`}>{tag}</Link>
            ))}
          </div>
        ) : null}
        {products.length ? (
          <section className={styles.callout}>
            <h2>On the bench</h2>
            <div className={styles.productRow}>
              {products.map((product) => (
                <Link className={styles.mini} key={product.slug} href={`/products/${product.slug}`}>
                  <div className={styles.media}>
                    <Image src={product.image} alt={product.imageAlt} fill sizes="120px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p className="kicker">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
        {related.length ? (
          <section className={styles.related}>
            <h2>More from the journal</h2>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
