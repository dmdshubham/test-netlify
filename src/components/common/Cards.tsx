import { twMerge } from 'tailwind-merge'

export interface CardProps {
  image?: string
  title: string
  text: string
  classNames?: {
    container?: string // Optional Tailwind CSS classes for container
    image?: string // Optional Tailwind CSS classes for image
    text?: string // Optional Tailwind CSS classes for text content
    title?: string // Optional Tailwind CSS classes for title
  }
}

export const Card: React.FC<CardProps> = ({
  title,
  text,
  image,
  classNames,
}) => (
  <div
    className={twMerge(
      'flex h-full max-w-full flex-col overflow-hidden rounded-2xl border shadow-[0_.2rem_.3rem_rgba(0,0,0,.1)]',
      classNames?.container
    )}
  >
    {image ? (
      <div className='h-full flex-1 overflow-hidden'>
        <img
          src={image}
          className={twMerge('h-full w-full object-cover', classNames?.image)}
          alt='Card'
        />
      </div>
    ) : null}

    <div className={'h-fit p-4 pb-6 [&>*]:text-[15px]'}>
      <h5
        className={twMerge(
          'font-lato mb-2 font-bold  leading-[26px] text-[#313131]',
          classNames?.title
        )}
      >
        {title}
      </h5>
      <p
        className={twMerge('leading-[22px] text-[#666666] ', classNames?.text)}
      >
        {text}
      </p>
    </div>
  </div>
)
