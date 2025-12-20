import banner from '@images/Services/Banner.png'
import { SectionType1 } from '@components/Sections/SectionType1'

export const Banner = () => {
  return (
    <SectionType1
      bg={banner}
      bgSmall={banner}
      heading={'Our Services'}
      text={
        <>
          <p>
            We have a service to meet your every need. From simple break-fix to
            end-to-end software integration, you can count on our expertise to
            help drive your digital transformation.
          </p>
        </>
      }
      classNames={{
        heading: 'text-white',
        text: 'text-white',
      }}
    />
  )
}
