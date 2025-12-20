// import React from 'react'

import img1 from '@images/Home/Capabilities/img-1.png'
import img2 from '@images/Home/Capabilities/img-2.png'
import img3 from '@images/Home/Capabilities/img-3.png'
import img4 from '@images/Home/Capabilities/img-4.png'
import img5 from '@images/Home/Capabilities/img-5.png'
import img6 from '@images/Home/Capabilities/img-6.png'
import {
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'

const Items = [
  {
    img: img1,
    text: 'Create meaningful business changes with data analytics.',
  },
  {
    img: img2,
    text: 'Modernize your Technology Infrastructure.',
  },
  {
    img: img3,
    text: 'Cillum Dolore eu Fugiat Nulla Pariatur.',
  },
  {
    img: img4,
    text: 'Accelerate Software Application Life Cycle.',
  },
  {
    img: img5,
    text: 'Unleash the power of Hybrid-Cloud.',
  },
  {
    img: img6,
    text: 'numquam eius modi tempora incidunt ut labore et.',
  },
]

const Card = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className='max-w-[260px] md:max-w-full bg-white rounded-2xl overflow-hidden border shadow-md'>
      <img
        src={img}
        alt={text}
        className='rounded-lg object-cover w-fit md:w-full'
      />
      <div className='p-4'>
        <p className='text-[#313131] text-[15px] leading-[18px] font-semibold font-lato'>
          {text}
        </p>
      </div>
    </div>
  )
}
export default function Capabilities() {
  return (
    <SectionOuter className='bg-white'>
      <SectionInner>
        <SectionHeader>Capabilities</SectionHeader>
        <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-2  w-fit mx-auto max-w-[800px]'>
          {Items?.map((item, i) => (
            <Card key={i} img={item.img} text={item.text} />
          ))}
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
