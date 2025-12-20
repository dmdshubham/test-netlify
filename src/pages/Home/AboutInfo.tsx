import React from 'react'
import Img1 from '@images/Home/About/img1.png'
import Img2 from '@images/Home/About/img2.jpeg'
import Img3 from '@images/Home/About/img3.png'

import { twMerge } from 'tailwind-merge'
import {
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'

interface CardImageProps {
  image: string // URL of the image
  className?: string // Optional Tailwind CSS classes
}

interface CardTextProps {
  title: string
  text: string
  className?: string // Optional Tailwind CSS classes
}

interface CardProps extends CardImageProps, CardTextProps {
  classNames?: {
    container?: string // Optional Tailwind CSS classes for container
    image?: string // Optional Tailwind CSS classes for image
    text?: string // Optional Tailwind CSS classes for text content
  }
}

const Card: React.FC<CardProps> = ({ title, text, image, classNames }) => (
  <div
    className={twMerge(
      'md:w-[354px] max-w-full border shadow-[0_.2rem_.3rem_rgba(0,0,0,.1)] rounded-2xl overflow-hidden',
      classNames?.container
    )}
  >
    <img
      src={image}
      className={twMerge(
        'md:object-scale-down h-auto w-full',
        classNames?.image
      )}
      alt='Card'
    />
    <div className={twMerge('p-3 [&>*]:text-[15px]', classNames?.text)}>
      <h5 className='font-lato leading-[26px] font-bold  text-[#313131]'>
        {title}
      </h5>
      <p className='text-[#666666] leading-[22px] '>{text}</p>
    </div>
  </div>
)

const AboutInfo = () => {
  return (
    <SectionOuter className='bg-white'>
      <SectionInner>
        <SectionHeader>About Us</SectionHeader>
        <div className='min-h-[440px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3'>
          <div className='col-span-1 '>
            <Card
              title='Technology Domains'
              text='Build a digital infrastructure with new technologies that
                    enables your enterprise to create a long-lasting value.'
              image={Img1}
              classNames={{ container: 'h-full' }}
            />
          </div>
          <div className='col-span-1 flex flex-col gap-6 md:gap-3'>
            <Card
              title='Insights'
              text='Explore all our resources and understand our thoughts on topics that matter to you.'
              image={Img2}
              classNames={{
                container: ' h-fit',
                text: '[&>*]:m-0',
              }}
            />
            <Card
              title='Innovate'
              text='We constantly innovate for your every business need, so you
                        can create long-term value for your customers.'
              image={Img3}
              classNames={{
                container: ' h-fit',
                text: '[&>*]:m-0',
              }}
            />
          </div>
        </div>
      </SectionInner>
    </SectionOuter>
  )
}

export default AboutInfo
