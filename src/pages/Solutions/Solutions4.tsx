import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section4.png'

const Solutions4 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-[#F7F3F3]' }}
      img={img1}
      imgAlt={'Solution 4'}
      heading={'Analytics & Intelligence Transformation Solutions'}
      text={
        <>
          <p className='mt-2'>
            Achieve a 15–25% profitability lift with data. We provide the
            AI-powered analytics and real-time intelligence you need to make
            faster, more accurate decisions and uncover millions in cost savings
            and new revenue.
          </p>
          <p>
            By transforming raw data into a strategic asset, we deliver insights
            5–10x faster to optimize performance, fuel innovation, and drive
            measurable financial impact from day one.
          </p>
        </>
      }
      btnLink='/cloud-service'
      rtl
    />
  )
}

export default Solutions4
