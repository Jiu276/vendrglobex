/**
 * 期刊文章。日期覆盖 2025 年 4 月到 2026 年 5 月。
 * 列表页会再按日期从新到旧排序，这里的顺序只是源数据。
 */

import { harneySachetArticle } from '@/data/harney-article';

/** @type {import('@/lib/content').Article[]} */
export const articles = [
  harneySachetArticle,
  {
    slug: 'retro-kettle-studio-kitchen',
    title: 'The retro kettle that earned a permanent plug',
    dek: 'A black counter kettle with a temperature dial, a chrome handle, and enough steam to fog the studio window. It stayed because the boil became a choice instead of a noise.',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    date: '2026-05-12',
    image: '/images/kettle.jpg',
    imageAlt: 'Black retro electric kettle with a chrome handle and temperature dial, steam rising beside a tiled kitchen window',
    author: 'Bench Tester',
    tags: ['kettle', 'kitchen', 'studio', 'tea'],
    productSlugs: ['retro-variable-kettle'],
    body: [
      {
        type: 'p',
        text: 'The studio kitchen is a corner, not a room. A hood, a short run of stone, and a window that looks onto a tree. Whatever boils water has to justify the socket it occupies. For four months the black retro kettle did, and then we stopped moving it back into the cupboard.',
      },
      {
        type: 'p',
        text: 'The dial is the reason. A collar of temperature marks sits above a chrome base, so the morning boil is a setting rather than a binary switch. Water for tea on a vendor call does not need a rolling rage. Water for the cone dripper does. This kettle can tell those apart without an app, a login, or a cheerful chime.',
      },
      {
        type: 'h2',
        text: 'What the counter actually allowed',
      },
      {
        type: 'p',
        text: 'We photographed a tighter kitchen on purpose. In that room the kettle is a small blue jug squeezed between a toaster and the sink. Ours is larger, glossier, and less willing to share. It wants a corner of its own. If your counter is already a traffic jam, buy the smaller jug. If the kitchen is a place people linger, the retro shape earns the footprint.',
      },
      {
        type: 'image',
        src: '/images/kettle-detail.jpg',
        alt: 'Compact white kitchen with a small blue electric kettle on a dark stone counter',
        caption: 'The other honest option: a small jug that disappears between the toaster and the sink.',
      },
      {
        type: 'h2',
        text: 'Living with the chrome',
      },
      {
        type: 'ul',
        items: [
          'The handle looks cool and runs warm near the lid. Pick it up by the lower grip once the boil has finished.',
          'The spout throws a clean stream, but it is not a gooseneck. Do not buy it to pour circles over coffee.',
          'Steam collects on the window in the first minute. That is a charm until you store flour beside it.',
          'The base clicks in with a positive seat. We never had a half-docked boil, which is the failure we actually fear.',
        ],
      },
      {
        type: 'quote',
        text: 'It is the first kettle in this kitchen that people walk toward, instead of past.',
        cite: 'Studio note, 12 May 2026',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Keep it if you boil water more than once a day and you like an object that looks decided. Skip it if you travel, if you need a narrow pour, or if the counter cannot spare a circle of stone. Bench score: 8.6. The full note sits with the kettle on the bench.',
      },
    ],
  },
  {
    slug: 'operating-picture-before-the-platform',
    title: 'Read the operating picture before you pick the platform',
    dek: 'Issue trackers, docs, and chat all promise a cleaner buying desk. The first screen tells you whether that promise is a workflow or a wall of charts.',
    category: 'Platform Picks',
    categorySlug: 'platform-picks',
    date: '2026-03-26',
    image: '/images/platform.jpg',
    imageAlt: 'Laptop screen showing an operations dashboard with load, bounce rate, and session charts',
    author: 'Platform Editor',
    tags: ['platforms', 'linear', 'ops', 'procurement'],
    productSlugs: [],
    body: [
      {
        type: 'p',
        text: 'Teams ask us which system to buy: Linear, Jira, Height, a whiteboard with better manners. The honest answer starts one step earlier. Open the screen a buyer will see on a Tuesday, and read it as if you had eight minutes before a vendor call.',
      },
      {
        type: 'p',
        text: 'The dashboard in front of us is a useful warning. It is handsome. It is also crowded with bounce rate, page load, and session length. None of those numbers tell a procurement desk who owns the kettle shortlist, which sample is late, or which contract is blocked on a legal name. A platform that leads with vanity charts will not become wiser because you renamed a column.',
      },
      {
        type: 'h2',
        text: 'What the first screen should hold',
      },
      {
        type: 'ul',
        items: [
          'The open decisions, each with one owner and a date that is not “soon”.',
          'The vendor record: what we use, what we pay, and the sentence that explains why.',
          'Blocked work, written in plain language. “Waiting on a sample” is a status. “Red” is not.',
          'A path into the document where the spec actually lives. The card is not the spec.',
        ],
      },
      {
        type: 'h2',
        text: 'Where we send teams',
      },
      {
        type: 'p',
        text: 'For a product squad that already thinks in issues, Linear is the pick. The interface assumes you will write a title a stranger can understand, and the cycle view is calmer than a chart wall. Jira still wins when the company already reports in it and the cost of a second system is political, not financial. Height is the lighter option when the team is small and the work is a list, not a program.',
      },
      {
        type: 'p',
        text: 'None of them fix a desk that cannot say what “done” means for a purchase. Write that sentence first. Then buy the platform whose first screen will display it without a custom science project.',
      },
      {
        type: 'quote',
        text: 'If the landing view is a graph, ask who it is trying to impress. It is rarely the person placing the order.',
        cite: 'Platform desk, March 2026',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Choose Linear when the team will live in issues every day. Stay with Jira when leaving would be theatre. Refuse any tool whose demo opens on a bounce-rate chart and calls that an operating picture.',
      },
    ],
  },
  {
    slug: 'work-desk-shortlist',
    title: 'A work desk shortlist without the showroom script',
    dek: 'A pale trestle desk in a small bright room beat every glass-walled tour we took. Depth, knee clearance, and a floor the chair can roll on matter more than a lift column you will not use.',
    category: 'Buying Guides',
    categorySlug: 'buying-guides',
    date: '2026-02-14',
    image: '/images/desk.jpg',
    imageAlt: 'Pale trestle desk in a small white room with a display, grey task chair, lamp, and a plant',
    author: 'Desk Editor',
    tags: ['desk', 'workspace', 'buying guide', 'chair'],
    productSlugs: ['trestle-work-desk', 'graphite-floor-lamp', 'oak-swivel-chair'],
    body: [
      {
        type: 'p',
        text: 'Showrooms are corridors. Glass, a perfect floor, a lamp that has never met a deadline. They photograph well and tell you almost nothing about the desk you will actually bruise your knee on. The shortlist we trust starts in a room the size of a spare bedroom.',
      },
      {
        type: 'p',
        text: 'The trestle desk in that room is ordinary in the best way. A pale top, a black mat, a display, a grey task chair that can roll, a shelf for the books you still open. It is not a standing desk. It does not pretend to be. The top is deep enough for a screen and a notebook at the same time, which is the test most catalogue pages skip.',
      },
      {
        type: 'image',
        src: '/images/desk-detail.jpg',
        alt: 'Long glass-walled office corridor with a floor lamp and a sofa behind black frames',
        caption: 'A beautiful hallway is not a test. Nobody writes there.',
      },
      {
        type: 'h2',
        text: 'Measure these, in this order',
      },
      {
        type: 'ul',
        items: [
          'Depth. Under 60 cm and the display lands in your lap. Over 80 cm and you cannot reach the wall in a small room.',
          'Knee clearance. A thick trestle beam in the center is a daily apology.',
          'The floor. A wheeled task chair on a thick rug becomes a shove. A hard floor needs a mat, not a new chair.',
          'Cable path. If the only route is over the back edge, you will see the cable in every call.',
          'Whether you stand. Buy a lift desk if you stand on real afternoons. Do not buy one as a personality.',
        ],
      },
      {
        type: 'h2',
        text: 'The pieces around the top',
      },
      {
        type: 'p',
        text: 'The grey chair in the photograph is the work seat. The oak swivel we keep on the bench is a second chair: a guest, a contract, a phone call. They are not substitutes. The graphite floor lamp belongs behind the screen, throwing light at the wall, not onto the panel. A tripod shade on the desktop, like the one in the small room, is fine until it fights the display for depth.',
      },
      {
        type: 'quote',
        text: 'Stability first. A top that nods when you type will exhaust you faster than the wrong color.',
        cite: 'Buying desk, February 2026',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'For a single workstation in a real room, the trestle top is the pick. Add a lift column only after you have counted the hours you stand. The lamp and the lounge chair are supporting pieces, and both have their own notes on the bench.',
      },
    ],
  },
  {
    slug: 'all-in-one-shared-studio',
    title: 'The all-in-one that made a shared studio look finished',
    dek: 'One quiet display on a white desk removed a tower, a nest of cables, and the argument about whose dongle was in the drawer.',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    date: '2026-01-08',
    image: '/images/monitor.jpg',
    imageAlt: 'White all-in-one computer centered on a white desk with a slim keyboard',
    author: 'Bench Tester',
    tags: ['display', 'studio', 'cables', 'workspace'],
    productSlugs: ['studio-all-in-one'],
    body: [
      {
        type: 'p',
        text: 'Shared studios fail in the cables. A guest sits down, the adapter is missing, the tower fan starts its small weather system, and the desk looks like a project that never ended. The all-in-one we parked on the white bench ended that performance.',
      },
      {
        type: 'p',
        text: 'The photograph is almost empty, and that is the review. A dark panel, a pale chin, a keyboard, nothing else competing. People stop asking where the computer is. It is the display. For a room used by editors, buyers, and the occasional founder, that single fact is worth more than a brighter gaming panel.',
      },
      {
        type: 'image',
        src: '/images/monitor-detail.jpg',
        alt: 'Gaming desktop with a white tower, a wide monitor, RGB keyboard, and visible cables',
        caption: 'The other path: more panel, more light, more cable. Fine at home. Loud in a shared room.',
      },
      {
        type: 'h2',
        text: 'What improved, and what did not',
      },
      {
        type: 'ul',
        items: [
          'Setup time for a guest dropped to opening the lid of an account, not hunting a power brick.',
          'The panel is calm. It is not the screen you buy for color-critical retouching at midnight.',
          'There is no discrete tower to upgrade. When the machine ages, the whole object ages.',
          'The stand is fixed and centered. A monitor arm would be the wrong fantasy here; the point was fewer parts.',
        ],
      },
      {
        type: 'h2',
        text: 'Who it is for',
      },
      {
        type: 'p',
        text: 'Buy the all-in-one when the desk is a place several people must look competent in under a minute. Keep a tower when someone renders, games, or swaps parts for fun. The glowing machine in the second photograph is not a bad computer. It is a bad roommate for a buying desk.',
      },
      {
        type: 'quote',
        text: 'Fewer boxes beat a better spec sheet in every room we share.',
        cite: 'Studio walkthrough, January 2026',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Bench score 8.4 for shared rooms. The recommendation is the quiet all-in-one, not the loud tower. Read the bench note if you are choosing between a single object and a system you have to explain.',
      },
    ],
  },
  {
    slug: 'open-floor-headphones',
    title: 'Six weeks in closed-back headphones on an open floor',
    dek: 'A black pair with thick pads kept the neighboring keyboard out of the copy. A metal-and-leather wired pair stayed on the desk for calls, because Bluetooth is a mood.',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    date: '2025-11-18',
    image: '/images/headphones.jpg',
    imageAlt: 'Black over-ear headphones on a bright yellow background',
    author: 'Bench Tester',
    tags: ['headphones', 'audio', 'office', 'focus'],
    productSlugs: ['closed-back-headphones'],
    body: [
      {
        type: 'p',
        text: 'Open floors are honest about noise and dishonest about concentration. You can see everyone, which some people call culture, and you can hear a mechanical keyboard two seats away, which nobody calls anything. We wore the black closed-back pair for six weeks and kept a log that was mostly about our shoulders.',
      },
      {
        type: 'p',
        text: 'The pads are thick, the clamp is present, and the seal is the feature. Voices drop. The yellow beauty shot makes them look like a product. On a head, for a long afternoon, they feel like a small room. That is the compliment.',
      },
      {
        type: 'image',
        src: '/images/headphones-detail.jpg',
        alt: 'Silver and brown wired headphones with leather pads resting on a pale surface',
        caption: 'The wired pair we still trust when a call cannot depend on a battery.',
      },
      {
        type: 'h2',
        text: 'What six weeks changed',
      },
      {
        type: 'ul',
        items: [
          'Keyboard chatter from the next desk became a texture, not a transcript.',
          'The clamp mark faded after week two. Week one was a negotiation.',
          'Wireless was right for walking to the kettle. It was wrong for a client call with 9 percent battery.',
          'The wired metal pair has less isolation and more charm. We use it when the room is already quiet.',
        ],
      },
      {
        type: 'h2',
        text: 'How to choose',
      },
      {
        type: 'p',
        text: 'If your floor is open and your work is language, buy closed-back and accept the clamp. If you live on calls, keep a wired pair in the drawer so a dead battery is not a crisis. Open-back headphones are a pleasure at home and a leak on a shared floor. We do not recommend them for this room.',
      },
      {
        type: 'quote',
        text: 'Silence, here, is a courtesy you manufacture yourself.',
        cite: 'Field note, November 2025',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'The black pair is the bench pick for open floors. Score 8.7. The silver wired pair is the backup, not the rival. Both notes live on the product page.',
      },
    ],
  },
  {
    slug: 'figma-penpot-vendor-handoffs',
    title: 'Figma, Penpot, and the handoff that still needs a sample',
    dek: 'A tablet full of color studies is not a swatch book. We compared two design platforms by the moment a buyer has to trust a physical sample.',
    category: 'Platform Picks',
    categorySlug: 'platform-picks',
    date: '2025-09-22',
    image: '/images/design.jpg',
    imageAlt: 'Color swatches, a printed palette book, and a tablet of color studies on a dark desk',
    author: 'Platform Editor',
    tags: ['figma', 'penpot', 'design', 'handoff'],
    productSlugs: [],
    body: [
      {
        type: 'p',
        text: 'The desk in the photograph is doing the real handoff. Printed chips, a fan of color, a tablet with soft shapes and penciled notes. Software can organize that mess. It cannot retire it. A vendor still sends a finish, a fabric, a paint, and somebody still has to hold it next to the screen.',
      },
      {
        type: 'p',
        text: 'We ran the same packaging study through Figma and Penpot for a month. The question was not which tool has more plugins. The question was which file a buyer, a founder, and a supplier could open without a ceremony.',
      },
      {
        type: 'h2',
        text: 'What each platform is for',
      },
      {
        type: 'ul',
        items: [
          'Figma, if the team already lives there. Comments, branches, and the inspector are the shortest path from a frame to a decision.',
          'Penpot, if the file has to stay open, self-hosted, or readable in five years without a seat fee surprise.',
          'Neither, if the only source of truth is a slide. Slides are where color goes to become a suggestion.',
          'Always a physical sample when the object is physical. The tablet in the photo is a map, not the territory.',
        ],
      },
      {
        type: 'h2',
        text: 'The failure we kept seeing',
      },
      {
        type: 'p',
        text: 'Handoffs broke when the file named a color and the sample was a different color, and nobody had written the sentence that says which one wins. Put that sentence in the file. “The chip wins. The screen is a reminder.” Teams that skip the sentence will argue in both platforms with equal skill.',
      },
      {
        type: 'quote',
        text: 'A platform does not make a sample true. It makes the disagreement easier to find.',
        cite: 'Design desk, September 2025',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Stay in Figma if that is where the work already happens. Move the archive to Penpot when ownership of the file matters more than the convenience of the cloud. Keep the swatch book on the desk either way.',
      },
    ],
  },
  {
    slug: 'mechanical-keyboards-worth-keeping',
    title: 'Mechanical keyboards worth buying once',
    dek: 'A compact board with a wooden rest, and a closer look at the switch sitting beside it. The point of a mechanical keyboard is to stop shopping for keyboards.',
    category: 'Buying Guides',
    categorySlug: 'buying-guides',
    date: '2025-08-06',
    image: '/images/keyboard-mech-2.jpg',
    imageAlt: 'Compact mechanical keyboard with a wooden wrist rest on a grey desk, glasses beside it',
    author: 'Desk Editor',
    tags: ['keyboard', 'mechanical', 'buying guide', 'desk'],
    productSlugs: ['compact-mechanical-board'],
    body: [
      {
        type: 'p',
        text: 'Most keyboard shopping is a loop. A switch sounds interesting on a video, arrives brighter than the room can bear, and goes into a drawer under the spare cables. We wanted one board a person could keep for years: compact, repairable, and quiet enough for a call.',
      },
      {
        type: 'p',
        text: 'The board on the grey mat is the one that stayed. A short layout, a wooden rest that actually meets the heel of the hand, dark alphas, and a few red and cream modifiers. It looks like an instrument, not a toy, which matters at 4 p.m. when you are tired of objects that wink at you.',
      },
      {
        type: 'image',
        src: '/images/keyboard-mech.jpg',
        alt: 'Close-up of a mechanical keyboard with colorful modifier keys and a loose switch beside it',
        caption: 'If the switch comes out, the board can change its mind without becoming trash.',
      },
      {
        type: 'h2',
        text: 'Buy these properties, not a trend',
      },
      {
        type: 'ul',
        items: [
          'Hot-swap, so a tired switch is a part, not a funeral.',
          'A layout you can explain to a guest. Compact is good. Missing arrows are a hobby.',
          'A rest or a typing angle that does not ask your wrists to hover.',
          'Sound that is a thud, not a castanet. Open floors have neighbors.',
          'Keycaps that can be replaced when a legend wears off. Shine is a calendar.',
        ],
      },
      {
        type: 'h2',
        text: 'What we would not buy again',
      },
      {
        type: 'p',
        text: 'A full-size board with a number pad, unless the work is numbers. A board that needs three pieces of software to type a sentence. Any switch so light that a resting finger sends mail. The loose switch in the detail shot is a reminder: the interesting part is small, and it should be allowed to leave.',
      },
      {
        type: 'quote',
        text: 'The right keyboard is the one you forget to research.',
        cite: 'Buying desk, August 2025',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Buy the compact hot-swap board once, with a rest, and stop. The bench piece is that object. Score 8.8, mostly for being finished.',
      },
    ],
  },
  {
    slug: 'five-checks-from-the-shop-floor',
    title: 'Five checks we take from a shop floor to a marketplace',
    dek: 'A well-lit room of goods is an argument about taste. A marketplace hides that argument. We wrote down what the room makes obvious and what the tab conceals.',
    category: 'Field Notes',
    categorySlug: 'field-notes',
    date: '2025-06-19',
    image: '/images/market.jpg',
    imageAlt: 'Independent clothing shop with wooden tables, hanging garments, bags, and warm pendant lights',
    author: 'Desk Editor',
    tags: ['marketplaces', 'retail', 'procurement', 'field notes'],
    productSlugs: [],
    body: [
      {
        type: 'p',
        text: 'The shop in the photograph has already done the edit. Tables, a rail, a few bags, light that tells the truth about color. You can see what the buyer believed in, because the rest was left out. A marketplace tab does the opposite. It shows everything, then calls the everything a choice.',
      },
      {
        type: 'p',
        text: 'We spent June walking floors and then opening the same categories online. The point was not nostalgia for shops. The point was a checklist a remote buying desk can use when there is no floor to stand on.',
      },
      {
        type: 'h2',
        text: 'Five checks',
      },
      {
        type: 'ul',
        items: [
          'Who holds the stock. A listing is not inventory. Ask where the replacement ships from, and how many exist today.',
          'The return window, in days, and who pays the second journey. “Easy returns” is not a policy.',
          'Parts. A kettle, a chair, and a keyboard all fail in small ways first. If there is no spare, you bought a sculpture.',
          'Photo honesty. If every angle is a render, assume the seam, the cable, and the texture are worse.',
          'Who answers after the sale. A marketplace message queue is not a workshop.',
        ],
      },
      {
        type: 'h2',
        text: 'What the room adds',
      },
      {
        type: 'p',
        text: 'On a floor you notice the edit, the light, and the thing they were willing to put at eye level. Online, recreate the edit yourself. Open four listings, close three, and write why the fourth survived. If you cannot write the sentence, you are scrolling, not buying.',
      },
      {
        type: 'quote',
        text: 'A marketplace will sell you the rail and the leftovers in the same grid.',
        cite: 'Field note, June 2025',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Use shops to train your eye, and marketplaces to extend your reach. Do not confuse a grid of products with a point of view. The five checks are the whole method.',
      },
    ],
  },
  {
    slug: 'pour-over-that-stayed',
    title: 'The pour-over kit that outlasted office coffee trends',
    dek: 'A matte gooseneck, a red cone, and a glass server. Next to it, the carafe brewer we still like and do not need every morning.',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    date: '2025-05-14',
    image: '/images/gooseneck.jpg',
    imageAlt: 'Matte dark gooseneck kettle pouring over a red cone dripper into a glass server',
    author: 'Bench Tester',
    tags: ['coffee', 'pour-over', 'kitchen', 'kettle'],
    productSlugs: ['cone-pourover-set'],
    body: [
      {
        type: 'p',
        text: 'Office coffee goes through eras. Pods, a chrome machine nobody descales, a subscription that tastes like a newsletter. The kit that stayed is almost plain: a matte gooseneck, a red cone dripper, and a glass server with marks you can actually read.',
      },
      {
        type: 'p',
        text: 'The pour in the photograph is the whole product. A narrow stream, a still cone, a server that does not hide the coffee. It takes four minutes. Those four minutes replaced a machine that took a counter and a technician.',
      },
      {
        type: 'image',
        src: '/images/coffee.jpg',
        alt: 'Gooseneck kettle pouring into a glass carafe brewer on a cafe counter',
        caption: 'The carafe brewer is a pleasure. The cone is the one we set out on a Tuesday.',
      },
      {
        type: 'h2',
        text: 'What earned the shelf',
      },
      {
        type: 'ul',
        items: [
          'The spout aims. A kitchen kettle with a wide mouth drowns the grounds and calls it coffee.',
          'The cone is one part to rinse. The carafe brewer is lovely and fussier before a 9 a.m. call.',
          'Paper filters make the cleanup a bin, not a brush.',
          'The server holds enough for two cups. It does not hold a meeting.',
        ],
      },
      {
        type: 'h2',
        text: 'What it will not do',
      },
      {
        type: 'p',
        text: 'It will not steam milk. It will not remember your name. It will not rescue bad water. If the studio water tastes of the pipes, start there, not with a more expensive cone. The retro counter kettle on the bench can boil for tea; it is the wrong pour for this dripper. Keep both jobs separate.',
      },
      {
        type: 'quote',
        text: 'Four quiet minutes beat a machine that needs a service contract.',
        cite: 'Kitchen note, May 2025',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Buy the cone, the server, and a kettle with a narrow spout. Score 9.0, the highest on the bench, because it stayed after the novelty left. The carafe is optional theater.',
      },
    ],
  },
  {
    slug: 'notion-coda-vendor-truth',
    title: 'Notion, Coda, and the work of keeping vendor truth',
    dek: 'A document open on a laptop, and a pen that still does the first draft. The platform matters less than the sentence you are willing to maintain.',
    category: 'Platform Picks',
    categorySlug: 'platform-picks',
    date: '2025-04-11',
    image: '/images/docs-detail.jpg',
    imageAlt: 'Hands typing on a laptop with a document open, a monitor blurred behind',
    author: 'Platform Editor',
    tags: ['notion', 'coda', 'documentation', 'vendors'],
    productSlugs: [],
    body: [
      {
        type: 'p',
        text: 'Vendor truth is a dull phrase for a useful object: the page that says what we bought, what it cost, who uses it, and whether we would buy it again. Most teams have this page in three tools and none of them agree. We spent the spring putting one desk’s truth into Notion, and another into Coda, and watched which one survived a busy month.',
      },
      {
        type: 'p',
        text: 'The photograph is someone actually writing. That is rarer than a template gallery. A second photograph, the pen on ruled paper, is the habit underneath the software. If nobody will write the sentence by hand, no block menu will write it for them.',
      },
      {
        type: 'image',
        src: '/images/docs.jpg',
        alt: 'Fountain pen nib writing a line on cream paper',
        caption: 'The decision still starts as a sentence. The tool only has to keep it.',
      },
      {
        type: 'h2',
        text: 'How the two platforms behaved',
      },
      {
        type: 'ul',
        items: [
          'Notion was faster to start. A page, a table of vendors, a template for the review. People understood it by lunch.',
          'Coda was stronger once the table had to calculate. Renewals, seat counts, a button that assembled a monthly note.',
          'Both became graveyards when the owner left and the page had no named successor.',
          'Both were fine. The page that won was the one a human opened on Monday without being asked.',
        ],
      },
      {
        type: 'h2',
        text: 'The rule we kept',
      },
      {
        type: 'p',
        text: 'One system of record. Link out to the contract folder, the design file, the issue tracker. Do not paste the same price into four tools and call it a stack. Notion if the culture is writing. Coda if the culture is a table that should do math. Refuse a third wiki because a new tool feels like progress.',
      },
      {
        type: 'quote',
        text: 'A platform is a shelf. Vendor truth is the thing you are willing to dust.',
        cite: 'Docs desk, April 2025',
      },
      {
        type: 'h2',
        text: 'Verdict',
      },
      {
        type: 'p',
        text: 'Pick Notion for a writing desk. Pick Coda when renewals and counts are the work. Write the sentence before you invite the team. The pen is not a metaphor. It is how you find out whether you have anything to store.',
      },
    ],
  },
];
