import { notFound } from 'next/navigation';
import ProductView from '@/components/ProductView';
import { getAllProducts, getArticle, getProduct } from '@/lib/content';

/**
 * @returns {{ slug: string }[]}
 */
export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

/**
 * @param {{ params: { slug: string } }} props
 */
export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return { title: 'Piece not found' };
  return { title: product.name, description: product.summary };
}

/**
 * 产品详情页。
 * @param {{ params: { slug: string } }} props
 * @returns {JSX.Element}
 */
export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductView product={product} article={getArticle(product.articleSlug)} />;
}
