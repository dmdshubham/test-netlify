import banner from '@images/InternetOfThings/Banner.png'
import bannerSmall from '@images/SoftwareDevelopment/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={
        <>
          <span>Internet of Things(IoT):</span>
          <br />
          <span>
            <span>Hyper-Connected Ecosystem</span>
          </span>
        </>
      }
      text={
        <>
          <p>
            The Internet of Things (IoT) is transforming how businesses interact
            with their environment and customers. At White Code Labs, we
            specialize in IoT services and solutions that enable seamless
            connectivity, data collection, and automation.
          </p>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen text-white',
        text: 'w-[70%] text-white',
      }}
    />
  )
}

export default Banner
