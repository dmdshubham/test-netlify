import { SectionType2 } from '@components/Sections'

import img from '@images/Services/dataOps.png'

const DataOps = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img}
      imgAlt={'DataOps'}
      heading={'DataOps'}
      text={
        <>
          <p>
            Turn data into a dependable business asset. White Code Labs brings
            together data engineering, platform architecture, and domain
            expertise to design and operate data systems that are reliable,
            scalable, and trusted across the organization.
          </p>
          <p>
            Our DataOps services modernize data pipelines with automation,
            governance, and observability at the core—enabling faster insights,
            higher data quality, and confident decision-making at scale. Build a
            competitive advantage by ensuring your data is always accurate,
            timely, and ready to power growth.
          </p>
        </>
      }
    />
  )
}

export default DataOps
