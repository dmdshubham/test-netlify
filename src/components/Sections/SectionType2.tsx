import { twMerge } from 'tailwind-merge'
import {
  Button,
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'

type Props = {
  img: string
  imgAlt: string
  heading: string | React.ReactNode
  text: string | React.ReactNode
  btnLink?: string
  classNames?: {
    container?: string
  }
  rtl?: boolean
}

export const SectionType2 = ({
  img,
  imgAlt,
  heading,
  text,
  btnLink,
  classNames,
  rtl,
}: Props) => {
  return (
    <SectionOuter className={classNames?.container}>
      <SectionInner>
        {heading ? <SectionHeader>{heading}</SectionHeader> : null}

        <div
          className={twMerge(
            'flex flex-wrap-reverse justify-center gap-6 md:gap-12',
            rtl ? 'flex-row-reverse ' : '   '
          )}
        >
          <div className='flex flex-col justify-center gap-6 px-2 text-[16px] leading-[22px] text-[#666666] sm:flex-1'>
            {text}
            {btnLink ? (
              <div className='flex w-full justify-center md:justify-start'>
                <a href={btnLink} target='_self'>
                  <Button
                    varient={'outline'}
                    text='Learn More'
                    className={'md:px-auto px-6'}
                  />
                </a>
              </div>
            ) : null}
          </div>
          <div className='flex items-center sm:flex-1'>
            <img
              src={img}
              alt={imgAlt}
              className='mx-auto h-auto max-h-full w-[90%] max-w-full rounded-md md:h-[438px] md:w-[508px]'
            />
          </div>
        </div>
      </SectionInner>
    </SectionOuter>
  )
}
