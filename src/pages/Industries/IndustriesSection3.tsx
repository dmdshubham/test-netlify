import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-4.jpg'

const IndustriesSection = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Retail & E-Commerce'}
      text={
        <>
          <p>
            We partner with retail and e-commerce organizations to deliver
            services, solutions, and products.
          </p>
          <p>
            Our work optimizes operations, enhances customer experience, and
            supports scalable, revenue-focused growth.
          </p>
        </>
      }
    />
  )
}

export default IndustriesSection
