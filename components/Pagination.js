import styles from '@/styles/explore.module.css';

/**
 * 分页按钮。
 * @param {{ page: number, pageCount: number, onPage: (page: number) => void }} props
 * @returns {JSX.Element|null}
 */
export default function Pagination({ page, pageCount, onPage }) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className={styles.pager} aria-label="Pagination">
      <button
        type="button"
        className={styles.pageBtn}
        disabled={page <= 1}
        onClick={() => onPage(page - 1)}
      >
        Previous
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          className={styles.pageBtn}
          aria-current={number === page ? 'page' : undefined}
          onClick={() => onPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        className={styles.pageBtn}
        disabled={page >= pageCount}
        onClick={() => onPage(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}
