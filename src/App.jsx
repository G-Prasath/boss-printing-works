import { useActiveSection } from './hooks'
import {
  Navbar,
  Hero,
  About,
  HowItWorks,
  Services,
  Gallery,
  CTA,
  Contact,
  Footer,
  ScrollToTop,
} from './components'

const SECTION_IDS = ['home', 'about', 'how', 'services', 'gallery', 'contact']

export default function App() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <Navbar active={active} />

      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <Gallery />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
