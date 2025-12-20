import { CardProps } from '@components/common/Cards'
import { SectionType4 } from '@components/Sections'

const cardData: CardProps[] = [
  {
    title: 'Website & Web Application Development',
    text: 'We develop websites and web applications that are responsive, intuitive, highly scalable, and can function online or offline as progressive web apps.',
  },
  {
    title: 'Mobile Application Development',
    text: 'We blend our knowledge and skills in order to deliver world class iOS and Android mobile applications and solutions.',
  },
  {
    title: 'Custom Software Development',
    text: 'Our custom software development applications and solutions accelerate workflows, boost revenues, and optimize business operations from concept-to-code and development-to-deployment.',
  },
  {
    title: 'Enterprise Application Development',
    text: 'Enterprise applications are the lifeblood of organizations. Don’t risk performance, and reliable data delivery to just anyone. We develop enterprise software solutions that will meet all your business needs',
  },
  {
    title: 'Quality Assurance & Software Testing',
    text: 'We provide comprehensive quality assurance and software testing services to deliver high value-added, and agile-aligned software applications and solutions.',
  },
  {
    title: 'Application Maintenance and Support',
    text: 'Our support and maintenance services are aimed to ensure that your apps are highly available, reliable and keep up with your ever-evolving business needs.',
  },
]

export const OurServices = () => {
  return (
    <SectionType4
      heading={'Our Services'}
      cards={cardData}
      classNames={{
        cards: {
          title: 'w-[55%]',
        },
      }}
    />
  )
}
