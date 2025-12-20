import { twMerge } from 'tailwind-merge'

type Props = {
  varient?: 'outline' | 'primary'
  text: string
  className?: string
  onClick?: () => void
}

const btnClasses = {
  common:
    'shadow font-lato text-[14px] leading-[16.8px] font-bold inline-flex items-center px-4 py-2 rounded-full',
  primary: ' bg-[#0C74BC] hover:bg-[#174C72] text-[#fff] ',
  outline:
    ' border border-[#A9A9A9] bg-white hover:bg-[#0C74BC] hover:text-white ',
}

export const getBtnClasses = (varient: Props['varient']) =>
  `${btnClasses.common} ${btnClasses[varient ?? 'outline']}}`

export const OutLineBtnClasses = btnClasses.common + btnClasses.outline

export const Button = ({
  varient = 'outline',
  text,
  className,
  ...rest
}: Props) => {
  return (
    <button className={twMerge(getBtnClasses(varient), className)} {...rest}>
      {text}
    </button>
  )
}
