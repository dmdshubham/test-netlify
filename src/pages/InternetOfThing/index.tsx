import Footer from '@components/Footer'
import Banner from './Banner'
import { FullPageSlider } from '@components/FullPageSlider'
import { OurServices } from './OurServices'
import { CTA } from './CTA'
import { WhyUs } from './WhyUs'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'services', Component: OurServices },
  { id: 'why-us', Component: WhyUs },
  { id: 'make-move', Component: CTA },
  { id: 'footer', Component: Footer },
]

function InternetOfThing() {
  return <FullPageSlider sections={sections} />
}

export default InternetOfThing
