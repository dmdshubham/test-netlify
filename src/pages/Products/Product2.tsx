// import React from 'react'
import img1 from '@images/Products/product-02.jpg'

import { SectionType2 } from '@components/Sections/SectionType2'

export const Product2 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Ice Clusters'}
      heading={'Ice Clusters'}
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
