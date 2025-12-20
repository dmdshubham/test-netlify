import HomeSlider from './HomeSlider'
import AboutUs from './AboutUs'
import Capabilities from './Capabilities'
import Footer from '../../components/Footer'
import OurMission from './OurMission'
import OurValues from './OurValues'
import WhyCodeLab from './WhyCodeLab'
import OurSolutions from './OurSolutions'
// import LastSection from './LastSection'
import CTA from './CTA'
import { FullPageSlider } from '@components/FullPageSlider'

const sections = [
  { id: 'home', Component: HomeSlider },
  { id: 'about', Component: AboutUs },
  { id: 'our-mission', Component: OurMission },
  { id: 'our-values', Component: OurValues },
  { id: 'white-codelab', Component: WhyCodeLab },
  { id: 'data-analytics', Component: OurSolutions },
  { id: 'capabilities', Component: Capabilities }, 
  { id: 'make-move', Component: CTA },
  { id: 'footer', Component: Footer },
]
function Home() {
  return <FullPageSlider sections={sections} />
}

export default Home
