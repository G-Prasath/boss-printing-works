import { useState, useEffect } from 'react'

/**
 * Tracks which section id is currently most visible in the viewport.
 * @param {string[]} ids   - ordered list of section element ids
 * @param {number}   threshold - IntersectionObserver threshold (0–1)
 */
export function useActiveSection(ids, threshold = 0.35) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, threshold])

  return active
}
