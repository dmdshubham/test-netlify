import Footer from '@components/Footer'
import Banner from './Banner'
// import OurCapabilities from './OurCapabilities'
// import Awards from './AwardsAndAcolades'
// import OurClients from './OurClients'
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

function SoftwareDevelopment() {
  return <FullPageSlider sections={sections} />
}

export default SoftwareDevelopment
