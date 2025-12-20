import banner from '@images/SoftwareDevelopment/banner.png'
import bannerSmall from '@images/SoftwareDevelopment/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'We build digital products that power businesses.'}
      text={
        <>
          <p>
            Our focus is the agile development of web, cloud, and mobile
            applications, and helping organizations create and sustain digital
            innovation.
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
