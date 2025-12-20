import img from '@images/Services/img3.png'

import { SectionType2 } from '@components/Sections/SectionType2'

export const HybridCloud = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img}
      imgAlt={'Hybrid Cloud Services'}
      heading={'Hybrid Cloud Services'}
      text={
        <>
          <p className='mt-12'>
            Changing business requires hybrid multi cloud solutions with “as a
            service” simplicity and complete compatibility from everywhere. With
            a common approach and experience, White Code Labs will help you
            leverage the cloud for faster, more dynamic delivery of services and
            frictionless data movement.
          </p>
          <p>
            Our hybrid multi cloud enables you to meet your cloud needs by
            extending an on-premises environment seamlessly into the public
            cloud, making it more agile, scalable, efficient, and cost
            effective.
          </p>
        </>
      }
      btnLink='/hybrid-cloud'
    />
  )
}
