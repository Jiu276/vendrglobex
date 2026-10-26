import Link from 'next/link';
import Logo from '@/components/Logo';
import SocialWidget from '@/components/SocialWidget';
import { navItems, studio } from '@/data/site';
import styles from '@/styles/chrome.module.css';

/**
 * 页脚：标志、导航、工作室地址与社交图标。
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Logo />
            <p>
              An editorial desk for product reviews, platform picks, and the quiet gear a team actually keeps.
            </p>
          </div>
          <div>
            <h2>Desk</h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Visit</h2>
            <ul>
              <li>{studio.address[0]}</li>
              <li>{studio.address[1]}</li>
              <li>
                <a href={`mailto:${studio.email}`}>{studio.email}</a>
              </li>
              <li>
                <SocialWidget />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.legal}>
          <span>© {new Date().getFullYear()} Vendrglobex. All rights reserved.</span>
          <span>Photographs from the studio library and Unsplash.</span>
        </div>
      </div>
    </footer>
  );
}
