import Footer from '@components/Footer'
import Banner from './Banner'
import { FullPageSlider } from '@components/FullPageSlider'
import { GetInTouch } from './GetInTouch'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'form', Component: GetInTouch },
  { id: 'footer', Component: Footer },
]

function ContactUs() {
  return <FullPageSlider sections={sections} />
}

export default ContactUs
