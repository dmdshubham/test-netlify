import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'
import img from '@images/HybridClouds/img6.png'
import imgSmallP1 from '@images/HybridClouds/img6_mobile_p1.png'
import imgSmallP2 from '@images/HybridClouds/img6_mobile_p2.png'

export const UnlockBestCloud = () => {
  return (
    <SectionOuter className='bg-white'>
      <SectionInner className=' md:gap-4'>
        <SectionType6
          heading={<span className='lg:pl-44'>Unlock the best of cloud</span>}
          text={
            "We were asked by the world's biggest hyperscalers—Amazon, Microsoft, Google, and IBM—to build data management and storage solutions in their clouds because of our success, reliability, and uptime."
          }
          classNames={{
            text: 'lg:pr-10',
          }}
        />
        <div className='flex h-full w-full flex-wrap justify-center gap-4'>
          <img src={img} alt='Unlock Best Cloud' className='hidden md:block' />
          <img src={imgSmallP1} alt='Unlock Best Cloud' className='md:hidden' />
          <img src={imgSmallP2} alt='Unlock Best Cloud' className='md:hidden' />
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
