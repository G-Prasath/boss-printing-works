import { useRef, useState, useEffect } from 'react'

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport (at `threshold` ratio),
 * isVisible flips to true and the observer disconnects.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, on]
}
