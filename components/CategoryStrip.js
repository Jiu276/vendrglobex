import Link from 'next/link';
import { getCategoryCounts } from '@/lib/content';
import styles from '@/styles/home.module.css';

/**
 * 四个栏目入口，链到带分类参数的期刊页。
 * @returns {JSX.Element}
 */
export default function CategoryStrip() {
  const categories = getCategoryCounts();

  return (
    <section className={styles.section} style={{ paddingTop: 0 }}>
      <div className="container">
        <div className={styles.cats}>
          {categories.map((category, index) => (
            <Link className={styles.cat} key={category.slug} href={`/blog?category=${category.slug}`}>
              <span>0{index + 1}</span>
              <strong>{category.name}</strong>
              <span>{category.text}</span>
              <em>{category.count} stories</em>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
