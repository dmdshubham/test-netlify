// import React from 'react'
import Hero from '@images/AboutUs/Capabilities/our-capabilities-img.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurCapabilities = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={Hero}
      imgAlt={'Our Capabilities'}
      heading={'Our Capabilities'}
      text={
        <>
          <p>
            White Code Labs is an award-winning, enterprise software company. We
            combine insights, innovation and our deep technical expertise, to
            develop software services and solutions that enable businesses to
            steer through their digital journey.
          </p>
          <p>
            Our deep technical expertise puts us in an unique position to help
            you use the right technology to address your most complex and
            critical challenges,—whether it is through faster cloud migration,
            or making the most of your data through applied intelligence. Our
            strategy has always been shaped around helping our customers embrace
            the full potential of new technologies
          </p>
        </>
      }
    />
  )
}

export default OurCapabilities
