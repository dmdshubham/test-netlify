import Footer from '@components/Footer'
import Banner from './Banner'
import OurCapabilities from './OurCapabilities'
import Awards from './AwardsAndAcolades'
import OurClients from './OurClients'
import OurVision from './OurVision'
import { FullPageSlider } from '@components/FullPageSlider'

const sections = [
  { id: 'banner', Component: Banner },
  { id: 'our-capabilities', Component: OurCapabilities },
  { id: 'our-vision', Component: OurVision },
  { id: 'awards', Component: Awards },
  { id: 'our-clients', Component: OurClients },
  { id: 'footer', Component: Footer },
]

function AboutUs() {
  return <FullPageSlider sections={sections} />
}

export default AboutUs
