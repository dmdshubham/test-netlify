import banner from '@images/AboutUs/Hero/banner1.png'
import bannerSmall from '@images/AboutUs/Hero/banner_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'About us'}
      text={
        <>
          <p>
            We are an award-winning, enterprise, software service and solution
            company.
          </p>
          <p>
            We offer, develop, and integrate software services, solutions, and
            products that empower enterprises, business organizations, and
            communities.
          </p>
        </>
      }
    />
  )
}

export default Banner
