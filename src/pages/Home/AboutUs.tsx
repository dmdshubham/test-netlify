// import React from 'react'
import Hero from '@images/Home/About/about-us-2.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurMission = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'About Us'}
      heading={'About Us'}
      rtl={true}
      btnLink='/about-us'
      text={
        <>
          <br />
          <p>
            White Code Labs architects secure, scalable digital ecosystems that
            deliver measurable enterprise value.
          </p>
          <p>
            We modernize legacy infrastructure, integrate mission-critical
            systems, engineer cloud-native, data-driven, and AI-powered
            platforms designed for 99.9% uptime, regulatory compliance, and 3x
            faster time-to-market.
          </p>
        </>
      }
    />
  )
}

export default OurMission
