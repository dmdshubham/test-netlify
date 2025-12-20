import Banner from './Banner'
import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider' 
import { Product1 } from './Product1'
import { Product2 } from './Product2'
import { Product3 } from './Product3'
import { Product4 } from './Product4'

const sections = [
  { id: 'home', Component: Banner }, 
  { id: 'product1', Component: Product1 },
  { id: 'product2', Component: Product2 },
  { id: 'product3', Component: Product3},
  { id: 'product4', Component: Product4},
  { id: 'footer', Component: Footer },
]

function Industries() {
  return <FullPageSlider sections={sections} />
}

export default Industries
