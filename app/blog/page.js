import { Suspense } from 'react';
import BlogExplorer from '@/components/BlogExplorer';

export const metadata = {
  title: 'Journal',
  description: 'Vendrglobex stories, newest first, with search, categories, and pages.',
};

/**
 * 博客列表页。交互筛选放在 BlogExplorer 里。
 * @returns {JSX.Element}
 */
export default function BlogPage() {
  return (
    <Suspense fallback={<p className="container" style={{ padding: '48px 0' }}>Opening the journal…</p>}>
      <BlogExplorer />
    </Suspense>
  );
}
