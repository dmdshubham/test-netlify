import { SectionType2 } from '@components/Sections'

import img from '@images/Services/automation.jpg'

const Automation = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img}
      imgAlt={'Automation'}
      heading={'Automation'}
      text={
        <>
          <p>
            Build your operational edge through automation. White Code Labs
            aligns intelligent automation, data, and domain expertise to
            eliminate friction, reduce cost, and unlock continuous efficiency
            across your business.
          </p>
          <p>
            Our automation-led services and solutions re-engineer workflows,
            systems, and decision loops with speed and precision—enabling
            scalable, end-to-end value across the enterprise. Give yourself an
            automation advantage by leveraging ours.
          </p>
        </>
      }
    />
  )
}

export default Automation
