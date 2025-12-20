// import React from 'react'
import Hero from '@images/Home/OurValues/our-values.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurValues = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Our Values'}
      heading={'Our Values'}
      rtl={true}
      text={
        <>
          <br />
          <br />
          <p>
            At White Code Labs, our values guide every decision and every
            solution we deliver. We believe technology should serve the
            business—not the other way around.
          </p>
          <p>
            We prioritize honesty, practicality, and long-term impact,
            recommending only what truly fits your business, operations, and
            growth stage. We value responsibility over hype and outcomes over
            outputs—if a solution doesn’t drive real revenue, reduce meaningful
            cost, or create lasting value, we won’t ship it.
          </p>
        </>
      }
    />
  )
}

export default OurValues
