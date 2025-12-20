import { twMerge } from 'tailwind-merge'
import { SectionInner } from '../../components/common'

type Props = {
  img: string
  imgAlt: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  classNames?: {
    container?: string
  }
  rtl?: boolean
}

export const SectionType5 = ({
  img,
  imgAlt,
  heading,
  text,
  rtl,
  classNames,
}: Props) => {
  return (
    <SectionInner className='h-full max-h-full overflow-hidden px-0'>
      <div
        className={twMerge(
          ' flex h-full max-h-full flex-wrap-reverse items-stretch justify-center gap-6 md:gap-8',
          rtl ? 'flex-row-reverse ' : '   ',
          classNames?.container
        )}
      >
        <div className='sm:flex-1 md:pt-16'>
          <h5 className='font-lato mb-2 font-bold md:text-[14.5px] md:leading-[20px]'>
            {heading}
          </h5>
          <div className='flex flex-col justify-center gap-6 text-[15px] leading-[22px] text-[#666666]'>
            {text}
          </div>
        </div>

        <div className=' flex h-full items-center justify-center overflow-hidden rounded-xl  sm:flex-1'>
          <img src={img} alt={imgAlt} className='h-full w-full object-cover ' />
        </div>
      </div>
    </SectionInner>
  )
}
