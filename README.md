# BOSS Media — Digital Printing & Arts

A production-ready single-page React + Vite website for **BOSS Media**, a premium digital printing studio based in Mayiladuthurai, Tamil Nadu.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## 🗂️ Project Structure

```
boss-media/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # One file per section/component
│   │   ├── index.js         # Barrel export
│   │   ├── Reveal.jsx       # Scroll-reveal animation wrapper
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Auto-sliding hero section
│   │   ├── About.jsx        # About / intro section
│   │   ├── HowItWorks.jsx   # 4-step process section
│   │   ├── Services.jsx     # Services grid with like toggle
│   │   ├── Gallery.jsx      # Filterable portfolio grid
│   │   ├── CTA.jsx          # Call-to-action banner
│   │   ├── Contact.jsx      # Enquiry form + contact info
│   │   ├── Footer.jsx       # Site footer
│   │   └── ScrollToTop.jsx  # Floating scroll-to-top button
│   ├── hooks/
│   │   ├── index.js         # Barrel export
│   │   ├── useInView.js     # IntersectionObserver reveal hook
│   │   └── useActiveSection.js  # Scroll-spy for active nav link
│   ├── data/
│   │   └── index.js         # All static content / constants
│   ├── styles/
│   │   └── index.css        # Tailwind directives + global CSS
│   ├── App.jsx              # Root component
│   └── main.jsx             # React entry point
├── index.html               # HTML shell + SEO meta + Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite 5** | Dev server & bundler |
| **Tailwind CSS 3** | Utility-first styling |
| **PostCSS + Autoprefixer** | CSS processing |
| **Playfair Display** | Display / heading font |
| **Barlow Condensed** | Label / badge font |
| **Plus Jakarta Sans** | Body / UI font |

---

## ✨ Features

- 🎠 **Auto-rotating hero slider** — 3 slides with ambient glow & particles
- 📜 **Scroll-reveal animations** — fade-in, slide-left, slide-right
- 🔍 **Scroll-spy navigation** — active link highlights as you scroll
- 🗂️ **Filterable gallery** — filter by All / Wedding / Flex / Banner / Frames
- ❤️ **Like toggle** on service cards
- 📬 **Enquiry form** with toast confirmation
- 📱 **Fully responsive** — mobile hamburger menu, adaptive grids
- ♿ **Accessible** — semantic HTML, aria-labels, keyboard-navigable
- 🔎 **SEO-optimised** — meta tags, OG tags, semantic structure

---

## ✏️ Customisation

| What to change | Where |
|---|---|
| All text content, services, gallery items | `src/data/index.js` |
| Brand colors / fonts | `tailwind.config.js` + `src/styles/index.css` |
| Animations & global CSS | `src/styles/index.css` |
| SEO meta tags | `index.html` |
| Individual sections | `src/components/<ComponentName>.jsx` |

---

## 📞 Contact

**BOSS Media — Digital Printing & Arts**  
Manalmedu, Mayiladuthurai District, Tamil Nadu, India  
📞 +91 90925 51753  
📸 @bossmediaprint
