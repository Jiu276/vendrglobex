const shop = 'https://www.harney.com/';

/**
 * 正文里的商店链接。Loose Leaf、Harney、Sachet 都指向官网首页。
 * @param {string} text
 * @returns {{ text: string, href: string }}
 */
function shopLink(text) {
  return { text, href: shop };
}

/**
 * 2026 年 7 月 6 日刊出的 Harney 茶包与散茶对照。
 * 点击量按巴黎茶产品页公开评价数（7,178）的大约 100 倍记。
 */
export const harneySachetArticle = {
  slug: 'sachet-balance-loose-leaf',
  title: 'The Sachet Is the "Perfect Balance" — But the Loose Leaf Tastes Even Better. Here\'s Why.',
  dek: 'Harney\'s own line calls the sachet a perfect balance. On Paris, the leaf that can still open makes the better cup. The sachet is what you pack.',
  category: 'Product Reviews',
  categorySlug: 'product-reviews',
  date: '2026-07-06',
  views: 718000,
  image: '/images/tea-leaves.jpg',
  imageAlt: 'Close-up of twisted, dry black tea leaves',
  author: 'Desk Editor',
  tags: ['Paris', 'black tea', 'brewing', 'format'],
  productSlugs: [],
  body: [
    {
      type: 'p',
      parts: [
        'There is a line on the ',
        shopLink('Harney'),
        ' site that sounds like a conclusion and is really a compromise. Want the finer cup of ',
        shopLink('loose leaf'),
        ', and also the ease of a bag? Their ',
        shopLink('sachets'),
        ', they write, "offer the perfect balance."',
      ],
    },
    {
      type: 'p',
      parts: [
        'Emeric ',
        shopLink('Harney'),
        ' put that in a January 2026 note comparing ',
        shopLink('loose leaf'),
        ', flat teabags, and ',
        shopLink('sachets'),
        '. The phrase is theirs. It is also where a lot of buyers stop.',
      ],
    },
    {
      type: 'h2',
      text: 'What actually goes in the mug',
    },
    {
      type: 'p',
      parts: [
        'A ',
        shopLink('sachet'),
        ', in their glossary, is whole-leaf tea in a mesh bag, usually a pyramid. No basket, no scale. Paris — the blend they reach for when they bother to show the difference — comes that way in a resealable bag of 50, one ',
        shopLink('sachet'),
        ' to a 12-ounce mug, and in a tin of 20 you are meant to refill. The product page says a full boil, 212°F, and five minutes. The longer note allows four to five. Easy instructions. A smaller life for the leaf.',
      ],
    },
    {
      type: 'image',
      src: '/images/tea-bag.jpg',
      alt: 'A square paper tea bag steeping in a glass mug of amber tea',
      caption: 'A flat paper bag in a mug. This is the teabag shape, not a pyramid sachet. The leaf in a bag like this is already cut small.',
    },
    {
      type: 'h2',
      text: 'Read the ingredient line',
    },
    {
      type: 'p',
      parts: [
        shopLink('Loose leaf'),
        ' Paris is the same idea with the mesh taken off. Read the panel before you trust the slogan. ',
        shopLink('Loose leaf'),
        ' and the ',
        shopLink('sachet'),
        ' both list black tea, oolong, black currant, vanilla, bergamot oil, and caramel. The paper teabag does not list the oolong. So the bag is not a smaller version of the same cup. It is a finer cut, in less room, of a shorter formula. John ',
        shopLink('Harney'),
        '\'s word for the dusty leaf in ordinary supermarket bags was "dust." ',
        shopLink('Harney'),
        '\'s own paper is bleached with oxygen, and they say someone tastes that paper. A real standard. It does not put the oolong back.',
      ],
    },
    {
      type: 'image',
      src: '/images/tea-mug-leaves.jpg',
      alt: 'Long twisted black tea leaves filling a terracotta cup',
      caption: 'Dry black leaf, still in long twists. A loose-leaf teaspoon is measuring this, not dust.',
    },
    {
      type: 'h2',
      text: 'The leaf needs the room',
    },
    {
      type: 'p',
      parts: [
        'The ',
        shopLink('sachet'),
        ' stays nearer the original. Same blend, portion already weighed, mesh instead of a tight paper pocket. The caveat worth keeping is theirs in spirit: the cup comes out extremely similar, not the same, because a ',
        shopLink('sachet'),
        ' holds the leaf in. Paris is a bad blend to hold in. On Mike ',
        shopLink('Harney'),
        '\'s card the aroma is a 4 and the body is a 2. Black currant, vanilla, bergamot, caramel. Perfume on a medium body. The liquor is supposed to finish medium to dark brown.',
      ],
    },
    {
      type: 'p',
      parts: [
        'Their own chart already refuses a straight swap. The ',
        shopLink('sachet'),
        ' is written for 12 ounces. A teaspoon of ',
        shopLink('loose leaf'),
        ', about 2.5 grams, is written for 8 ounces. Steep one of each in the same mug and you have changed the strength before you have learned anything about the leaf. Give that teaspoon a pot or an infuser and it can open. A pyramid cannot, not all the way. Less opening, less of the top note, more of a pleasant average. Pleasant is what "perfect balance" means. A decent mug, and nothing to pack. Not the best this tea gets.',
      ],
    },
    {
      type: 'image',
      src: '/images/tea-cups.jpg',
      alt: 'A tea tasting table with dry leaves, white cups of liquor, and an hourglass',
      caption: 'Leaf, liquor, and a timer on one table. Paris wants about five minutes, and a darker cup than the palest bowls in this row.',
    },
    {
      type: 'p',
      parts: [
        'Mike and Brigitte still start the morning on ',
        shopLink('loose leaf'),
        '. That detail sits in the same family note, and it is more useful than the slogan. Keep a ',
        shopLink('sachet'),
        ' for the office drawer and the train. At home, buy the ',
        shopLink('loose leaf'),
        '. One exception they flag themselves: nearly every ',
        shopLink('sachet'),
        ' is an industrially compostable material made from sugarcane, and Hot Cinnamon is the one they leave out of that sentence. If that is the tea you drink every day, the materials question is still open. For Paris, the format question is not.',
      ],
    },
  ],
};
