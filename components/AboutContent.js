import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/story.module.css';

/**
 * 关于页正文。
 * @returns {JSX.Element}
 */
export default function AboutContent() {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCopy}>
          <p className="kicker">About</p>
          <h2>A desk for people who sign the purchase order.</h2>
          <p>
            Vendrglobex started as a shared notebook: what we bought, what we still use, and the sentence that explains why. The public journal is that notebook with the hedging taken out.
          </p>
          <p>
            We cover physical gear and the platforms a buying team actually opens on a Tuesday. If a tool only looks good in a demo, it does not get a kind score.
          </p>
          <p>
            <Link href="/contact">Write to the desk</Link>
          </p>
        </div>
        <div className={styles.photoStack}>
          <div className={styles.photo}>
            <Image src="/images/studio.jpg" alt="A bright window-side counter with a laptop and a tall plant" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.photo}>
            <Image src="/images/about.jpg" alt="Editors working together around a table of laptops" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      <section className={styles.standards}>
        <h2>How a note gets published</h2>
        <ol>
          <li>We live with the object or the platform long enough to be bored by it. Boredom is where the real faults show.</li>
          <li>A score is an editorial judgment. It is not a laboratory certificate, and it is not for sale.</li>
          <li>Photos have to match the thing being described. A hallway is not a workstation, and a paper bag is not a pyramid sachet.</li>
          <li>Prices, when we print them, are ranges we have seen, not a checkout.</li>
        </ol>
      </section>
    </div>
  );
}
