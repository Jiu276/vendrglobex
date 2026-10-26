import { partsToText } from '@/lib/content';

const SHOP = 'https://www.harney.com/';
const KEYWORD = /\b(?:loose[\s-]leaf|sachets?|harney)\b/gi;

/**
 * 把 Loose Leaf、Sachet、Harney 换成指向官网的链接，保留原文大小写。
 * @param {string} text
 * @returns {Array<string|{ text: string, href: string }>}
 */
export function linkShopWords(text) {
  const nodes = [];
  let last = 0;
  for (const match of text.matchAll(KEYWORD)) {
    const index = match.index || 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push({ text: match[0], href: SHOP });
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length ? nodes : [text];
}

/**
 * 渲染一段可含店铺关键词链接的文字。
 * @param {{ parts?: Array<string|{ text: string, href?: string }>, text?: string }} props
 * @returns {JSX.Element}
 */
export default function RichText({ parts, text = '' }) {
  const source = parts || linkShopWords(text);
  const list = (Array.isArray(source) ? source : [source]).flatMap((part, index) => {
    if (typeof part === 'string') {
      return linkShopWords(part).map((node, nodeIndex) => ({ node, key: `${index}-${nodeIndex}` }));
    }
    return [{ node: part, key: String(index) }];
  });

  return list.map(({ node, key }) => {
    if (typeof node === 'string') return <span key={key}>{node}</span>;
    if (node.href) {
      return (
        <a key={key} href={node.href} target="_blank" rel="noopener noreferrer">
          {node.text}
        </a>
      );
    }
    return <span key={key}>{node.text}</span>;
  });
}

/**
 * 供阅读时间以外的纯文本场景使用。
 * @param {Array<string|{ text?: string }>|string|undefined} parts
 * @returns {string}
 */
export function richPlain(parts) {
  return partsToText(parts);
}
