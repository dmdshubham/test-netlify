import { SectionOuter, SectionInner } from '@components/common'
import { SectionType6 } from '@components/Sections'

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
          heading={
            <span className='lg:pl-44'>
              Why White Code Labs for Hybrid Cloud Services ?
            </span>
          }
          text={
            <>
              <p>
                What if you could move your data and workloads whenever and
                wherever you wanted, while managing everything with ease,
                security, agility and compliance. Enter White Code Labs. We give
                organizations the freedom to manage applications and data,
                everywhere across hybrid multi-cloud environments.
              </p>
              <p>
                White Code Labs is an award-winning, hybrid, cloud service
                provider. Our hybrid cloud services, data management, and
                storage solutions, integrate with the worlds’ leading cloud
                providers, giving you one consistent environment.
              </p>
            </>
          }
          classNames={{
            text: 'flex flex-col gap-10 md:w-[85%]',
          }}
        />
      </SectionInner>
    </SectionOuter>
  )
}
