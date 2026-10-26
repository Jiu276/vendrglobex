import ProductExplorer from '@/components/ProductExplorer';

export const metadata = {
  title: 'The Bench',
  description: 'Vendrglobex product notes with photographs, prices, and editorial scores.',
};

/**
 * 产品列表页。
 * @returns {JSX.Element}
 */
export default function ProductsPage() {
  return <ProductExplorer />;
}
