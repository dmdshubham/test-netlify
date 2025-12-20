import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const HeroBanner = ({
  backgroundImage,
  children,
  classNames,
}: {
  backgroundImage: string
  children: ReactNode
  classNames?: { container?: string; innerContainer?: string }
}) => {
  return (
    <div
      className={twMerge(
        `bg-[url(${backgroundImage})] bg-center bg-cover bg-no-repeat h-full flex items-center`,
        classNames?.container
      )}
    >
      <div
        className={twMerge(
          'max-w-6xl mx-auto h-96 flex flex-col justify-center items-center px-6 text-center space-y-8 md:space-y-4',
          classNames?.innerContainer
        )}
      >
        {children}
      </div>
    </div>
  )
}
