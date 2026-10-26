'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import { getAllProducts, PAGE_SIZE } from '@/lib/content';
import { productCategories } from '@/data/site';
import styles from '@/styles/explore.module.css';
import cards from '@/styles/home.module.css';

/**
 * 产品列表：按类别筛选，并按上架日期从新到旧分页。
 * @returns {JSX.Element}
 */
export default function ProductExplorer() {
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const products = useMemo(
    () => getAllProducts().filter((item) => category === 'all' || item.categorySlug === category),
    [category],
  );
  const pageCount = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = products.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div className={styles.page} id="bench-top">
      <div className="container">
        <header className={styles.banner}>
          <p className="kicker">The bench</p>
          <h1>Eight pieces with the opinion attached.</h1>
          <p>Prices are typical street ranges, not an offer. Scores are editorial, from weeks of ordinary use.</p>
        </header>
        <div className={styles.chips} role="group" aria-label="Product categories">
          <button type="button" className={styles.chip} aria-pressed={category === 'all'} onClick={() => { setCategory('all'); setPage(1); }}>
            All
          </button>
          {productCategories.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={styles.chip}
              aria-pressed={category === item.slug}
              onClick={() => { setCategory(item.slug); setPage(1); }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className={cards.productGrid} style={{ marginTop: 22 }}>
          {visible.map((product) => (
            <Link className={cards.product} key={product.slug} href={`/products/${product.slug}`}>
              <div className={cards.media}>
                <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 720px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={cards.copy}>
                <p className={cards.score}><span>{product.price}</span><b>{product.score}</b></p>
                <h3>{product.name}</h3>
                <p className={cards.dek}>{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          page={safePage}
          pageCount={pageCount}
          onPage={(next) => {
            setPage(next);
            document.getElementById('bench-top')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
}
