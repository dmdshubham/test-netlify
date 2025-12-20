import { twMerge } from 'tailwind-merge'
import {
  Button,
  SectionHeader,
  SectionInner,
  SectionOuter,
} from '../../components/common'
import { useState } from 'react'
import { ReactNode } from '@tanstack/react-router'
import { FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import { BiSolidMessageRoundedDots } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

export const GetInTouch = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [webSite, setWebSite] = useState('')

  const handleSubmit = () => {
    // e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { fullName, email, phone, message })
    setFullName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }
  return (
    <SectionOuter>
      <SectionInner className='w-full px-6'>
        <SectionHeader>Get In Touch!</SectionHeader>

        <form
          action='#'
          onSubmit={handleSubmit}
          className='mx-auto grid h-fit w-full max-w-[814px] grid-cols-1 gap-5 rounded-xl bg-white p-5 shadow-[0px_0px_11px_1px_rgba(0,0,0,0.2)] md:grid-cols-2'
        >
          <Input
            icon={<BsPersonFill className='w-4 text-lg' />}
            required
            label='Full Name '
            type='text'
            name='fullName'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Please enter your full name'
            classNames={{ container: 'col-span-1 ' }}
          />
          <Input
            icon={<MdMail className='w-4 text-lg' />}
            required
            label='Email '
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='example@gmail.com'
            classNames={{ container: 'col-span-1' }}
          />
          <Input
            required
            icon={<FaPhoneAlt className='w-4 ' />}
            label='Phone/Mobile Number'
            type='text'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Please enter your phone number'
            classNames={{ container: 'col-span-1 ' }}
          />
          <Input
            icon={<FaGlobe className='w-4 ' />}
            label='Company Website'
            type='url'
            name='website'
            value={webSite}
            onChange={(e) => setWebSite(e.target.value)}
            placeholder='example.com'
            classNames={{ container: 'col-span-1 ' }}
          />
          <TextArea
            icon={<BiSolidMessageRoundedDots className='w-4 text-lg' />}
            label='Message '
            required
            name='message'
            value={message}
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Please let us know we can help you.'
            classNames={{ container: 'col-span-1 md:col-span-2' }}
          />

          <div className='col-span-1 flex justify-center md:col-span-2'>
            <Button text={'Submit'} varient='primary' />
          </div>
        </form>
      </SectionInner>
    </SectionOuter>
  )
}

const Input = ({
  icon,
  label,
  name,
  classNames,
  ...rest
}: {
  icon: ReactNode
  label: string
  classNames?: {
    container?: string
    input?: string
  }
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={twMerge(
        'flex w-full flex-col gap-2',
        'text-[13px] leading-[22px]',
        classNames?.container
      )}
    >
      <label htmlFor={name} className='flex items-center gap-1'>
        {icon}
        <span>{label}</span>
        {rest?.required ? <span className='text-red-500'>*</span> : null}
      </label>
      <input
        {...rest}
        className={twMerge(
          'rounded border border-[#C4C4C4] p-2 outline-none',
          classNames?.input
        )}
      />
    </div>
  )
}

const TextArea = ({
  required,
  icon,
  label,
  name,
  classNames,
  ...rest
}: {
  icon: ReactNode
  label: string
  required?: boolean
  classNames?: {
    container?: string
    input?: string
  }
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-1',
        'text-[13px] leading-[22px]',
        classNames?.container
      )}
    >
      <label htmlFor={name} className='flex items-center gap-2'>
        {icon}
        <span>{label}</span>
        {required ? <span className='text-red-500'>*</span> : null}
      </label>
      <textarea
        {...rest}
        className={twMerge(
          'rounded border border-[#C4C4C4] p-2 outline-none',
          classNames?.input
        )}
      />
    </div>
  )
}
