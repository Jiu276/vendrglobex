import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { getAllArticles, getArticle, getProductsBySlugs, getRelatedArticles } from '@/lib/content';

/**
 * @returns {{ slug: string }[]}
 */
export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

/**
 * @param {{ params: { slug: string } }} props
 */
export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return { title: 'Story not found' };
  return { title: article.title, description: article.dek };
}

/**
 * 文章详情页。
 * @param {{ params: { slug: string } }} props
 * @returns {JSX.Element}
 */
export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <ArticleView
      article={article}
      related={getRelatedArticles(article, 3)}
      products={getProductsBySlugs(article.productSlugs || [])}
    />
  );
}
