// import React from 'react'
import Hero from '@images/Home/OurMission/our-mission-img-2.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurMission = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Our Mission'}
      heading={'Our Mission'}
      text={
        <>
          <br />
          <br />
          <p>
            We engineer enterprise-grade platforms that cut operational costs
            30-50%, accelerate time-to-market 60%, and deliver 99.99% uptime.
          </p>
          <p>
            We architect your competitive moat—unlocking new revenue streams and
            future-proofing your investments to scale 10x without proportional
            cost increases, so you lead markets with confidence, not just keep
            up.
          </p>
        </>
      }
    />
  )
}

export default OurMission
