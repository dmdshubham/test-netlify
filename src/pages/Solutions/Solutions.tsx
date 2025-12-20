import { SectionType2 } from '@components/Sections'
import img1 from '@images/Solutions/section1.jpg'

const Solutions = () => {
  return (
    <SectionType2
      classNames={{ container: 'bg-white' }}
      img={img1}
      imgAlt={'Solutions Section'}
      heading={'Cloud-Driven Growth Solutions'}
      text={
        <>
          <p>
            White Code Labs helps enterprises scale with high-performance cloud
            environments that reduce infrastructure costs by 40–60%, improve
            agility by 3–5×, and enable faster innovation. Through multi-cloud
            optimization, cloud-native architecture, AI-powered services, and
            FinOps-driven cost governance, we deliver measurable ROI.
          </p>
          <p>
            Proven in complex, enterprise-scale environments, we help teams
            achieve 99.9%+ uptime and bring new digital capabilities to market
            up to 50% faster—turning cloud infrastructure into a strategic
            growth engine.
          </p>
        </>
      }
      btnLink='/software-development'
    />
  )
}

export default Solutions
