import Footer from '@components/Footer'
import Banner from './Banner'
import { FullPageSlider } from '@components/FullPageSlider'
import { OurServices } from './OurServices'
import { KeepDataSafe } from './KeepDataSafe'
import { WhyUs } from './WhyUs'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'services', Component: OurServices },
  { id: 'why-us', Component: WhyUs },
  { id: 'keep-data', Component: KeepDataSafe },
  { id: 'footer', Component: Footer },
]

export const CloudServices = () => {
  return <FullPageSlider sections={sections} />
}
