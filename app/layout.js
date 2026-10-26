import { Fraunces, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SocialWidget from '@/components/SocialWidget';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata = {
  title: {
    default: 'Vendrglobex — Field notes on what to buy',
    template: '%s · Vendrglobex',
  },
  description: 'Vendrglobex is an editorial desk for product reviews, platform recommendations, and buying guides.',
};

/**
 * 全站框架：导航、社交栏、页脚和回到顶部。
 * @param {{ children: import('react').ReactNode }} props
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <SocialWidget variant="rail" />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
