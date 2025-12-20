import React from 'react'

import Banner from './Banner'
import Footer from '@components/Footer'
import { FullPageSlider } from '@components/FullPageSlider'
import { Product1 } from './Product1'
import { Product2 } from './Product2'

const sections = [
  { id: 'home', Component: Banner },
  { id: 'product1', Component: Product1 },
  { id: 'product2', Component: Product2 },
  { id: 'footer', Component: Footer },
]

function Construction() {
  return <FullPageSlider sections={sections} />
}

export default Construction
