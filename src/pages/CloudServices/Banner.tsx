import banner from '@images/CloudServices/banner.png'
import bannerSmall from '@images/CloudServices/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={
        <>
          <span>Cloud Services:</span>
          <span>Unleash your applications</span>
        </>
      }
      text={
        <>
          <p>
            Get ready to elevate cloud to new heights with solutions built for
            the complex multicloud world. Simplify migrations. Protect precious
            data. Bask in cost savings. Maximize application performance. And
            get more out of cloud than you ever thought possible. Welcome to the
            big leagues.
          </p>
        </>
      }
      classNames={{
        heading: 'text-white  flex flex-col',
        text: 'text-white md:w-[70%] w-[80%] font-light',
      }}
    />
  )
}

export default Banner
