import banner from '@images/HybridClouds/banner.png'
import bannerSmall from '@images/HybridClouds/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={
        <>
          <span>Hybrid cloud solutions:</span>
          <span>Unify, simplify, innovate-ify</span>
        </>
      }
      text={
        '   Accelerating your business requires a hybrid multi-cloud solution. Let’s build and scale your business on the best Hybrid Cloud Infrastructure solutions. We will help you leverage the cloud for faster and more dynamic delivery of services.'
      }
      classNames={{
        heading: 'text-white  flex flex-col',
        text: 'text-white md:w-[72%] w-[80%] font-light',
      }}
    />
  )
}

export default Banner
