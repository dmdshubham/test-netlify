import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-1.png'

const IndustriesSection = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Construction'}
      text={
        <>
          <p>
            Construction We support construction organizations with
            enterprise-grade services, scalable solutions, and purpose-built
            products.
          </p>
          <p>
            Our work improves project visibility, reduces delays, and
            strengthens operational control across complex, multi-site
            environments.
          </p>
        </>
      }
      btnLink='/construction'
    />
  )
}

export default IndustriesSection
