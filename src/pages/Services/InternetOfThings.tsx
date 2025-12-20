// import React from 'react'
import img from '@images/Services/iot-img.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const InternetOfThings = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img}
      imgAlt={'Internet of Things'}
      heading={'Internet of Things'}
      rtl={true}
      text={
        <>
          <p>
            Unleash the power of a unified and hyper-connected ecosystem with
            our IoT services and solutions. Boost efficiency, streamline
            processes, and unveil unprecedented visibility across departments.
          </p>
          <p>
            We provide advanced IoT services and offer custom IoT solutions that
            enable businesses to manage their operational efficiency, set up
            processes, and provide visibility over departments by integrating
            IoT apps, mobile devices, cloud-based IoT applications, and physical
            objects into a hyper-connected ecosystem built around end-users.
          </p>
        </>
      }
      btnLink='/internet-of-thing'
    />
  )
}
