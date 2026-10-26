import Image from 'next/image';
import styles from '@/styles/story.module.css';

/**
 * 内页顶部的图片横幅。
 * @param {{ eyebrow: string, title: string, lede: string, image: string, imageAlt: string }} props
 * @returns {JSX.Element}
 */
export default function PageBanner({ eyebrow, title, lede, image, imageAlt }) {
  return (
    <header className={styles.banner}>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className={`container ${styles.bannerInner}`}>
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lede}</p>
      </div>
    </header>
  );
}
