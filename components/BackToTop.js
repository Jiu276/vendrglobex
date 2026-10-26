'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/chrome.module.css';

/**
 * 滚动一段距离后出现，点击平滑回到页面顶部。
 * @returns {JSX.Element}
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${styles.toTop} ${visible ? styles.show : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}
