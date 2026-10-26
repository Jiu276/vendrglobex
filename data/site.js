/**
 * 站点导航、分类与对外联系方式。
 */

/** @type {{ href: string, label: string }[]} */
export const navItems = [
  { href: '/blog', label: 'Journal' },
  { href: '/products', label: 'The Bench' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/**
 * @type {{ slug: string, name: string, text: string }[]}
 */
export const categories = [
  {
    slug: 'product-reviews',
    name: 'Product Reviews',
    text: 'Gear we lived with on the desk, in the kitchen, and on the floor.',
  },
  {
    slug: 'platform-picks',
    name: 'Platform Picks',
    text: 'Software we would actually hand to a team that buys across time zones.',
  },
  {
    slug: 'buying-guides',
    name: 'Buying Guides',
    text: 'Shortlists with the showroom language taken out.',
  },
  {
    slug: 'field-notes',
    name: 'Field Notes',
    text: 'What a shop floor, a marketplace, or a studio week taught the desk.',
  },
];

/** @type {{ slug: string, name: string }[]} */
export const productCategories = [
  { slug: 'kitchen', name: 'Kitchen' },
  { slug: 'workspace', name: 'Workspace' },
  { slug: 'audio', name: 'Audio' },
  { slug: 'computing', name: 'Computing' },
];

/**
 * 社交链接指向各平台首页，点击后在新标签页打开。
 * @type {{ id: string, label: string, href: string }[]}
 */
export const socialLinks = [
  { id: 'x', label: 'X', href: 'https://x.com' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com' },
];

export const studio = {
  name: 'Vendrglobex',
  email: 'desk@vendrglobex.com',
  phone: '+44 20 4520 1180',
  phoneHref: 'tel:+442045201180',
  address: ['4th Floor, 18 Harbour Lane', 'London SE1 2AA', 'United Kingdom'],
};
