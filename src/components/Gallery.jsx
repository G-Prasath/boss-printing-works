import { useState, useEffect, useCallback } from 'react'
import Reveal from './Reveal'
import { GAL, GAL_TABS } from '../data'

export default function Gallery() {
  const [tab,        setTab]    = useState('All')
  const [lightbox,   setLb]     = useState(null)   // index into `show`

  const items = GAL.filter((g) => g.tabs.includes(tab))
  const show  = items.length ? items : GAL

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLb(null)
      if (e.key === 'ArrowRight' && lightbox !== null)
        setLb((i) => (i + 1) % show.length)
      if (e.key === 'ArrowLeft' && lightbox !== null)
        setLb((i) => (i - 1 + show.length) % show.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, show.length])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const prev = useCallback(() => setLb((i) => (i - 1 + show.length) % show.length), [show.length])
  const next = useCallback(() => setLb((i) => (i + 1) % show.length), [show.length])

  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <Reveal>
          <div className="pdiv" />
          <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-3">
            Portfolio
          </p>
          <h2
            className="font-display font-bold text-[#0c0c14] leading-[1.08] mb-3"
            style={{ fontSize: 'clamp(30px,4.5vw,50px)' }}
          >
            Our <span className="gtext">Works</span>
          </h2>
          <p className="font-body text-gray-400 max-w-md leading-relaxed" style={{ fontSize: 16 }}>
            Browse our premium portfolio of prints, banners, and creative designs. Click any image to view full-size.
          </p>
        </Reveal>

        {/* ── Filter Tabs ── */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2.5 my-10">
            {GAL_TABS.map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setLb(null); }}
                className={`font-cond tracking-widest text-[12px] uppercase font-bold px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                  tab === t
                    ? 'bg-[#e8006f] text-white border-[#e8006f] shadow-[0_6px_18px_rgba(232,0,111,.35)]'
                    : 'border-gray-200 text-gray-500 hover:border-[#e8006f] hover:text-[#e8006f]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── Gallery Grid ── */}
        <div className="gal-grid">
          {show.map((g, i) => (
            <Reveal
              key={`${tab}-${i}`}
              delay={i * 0.06}
              style={{ gridRow: i === 0 ? undefined : undefined }}
            >
              <div
                className={`group relative rounded-2xl overflow-hidden cursor-pointer h-full ${i === 0 ? 'gal-tall' : ''}`}
                onClick={() => setLb(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLb(i)}
                aria-label={`View ${g.lbl}`}
              >
                {/* Image */}
                <img
                  src={g.img}
                  alt={g.lbl}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  style={{ minHeight: '100%' }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: 'rgba(232,0,111,.82)' }}
                >
                  <span className="text-4xl text-white">🔍</span>
                  <span className="font-display font-semibold text-white text-[15px] tracking-wide">
                    {g.lbl}
                  </span>
                  <span className="font-body text-white/70 text-xs">Click to view</span>
                </div>

                {/* Label chip */}
                <div
                  className="absolute bottom-3 left-3 font-cond font-semibold text-[11px] tracking-[2px] uppercase text-white px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(8px)' }}
                >
                  {g.lbl}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="lb-overlay"
          onClick={(e) => e.target === e.currentTarget && setLb(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button className="lb-close" onClick={() => setLb(null)} aria-label="Close">
            ✕
          </button>

          {/* Prev */}
          <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous image">
            ‹
          </button>

          {/* Image */}
          <div className="flex flex-col items-center gap-4 px-14">
            <img
              src={show[lightbox].img}
              alt={show[lightbox].lbl}
              className="lb-img"
            />
            <div className="text-center">
              <p className="font-display font-semibold text-white text-lg tracking-wide">
                {show[lightbox].lbl}
              </p>
              <p className="font-body text-white/40 text-sm mt-1">
                {lightbox + 1} / {show.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button className="lb-nav lb-next" onClick={next} aria-label="Next image">
            ›
          </button>

          {/* Dot nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {show.map((_, i) => (
              <button
                key={i}
                onClick={() => setLb(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === lightbox ? 24 : 8,
                  height: 8,
                  background: i === lightbox ? '#e8006f' : 'rgba(255,255,255,.3)',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
