import Hero from '@/components/Hero';
import FeaturedStories from '@/components/FeaturedStories';
import CategoryStrip from '@/components/CategoryStrip';
import LatestJournal from '@/components/LatestJournal';
import BenchPreview from '@/components/BenchPreview';
import AboutTeaser from '@/components/AboutTeaser';
import Newsletter from '@/components/Newsletter';
import Reveal from '@/components/Reveal';
import { getAllArticles, getAllProducts } from '@/lib/content';

/**
 * 落地首页。
 * @returns {JSX.Element}
 */
export default function HomePage() {
  const articles = getAllArticles();
  const products = getAllProducts().slice(0, 4);

  return (
    <>
      <Hero latest={articles[0]} />
      <Reveal>
        <FeaturedStories articles={articles.slice(0, 3)} />
      </Reveal>
      <Reveal delay={80}>
        <CategoryStrip />
      </Reveal>
      <Reveal delay={40}>
        <LatestJournal articles={articles.slice(3, 9)} />
      </Reveal>
      <Reveal delay={80}>
        <BenchPreview products={products} />
      </Reveal>
      <Reveal>
        <AboutTeaser />
      </Reveal>
      <Reveal>
        <Newsletter />
      </Reveal>
    </>
  );
}
