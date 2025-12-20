// import React from 'react'
import Hero from '@images/AboutUs/OurVision/our-vision-img.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const OurCapabilities = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={Hero}
      imgAlt={'Our Vision'}
      heading={'Our Vision'}
      rtl={true}
      text={
        <>
          <p>
            At White Code Labs, we envision a world where technology becomes
            truly seamless, empowering organizations to innovate without
            barriers. Our goal is to create intelligent, scalable, and secure
            systems that become the invisible backbone of modern digital
            experiences.
          </p>
          <p>
            We believe the future lies in hybrid cloud ecosystems, AI-driven
            automation, and global collaboration, and we are committed to
            shaping that future with bold ideas, ethical innovation, and
            relentless execution.
          </p>
          <p>We don’t just build for today. We engineer for what’s next.</p>
        </>
      }
    />
  )
}

export default OurCapabilities
