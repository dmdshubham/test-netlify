import React from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionOuterProps {
  className?: string
  children: React.ReactNode
}

export const SectionOuter: React.FC<SectionOuterProps> = ({
  className,
  children,
}) => (
  <div
    className={twMerge(
      'page max-w-screen flex h-full min-h-[100dvh] w-full items-center justify-center bg-[#F7F3F3] py-14',
      className
    )}
  >
    {children}
  </div>
)

interface SectionInnerProps {
  className?: string
  children: React.ReactNode
}

export const SectionInner: React.FC<SectionInnerProps> = ({
  className,
  children,
}) => (
  <div
    className={twMerge(
      'mx-auto flex  max-w-6xl flex-col gap-6 px-8 md:gap-12',
      className
    )}
  >
    {children}
  </div>
)

interface SectionHeaderProps {
  className?: string
  children: React.ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => (
  <div
    className={twMerge(
      'font-lato text-center text-[22px] font-bold leading-[34px]  tracking-[-0.03rem] text-[#313131]',
      className
    )}
  >
    {children}
  </div>
)
