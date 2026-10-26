'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/story.module.css';

/**
 * 文章页顶部的阅读进度条。
 * @returns {JSX.Element}
 */
export default function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const height = root.scrollHeight - root.clientHeight;
      setWidth(height > 0 ? (root.scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className={styles.progress} style={{ width: `${width}%` }} aria-hidden="true" />;
}
