// import React from 'react'
import Hero from '@images/Home/OurSolutions/our-solutions-1.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurSolutions = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Our Solutions'}
      heading={'Our Solutions'}
      btnLink='/solutions'
      rtl={true}
      text={
        <>
          <br />
          <p>
            We deliver enterprise-grade solutions that drive measurable results,
            building the resilient, high-performance foundations your business
            needs to innovate and lead.
          </p>
          <p>
            Our focus spans intelligent automation, data unification, ecosystem
            modernization, streamlined delivery, and cloud cost optimization,
            ensuring your technology is not only powerful but also
            cost-efficient and scalable.
          </p>
        </>
      }
    />
  )
}

export default OurSolutions
