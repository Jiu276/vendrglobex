import AboutContent from '@/components/AboutContent';
import PageBanner from '@/components/PageBanner';

export const metadata = {
  title: 'About',
  description: 'What the Vendrglobex desk is for, and how a review gets published.',
};

/**
 * 关于页。
 * @returns {JSX.Element}
 */
export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="The people who keep the notebook."
        lede="A small editorial desk. We publish slowly, and we would rather be bored by a product than impressed by its launch."
        image="/images/studio.jpg"
        imageAlt="Laptop on a bright window counter in a planted office"
      />
      <AboutContent />
    </>
  );
}
