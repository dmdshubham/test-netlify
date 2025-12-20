// import React from 'react'
import Hero from '@images/AboutUs/Clients/our-clients-img.png'
import Heromobile from '@images/AboutUs/Clients/our-client-mobile.png'

import {
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'

const OurClients = () => {
  return (
    <SectionOuter className='bg-white'>
      <SectionInner>
        <SectionHeader>Our Clients</SectionHeader>
        <img src={Hero} alt='' className='hidden md:block' />
        <img src={Heromobile} alt='' className='block md:hidden' />
      </SectionInner>
    </SectionOuter>
  )
}

export default OurClients
