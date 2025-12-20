// import React from 'react'
import img1 from '@images/Products/prod4.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Product4 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Product 4'}
      heading={'Product 4'}
      text={
        <>
          <p>
            Ice Clusters helps teams take control of Kubernetes costs by quietly
            identifying idle and underutilized workloads and turning waste into
            clear, safe savings.
          </p>
          <p>
            Delivered as a lightweight, script-based CLI, Ice Clusters analyzes
            real CPU and memory usage to right-size resources, recommend smart
            autoscaling, and highlight meaningful cost reductions— all without
            dashboards, agents, or opaque machine-learning decisions.
          </p>
        </>
      }
      btnLink='/cloud-service'
      rtl
    />
  )
}
