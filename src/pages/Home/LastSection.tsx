import banner from '@images/Home/banner-section-1.png'
// import bannerSmall from '@images/Industries/banner-solutions2.jpg'
import { SectionType1 } from '@components/Sections/SectionType1'

const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={''}
      text={
        <>
          <div className='md:max-w-full md:mx-auto w-full h-96 flex flex-col justify-start items-start pt-5 md:pt-0 px-8 xl:px-0 md:justify-end md:pb-40 text-center gap-20 md:gap-10'>
            <h2
              className={
                'font-lato max-w-[250px]  text-left text-[21px] font-medium leading-[31.2px] md:mr-auto md:max-w-[65%] md:text-[24px] md:leading-[34px] md:tracking-[-0.2px] text-white'
              }
            >
              White Code Labs has been recognized as a Top Software Company in
              the Automation industry.
            </h2>
          </div>
        </>
      }
      classNames={{
        heading: 'w-[85%] md:max-w-screen ',
        text: 'w-[70%]',
      }}
    />
  )
}

export default Banner
