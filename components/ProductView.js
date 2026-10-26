import Link from 'next/link';
import ArticleBody from '@/components/ArticleBody';
import ProductGallery from '@/components/ProductGallery';
import styles from '@/styles/story.module.css';

/**
 * 产品详情：图集、规格、优缺点和测评正文。
 * @param {{ product: import('@/lib/content').Product, article: import('@/lib/content').Article|null }} props
 * @returns {JSX.Element}
 */
export default function ProductView({ product, article }) {
  return (
    <article className={styles.wrap}>
      <div className="container">
        <p className={styles.crumb}>
          <Link href="/">Home</Link>
          {' / '}
          <Link href="/products">The Bench</Link>
          {' / '}
          {product.name}
        </p>
        <div className={styles.layout}>
          <ProductGallery images={product.images} />
          <div>
            <p className="kicker">{product.category}</p>
            <h1>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.scoreLine}>Bench score {product.score} / 10</p>
            <p className={styles.summary}>{product.summary}</p>
            <table className={styles.specs}>
              <tbody>
                {product.specs.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.splitLists}>
              <div>
                <h3>Keep</h3>
                <ul>{product.pros.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h3>Skip if</h3>
                <ul>{product.cons.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <Link className="btn btn-primary" href="/contact">Ask the desk</Link>
          </div>
        </div>
        <div style={{ marginTop: 36 }}>
          <ArticleBody blocks={product.body} />
        </div>
        {article ? (
          <p style={{ marginTop: 18 }}>
            <Link href={`/blog/${article.slug}`}>Read the full journal note</Link>
          </p>
        ) : null}
      </div>
    </article>
  );
}
