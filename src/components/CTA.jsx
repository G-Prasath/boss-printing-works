import Reveal from './Reveal'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#131320' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle,rgba(232,0,111,.18) 0%,transparent 70%)' }} />
        <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle,rgba(232,0,111,.08) 0%,transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="cta-row flex items-center justify-between gap-10">
          <Reveal cls="rvl" style={{ maxWidth: 580 }}>
            <div>
              <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-4">Call to Action</p>
              <h2 className="font-display font-bold text-white leading-[1.08] mb-5" style={{ fontSize: 'clamp(28px,4vw,52px)' }}>
                Ready to Bring Your<br /><span className="gtext">Vision</span> to Life?
              </h2>
              <p className="font-body text-white/45 leading-relaxed max-w-lg" style={{ fontSize: 16 }}>
                From wedding banners to political flex and custom photo frames, we deliver vibrant prints with fast turnaround and affordable pricing. Let's create something extraordinary together.
              </p>
            </div>
          </Reveal>
          <Reveal cls="rvr" delay={0.15}>
            <div className="flex flex-col gap-3 min-w-[200px]">
              <button onClick={() => go('contact')} className="btnp px-8 py-4 rounded-full flex items-center justify-center gap-2.5" style={{ fontSize: 16 }}>
                📞 Call Now
              </button>
              <button onClick={() => go('contact')} className="font-body font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-white border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300" style={{ fontSize: 16 }}>
                Get Quote
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
