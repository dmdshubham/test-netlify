import { SectionOuter, SectionInner } from '@components/common'
import { Card } from '@components/common/Cards'
import img1 from '@images/HybridClouds/img4.png'
import img2 from '@images/HybridClouds/img5.png'

const cardData = [
  {
    title: 'Your data is safe with us',
    text: 'Get a strong approach to hybrid security and compliance using the same tools.',
    image: img1,
    imageAlt: 'Hybrid Cloud Management',
  },
  {
    title: 'Complement data center compute',
    text: 'Temporarily move data from on-premises to the cloud for data processing.',
    image: img2,
    imageAlt: 'Hybrid Cloud Management',
  },
]

export const YourDataIsSafe = () => {
  return (
    <SectionOuter className='bg-[#EDF2F7] pt-0'>
      <div className='my-auto flex h-full w-full items-center bg-white md:h-[80%]'>
        <SectionInner className='md:gap-4'>
          <div className='flex h-full w-full flex-wrap justify-center gap-4 md:flex-nowrap'>
            {cardData?.map((card) => (
              <Card
                {...card}
                classNames={{
                  container: 'md:max-h-[24rem] max-w-[430px]',
                }}
              />
            ))}
          </div>
        </SectionInner>
      </div>
    </SectionOuter>
  )
}
