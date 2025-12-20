import { ReactNode, useState } from 'react'
import logo from '@images/common/logo.png'
import logoIcon from '../../assets/icons/LogoIcon.svg'
import CloseIcon from '../../assets/icons/CloseIcon.svg'
import MenuIcon from '../../assets/icons/MenuIcon.png'
import { Link } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'
import facebook from '@images/common/facebook-header.png'
import twitter from '@images/common/twitter-header.png'
import { animated, config, useSpringValue } from '@react-spring/web'

// Extracted Navigation Link component
const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string
  children: ReactNode
  onClick: () => void
}) => (
  <li className='block p-2'>
    <Link
      to={href}
      className='font-lato md:font-rubik relative !pb-1 pt-3 text-[20px] font-medium leading-[34px] text-[#313131] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#0C74BC] after:transition-all after:duration-300 after:ease-in-out after:content-[""] hover:after:scale-x-100 md:py-0 md:text-[16px] md:leading-[18px]'
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
)

// Extracted Copyright component
const Copyright = () => (
  <div className='flex flex-col gap-1 border-t-2 pb-8'>
    <div className='flex flex-wrap justify-center gap-1 py-2 text-center text-[16px] leading-[30px] text-[#666666CC]'>
      @2023 XYZ Innovations, Inc.
      <br />
      <a href='#'>All rights reserved.</a>
    </div>
    <div className='flex justify-center space-x-4'>
      <a
        href='https://www.facebook.com/whitecodelabs/'
        rel='noreferrer'
        target='_blank'
        className='h-8 w-8 rounded-full bg-white'
      >
        <img src={facebook} alt='Facebook' className='h-full w-full' />
      </a>
      <a
        href='https://twitter.com/whitecodelabs'
        rel='noreferrer'
        target='_blank'
        className='h-8 w-8 rounded-full bg-white'
      >
        <img src={twitter} alt='Twitter' className='h-full w-full' />
      </a>
    </div>
  </div>
)

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [startHeight, endHeight] = ['64px', `${window.innerHeight}px`]

  const springHeight = useSpringValue(startHeight, {
    config: { ...config.stiff, tension: 150 },
  })

  const toggleOpen = () => {
    springHeight.start(isOpen ? startHeight : endHeight)
    setIsOpen((prevOpen) => !prevOpen)
  }

  const closeHeader = () => {
    springHeight.start(startHeight)
    setIsOpen(false)
  }

  return (
    <header
      className={twMerge('fixed top-0 z-20 w-full border-b-2 bg-white shadow')}
    >
      <animated.div
        style={{
          height: springHeight,
        }}
        className={twMerge(
          'mx-auto flex max-w-6xl flex-col overflow-hidden px-2 py-1 md:max-h-[64px]'
        )}
      >
        <div
          className={twMerge(
            ' flex items-center justify-between px-6 py-2 md:border-none xl:px-0',
            isOpen ? 'border-b-2' : ''
          )}
        >
          <Link to='/' className='flex items-center py-1' onClick={closeHeader}>
            <img
              src={logo}
              alt='White Code Labs'
              className='hidden h-6 object-scale-down md:block'
            />
            <img
              src={logoIcon}
              alt='White Code Labs'
              className='block h-full min-h-[2rem] md:hidden'
            />
          </Link>
          <div className='hidden md:block'>
            <ul className='flex items-center justify-between gap-4'>
              <NavLink href='/about-us' onClick={closeHeader}>
                About
              </NavLink>
              <NavLink href='/services' onClick={closeHeader}>
                Services
              </NavLink>
              <NavLink href='/solutions' onClick={closeHeader}>
                Solutions
              </NavLink>
              <NavLink href='/products' onClick={closeHeader}>
                Products
              </NavLink>
              <NavLink href='/industries' onClick={closeHeader}>
                Industries
              </NavLink>
              <NavLink href='/contact-us' onClick={closeHeader}>
                Contact
              </NavLink>
            </ul>
          </div>
          <button
            onClick={toggleOpen}
            className='inline-flex items-center justify-center rounded-md md:hidden'
            aria-label='Toggle Navigation Menu'
          >
            {isOpen ? (
              <img src={CloseIcon} className='h-9 w-9 p-1' aria-hidden='true' />
            ) : (
              <img src={MenuIcon} className='h-9 w-9' aria-hidden='true' />
            )}
          </button>
        </div>
        <div className='flex flex-1 flex-col justify-between md:hidden '>
          <ul className='flex flex-col space-y-2 py-2'>
            <NavLink href='/about-us' onClick={closeHeader}>
              About
            </NavLink>
            <hr className='border-b-2' />
            <NavLink href='/services' onClick={closeHeader}>
              Services
            </NavLink>
            <hr className='border-b-2' />
            <NavLink href='/contact-us' onClick={closeHeader}>
              Contact
            </NavLink>
            {/* <hr className='border-b-2' /> */}
          </ul>
          <Copyright />
        </div>
      </animated.div>
    </header>
  )
}

export default Header
