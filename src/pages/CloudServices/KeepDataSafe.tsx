import { SectionOuter, SectionInner } from '@components/common'
import { SectionType5 } from '@components/Sections'
import img1 from '@images/CloudServices/img2.png'
import img2 from '@images/CloudServices/img3.png'
export const KeepDataSafe = () => {
  return (
    <SectionOuter className='h-full  max-h-full w-full bg-white'>
      <SectionInner className='h-full  max-h-full w-full gap-12 lg:gap-2'>
        <SectionType5
          img={img1}
          imgAlt={'Why US'}
          heading={'Keep data safe and secure'}
          text={
            "Unprotected data is a disaster waiting to happen. And traditional data protection approaches aren't keeping pace with IT complexity and growing threats. With White Code Labs, you can be confident that your data is secure in the cloud, without sacrificing application performance. Plan backups and disaster recovery. Increase privacy and compliance. Prevent ransomware. Stay ahead of emerging threats. Smart, right?"
          }
          rtl
        />

        <SectionType5
          img={img2}
          imgAlt={'Why US'}
          heading={'Optimize more at a lower cost'}
          text={
            'When operating in the cloud, your enterprise solutions demand enterprise-grade management capabilities, high availability, sub-millisecond latency, and data protection. Optimize your cloud performance and stay ahead of your competitors.'
          }
        />
      </SectionInner>
    </SectionOuter>
  )
}
