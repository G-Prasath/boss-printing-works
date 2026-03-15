export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-8 left-8 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-all duration-300"
      style={{
        background:  '#e8006f',
        boxShadow:   '0 8px 24px rgba(232,0,111,.45)',
      }}
    >
      ↑
    </button>
  )
}
