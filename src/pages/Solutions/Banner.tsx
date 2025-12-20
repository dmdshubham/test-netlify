import banner from '@images/Solutions/Banner-Solutions.jpg'
import bannerSmall from '@images/Solutions/banner-solutions2.jpg'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'Our Solutions'}
      text={
        <>
          <p className='font-black'>
            Leverage our expertise to turn your challenges into your most
            remarkable achievements.
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
