import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css' // core Swiper styles
import 'swiper/css/navigation' // Optional navigation styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Button } from '@components/common'

import banner1 from '@images/Home/Hero/banner1.png'
import banner2 from '@images/Home/Hero/banner2.png'
import banner3 from '@images/Home/Hero/banner3.png'
import banner4 from '@images/Home/Hero/banner4.png'
import banner5 from '@images/Home/Hero/banner5.png'

import banner1small from '@images/Home/Hero/banner1small.png'
import banner2small from '@images/Home/Hero/banner2small.png'
import banner3small from '@images/Home/Hero/banner3small.png'
import banner4small from '@images/Home/Hero/banner4small.png'

import { useState, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const bannerData = [
  {
    backgroundImage: banner1,
    backgroundImageSmall: banner1small,
    textColor: 'black',
    content:
      'White Code Labs was ranked one of the Top Companies in Hybrid Cloud, alongside; Amazon AWS, Microsoft, Rackspace, Digital Ocean, and RightScale. ',
    btnLink:
      'https://www.whitecodelabs.com/static/media/Innovations-2.51b1eefdc92f5feeef1d.pdf',
  },
  {
    backgroundImage: banner2,
    backgroundImageSmall: banner2small,
    textColor: 'black',
    content:
      'White Code Labs was recognized as one of the Top Disruptors in Cloud Computing, alongside; Cloudera, Digital Ocean and Rackspace.',
    btnLink:
      'https://theceoviews.com/top-10-most-distruptive-cloud-solution-provider-2019/',
  },
  {
    backgroundImage: banner3,
    backgroundImageSmall: banner3small,
    textColor: 'black',
    content:
      'White Code Labs was awarded as one of Top Software Companies in the Financial Services Industry.',
    btnLink:
      'https://www.cfotechoutlook.com/magazines/August2018/Financial_Security/',
  },
  {
    backgroundImage: banner4,
    backgroundImageSmall: banner4small,
    textColor: 'white',
    content:
      'White Code Labs was awarded one of the Top Software Companies in IoT, alongside; IBM, Oracle, Accenture and Honeywell.',
    btnLink: 'https://enterpriseviewpoint.com/iot-innovators-2019/',
  },
  {
    backgroundImage: banner5,
    backgroundImageSmall: banner4small,
    textColor: 'black',
    content:
      'White Code Labs has been recognized as a Top Software Company in the Automation industry.',
    btnLink: 'https://enterpriseviewpoint.com/iot-innovators-2019/',
  },
]

const BannerContent = ({
  backgroundImage,
  backgroundImageSmall,
  content,
  textColor,
  btnLink,
}: {
  backgroundImage: string
  backgroundImageSmall: string
  content: ReactNode
  textColor: string
  btnLink: string
}) => {
  return (
    <div
      className={`md:bg-[url(${backgroundImage})] bg-[url(${backgroundImageSmall})] flex h-full items-center bg-cover bg-[75%] bg-no-repeat md:bg-center`}
    >
      <div className='flex h-96 w-full flex-col items-start justify-start gap-20 px-8 pt-5 text-center md:mx-auto md:max-w-6xl md:justify-end md:gap-10 md:pb-40 md:pt-0 xl:px-0'>
        <h2
          className={twMerge(
            'font-lato max-w-[250px]  text-left text-[21px] font-medium leading-[31.2px] md:mr-auto md:max-w-[65%] md:text-[24px] md:leading-[34px] md:tracking-[-0.2px] ',
            `text-[${textColor}]`
          )}
        >
          {content}
        </h2>
        <div className='flex w-full justify-start'>
          <a href={btnLink} target='_blank'>
            <Button varient={'outline'} text='Learn More' className={''} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function HomeSlider() {
  const swiper = useSwiper()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className='h-[calc(100dvh-4rem)]x md: relative  h-[100dvh]'>
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          onSlideChangeTransitionEnd={(swiper) => {
            setActiveIndex(swiper.realIndex)
          }}
          className=' h-full w-full max-w-[100vw] '
          loop
          autoplay
        >
          {bannerData.map((banner, i) => (
            <SwiperSlide key={i}>
              <BannerContent {...banner} />
            </SwiperSlide>
          ))}
          <div className='absolute bottom-16 z-10 w-full  md:bottom-24'>
            <div className='flex justify-center px-8 md:mx-auto md:max-w-6xl md:justify-start xl:px-0'>
              <PaginationDots
                count={bannerData?.length}
                activeIndex={activeIndex}
              />
            </div>
          </div>
        </Swiper>

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
      </div>
    </>
  )
}

const PaginationDots = ({
  count,
  activeIndex,
}: {
  count: number
  activeIndex: number
}) => {
  const swiper = useSwiper()

  return (
    <div className='flex h-[3px] w-[105px] items-center gap-1'>
      {Array.from({ length: count })?.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            console.log('====================================')
            console.log('Going to ', i)
            console.log('====================================')
            swiper.slideToLoop(i)
          }}
          className={'flex flex-1 items-center justify-center py-1'}
        >
          <div
            className={twMerge(
              'rounded-xs bg-[#333333] transition-all duration-100',
              activeIndex === i
                ? 'h-[0.35rem] w-[21px]'
                : 'h-[0.25rem] w-[15px]'
            )}
          />
        </button>
      ))}
    </div>
  )
}
