import banner from '@images/Products/products-banner.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Our Products'}
      bannerClassname=''
      text={
        <>
          <p className='font-white'>
            Our products are built to solve complex operational challenges at
            scale. From cloud cost optimization to intelligent auto-scaling,
            they help teams run efficient, resilient, and high-performing
            systems.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%] text-black',
      }}
    />
  )
}

export default Banner
