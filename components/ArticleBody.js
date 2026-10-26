import Image from 'next/image';
import RichText from '@/components/RichText';
import styles from '@/styles/story.module.css';

/**
 * 按块渲染文章正文，并为茶叶关键词加上外链。
 * @param {{ blocks: Array<{ type: string, text?: string, parts?: Array<string|{ text: string, href?: string }>, items?: string[], cite?: string, src?: string, alt?: string, caption?: string }> }} props
 * @returns {JSX.Element}
 */
export default function ArticleBody({ blocks }) {
  return (
    <div className={styles.prose}>
      {blocks.map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2 key={index}>
              <RichText text={block.text} />
            </h2>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={index}>
              {(block.items || []).map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'quote') {
          return (
            <blockquote className={styles.quote} key={index}>
              <p>
                <RichText parts={block.parts} text={block.text} />
              </p>
              {block.cite ? <cite>{block.cite}</cite> : null}
            </blockquote>
          );
        }
        if (block.type === 'image' && block.src) {
          return (
            <figure key={index}>
              <div className={styles.figure}>
                <Image
                  src={block.src}
                  alt={block.alt || ''}
                  fill
                  sizes="(max-width: 800px) 100vw, 760px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {block.caption ? (
                <figcaption className={styles.caption}>
                  <RichText text={block.caption} />
                </figcaption>
              ) : null}
            </figure>
          );
        }
        return (
          <p key={index}>
            <RichText parts={block.parts} text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
