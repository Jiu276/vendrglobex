'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import { getAllArticles, getCategoryCounts, PAGE_SIZE } from '@/lib/content';
import styles from '@/styles/explore.module.css';

/**
 * 期刊列表：搜索、分类、分页，结果始终按日期从新到旧。
 * @returns {JSX.Element}
 */
export default function BlogExplorer() {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get('q') || '';
  const category = params.get('category') || 'all';
  const page = Math.max(1, Number(params.get('page') || 1));
  const categories = getCategoryCounts();

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return getAllArticles().filter((article) => {
      const categoryOk = category === 'all' || article.categorySlug === category;
      if (!categoryOk) return false;
      if (!needle) return true;
      const haystack = [article.title, article.dek, article.category, ...(article.tags || [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  /**
   * @param {{ q?: string, category?: string, page?: number }} next
   */
  function push(next) {
    const q = next.q ?? query;
    const cat = next.category ?? category;
    const pg = next.page ?? 1;
    const search = new URLSearchParams();
    if (q) search.set('q', q);
    if (cat && cat !== 'all') search.set('category', cat);
    if (pg > 1) search.set('page', String(pg));
    const qs = search.toString();
    router.replace(qs ? `/blog?${qs}` : '/blog', { scroll: false });
  }

  return (
    <div className={styles.page} id="journal-top">
      <div className="container">
        <header className={styles.banner}>
          <p className="kicker">Journal</p>
          <h1>Field notes, newest first.</h1>
          <p>
            Product reviews, platform picks, buying guides, and the odd week on a shop floor.
            Ten dispatches from April 2025 through May 2026, plus the July tea note.
          </p>
        </header>
        <div className={styles.tools}>
          <label className={styles.search}>
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              placeholder="Search stories, tools, tea, platforms"
              onChange={(event) => push({ q: event.target.value, page: 1 })}
            />
          </label>
          <div className={styles.chips} role="group" aria-label="Categories">
            <button
              type="button"
              className={styles.chip}
              aria-pressed={category === 'all'}
              onClick={() => push({ category: 'all', page: 1 })}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                key={item.slug}
                type="button"
                className={styles.chip}
                aria-pressed={category === item.slug}
                onClick={() => push({ category: item.slug, page: 1 })}
              >
                {item.name}
              </button>
            ))}
          </div>
          <p className={styles.count}>
            {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
          </p>
        </div>
        {visible.length ? (
          <div className={styles.grid}>
            {visible.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>Nothing on the desk matches that.</p>
            <button type="button" className="btn btn-ink" onClick={() => push({ q: '', category: 'all', page: 1 })}>
              Clear search
            </button>
          </div>
        )}
        <Pagination
          page={safePage}
          pageCount={filtered.length ? pageCount : 1}
          onPage={(nextPage) => {
            push({ page: nextPage });
            document.getElementById('journal-top')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
}
