// import React from 'react'
import img1 from '@images/Construction/product1.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Product1 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Real State Product 1'}
      heading={'Real State Product 1'}
      text={
        <>
          <p>
            Sleepy Cloud is an automated cost-optimization solution that detects
            and shuts down idle virtual machines across AWS, GCP, and Azure.
          </p>
          <p>
            Built on serverless architecture, it continuously analyzes CPU,
            network activity, and utilization patterns to identify underused
            compute resources and reduce unnecessary cloud spend.
          </p>
        </>
      }
    />
  )
}
