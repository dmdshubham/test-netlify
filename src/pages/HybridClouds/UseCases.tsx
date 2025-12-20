import { SectionOuter, SectionInner } from '@components/common'
import { Card } from '@components/common/Cards'
import { SectionType6 } from '@components/Sections'
import img1 from '@images/HybridClouds/img2.png'
import img2 from '@images/HybridClouds/img3.png'

const cardData = [
  {
    title: 'Data protection done right',
    text: 'Back up and restore data everywhere from on premises to the public cloud(s).',
    image: img1,
    imageAlt: 'Hybrid Cloud Management',
  },
  {
    title: 'Get the best of both worlds',
    text: 'Integrate and manage on-prem and public cloud storage to support the same workload.',
    image: img2,
    imageAlt: 'Hybrid Cloud Management',
  },
]
export const UseCases = () => {
  return (
    <SectionOuter className='bg-white py-4 '>
      <SectionInner className=' md:gap-4'>
        <SectionType6
          heading={<span className='lg:pl-44'>Use cases</span>}
          text={
            'Whether migrating data and production applications or extending your data center for backup and recovery, it’s important to move fast without creating more complexity. That’s exactly what your data fabric from us will allow you to do.'
          }
          classNames={{
            text: 'lg:pr-24',
          }}
        />
        <div className='flex h-full w-full  flex-wrap justify-center gap-4 md:flex-nowrap'>
          {cardData?.map((card) => (
            <Card
              {...card}
              classNames={{
                container: 'md:max-h-[24rem]  md:max-w-[430px]',
              }}
            />
          ))}
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
