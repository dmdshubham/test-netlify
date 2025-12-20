import React from 'react'
import { twMerge } from 'tailwind-merge'
import { SectionInner, SectionOuter } from '..'
import { useSwiper } from 'swiper/react'

type Props = {
  bg: string
  bgSmall: string
  textColor?: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  classNames?: {
    container?: string
    heading?: string
    text?: string
  }
  bannerClassname?: string;
}

export const SectionType1 = ({
  bg,
  bgSmall,
  classNames,
  heading,
  text,
  bannerClassname
}: Props) => {
  const swiper = useSwiper()
  return (
    <SectionOuter
      className={twMerge(`md:bg-[url(${bg})] bg-[url(${bgSmall})] flex  items-center bg-cover mt-10 bg-[30%] h-80 bg-no-repeat md:bg-center`, bannerClassname)}
    >
      <SectionInner className='w-full xl:px-0'>
        <div className='relative -top-16 flex w-full max-w-full flex-col gap-2 md:top-0 md:w-[766px]'>
          <h2
            className={twMerge(
              'font-lato text-left text-[24px] font-bold leading-[34px] tracking-[-0.2px] md:mr-auto md:max-w-[65%] ',
              classNames?.heading
            )}
          >
            {heading}
          </h2>
          <div
            className={twMerge(
              'flex w-[72%] flex-col gap-4 text-[15px] font-normal leading-[21px] text-[#666666] md:w-[75%] ',
              classNames?.text
            )}
          >
            {text}
          </div>
        </div>
        <button
          onClick={() => {
            swiper.slideTo(1)
          }}
          className='absolute bottom-6 left-1/2 z-10 hidden  w-fit -translate-x-1/2 justify-center  p-5 md:block  '
        >
          <div className='animate-[Jump_1.2s_infinite]'>
            <div className='flex -rotate-[135deg] '>
              <div className='h-[0.95rem] w-[0.225rem] rounded-bl-full rounded-tl-full bg-[#313131]'></div>
              <div className='h-[0.225rem] w-[0.75rem] rounded-tr-full bg-[#313131] '></div>
            </div>
          </div>
        </button>
      </SectionInner>
    </SectionOuter>
  )
}
