import Banner from './Banner'
import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import Solutions from './Solutions'
import Solutions2 from './Solutions2'
import Solutions3 from './Solutions3'
import Solutions4 from './Solutions4'
import Solutions5 from './Solutions5'
import Solutions6 from './Solutions6'
import { CTA } from './CTA'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'solution', Component: Solutions },
  { id: 'solution2', Component: Solutions2 },
  { id: 'solution3', Component: Solutions3 },
  { id: 'solution4', Component: Solutions4 },
  { id: 'solution5', Component: Solutions5 },
  { id: 'solution6', Component: Solutions6 },
  { id: 'cta', Component: CTA },
  { id: 'footer', Component: Footer },
]

function SoftwareDevelopment() {
  return <FullPageSlider sections={sections} />
}

export default SoftwareDevelopment
