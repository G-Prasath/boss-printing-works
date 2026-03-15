import { useState, useEffect } from 'react'
import { SLIDES } from '../data'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const [cur, setCur]       = useState(0)
  const [animKey, setAnimKey] = useState(0)   // forces content re-animation on slide change

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setCur((v) => (v + 1) % SLIDES.length)
      setAnimKey((k) => k + 1)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const handleDot = (i) => {
    setCur(i)
    setAnimKey((k) => k + 1)
  }

  const s = SLIDES[cur]

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">

      {/* ── Image Slides (crossfade) ── */}
      {SLIDES.map((sl, i) => (
        <div
          key={i}
          className={`hero-slide ${i === cur ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${sl.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* ── Dark gradient overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex items-center min-h-screen max-w-6xl mx-auto px-6 md:px-10">
        <div
          key={animKey}
          className="hero-in pt-24 pb-20 w-full max-w-[660px]"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 rounded-full px-5 py-2"
            style={{ background: `${s.ac}22`, border: `1px solid ${s.ac}55` }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: s.ac }} />
            <span
              className="font-display text-[12px] tracking-[4px] uppercase font-semibold"
              style={{ color: s.ac }}
            >
              {s.cat}
            </span>
            <span className="font-display text-[12px] text-white/30 tracking-widest">
              {s.num} / 0{SLIDES.length}
            </span>
          </div>

          {/* ── Title — fixed: display:block to prevent clip on 2nd line ── */}
          <h1
            className="font-display font-bold text-white mb-6"
            style={{
              fontSize: 'clamp(44px, 7vw, 82px)',
              lineHeight: 1.08,
              letterSpacing: '-0.5px',
            }}
          >
            <span className="block">{s.title}</span>
            <span
              className="block"
              style={{
                background: `linear-gradient(135deg, ${s.ac} 0%, #fff 120%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '4px',   /* prevent bottom clip */
              }}
            >
              {s.em}
            </span>
          </h1>

          <p
            className="font-body text-white/60 leading-relaxed mb-10 max-w-[480px]"
            style={{ fontSize: 'clamp(15px,1.6vw,18px)' }}
          >
            {s.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => go('contact')}
              className="btnp px-8 py-4 rounded-full inline-flex items-center gap-2.5"
              style={{ fontSize: 16 }}
            >
              💬 Get In Touch
            </button>
            <button
              onClick={() => go('services')}
              className="font-body font-semibold px-8 py-4 rounded-full text-white border border-white/25 hover:border-white/60 hover:bg-white/8 transition-all duration-300"
              style={{ fontSize: 16 }}
            >
              Our Services →
            </button>
          </div>
        </div>
      </div>

      {/* ── Slide Dots ── */}
      <div className="absolute bottom-10 left-6 md:left-10 z-10 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className="rounded-full transition-all duration-500"
            style={{
              width:  i === cur ? 32 : 9,
              height: 9,
              background: i === cur ? s.ac : 'rgba(255,255,255,.28)',
            }}
          />
        ))}
      </div>

      {/* ── Slide Counter ── */}
      <div
        className="absolute bottom-10 right-6 md:right-10 z-10 font-display text-white/30 tracking-widest"
        style={{ fontSize: 14 }}
      >
        <span className="font-display font-bold text-[26px]" style={{ color: s.ac }}>
          0{cur + 1}
        </span>{' '}
        / 0{SLIDES.length}
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={() => handleDot((cur - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 lb-nav lb-prev hidden md:flex"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => handleDot((cur + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 lb-nav lb-next hidden md:flex"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  )
}
