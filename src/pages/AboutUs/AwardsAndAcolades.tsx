// import React from 'react'
import Hero from '@images/AboutUs/Awards/awards-img.png'
import {
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'

const awardData = [
  {
    title: 'Among the top Disruptors in Cloud Computing.',
    description:
      'We were ranked one of the top disruptors in Cloud Computing, alongside; Cloudera, Digital Ocean and Rackspace.',
  },
  {
    title: 'Top Software Companies in the Financial Services Industry',
    description:
      'White Code Labs was awarded one of the top software vendors within the Financial Service Industry.',
  },
  {
    title: 'Leader in Hybrid Cloud',
    description:
      'We were ranked one of the top companies in Hybrid Cloud alongside; Microsoft, AWS, Rackspace, Digital Ocean, RightScale, Navisitie, and Concerto Cloud Services.',
  },
  {
    title: 'Top companies in IoT',
    description:
      'White Code Labs was awarded one of the top companies in IoT alongside; IBM, Oracle, Accenture and Honeywell.',
  },
]

const Awards = () => {
  return (
    <SectionOuter className='bg-white'>
      <SectionInner className='lg:px-0 '>
        <SectionHeader>Awards and Accolades</SectionHeader>

        <div className='flex flex-wrap justify-center gap-2 '>
          <div className='flex items-center md:flex-[3]'>
            <div className='grid grid-cols-1 gap-[0.125rem] bg-[#DADADA] text-[15px] text-[#666666]  md:grid-cols-2 md:grid-rows-2'>
              {Array.from({ length: 4 })?.map((_, i) => (
                <div className='flex flex-col justify-start gap-2 bg-[#FFF] p-3 pb-8 text-left'>
                  <h4 className='font-lato text-[14.5px] font-bold leading-[20px] tracking-[0.1px] text-[#313131]'>
                    {awardData[i]?.title}
                  </h4>
                  <p className='leading-[22px]'>{awardData[i]?.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='ml-8 md:flex-[2]'>
            <img
              src={Hero}
              alt='Our Mission'
              className='h-auto max-h-full w-full max-w-full rounded-md object-scale-down md:h-[451px] md:w-[430px]'
            />
          </div>
        </div>
      </SectionInner>
    </SectionOuter>
  )
}

export default Awards
