import { SectionType4 } from '@components/Sections'

const cardData = [
  {
    title: 'Cloud Transformation.',
    text: 'Our cloud transformation strategy will be a comprehensive framework that will encompass the complete cycle of digital innovation.',
  },
  {
    title: 'Cloud Modernization.',
    text: 'Our multi-cloud deployment solution will enable businesses to transform infrastructure and modernize their applications.',
  },
  {
    title: 'Cloud Optimization.',
    text: 'Automate operations, manage resources efficiently while adhering to cloud governance standards through our cloud optimization services.',
  },
  {
    title: 'Cloud Compliance and Security.',
    text: 'A secure and resilient cloud infrastructure can help your business unlock and accelerate the actual value of cloud. Protect your data and cloud infrastructure with our cloud compliance services.',
  },
  {
    title: 'Cloud Integration.',
    text: 'We will integrate your current business software solutions with cloud applications to increase your entire IT infrastructure, promoting additional robustness and reliability.',
  },
  {
    title: 'Cloud Infrastructure Management and Maintenance.',
    text: 'We will help you effectively manage all components of your IT infrastructure, integrating on-premises infrastructure and third-party microservices for optimized scalability.',
  },
]

export const OurServices = () => {
  return <SectionType4 heading={'Our Services'} cards={cardData} />
}
