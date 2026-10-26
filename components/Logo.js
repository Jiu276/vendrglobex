import Link from 'next/link';
import styles from '@/styles/chrome.module.css';

/**
 * 站点标志。点击后回到首页。
 * @returns {JSX.Element}
 */
export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Vendrglobex, go to homepage">
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="16" cy="16" rx="4.6" ry="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 16h22" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className={styles.word}>vendrglobex</span>
    </Link>
  );
}
