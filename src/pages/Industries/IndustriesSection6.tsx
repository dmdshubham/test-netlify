import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-6.png'

const IndustriesSection6 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Logistics & Supply Chain'}
      rtl={true}
      text={
        <>
          <p>
            We support logistics and supply chain organizations with
            enterprise-grade services, scalable solutions, and purpose-built
            products that improve end-to-end visibility, streamline operations,
            and enable reliable scaling across complex, high-volume supply chain
            networks.
          </p>
          <p>
            Our products and solutions are designed to address the operational
            and technical challenges of modern supply chains, helping
            organizations reduce manual processes, eliminate data silos, and
            improve system reliability across warehousing, transportation, and
            fulfillment.
          </p>
        </>
      }
    />
  )
}

export default IndustriesSection6
