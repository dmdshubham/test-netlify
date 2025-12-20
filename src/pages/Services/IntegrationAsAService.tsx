import { SectionType2 } from '@components/Sections'

import img from '@images/Services/integrationasaservice.png'

const IntegrationAsAService = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img}
      imgAlt='Integration-as-a-Service'
      heading='Integration-as-a-Service'
      rtl
      text={
        <>
          <p>
            White Code Labs delivers Integration-as-a-Service that turns legacy
            systems and data silos into a connected, agile enterprise.
          </p>
          <p>
            We align architecture, data, and expertise to reduce operational
            costs, accelerate product launches, and unlock new revenue streams
            providing a clear and measurable ROI from day one.
          </p>
        </>
      }
    />
  )
}

export default IntegrationAsAService
