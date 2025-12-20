import Banner from './Banner'
import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import IndustriesSection from './IndustriesSection'
import IndustriesSection2 from './IndustriesSection2'
import IndustriesSection3 from './IndustriesSection3'
import IndustriesSection4 from './IndustriesSection4'
import IndustriesSection5 from './IndustriesSection5'
import IndustriesSection6 from './IndustriesSection6'
import IndustriesSection7 from './IndustriesSection7'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'industries1', Component: IndustriesSection },
  { id: 'industries2', Component: IndustriesSection2 },
  { id: 'industries3', Component: IndustriesSection3 },
  { id: 'industries4', Component: IndustriesSection4 },
  { id: 'industries5', Component: IndustriesSection5 },
  { id: 'industries6', Component: IndustriesSection6 },
  { id: 'industries7', Component: IndustriesSection7 },
  { id: 'footer', Component: Footer },
]

function Industries() {
  return <FullPageSlider sections={sections} />
}

export default Industries
