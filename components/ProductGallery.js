'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/story.module.css';

/**
 * 产品图集。一张图时不显示缩略图。
 * @param {{ images: import('@/lib/content').ProductImage[] }} props
 * @returns {JSX.Element}
 */
export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);
  const current = images[active] || images[0];

  return (
    <div>
      <div className={styles.gallery}>
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className={styles.caption}>{current.caption}</p>
      {images.length > 1 ? (
        <div className={styles.thumbs}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-pressed={index === active}
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActive(index)}
            >
              <Image src={image.src} alt="" width={74} height={74} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
