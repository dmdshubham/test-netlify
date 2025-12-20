import Footer from '@components/Footer'
import Banner from './Banner'
import { FullPageSlider } from '@components/FullPageSlider'
import { OurServices } from './OurServices'
import { KeyElements } from './KeyElements'
import { WhyUs } from './WhyUs'
import { UseCases } from './UseCases'
import { YourDataIsSafe } from './YourDataIsSafe'
import { UnlockBestCloud } from './UnlockBestCloud'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'services', Component: OurServices },
  { id: 'why-us', Component: WhyUs },
  { id: 'key', Component: KeyElements },
  { id: 'use-cases', Component: UseCases },
  { id: 'dat-is-safe', Component: YourDataIsSafe },
  { id: 'unlock-best-cloud', Component: UnlockBestCloud },
  { id: 'footer', Component: Footer },
]

export const HybridClouds = () => {
  return <FullPageSlider sections={sections} />
}
