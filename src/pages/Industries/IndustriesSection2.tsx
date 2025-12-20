import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-2.png'

const IndustriesSection2 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Real Estate'}
      rtl={true}
      text={
        <>
          <p>
            We work with real estate organizations to deliver services,
            solutions, and products.
          </p>
          <p>
            Our work enhances asset performance, streamlines operations, and
            enables data-driven decision-making across portfolios.
          </p>
        </>
      }
      btnLink='/real-state'
    />
  )
}

export default IndustriesSection2
