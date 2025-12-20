import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section6.jpg'

const Solutions4 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Solution 6'}
      heading={'Streamlined Software Delivery Solutions'}
      text={
        <>
          <p className='mt-2'>
            Ship better software, 50–70% faster. Our integrated delivery
            framework—powered by DevOps, AI, and automated CI/CD—cuts
            development costs by 30–40% while dramatically improving quality and
            security.
          </p>
          <p>
            The result: 60% faster releases, an 80% boost in application
            quality, and over 50% reduced time-to-market. We turn your software
            lifecycle from a cost center into a scalable, high-velocity
            advantage.
          </p>
        </>
      }
      btnLink='/cloud-service'
      rtl
    />
  )
}

export default Solutions4
