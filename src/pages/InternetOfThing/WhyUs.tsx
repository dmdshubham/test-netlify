import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
        classNames={{
          heading: 'text-black md:max-w-screen',
          text: 'w-[90%] gap-4 text-[1rem]',
        }}
          heading={' Why White Code Labs for IoT Services ?'}
          text={
            <>
              <p>
                Whether you are looking for expertise in tailored IoT solutions,
                or end-to-end service offerings, our expert team can help your
                enterprise implement IoT strategies, streamline processes, and
                gain actionable insights. If you are looking for a trusted and
                credible IoT development partner, we are definitely the one.
              </p>
              <br />
              <p>
                White Code Labs is an award-winning IoT service provider, with a
                track record of executing large-scale, and complex IoT projects,
                and solutions, ensuring high scalability, efficiency, and robust
                security.
              </p>
            </>
          }
        />
      </SectionInner>
    </SectionOuter>
  )
}
