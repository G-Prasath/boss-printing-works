import Reveal from './Reveal'
import { ABOUT_STATS } from '../data'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Real photo for the about section
const ABOUT_IMG = 'https://images.unsplash.com/photo-1629272039203-7d76fdaf1324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvbXBhbnklMjBDRU98ZW58MHx8MHx8fDA%3D'

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2 grid gap-16 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>

          {/* ── Image ── */}
          <Reveal cls="rvl">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
                <img
                  src={ABOUT_IMG}
                  alt="BOSS Media printing studio"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating badge — years */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-5 text-center text-white shadow-2xl"
                style={{ background: 'linear-gradient(135deg,#e8006f,#ff6b35)' }}
              >
                <div className="font-display font-bold text-4xl leading-none">5+</div>
                <div className="font-body text-xs mt-1.5 opacity-90 font-medium leading-tight">
                  Years of<br />Excellence
                </div>
              </div>

              {/* Floating tag — top left */}
              <div
                className="absolute -top-4 -left-4 rounded-2xl px-4 py-3 text-white shadow-xl"
                style={{ background: '#0c0c14', border: '1px solid rgba(255,255,255,.1)' }}
              >
                <div className="font-display font-bold text-lg leading-none">🖨️</div>
                <div className="font-body text-[11px] mt-1 text-white/60">Print Studio</div>
              </div>
            </div>
          </Reveal>

          {/* ── Text ── */}
          <Reveal cls="rvr" delay={0.1}>
            <div>
              <div className="pdiv" />
              <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-3">
                About Us
              </p>
              <h2
                className="font-display font-bold leading-[1.1] text-[#0c0c14] mb-6"
                style={{ fontSize: 'clamp(30px,4.2vw,50px)' }}
              >
                Introducing Our<br />
                <span className="gtext">Self Discover</span> Platform
              </h2>

              <p className="font-body text-gray-500 leading-relaxed mb-4" style={{ fontSize: 16 }}>
                Discover a smarter way to order, crafted by artificial intelligence. From personalised
                design suggestions to lightning-fast delivery, enjoy a printing experience designed
                just for you.
              </p>
              <p className="font-body text-gray-500 leading-relaxed mb-9" style={{ fontSize: 16 }}>
                Based in Manalmedu, Mayiladuthurai District, Tamil Nadu — serving clients across
                India with vibrant, high-quality prints and unmatched craftsmanship you can trust.
              </p>

              {/* Stats */}
              <div
                className="grid-stats grid gap-4 mb-9"
                style={{ gridTemplateColumns: 'repeat(4,1fr)' }}
              >
                {ABOUT_STATS.map(([n, l]) => (
                  <div
                    key={l}
                    className="rounded-2xl p-4 border border-gray-100 bg-gray-50 hover:border-[#e8006f]/40 hover:bg-rose-50/50 transition-all duration-300"
                  >
                    <div
                      className="font-display font-bold text-[24px] leading-none"
                      style={{ color: '#e8006f' }}
                    >
                      {n}
                    </div>
                    <div className="font-body text-[12px] text-gray-400 mt-1.5 font-medium">{l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => go('contact')}
                  className="btnp px-7 py-3.5 rounded-full inline-flex items-center gap-2"
                  style={{ fontSize: 15 }}
                >
                  📞 Call Now
                </button>
                <a
                  href="https://wa.me/919092551753"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body font-semibold px-7 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 hover:border-[#e8006f] hover:text-[#e8006f] transition-all duration-300 inline-flex items-center gap-2"
                  style={{ fontSize: 15 }}
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
