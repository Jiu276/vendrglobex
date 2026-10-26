/**
 * 试验台上的产品。每件都有图片、规格和测评正文。
 */

/** @type {import('@/lib/content').Product[]} */
export const products = [
  {
    slug: 'retro-variable-kettle',
    name: 'Retro Variable Kettle',
    category: 'Kitchen',
    categorySlug: 'kitchen',
    date: '2026-05-12',
    price: '$120–$180',
    score: '8.6',
    summary: 'A glossy black counter kettle with a temperature dial and a chrome handle. It boils with intent, and it asks for a corner of its own.',
    image: '/images/kettle.jpg',
    imageAlt: 'Black retro electric kettle with chrome handle and temperature marks on a stone counter',
    images: [
      {
        src: '/images/kettle.jpg',
        alt: 'Black retro electric kettle steaming beside a kitchen window',
        caption: 'The dial and the chrome collar are the whole interface.',
      },
      {
        src: '/images/kettle-detail.jpg',
        alt: 'Small blue kettle in a compact white kitchen',
        caption: 'If the counter looks like this, buy smaller.',
      },
    ],
    specs: [
      { label: 'Form', value: 'Retro counter kettle' },
      { label: 'Control', value: 'Variable temperature dial' },
      { label: 'Handle', value: 'Chrome, warm near the lid' },
      { label: 'Best for', value: 'Daily tea and ordinary boiling' },
      { label: 'Not for', value: 'Travel or a narrow coffee pour' },
    ],
    pros: [
      'Temperature is a physical setting, not a menu.',
      'The base seats with a click you can trust.',
      'It looks decided, which matters in a studio people visit.',
    ],
    cons: [
      'The footprint is a commitment in a small kitchen.',
      'The spout is too wide for pour-over.',
    ],
    articleSlug: 'retro-kettle-studio-kitchen',
    body: [
      {
        type: 'p',
        text: 'We kept this kettle because the morning stopped being a guess. Turn the collar, wait, pour. The steam against the window is a side effect, not a feature list, but it does make the kitchen feel occupied in a way a hidden jug never did.',
      },
      {
        type: 'p',
        text: 'The chrome handle is the compromise. It looks like the reason to buy the object, and it runs warm if you grab it high. Use the lower part of the grip. Wipe the collar. Do not crowd it against a wall, or the gloss will show every splash.',
      },
      {
        type: 'h2',
        text: 'How we tested it',
      },
      {
        type: 'p',
        text: 'Four months of ordinary use: tea before calls, water for washing filters, the occasional instant coffee we are not proud of. We did not time boils with a laboratory clock. We noticed whether anyone reached for the saucepan instead. They did not.',
      },
      {
        type: 'p',
        text: 'Pair it with the cone pour-over only if you accept a clumsy stream. Better: keep this kettle for the kitchen at large, and keep a gooseneck for coffee. Two jobs, two spouts.',
      },
    ],
  },
  {
    slug: 'trestle-work-desk',
    name: 'Trestle Work Desk',
    category: 'Workspace',
    categorySlug: 'workspace',
    date: '2026-02-14',
    price: '$480–$760',
    score: '8.5',
    summary: 'A pale trestle top for a real room: deep enough for a display and a notebook, stable enough that the typing does not nod.',
    image: '/images/desk.jpg',
    imageAlt: 'Pale wood trestle desk with a black mat, display, and grey task chair in a small white room',
    images: [
      {
        src: '/images/desk.jpg',
        alt: 'Trestle desk workstation beside a window with a plant and grey chair',
        caption: 'A spare room is a better test than a showroom.',
      },
      {
        src: '/images/desk-detail.jpg',
        alt: 'Glass office corridor with pendant lights and a floor lamp',
        caption: 'Ignore hallways. They are not workstations.',
      },
    ],
    specs: [
      { label: 'Form', value: 'Fixed trestle desk' },
      { label: 'Top', value: 'Pale, matte, deep enough for a display' },
      { label: 'Storage', value: 'Open shelf under the top' },
      { label: 'Best for', value: 'A single seated workstation' },
      { label: 'Not for', value: 'People who truly stand half the day' },
    ],
    pros: [
      'The top stays still when you type.',
      'The shelf holds the books and boxes that otherwise become clutter.',
      'It fits a small room without a motor or a manual.',
    ],
    cons: [
      'No lift. Standing is a different purchase.',
      'A thick center beam would ruin it; check knee clearance in person.',
    ],
    articleSlug: 'work-desk-shortlist',
    body: [
      {
        type: 'p',
        text: 'This is the desk in the small white room, not the desk in the brochure. A pale top, sawhorse legs, a shelf, a black mat so the keyboard has a territory. The grey task chair beside it is the work seat. Do not replace that chair with a lounge chair and call the setup ergonomic.',
      },
      {
        type: 'p',
        text: 'We recommend it when the room is ordinary and the work is seated. Measure the wall before you fall for the length. Leave a path for cables behind the shelf. If you stand for real hours, skip the trestle and buy a lift desk with the same discipline about depth.',
      },
      {
        type: 'h2',
        text: 'Around it',
      },
      {
        type: 'p',
        text: 'The graphite floor lamp belongs off the top, behind you, so the desktop can hold the display. A small tripod lamp on the surface, like the one in the photograph, is acceptable until it steals depth from the keyboard. The oak swivel is the guest seat in the corner, not the eight-hour chair.',
      },
    ],
  },
  {
    slug: 'studio-all-in-one',
    name: 'Studio All-in-one',
    category: 'Computing',
    categorySlug: 'computing',
    date: '2026-01-08',
    price: '$1,100–$1,800',
    score: '8.4',
    summary: 'One panel, one stand, almost no cable. The right computer for a desk that several people have to use without a tour.',
    image: '/images/monitor.jpg',
    imageAlt: 'White all-in-one desktop computer on a clean white desk',
    images: [
      {
        src: '/images/monitor.jpg',
        alt: 'All-in-one computer centered on an empty white desk',
        caption: 'The emptiness is the feature.',
      },
      {
        src: '/images/monitor-detail.jpg',
        alt: 'White gaming tower beside a wide monitor with RGB keyboard and cables',
        caption: 'Choose this only if someone in the room truly needs the tower.',
      },
    ],
    specs: [
      { label: 'Form', value: 'All-in-one display and computer' },
      { label: 'Stand', value: 'Fixed center stand' },
      { label: 'Cable count', value: 'Power, and little else' },
      { label: 'Best for', value: 'Shared studios and guest desks' },
      { label: 'Not for', value: 'Heavy rendering or part-swapping' },
    ],
    pros: [
      'A guest can sit down without a diagram.',
      'The desk reads as finished in photographs and in life.',
      'Noise drops because there is no separate tower.',
    ],
    cons: [
      'You do not upgrade it. You replace it.',
      'Color work at a professional grade wants a different panel.',
    ],
    articleSlug: 'all-in-one-shared-studio',
    body: [
      {
        type: 'p',
        text: 'We put the all-in-one on the shared bench and stopped apologizing for the desk. The white chin, the dark glass, the keyboard lined up beneath it: the arrangement is almost severe, and that severity is kind. Nobody has to ask which cable is the display.',
      },
      {
        type: 'p',
        text: 'The alternative photograph is a good computer having a loud day. Tower, light bar, RGB keyboard, cables across the mat. Keep that at home if it makes you happy. Do not ask a client to pretend it is calm.',
      },
      {
        type: 'h2',
        text: 'The recommendation',
      },
      {
        type: 'p',
        text: 'Buy the single object when the desk is shared and the work is writing, browsing, calls, and light editing. Spend the money you saved on cables on a better chair. The machine is not the posture.',
      },
    ],
  },
  {
    slug: 'closed-back-headphones',
    name: 'Closed-back Headphones',
    category: 'Audio',
    categorySlug: 'audio',
    date: '2025-11-18',
    price: '$180–$320',
    score: '8.7',
    summary: 'Black, padded, and sealed enough for an open floor. Six weeks of neighboring keyboards became background.',
    image: '/images/headphones.jpg',
    imageAlt: 'Black over-ear closed-back headphones on a yellow background',
    images: [
      {
        src: '/images/headphones.jpg',
        alt: 'Black over-ear headphones photographed on yellow',
        caption: 'The pair we wore on the open floor.',
      },
      {
        src: '/images/headphones-detail.jpg',
        alt: 'Silver and tan wired on-ear headphones',
        caption: 'Keep a wired pair for calls that cannot miss.',
      },
    ],
    specs: [
      { label: 'Form', value: 'Closed-back over-ear' },
      { label: 'Seal', value: 'Strong enough for a shared floor' },
      { label: 'Clamp', value: 'Noticeable in week one, settled after' },
      { label: 'Best for', value: 'Writing beside other people' },
      { label: 'Backup', value: 'A wired metal pair for calls' },
    ],
    pros: [
      'Keyboard noise drops without shutting the office out entirely.',
      'The pads survived six weeks of daily wear.',
      'They look plain, which means you will still wear them in a meeting.',
    ],
    cons: [
      'The first week clamps. Try them on a long call before you commit.',
      'Wireless still dies at the worst minute. Keep a cable or a second pair.',
    ],
    articleSlug: 'open-floor-headphones',
    body: [
      {
        type: 'p',
        text: 'These are the black pair from the yellow photograph, worn rather than styled. The job was simple: make an open floor usable for sentences. They did it. Voices remained voices. The mechanical keyboard two seats down stopped being readable.',
      },
      {
        type: 'p',
        text: 'We do not pretend they are a studio reference. The silver-and-leather wired pair is lighter, prettier, and worse at isolation. It stays in the drawer for quiet afternoons and for any call where a battery icon would be a risk. Recommend the black pair as the daily tool, and the wired pair as the spare.',
      },
      {
        type: 'h2',
        text: 'Fit',
      },
      {
        type: 'p',
        text: 'If your jaw sets when you put a headphone on, this clamp will annoy you. Wear them for an hour in the shop, then walk up stairs. The right pair disappears. The wrong pair becomes the subject of the afternoon.',
      },
    ],
  },
  {
    slug: 'compact-mechanical-board',
    name: 'Compact Mechanical Board',
    category: 'Computing',
    categorySlug: 'computing',
    date: '2025-08-06',
    price: '$140–$260',
    score: '8.8',
    summary: 'A short hot-swap board with a wooden rest. Built so you can change a switch and then stop shopping.',
    image: '/images/keyboard-mech-2.jpg',
    imageAlt: 'Low compact mechanical keyboard with a wooden wrist rest on a grey desk mat',
    images: [
      {
        src: '/images/keyboard-mech-2.jpg',
        alt: 'Mechanical keyboard with wooden wrist rest, glasses, and a monitor behind',
        caption: 'The rest meets the hand. That is the luxury.',
      },
      {
        src: '/images/keyboard-mech.jpg',
        alt: 'Mechanical keyboard close-up with a loose switch and colored modifier keys',
        caption: 'A switch you can remove is a switch you can forgive.',
      },
    ],
    specs: [
      { label: 'Layout', value: 'Compact, with a navigation cluster' },
      { label: 'Switches', value: 'Hot-swap, tactile, not feather-light' },
      { label: 'Rest', value: 'Wood, matched to the front lip' },
      { label: 'Sound', value: 'A thud, damped for a shared room' },
      { label: 'Best for', value: 'Daily writing on a real desk' },
    ],
    pros: [
      'One switch can be replaced without a new keyboard.',
      'The rest stops the wrist from hovering.',
      'It looks finished beside a notebook and a pair of glasses.',
    ],
    cons: [
      'No number pad. Spreadsheet-heavy days want a separate pad, not a bigger board.',
      'Very light linear switches will feel vague if you swap in the wrong part.',
    ],
    articleSlug: 'mechanical-keyboards-worth-keeping',
    body: [
      {
        type: 'p',
        text: 'The board we recommend is the one in profile on the grey mat: low, wooden at the front, dark where the letters are. It does not glow. A keyboard that glows is asking to be the subject. This one is asking to be used.',
      },
      {
        type: 'p',
        text: 'The detail shot is the service plan. A loose switch beside colored modifiers means the object can be maintained. Buy that property before you buy a limited keycap set. Caps are a costume. The switch is the tool.',
      },
      {
        type: 'h2',
        text: 'Sound and neighbors',
      },
      {
        type: 'p',
        text: 'In an open floor, a loud board is a tax on everyone else. Choose a tactile switch with a damped case, and put a mat under it. If you love a bright click, enjoy it at home. The bench pick is the quieter compact board.',
      },
    ],
  },
  {
    slug: 'cone-pourover-set',
    name: 'Cone Pour-over Set',
    category: 'Kitchen',
    categorySlug: 'kitchen',
    date: '2025-05-14',
    price: '$45–$90',
    score: '9.0',
    summary: 'Matte gooseneck, red cone, glass server. Four minutes, no service contract, and better coffee than the machine it replaced.',
    image: '/images/gooseneck.jpg',
    imageAlt: 'Hand pouring from a matte gooseneck kettle into a red cone dripper on a glass server',
    images: [
      {
        src: '/images/gooseneck.jpg',
        alt: 'Matte gooseneck kettle above a red cone dripper and glass coffee server',
        caption: 'This is the Tuesday kit.',
      },
      {
        src: '/images/coffee.jpg',
        alt: 'Gooseneck kettle pouring into a glass carafe coffee brewer',
        caption: 'The carafe is the weekend version.',
      },
    ],
    specs: [
      { label: 'Brewer', value: 'Cone dripper and glass server' },
      { label: 'Kettle', value: 'Matte gooseneck with a narrow spout' },
      { label: 'Time', value: 'About four minutes' },
      { label: 'Yield', value: 'Two cups, not a meeting' },
      { label: 'Cleanup', value: 'Rinse the cone, bin the paper' },
    ],
    pros: [
      'The spout aims. Extraction stops being an accident.',
      'Almost nothing to descale, service, or explain.',
      'It still felt worth doing after the novelty ended.',
    ],
    cons: [
      'No milk, no preset, no volume for a large standup.',
      'Bad water still tastes like bad water.',
    ],
    articleSlug: 'pour-over-that-stayed',
    body: [
      {
        type: 'p',
        text: 'The set is three objects that agree with each other. The kettle pours a thread, the red cone holds the grounds still, and the glass server shows you what you made. We have owned louder coffee equipment. None of it was still in daily use a year later.',
      },
      {
        type: 'p',
        text: 'The second photograph is a carafe brewer, which we like and do not set out on a busy morning. It is a slower ritual with a wooden collar and a fussy filter. Keep it if you enjoy the ceremony. Recommend the cone if the goal is a good cup before work.',
      },
      {
        type: 'h2',
        text: 'A small warning',
      },
      {
        type: 'p',
        text: 'Do not pour from a wide-mouth counter kettle and blame the coffee. The retro kettle on this bench is for tea and boiling. This spout is for the cone. The separation is the recommendation.',
      },
    ],
  },
  {
    slug: 'graphite-floor-lamp',
    name: 'Graphite Floor Lamp',
    category: 'Workspace',
    categorySlug: 'workspace',
    date: '2025-12-02',
    price: '$150–$240',
    score: '8.2',
    summary: 'A matte graphite floor lamp with a deep dome shade. It lights the wall beside the desk instead of glaring into the panel.',
    image: '/images/lamp.jpg',
    imageAlt: 'Matte grey floor lamp with an adjustable dome shade against a white wall',
    images: [
      {
        src: '/images/lamp.jpg',
        alt: 'Graphite floor lamp with a large dome shade and a visible hinge',
        caption: 'Aim the dome at the wall, not at the screen.',
      },
    ],
    specs: [
      { label: 'Form', value: 'Floor task lamp' },
      { label: 'Finish', value: 'Matte graphite' },
      { label: 'Shade', value: 'Deep dome, hinged' },
      { label: 'Placement', value: 'Behind and beside the desk' },
      { label: 'Not for', value: 'Clamping onto a crowded monitor arm' },
    ],
    pros: [
      'The light pool is wide and low-drama.',
      'The hinge holds an angle without a tool.',
      'It frees the desktop from another stem.',
    ],
    cons: [
      'It needs floor space beside the chair.',
      'A bare bulb in that dome will glare. Use a diffused lamp.',
    ],
    articleSlug: 'work-desk-shortlist',
    body: [
      {
        type: 'p',
        text: 'The lamp is a single graphite line and a heavy dome, photographed against a blank wall because that is how it should be judged: by the light it throws, not by a lifestyle cluttered around it. In the studio we stand it behind the editor’s left shoulder. The dome faces the wall. The screen stays dark around the edges, which is what you want.',
      },
      {
        type: 'p',
        text: 'A small shade on the desk, the kind sitting behind the display in our trestle-desk photograph, is easier to buy and worse to live with once the top is full. This floor lamp costs a square of floor and returns the desktop.',
      },
      {
        type: 'h2',
        text: 'Bulb and aim',
      },
      {
        type: 'p',
        text: 'Use a warm diffused bulb. A clear decorative bulb in a dome this deep is a spotlight, and spotlights belong in shops. Aim past the display. If you can see the bulb in the corner of your eye, turn the hinge. The joint is the product.',
      },
    ],
  },
  {
    slug: 'oak-swivel-chair',
    name: 'Oak Swivel Chair',
    category: 'Workspace',
    categorySlug: 'workspace',
    date: '2026-04-18',
    price: '$420–$680',
    score: '8.1',
    summary: 'A beige lounge-height swivel on an oak star base. The second seat in the room: a guest, a contract, a long phone call. Not the all-day task chair.',
    image: '/images/chair.jpg',
    imageAlt: 'Beige upholstered swivel chair with a light oak star base on a grey rug',
    images: [
      {
        src: '/images/chair.jpg',
        alt: 'Textured beige lounge chair with a wooden star base',
        caption: 'A second seat, built to look calm and sit for an hour.',
      },
    ],
    specs: [
      { label: 'Form', value: 'Lounge swivel' },
      { label: 'Upholstery', value: 'Textured beige cloth' },
      { label: 'Base', value: 'Oak star, not a five-wheel task base' },
      { label: 'Best for', value: 'Reading, guests, calls under an hour' },
      { label: 'Not for', value: 'An eight-hour typing day' },
    ],
    pros: [
      'The base is a piece of furniture, not a mechanism on display.',
      'The cloth hides the life of a studio better than pale leather.',
      'It turns, so a conversation does not require dragging a chair.',
    ],
    cons: [
      'No adjustable lumbar, no arms, no wheel. That is the point and the limit.',
      'A thick rug plus this base can feel less stable than it looks.',
    ],
    articleSlug: 'work-desk-shortlist',
    body: [
      {
        type: 'p',
        text: 'This chair is the one in the quiet photograph: a scooped beige seat, a metal hub, four oak legs making a star. It is lower than a task chair and kinder to a person who is reading. We use it for vendor calls, for a guest reviewing samples, and for the hour after lunch when the desk chair feels like a decision we are tired of.',
      },
      {
        type: 'p',
        text: 'The grey wheeled chair beside the trestle desk remains the work seat. Replacing it with this swivel would be a design choice and a back complaint. Buy both roles honestly. A room that only has a lounge chair is a room that has not admitted it is an office.',
      },
      {
        type: 'h2',
        text: 'Cloth, not show leather',
      },
      {
        type: 'p',
        text: 'The textile is the correct finish for a studio. It does not glare on a call. It does not show a fingerprint. It will, eventually, show coffee, so keep the pour-over on the other side of the room. The oak will mark if you drag it. Lift it. The base is worth the small effort.',
      },
    ],
  },
];
