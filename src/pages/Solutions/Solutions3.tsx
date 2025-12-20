import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section3.jpg'

const Solutions3 = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Solutions 3'}
      heading={'Unified Digital Ecosystem Solutions'}
      text={
        <>
          <p className='mt-2'>
            See everything, move as one. Replace costly data silos and
            fragmentation with a seamlessly integrated digital ecosystem that
            powers 10x faster decisions and frictionless operations.
          </p>
          <p>
            Connect all your systems—from POS and finance to custom apps—into
            one unified source of truth. Achieve total visibility, cut
            maintenance costs by 30–50%, and accelerate team productivity by
            over 40%, creating an agile foundation for the future.
          </p>
        </>
      }
      btnLink='/software-development'
    />
  )
}

export default Solutions3
