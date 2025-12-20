import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css' // core Swiper styles
import 'swiper/css/navigation' // Optional navigation styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import marissaLeibowitz from '@images/Home/Testimonials/marissa.png'
import LisaLow from '@images/Home/Testimonials/lisa.png'
import michael from '@images/Home/Testimonials/michael.png'
import molly from '@images/Home/Testimonials/Molly.png'
import {
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

const testimonials = [
  {
    avatar: molly,
    name: 'Molly Aitken',
    link: 'https://wellfound.com/u/mollyaitken99',
    occupation: 'Senior Operations Manager,',
    company: { name: 'Mastercard', textColor: '#F54A9C' },
    feedback:
      "I have been working directly with Andy since 2021. He has deployed several large-scale, complex systems efficiently. I have been extremely impressed with his execution skills. He came up with innovative ideas for solving critical problems I hadn't thought about. I can recommend him without any hesitation.",
  },
  {
    avatar: LisaLow,
    name: 'Lisa Low',
    link: 'https://wellfound.com/u/lisa-low-92',
    occupation: 'Technical Project Manager,',
    company: { name: 'Navy Federal Credit Union', textColor: '#E8673E' },
    feedback:
      "I have worked with Andy closely for 2 years, during my time at Hertz. I couldn't be happier with the extreme value he brought. Andy was by our side throughout all the steps of development from the beginning, making sure everything was how we intended. He was always responsive and accessible whenever I needed him.",
  },
  {
    avatar: michael,
    name: 'Michael Phillips',
    link: 'https://www.linkedin.com/in/michael-phillips-b3993222b',
    occupation: 'Project Delivery Manager,',
    company: { name: 'Salesforce', textColor: '#9857EB' },
    feedback:
      'We worked with Andy on a few of our data migration projects. I found Andy and his team to be very knowledgeable, thorough, efficient, and easy to work with. As a Project Manager, I am always busy juggling projects and am constantly nudging coworkers to get information, hence I appreciate a lot that they constantly reached out to me during a project to check-in, and give regular updates.',
  },
  {
    avatar: marissaLeibowitz,
    name: 'Marissa Leibowitz',
    link: 'https://wellfound.com/u/marissa-leibowitz-991',
    occupation: 'Digital Product Manager,',
    company: { name: 'Hertz', textColor: '#6083FF' },
    feedback:
      "I have worked with Andy closely for 2 years, during my time at Hertz. I couldn't be happier with the extreme value he brought. Andy was by our side throughout all the steps of development from the beginning, making sure everything was how we intended. He was always responsive and accessible whenever I needed him.",
  },
]

const TestiMonialCard = ({
  avatar,
  feedback,
  name,
  occupation,
  company,
}: {
  avatar: string
  name: string
  occupation: string
  feedback: string
  company: { name: string; textColor: string }
}) => {
  return (
    <div className='max-w-[45rem] min-h-[19rem] md:min-h-[15rem] bg-white rounded-lg shadow-md border flex flex-col gap-4 p-5 px-8 lg:px-auto my-2 mx-auto'>
      <div className='flex gap-6 items-center'>
        <div className='w-[68px] aspect-square rounded-full '>
          <img src={avatar} alt='' className='w-full h-full' />
        </div>

        <div className='flex-1 flex flex-col gap-[0.1rem] justify-center font-lato'>
          <h3 className='font-bold text-[#313131] text-[18px] leading-[21px] font-lato'>
            {name}
          </h3>
          <div className='flex flex-col md:flex-row md:gap-1 items-baseline font-lato'>
            <span className='text-[12px] leading-[22px] text-[#666666] font-medium '>
              {occupation}
            </span>
            <span
              className={twMerge(
                'text-[12px] leading-[22px] font-semibold',
                `text-[${company.textColor}]`
              )}
            >
              {company.name}
            </span>
          </div>
        </div>
      </div>
      <p className='text-[15px] leading-[22px] text-[#313131]'>{feedback}</p>
    </div>
  )
}

export default function Testmonial() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SectionOuter className='bg-[#F7F3F3] px-0'>
      <SectionInner className='px-0'>
        <div className='flex flex-col gap-2 items-center'>
          <SectionHeader>Testimonials</SectionHeader>
          <h5 className='text-center text-[14px] leading-[18px] text-[#666666] '>
            Hear from our colleagues and clients.
          </h5>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
          }}
          className='relative h-fit w-full max-w-[100vw] '
          loop
          autoplay
        >
          {testimonials?.map((testimonial, i) => (
            <SwiperSlide key={i} className='px-8 md:px-0 flex justify-center'>
              <TestiMonialCard {...testimonial} />
            </SwiperSlide>
          ))}
          <div className='max-w-[44rem] mx-auto pt-10 sm:pl-5 flex justify-center md:justify-start'>
            <PaginationDots
              count={testimonials?.length}
              activeIndex={activeIndex}
            />
          </div>

          <div className='absolute top-[calc(35%)] z-10 w-full flex justify-center'>
            <NavBtn type='prev' className='' />
            <div className='max- w-[46rem]'></div>
            <NavBtn type='next' className='' />
          </div>
        </Swiper>
      </SectionInner>
    </SectionOuter>
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
    <div className='w-[105px] h-[3px] flex items-center gap-1'>
      {Array.from({ length: count })?.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            swiper.slideToLoop(i)
          }}
          className={'flex-1 flex justify-center items-center py-1'}
        >
          <div
            className={twMerge(
              'transition-all duration-100 bg-[#333333] rounded-xs',
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

const NavBtn = ({
  type,
  className,
}: {
  type: 'prev' | 'next'
  className?: string
}) => {
  const swiper = useSwiper()

  return (
    <button
      onClick={() =>
        type === 'next' ? swiper.slideNext() : swiper.slidePrev()
      }
      className={className}
    >
      {type === 'next' ? (
        <div>
          <svg
            width='58'
            height='58'
            viewBox='0 0 58 58'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_2068_629)'>
              <circle
                cx='29'
                cy='27'
                r='21'
                transform='rotate(-180 29 27)'
                fill='white'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M25.0331 37.0875L22.9669 34.9125L31.8221 26.5L22.9669 18.0875L25.0331 15.9125L36.1779 26.5L25.0331 37.0875Z'
                fill='#666666'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_2068_629'
                x='0'
                y='0'
                width='58'
                height='58'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='2' />
                <feGaussianBlur stdDeviation='4' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_2068_629'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_2068_629'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </div>
      ) : (
        <div>
          <svg
            width='58'
            height='58'
            viewBox='0 0 58 58'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_2068_621)'>
              <circle cx='29' cy='27' r='21' fill='white' />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M32.9669 16.9125L35.0331 19.0875L26.1779 27.5L35.0331 35.9125L32.9669 38.0875L21.8221 27.5L32.9669 16.9125Z'
                fill='#666666'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_2068_621'
                x='0'
                y='0'
                width='58'
                height='58'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='2' />
                <feGaussianBlur stdDeviation='4' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_2068_621'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_2068_621'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </button>
  )
}
