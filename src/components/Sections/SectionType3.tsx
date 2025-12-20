import { twJoin, twMerge } from 'tailwind-merge'
import { Button, SectionHeader, SectionInner, SectionOuter } from '../common'

type Props = {
  img: string
  imgSmall: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  cards: {
    heading: string
    text: string
    btnText: string
    btnLink: string
  }[]
  classNames?: {
    container?: string
    heading?: string
    text?: string
  }
}

export const SectionType3 = ({
  img,
  imgSmall,
  heading,
  text,
  classNames,
  cards,
}: Props) => {
  return (
    <SectionOuter
      className={twMerge(
        'flex-col justify-start gap-10 bg-white pt-0 md:pt-10',
        classNames?.container
      )}
    >
      <div
        className={`bg-[url(${imgSmall})] bg-[#CFD1D3] md:bg-[url(${img})] flex min-h-[430px] w-full items-start  justify-start bg-cover   bg-center bg-no-repeat md:min-h-[317px] md:items-center md:px-16`}
      >
        <SectionInner className='w-full gap-4 pt-10 md:gap-4 md:pt-0'>
          <SectionHeader
            className={twMerge(
              'text-left text-[24px] font-semibold md:text-[26px]',
              classNames?.heading
            )}
          >
            {heading}
          </SectionHeader>
          <p
            className={twMerge(
              'max-w-[30rem] text-[14px] font-normal leading-[18px] text-[#313131]',
              classNames?.text
            )}
          >
            {text}
          </p>
        </SectionInner>
      </div>
      <div className='flex flex-col gap-5 px-8 md:flex-row'>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </SectionOuter>
  )
}

const Card = ({
  heading,
  text,
  btnText,
}: {
  heading: string
  text: string
  btnText: string
}) => (
  <div
    className={twJoin(
      'max-w-[28rem] bg-white text-center md:text-left ',
      'rounded-xl p-4 px-6 shadow-[0px_0px_8px_1px_#0000001A] md:px-4 ',
      'flex flex-col items-center justify-between gap-2 border md:items-start '
    )}
  >
    <h4 className='font-lato text-[14.5px] font-bold leading-[20px] tracking-[0.1px] text-[#313131] md:text-[15px] md:leading-[22px]'>
      {heading}
    </h4>
    <p className='text-[14.5px] leading-[20px] tracking-[0.1px] text-[#666666] md:mb-5 md:text-[15px] '>
      {text}
    </p>
    <Button varient='primary' text={btnText} />
  </div>
)
