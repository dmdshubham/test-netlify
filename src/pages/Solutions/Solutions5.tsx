import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section5.png'

const Solutions3 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Solution 5'}
      heading={'Ecosystem Modernization Solutions'}
      text={
        <>
          <p className='mt-2'>
            Replace legacy constraints with future-ready agility. We modernize
            outdated environments into high-performing digital ecosystems,
            reducing technical debt by 60–70% and accelerating development
            velocity by 3–5x.
          </p>
          <p>
            Using cloud-native architecture and API-first design, we cut system
            maintenance by 50%, enhance reliability, and dramatically improve
            scalability—all with minimal risk. Gain a technology foundation that
            delivers sustained value and lets you outpace competitors.
          </p>
        </>
      }
      btnLink='/software-development'
    />
  )
}

export default Solutions3
