import Reveal from './Reveal'
import { STEPS } from '../data'

export default function HowItWorks() {
  return (
    <section id="how" className="py-28" style={{ background: '#0c0c14' }}>
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="mb-16">
            <div className="pdiv" />
            <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-3">Our Process</p>
            <h2 className="font-display font-bold text-white leading-[1.08] mb-4" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }}>
              How It <span className="gtext">Works</span>
            </h2>
            <p className="font-body text-white/40 max-w-md leading-relaxed" style={{ fontSize: 17 }}>
              From your idea to a finished product — four elegant steps to printing perfection.
            </p>
          </div>
        </Reveal>

        <div className="grid-4 grid gap-5" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative group rounded-2xl p-7 border border-white/[0.07] hover:border-[#e8006f]/40 hover:bg-white/[0.03] transition-all duration-500 cursor-default h-full">
                <span className="absolute top-4 right-5 font-display font-bold text-[52px] leading-none select-none text-white/[0.04] group-hover:text-white/[0.08] transition-all duration-500">{s.n}</span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-5 group-hover:scale-110 transition-all duration-300" style={{ background: 'rgba(232,0,111,.12)' }}>
                  {s.icon}
                </div>
                <h4 className="font-display font-bold text-white mb-3 leading-snug" style={{ fontSize: 18 }}>{s.title}</h4>
                <p className="font-body text-white/40 leading-relaxed" style={{ fontSize: 14 }}>{s.body}</p>
                <div className="mt-5 flex items-center gap-2">
                  <div className="w-5 h-0.5 rounded-full" style={{ background: '#e8006f' }} />
                  <span className="font-cond text-[11px] tracking-[3px] uppercase font-semibold" style={{ color: '#e8006f' }}>Step {s.n}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="absolute top-[52px] -right-3 z-10 hidden lg:flex items-center justify-center w-6 h-6 rounded-full border border-[#e8006f]/30" style={{ background: '#0c0c14', fontSize: 13, color: '#e8006f' }}>→</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
