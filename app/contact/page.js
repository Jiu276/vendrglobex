import ContactSection from '@/components/ContactSection';
import PageBanner from '@/components/PageBanner';

export const metadata = {
  title: 'Contact',
  description: 'Write to the Vendrglobex desk.',
};

/**
 * 联系页。
 * @returns {JSX.Element}
 */
export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Send a note to the desk."
        lede="Editorial questions, a product you think we should live with, or a correction. We read them."
        image="/images/contact.jpg"
        imageAlt="Hands typing on a laptop at a wooden desk"
      />
      <ContactSection />
    </>
  );
}
