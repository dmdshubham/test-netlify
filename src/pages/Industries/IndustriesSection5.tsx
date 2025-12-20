import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-5.png'

const IndustriesSection5 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Financial Services & FinTech'}
      text={
        <>
          <p>
            We support financial services and fintech organizations with
            enterprise-grade services, scalable solutions, and purpose-built
            products that strengthen platform reliability, improve operational
            efficiency, and enable secure, compliant growth in highly regulated
            environments.
          </p>
          <p>
            We solve some of the most pressing challenges in the financial and
            fintech industry, including cloud cost explosion, security and
            compliance complexity, legacy system modernization, data silos and
            analytics gaps, and scalability and performance constraints. Our
            work enables organizations to reduce risk, control costs, and unlock
            data-driven decision-making at scale. In recognition of this impact,
            White Code Labs has been awarded as one of the top software
            companies in the financial services industry.
          </p>
        </>
      }
    />
  )
}

export default IndustriesSection5
