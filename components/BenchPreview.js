import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

/**
 * 首页产品预览。
 * @param {{ products: import('@/lib/content').Product[] }} props
 * @returns {JSX.Element}
 */
export default function BenchPreview({ products }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <div>
            <p className="kicker">03 — The bench</p>
            <h2>Objects with a note attached.</h2>
          </div>
          <Link href="/products">All pieces</Link>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <Link className={styles.product} key={product.slug} href={`/products/${product.slug}`}>
              <div className={styles.media}>
                <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 720px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.copy}>
                <p className={styles.score}>
                  <span>{product.category}</span>
                  <b>{product.score}</b>
                </p>
                <h3>{product.name}</h3>
                <p className={styles.dek}>{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
