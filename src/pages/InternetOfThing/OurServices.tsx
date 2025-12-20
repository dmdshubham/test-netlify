import { CardProps } from '@components/common/Cards'
import { SectionType4 } from '@components/Sections'

const cardData: CardProps[] = [
  {
    title: 'IoT Architecture Design.',
    text: 'A well designed IoT architecture offers significant benefits to enterprises. Take advantage of our IoT architecture design capability to transform your enterprise operations by driving efficiency, innovation, and customer value.',
  },
  {
    title: 'IoT Platform Integration.',
    text: 'IoT platform integration refers to a centralized system for devices, data, and applications. With us your enterprise will receive streamlined operations, enhanced scalability, cost optimization and an improved customer experience.',
  },
  {
    title: 'IoT Software Development.',
    text: 'IoT Software Development is extremely crucial, bringing hardware to life, and connecting everything together. We will make sure that your enterprise achieves better decision-making, enhanced customer experience, automation, and efficiency.',
  },
  {
    title: 'IoT Hardware Development.',
    text: 'Without the IoT hardware development, there’s no real-world connection. With our cutting-edge solutions will make sure that your enterprise will be able to reduce operational risks and costs, fuel new revenue streams, and optimize performance and costs.',
  },
  {
    title: 'IoT Security.',
    text: 'IoT security is extremely critical, because a bad IoT security can lead to massive fines, lawsuits, and reputation damage. We will ensure that your data is always protected, system downtime is prevented and customer trust is secured.',
  },
  {
    title: 'Edge Computing & Data Analytics.',
    text: 'With our advanced Edge Computing and Data Analytics services, your enterprise will achieve the following outcomes; faster decision-making, privacy, operational efficiency, enhanced customer experience and scalable growth.',
  },
]

export const OurServices = () => {
  return (
    <SectionType4
      heading={'Our Services'}
      cards={cardData}
      classNames={{
        cards: {
          title: 'w-[65%]',
        },
      }}
    />
  )
}
