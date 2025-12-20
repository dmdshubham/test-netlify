import banner from '@images/Industries/industries.png'
// import bannerSmall from '@images/Industries/banner-solutions2.jpg'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Industries'}
      text={
        <>
          <p>
            We partner across industries to deliver enterprise-grade services,
            scalable solutions, and purpose-built products that drive measurable
            business outcomes.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%]',
      }}
    />
  )
}

export default Banner
