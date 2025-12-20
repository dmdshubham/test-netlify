import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'
import { twJoin } from 'tailwind-merge'

const cardData = [
  {
    heading: 'Power your mission critical applications.',
    text: 'Your enterprise applications are the foundation of your business so you need to stay competitive. Drive new levels of business success by accelerating application',
  },
  {
    heading: 'Accelerate business transformation.',
    text: "When you're developing and testing applications, delivering maximum productivity requires instant production data copies to support developer",
  },
  {
    heading: 'Secure and protect your data.',
    text: 'Rapid recovery from failure or external threats is essential to keeping your business operational. Minimize risk by leveraging integrated data protection',
  },
  {
    heading: 'Comply with regulations.',
    text: 'Knowing the kind of data you store, where it is stored, and about whom, is now an integral part of data management. Dramatically simplify data stewardship.',
  },
]

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
          heading={' Why White Code Labs for Software Development ?'}
          text={
            'White Code Labs provides the most modern, and efficient, software infrastructure to navigate your digital transformation.'
          }
        />
        {/* <div className='mb-4 flex flex-col gap-8 md:flex-row md:gap-10'>
          <h3 className='font-lato flex flex-1 items-center pr-8 text-[22px] font-medium leading-[26.4px] tracking-[-0.2px] text-[#313131] md:pr-0 md:text-right md:text-[26px] md:font-semibold md:leading-[32px]'>
            Why White Code Labs for Software Development ?
          </h3>
          <p className=' flex flex-1 items-center text-[14px] leading-[18px] text-[#666666] md:px-0'>
            White Code Labs provides the most modern, and efficient, software
            infrastructure to navigate your digital transformation.
          </p>
        </div> */}

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4  '>
          {cardData.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </SectionInner>
    </SectionOuter>
  )
}

const Card = ({ heading, text }: { heading: string; text: string }) => (
  <div
    className={twJoin(
      ' max-w-[28rem] bg-white ',
      'rounded-xl p-4 px-6 shadow-[0px_0px_8px_1px_#0000001A] md:px-4 ',
      'flex flex-col gap-2 border md:items-start '
    )}
  >
    <h4 className='font-lato w-[85%] text-[14.5px] font-bold leading-[20px] tracking-[0.1px] text-[#313131] md:text-[15px] md:leading-[22px]'>
      {heading}
    </h4>
    <p className='text-[15px] leading-[22px] tracking-[0.1px] text-[#666666] md:mb-5 md:text-[14px] md:leading-[18px]'>
      {text}
    </p>
  </div>
)
