import facebook from '@images/common/facebook.png'
import twitter from '@images/common/twitter.png'
import logo_footer from '@images/common/logo_footer.png'
import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <footer className='min-h-[100dvh] w-full flex flex-col gap-6 justify-between bg-black pt-8 text-white'>
      <div className='max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-10 justify-between pt-10 px-2'>
        <div className=''>
          <Link to='/'>
            <img
              src={logo_footer}
              alt='White Code Labs'
              className='h-[1.65rem]'
            />
          </Link>
        </div>
        <div className='w-1/2 flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between'>
          <div>
            <h3 className='font-lato text-[20px] leading-[30px] font-semibold mb-4'>
              Services
            </h3>
            <ul className='text-[#DADADA] text-[14px] leading-[32px]'>
              <li>
                <Link to='/software-development'>Software Development</Link>
              </li>
              <li>
                <Link to='/cloud-service'>Cloud Services</Link>
              </li>
              <li>
                <Link to='/hybrid-cloud'>Hybrid Cloud</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-lato text-[20px] leading-[30px] font-semibold mb-4'>
              Solutions
            </h3>
            <ul className='text-[#DADADA] text-[14px] leading-[32px]'>
              <li>
                <Link to='/software-development'>Cloud-Driven Growth Solutions</Link>
              </li>
              <li>
                <Link to='/software-development'>Intelligent Automation Solutions</Link>
              </li>
              <li>
                <Link to='/hybrid-cloud'>Unified Digital Ecosystem Solutions</Link>
              </li>
              <li>
                <Link to='/cloud-service'>Analytics & Intelligence Transformation Solutions</Link>
              </li>
              <li>
                <Link to='/software-development'>Ecosystem Modernization Solutions</Link>
              </li>
              <li>
                <Link to='/cloud-service'>Streamlined Delivery Solutions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-lato text-[20px] leading[30px] font-semibold mb-4'>
              About Us
            </h3>
            <ul className='text-[#DADADA] text-[14px] leading-[32px]'>
              <li>
                <Link to='/contact-us'>Contact</Link>
              </li>
              <li>
                <Link to='/terms'>Terms</Link>
              </li>
              <li>
                <Link to='/privacy'>Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=' border-t bordet-t-white py-6'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-3 justify-between items-center'>
          <div className='text-center  text-gray-400'>
            © 2023 XYZ Innovations, Inc. All right reserved
          </div>
          <div className='flex space-x-4'>
            <a
              href='https://www.facebook.com/whitecodelabs/'
              rel='noreferrer'
              target='_blank'
            >
              <img src={facebook} alt='Facebook' className='w-9 h-9' />
            </a>
            <a
              href='https://twitter.com/whitecodelabs'
              rel='noreferrer'
              target='_blank'
            >
              <img src={twitter} alt='Twitter' className='w-9 h-9' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
