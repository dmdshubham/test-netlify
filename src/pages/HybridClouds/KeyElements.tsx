// import React from 'react'
import Hero from '@images/HybridClouds/img1.png'
import { SectionInner, SectionOuter } from '../../components/common'
import { SectionType6 } from '@components/Sections'

const awardData = [
  {
    title: 'Unified infrastructure',
    description:
      'Get a common storage layer across your data center and choice of public clouds with ONTAP.',
  },
  {
    title: 'Simplified management',
    description:
      'Access the same rich data services  on premises and in the cloud.',
  },
  {
    title: '"As-a-service" flexibility',
    description:
      'Enjoy storage consumption on your terms consistently across your entire hybrid cloud.',
  },
  {
    title: 'Expert data services',
    description:
      'Get expert help designing and building your ideal hybrid cloud.',
  },
]

export const KeyElements = () => {
  return (
    <SectionOuter className='bg-[#F7F3F3]'>
      <SectionInner className=' '>
        <SectionType6
          heading={'Key hybrid cloud elements'}
          text={
            'No matter how often your hybrid cloud strategy changes or evolves, our solutions deliver everything necessary for a flexible hybrid cloud'
          }
        />

        <div className='flex flex-wrap justify-center gap-2 '>
          <div className='md:flex-[2] '>
            <img
              src={Hero}
              alt='Our Mission'
              className='h-auto max-h-full w-full max-w-full rounded-md object-scale-down '
            />
          </div>

          <div className='flex items-center md:flex-[3]'>
            <div className='grid grid-cols-1 gap-[0.125rem] bg-[#DADADA] text-[15px] text-[#666666]  md:grid-cols-2 md:grid-rows-2'>
              {Array.from({ length: 4 })?.map((_, i) => (
                <div className='flex flex-col justify-start gap-2 bg-[#F7F3F3] p-3 pb-8 text-left'>
                  <h4 className='font-lato text-[14.5px] font-bold leading-[20px] tracking-[0.1px] text-[#313131]'>
                    {awardData[i]?.title}
                  </h4>
                  <p className='leading-[22px]'>{awardData[i]?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
