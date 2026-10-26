import ContactForm from '@/components/ContactForm';
import SocialWidget from '@/components/SocialWidget';
import { studio } from '@/data/site';
import styles from '@/styles/story.module.css';

/**
 * 联系页：表单、地址和社交图标。
 * @returns {JSX.Element}
 */
export default function ContactSection() {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.contactGrid}>
        <ContactForm />
        <aside className={styles.details}>
          <p className="kicker">The desk</p>
          <h2>Write, or come by the lane.</h2>
          <address>
            {studio.address.map((line) => <div key={line}>{line}</div>)}
          </address>
          <p><a href={`mailto:${studio.email}`}>{studio.email}</a></p>
          <p><a href={studio.phoneHref}>{studio.phone}</a></p>
          <div style={{ marginTop: 16 }}>
            <SocialWidget />
          </div>
        </aside>
      </div>
    </div>
  );
}
