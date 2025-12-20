// import React from 'react'
import img1 from '@images/Services/img2.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const CloudServices = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Cloud Services'}
      heading={'Cloud Services'}
      text={
        <>
          <p>
            Build your competitive edge through engineering. White Code Labs
            aligns science, technology and domain expertise to solve real-world
            problems, and drive growth.
          </p>
          <p>
            Our innovation-led enterprise application services are reinventing
            digital infrastructure with speed and agility, enabling 360 value at
            scale. Give yourself an engineering edge by leveraging ours.
          </p>
        </>
      }
      btnLink='/cloud-service'
      rtl
    />
  )
}
