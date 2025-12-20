import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-3.png'

const IndustriesSection4 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Technology & High-Growth Companies'}
      rtl={true}
      text={
        <>
          <p>
            We support technology and high-growth companies with enterprise-grade services, scalable solutions, and purpose-built products.
          </p>
          <p>
            Our work accelerates product delivery, strengthens platform reliability, and enables confident scaling in fast-moving, competitive environments.
          </p>
        </>
      }
    />
  )
}

export default IndustriesSection4
