import { twMerge } from 'tailwind-merge'

type Props = {
  heading: string | React.ReactNode
  text: string | React.ReactNode
  classNames?: {
    container?: string
    heading?: string
    text?: string
  }
}

export const SectionType6 = ({ heading, text, classNames }: Props) => {
  return (
    <div
      className={twMerge(
        'md: mb-4 flex flex-col gap-6 md:flex-row  md:items-center md:gap-10',
        classNames?.container
      )}
    >
      <div className='flex-1'>
        <h3
          className={twMerge(
            'font-lato flex-1 pr-8 text-[22px] font-medium leading-[26.4px] tracking-[-0.2px] text-black md:pr-0 md:text-right md:text-[26px] md:font-semibold md:leading-[32px]',
            classNames?.heading
          )}
        >
          {heading}
        </h3>
      </div>
      <div className='flex-1'>
        <p
          className={twMerge(
            ' flex-1 text-[14px] leading-[18px] text-[#666666] md:px-0',
            classNames?.text
          )}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
