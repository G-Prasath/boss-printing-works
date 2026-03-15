import { useState } from 'react'
import Reveal from './Reveal'
import { CONTACT_DETAILS, SOCIALS } from '../data'

const INP = 'finp w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 transition-all duration-300'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', req: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.phone) return
    setSent(true)
    setForm({ name: '', email: '', phone: '', req: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-28" style={{ background: '#f7f7fb' }}>
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-14">
            <div className="pdiv mx-auto" />
            <p className="font-cond text-[12px] tracking-[4px] uppercase text-[#e8006f] font-semibold mb-3">Get In Touch</p>
            <h2 className="font-display font-bold text-[#0c0c14] leading-[1.08] mb-3" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }}>
              Register <span className="gtext">Now</span>
            </h2>
            <p className="font-body text-gray-400 max-w-md mx-auto leading-relaxed" style={{ fontSize: 16 }}>
              Have a project in mind? Fill in your details and we'll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid-2 grid rounded-3xl overflow-hidden shadow-2xl" style={{ gridTemplateColumns: '1fr 1.6fr' }}>

            {/* Info */}
            <div className="p-12 flex flex-col justify-between" style={{ background: 'linear-gradient(160deg,#0c0c14 0%,#131320 100%)' }}>
              <div>
                <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: 24 }}>Contact Info</h3>
                <p className="font-body text-white/40 leading-relaxed mb-10" style={{ fontSize: 14 }}>
                  Reach out via any channel — we're always ready to help you create.
                </p>
                {CONTACT_DETAILS.map((c) => (
                  <div key={c.lbl} className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(232,0,111,.14)' }}>
                      {c.icon}
                    </div>
                    <div>
                      <span className="font-cond text-[10px] tracking-[3px] uppercase text-[#e8006f] font-bold">{c.lbl}</span>
                      <p className="font-body text-white/65 mt-0.5" style={{ fontSize: 14 }}>{c.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5 mt-4">
                {SOCIALS.map((ic, i) => (
                  <div key={i} className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300" style={{ background: 'rgba(255,255,255,.07)' }}>
                    {ic}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="p-12 bg-white">
              <h3 className="font-display font-bold text-[#0c0c14] mb-2" style={{ fontSize: 22 }}>Send an Enquiry</h3>
              <p className="font-body text-gray-400 mb-8" style={{ fontSize: 14 }}>Our team will respond with a custom quote for your project.</p>

              <div className="form2 grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-body text-[13px] font-semibold text-gray-600 block mb-2 tracking-wide">Your Name *</label>
                  <input type="text" className={INP} style={{ fontSize: 15 }} placeholder="Enter your name" value={form.name} onChange={update('name')} />
                </div>
                <div>
                  <label className="font-body text-[13px] font-semibold text-gray-600 block mb-2 tracking-wide">Email Address</label>
                  <input type="email" className={INP} style={{ fontSize: 15 }} placeholder="your@email.com" value={form.email} onChange={update('email')} />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-body text-[13px] font-semibold text-gray-600 block mb-2 tracking-wide">Phone Number *</label>
                <input type="tel" className={INP} style={{ fontSize: 15 }} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={update('phone')} />
              </div>
              <div className="mb-6">
                <label className="font-body text-[13px] font-semibold text-gray-600 block mb-2 tracking-wide">Requirement</label>
                <textarea rows={4} className={INP} style={{ fontSize: 15 }} placeholder="e.g. Wedding flex banner 1000×500, photo frame printing, political banner…" value={form.req} onChange={update('req')} />
              </div>
              <button onClick={handleSubmit} className="btnp w-full py-4 rounded-2xl tracking-wide font-display" style={{ fontSize: 16 }}>
                Submit Enquiry ✨
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {sent && (
        <div className="fixed bottom-8 right-8 z-50 toastin flex items-center gap-3 text-white px-6 py-4 rounded-2xl shadow-2xl font-body" style={{ background: '#0c0c14', borderLeft: '4px solid #e8006f', fontSize: 15, fontWeight: 500 }}>
          ✅ Enquiry submitted! We'll contact you soon.
        </div>
      )}
    </section>
  )
}
