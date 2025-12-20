import banner from '@images/Construction/hero.png'
import bannerSmall from '@images/ContactUs/hero_mobile.png'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={bannerSmall}
      heading={'Constructions'}
      text={
        <>
          <p>
            We appreciate your interest in White Code Labs. Please fill up the
            form below and we will get back to you in the next 24 hours.
          </p>
        </>
      }
    />
  )
}

export default Banner
