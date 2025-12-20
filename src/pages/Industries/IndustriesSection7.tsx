import { SectionType2 } from '@components/Sections'
import img1 from '@images/Industries/section-7.png'

const IndustriesSection7 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Industries Section'}
      heading={'Media, Gaming & Digital Platforms'}
      text={
        <>
          <p>
            We support media, gaming, and digital platform organizations with
            enterprise-grade services, scalable solutions, and purpose-built
            products that deliver high performance, control infrastructure
            costs, and enable reliable scaling across high-traffic,
            latency-sensitive platforms.
          </p>
          <p>
            Our products and solutions are designed to address the operational
            and technical challenges of modern digital platforms, helping
            organizations handle traffic spikes, optimize cloud and Kubernetes
            workloads, and maintain system reliability during launches, live
            events, and peak usage periods.
          </p>
        </>
      }
    />
  )
}

export default IndustriesSection7
