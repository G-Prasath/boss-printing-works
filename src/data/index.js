// ── Hero Slides (full-width image bg via Unsplash) ────────────────────────────
export const SLIDES = [
  {
    num:   '01',
    cat:   'FLEX PRINTING',
    title: 'Premium Print',
    em:    'Excellence',
    sub:   'Wedding banners, political flex, photo frames — vibrant prints with lightning-fast turnaround.',
    img:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop',
    ac:    '#e8006f',
  },
  {
    num:   '02',
    cat:   'DIGITAL ARTS',
    title: 'Creative',
    em:    'Design Studio',
    sub:   'From concept to creation — stunning digital artwork that captures your brand\'s true essence.',
    img:   'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80&fit=crop',
    ac:    '#00b4d8',
  },
  {
    num:   '03',
    cat:   'VISION & SPACE',
    title: 'Interior',
    em:    'Flow',
    sub:   'Harmonising space and light to create immersive, unforgettable visual environments.',
    img:   'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop',
    ac:    '#f4a261',
  },
]

// ── How It Works Steps ────────────────────────────────────────────────────────
export const STEPS = [
  { icon:'📋', n:'01', title:'Share Your Vision',  body:'Tell us your requirements — banner size, design concept, occasion, or any special creative direction.' },
  { icon:'🎨', n:'02', title:'Design & Review',    body:'Our team crafts a precise proof. Review, request revisions, and approve with total confidence.' },
  { icon:'🖨️', n:'03', title:'Print & Produce',   body:'Premium materials and state-of-the-art technology ensure flawless, vibrant results every time.' },
  { icon:'🚚', n:'04', title:'Fast Delivery',      body:'Quick turnaround and on-time delivery — your prints arrive ready to dazzle every audience.' },
]

// ── Services ──────────────────────────────────────────────────────────────────
export const SVCS = [
  { em:'💒', grad:'from-rose-900/50 to-pink-950/60',     title:'Wedding Banners',    desc:'Stunning custom banners and backdrops that set the perfect romantic stage.',         tag:'Flex Print' },
  { em:'🗳️', grad:'from-blue-900/50 to-indigo-950/60',  title:'Political Flex',      desc:'Eye-catching campaign materials that make your message bold and unmissable.',        tag:'Campaign'   },
  { em:'🖼️', grad:'from-violet-900/50 to-purple-950/60',title:'Custom Photo Frames', desc:'Premium frames in any size — the perfect keepsake for precious memories.',          tag:'Frames'     },
  { em:'🤖', grad:'from-cyan-900/50 to-teal-950/60',    title:'AI-Powered Design',   desc:'Smarter design workflows crafted with artificial intelligence for modern brands.',  tag:'AI Design'  },
  { em:'🎴', grad:'from-amber-900/50 to-orange-950/60', title:'Visiting Cards',       desc:'Sharp, professional cards that leave a lasting impression at every interaction.',   tag:'Branding'   },
  { em:'🎊', grad:'from-emerald-900/50 to-green-950/60',title:'Event Standees',       desc:'Life-size standees and cut-outs that elevate your events with premium quality.',   tag:'Events'     },
]

// ── Gallery ───────────────────────────────────────────────────────────────────
export const GAL_TABS = ['All', 'Wedding', 'Flex', 'Banner', 'Frames']

export const GAL = [
  {
    em: '💒',
    g:  'from-rose-800 to-pink-600',
    img:'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop',
    tabs:['All','Wedding'],
    lbl:'Wedding Backdrop',
  },
  {
    em: '🌅',
    g:  'from-amber-700 to-orange-500',
    img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop',
    tabs:['All','Banner'],
    lbl:'Outdoor Banner',
  },
  {
    em: '🗳️',
    g:  'from-blue-800 to-indigo-600',
    img:'https://images.unsplash.com/photo-1541450805268-4822a3a774ca?w=800&q=80&fit=crop',
    tabs:['All','Flex'],
    lbl:'Political Flex',
  },
  {
    em: '🖼️',
    g:  'from-violet-800 to-purple-600',
    img:'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80&fit=crop',
    tabs:['All','Frames'],
    lbl:'Photo Frame',
  },
  {
    em: '🎊',
    g:  'from-rose-700 to-fuchsia-600',
    img:'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&fit=crop',
    tabs:['All','Wedding'],
    lbl:'Anniversary Print',
  },
  {
    em: '📜',
    g:  'from-teal-700 to-cyan-500',
    img:'https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?w=800&q=80&fit=crop',
    tabs:['All','Banner'],
    lbl:'Event Banner',
  },
]

// ── Nav Links ─────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  ['Home',         'home'],
  ['About',        'about'],
  ['How It Works', 'how'],
  ['Services',     'services'],
  ['Gallery',      'gallery'],
  ['Contact',      'contact'],
]

// ── Contact Details ───────────────────────────────────────────────────────────
export const CONTACT_DETAILS = [
  { icon:'📞', lbl:'Phone',     val:'+91 90925 51753' },
  { icon:'✉️', lbl:'Email',     val:'yourmail@gmail.com' },
  { icon:'📍', lbl:'Address',   val:'Manalmedu, Mayiladuthurai, Tamil Nadu' },
  { icon:'📸', lbl:'Instagram', val:'@bossmediaprint' },
]

// ── Footer Columns ────────────────────────────────────────────────────────────
export const FOOTER_COLS = [
  {
    h: 'Quick Links',
    links: [['Home','home'],['About Us','about'],['Services','services'],['Gallery','gallery'],['Contact','contact']],
  },
  {
    h: 'Services',
    links: [['Wedding Banners','services'],['Political Flex','services'],['Photo Frames','services'],['Visiting Cards','services'],['Event Standees','services']],
  },
  {
    h: 'Contact',
    links: [['+91 90925 51753','contact'],['yourmail@gmail.com','contact'],['Mayiladuthurai, TN','contact']],
  },
]

// ── About Stats ───────────────────────────────────────────────────────────────
export const ABOUT_STATS = [
  ['500+', 'Clients'],
  ['1K+',  'Projects'],
  ['24hr', 'Delivery'],
  ['100%', 'Quality'],
]

// ── Socials ───────────────────────────────────────────────────────────────────
export const SOCIALS = ['📘', '📸', '🐦', '▶️']
