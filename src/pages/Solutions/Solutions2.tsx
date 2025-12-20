import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section2.jpg'

const Solutions2 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Solution 2'}
      heading={'Intelligent Automation Solutions'}
      text={
        <>
          <p className='mt-2'>
            Drive efficiency at scale. Our intelligent automation eliminates up
            to 80% of manual tasks and cuts operational costs by up to 60%, all
            without adding staff.
          </p>
          <p>
            From sales and finance to cross-functional workflows, we create
            systems for speed, accuracy, and predictability. The result?
            Sustained productivity gains and ROI that grows over time.
          </p>
        </>
      }
      btnLink='/cloud-service'
      rtl
    />
  )
}

export default Solutions2
