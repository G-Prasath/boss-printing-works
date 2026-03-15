import { FOOTER_COLS, SOCIALS } from '../data'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ background: '#0c0c14' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-foot grid gap-12 pb-12 border-b border-white/[0.07]" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
          <div>
            <div className="font-display font-bold text-[24px] mb-3">
              <span style={{ color: '#e8006f' }}>BOSS</span><span className="text-white">Media</span>
            </div>
            <p className="font-body text-white/35 leading-relaxed mb-6 max-w-xs" style={{ fontSize: 14 }}>
              Premium digital printing studio in Tamil Nadu delivering vibrant, high-quality prints that make every moment unforgettable.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map((ic, i) => (
                <div key={i} className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300" style={{ background: 'rgba(255,255,255,.07)' }}>
                  {ic}
                </div>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.h}>
              <h5 className="font-display font-bold text-white mb-5" style={{ fontSize: 16 }}>{col.h}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(([lbl, id]) => (
                  <li key={lbl}>
                    <button onClick={() => go(id)} className="font-body text-white/35 hover:text-[#e8006f] hover:translate-x-1 transition-all duration-300 text-left block" style={{ fontSize: 14 }}>
                      {lbl}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-7 flex flex-wrap justify-between items-center gap-4">
          <p className="font-body text-white/25" style={{ fontSize: 13 }}>© 2024 <span style={{ color: '#e8006f' }}>BOSS Media</span>. All rights reserved.</p>
          <p className="font-body text-white/25" style={{ fontSize: 13 }}>Made with <span style={{ color: '#e8006f' }}>❤️</span> in Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  )
}
