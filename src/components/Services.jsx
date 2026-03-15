import { useState } from 'react'
import Reveal from './Reveal'
import { SVCS } from '../data'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Services() {
  const [liked, setLiked] = useState({})

  return (
    <section id="services" className="py-28" style={{ background: '#f7f7fb' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
          <Reveal>
            <div>
              <div className="pdiv" />
              <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-3">What We Offer</p>
              <h2 className="font-display font-bold text-[#0c0c14] leading-[1.08]" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }}>
                Our <span className="gtext">Services</span>
              </h2>
            </div>
          </Reveal>
          {/* <Reveal delay={0.1}>
            <button onClick={() => go('contact')} className="font-body text-[14px] font-semibold px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-[#e8006f] hover:text-[#e8006f] transition-all duration-300">
              View All →
            </button>
          </Reveal> */}
        </div>

        <div className="grid-3s grid gap-6" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {SVCS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group h-full">
                <div className={`h-52 bg-gradient-to-br ${s.grad} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-7xl transition-transform duration-700 group-hover:scale-110 z-10">{s.em}</span>
                  <button
                    onClick={() => setLiked((p) => ({ ...p, [i]: !p[i] }))}
                    className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-[#e8006f] hover:text-white transition-all duration-300 text-sm z-20"
                    aria-label={liked[i] ? 'Unlike' : 'Like'}
                  >{liked[i] ? '❤️' : '🤍'}</button>
                </div>
                <div className="p-6">
                  <span className="font-cond text-[11px] tracking-[3px] uppercase font-bold text-[#e8006f] bg-rose-50 px-3 py-1 rounded-full">{s.tag}</span>
                  <h4 className="font-display font-bold text-[#0c0c14] mt-3 mb-2 leading-snug" style={{ fontSize: 18 }}>{s.title}</h4>
                  <p className="font-body text-gray-400 leading-relaxed text-justify" style={{ fontSize: 14 }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
