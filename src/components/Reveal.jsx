import { useInView } from '../hooks'

/**
 * Wraps children in a div that animates in when scrolled into view.
 *
 * @param {string}  cls   - base CSS class: 'rv' | 'rvl' | 'rvr'
 * @param {number}  delay - transition-delay in seconds
 * @param {object}  style - extra inline styles (e.g. gridRow)
 */
export default function Reveal({ children, cls = 'rv', delay = 0, style = {} }) {
  const [ref, on] = useInView()

  return (
    <div
      ref={ref}
      className={`${cls}${on ? ' on' : ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}
