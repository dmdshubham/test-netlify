import { SectionOuter, SectionInner } from '@components/common'
import { SectionType5, SectionType6 } from '@components/Sections'
import img from '@images/CloudServices/img1.png'

export const WhyUs = () => {
  return (
    <SectionOuter>
      <SectionInner>
        <SectionType6
          heading={'Why White Code Labs for Cloud Service ?'}
          text={
            "White Code Labs provides the industry's most powerful and efficient, on-premise, cloud management solutions, for your enterprise applications."
          }
        />

        <SectionType5
          img={img}
          imgAlt={'Why US'}
          heading={'Cloud Transformation'}
          text={
            "Whether you're moving enterprise applications or production-level workloads, we'll help build a cloud strategy as unique as your business. Increase productivity. Scale quickly and easily. Gain efficiencies. Get ready to deliver a consistent, connected cloud experience like a boss."
          }
        />
      </SectionInner>
    </SectionOuter>
  )
}
