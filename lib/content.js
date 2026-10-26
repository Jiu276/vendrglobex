import { articles } from '@/data/articles';
import { products } from '@/data/products';
import { categories } from '@/data/site';

/**
 * @typedef {Object} ContentBlock
 * @property {'p'|'h2'|'ul'|'quote'|'image'} type
 * @property {string} [text]
 * @property {string[]} [items]
 * @property {string} [cite]
 * @property {string} [src]
 * @property {string} [alt]
 * @property {string} [caption]
 */

/**
 * @typedef {Object} Article
 * @property {string} slug
 * @property {string} title
 * @property {string} dek
 * @property {string} category
 * @property {string} categorySlug
 * @property {string} date
 * @property {string} image
 * @property {string} imageAlt
 * @property {string} author
 * @property {string[]} tags
 * @property {string[]} productSlugs
 * @property {ContentBlock[]} body
 */

/**
 * @typedef {Object} ProductImage
 * @property {string} src
 * @property {string} alt
 * @property {string} caption
 */

/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} category
 * @property {string} categorySlug
 * @property {string} date
 * @property {string} price
 * @property {string} score
 * @property {string} summary
 * @property {string} image
 * @property {string} imageAlt
 * @property {ProductImage[]} images
 * @property {{ label: string, value: string }[]} specs
 * @property {string[]} pros
 * @property {string[]} cons
 * @property {string} articleSlug
 * @property {ContentBlock[]} body
 */

/**
 * 按 YYYY-MM-DD 从新到旧排序。
 * @template {{ date: string }} T
 * @param {T[]} items
 * @returns {T[]}
 */
export function sortByDateDesc(items) {
  return [...items].sort((a, b) => {
    if (a.date === b.date) return 0;
    return a.date < b.date ? 1 : -1;
  });
}

/**
 * 返回按日期从新到旧排列的全部文章。
 * @returns {Article[]}
 */
export function getAllArticles() {
  return sortByDateDesc(articles);
}

/**
 * 返回按日期从新到旧排列的全部产品。
 * @returns {Product[]}
 */
export function getAllProducts() {
  return sortByDateDesc(products);
}

/**
 * @param {string} slug
 * @returns {Article|null}
 */
export function getArticle(slug) {
  return articles.find((item) => item.slug === slug) || null;
}

/**
 * @param {string} slug
 * @returns {Product|null}
 */
export function getProduct(slug) {
  return products.find((item) => item.slug === slug) || null;
}

/**
 * @param {string[]} slugs
 * @returns {Product[]}
 */
export function getProductsBySlugs(slugs) {
  return slugs.map((slug) => getProduct(slug)).filter(Boolean);
}

/**
 * 同分类优先，其余按日期补足。
 * @param {Article} article
 * @param {number} count
 * @returns {Article[]}
 */
export function getRelatedArticles(article, count = 3) {
  const rest = getAllArticles().filter((item) => item.slug !== article.slug);
  const same = rest.filter((item) => item.categorySlug === article.categorySlug);
  const others = rest.filter((item) => item.categorySlug !== article.categorySlug);
  return [...same, ...others].slice(0, count);
}

/**
 * @param {string} categorySlug
 * @returns {number}
 */
export function countArticles(categorySlug) {
  return articles.filter((item) => item.categorySlug === categorySlug).length;
}

/**
 * @param {Article[]} list
 * @returns {{ slug: string, name: string, text: string, count: number }[]}
 */
export function getCategoryCounts(list = articles) {
  return categories.map((category) => ({
    ...category,
    count: list.filter((item) => item.categorySlug === category.slug).length,
  }));
}

/**
 * 把一段富文本折成纯文字。
 * @param {string|Array<string|{ text?: string }>|undefined} parts
 * @returns {string}
 */
export function partsToText(parts) {
  if (!parts) return '';
  const list = Array.isArray(parts) ? parts : [parts];
  return list.map((part) => (typeof part === 'string' ? part : part.text || '')).join('');
}

/**
 * 把正文块折成纯文本，用于估算阅读时间。
 * @param {ContentBlock[]} blocks
 * @returns {number}
 */
export function readingMinutes(blocks) {
  const text = blocks
    .map((block) => {
      if (block.type === 'ul') return (block.items || []).join(' ');
      if (block.parts) return partsToText(block.parts);
      return block.text || block.caption || '';
    })
    .join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * @param {number} value
 * @returns {string}
 */
export function formatCount(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * @param {string} isoDate
 * @returns {string}
 */
export function formatDate(isoDate) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export const PAGE_SIZE = 6;
