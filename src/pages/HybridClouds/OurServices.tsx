import { SectionType4 } from '@components/Sections'

const cardData = [
  {
    title: 'Hybrid workloads.',
    text: 'Hybrid cloud deployment combines the benefits of innovation, speed, consumption, and recouping existing investments. Reduce system and administration costs, protect data and simplify operations with unified management across hybrid clouds.',
  },
  {
    title: 'Data Protection.',
    text: 'Backup and restore data from your premises to the public cloud. Create secure file syncs, and create disaster recovery environments in, one or more public clouds.',
  },
  {
    title: 'Data security and compliance.',
    text: 'Store data in specific cloud locations to meet sovereignty, security, and for compliance requirements. Improve data visibility, and protect against ransomware. Go from risk to resilience.',
  },
  {
    title: 'Data tiering.',
    text: 'Reduce real estate space, infrastructure management, and operating expenses, by automating movement of infrequently accessed, “cold” data, from your premises to cloud storage.',
  },
  {
    title: 'DevOps.',
    text: 'Scale and speed application development, with a hybrid cloud environment, so that you can release applications faster, and support continuous integration and continuous deployment (CI/CD).',
  },
  {
    title: 'Cloud bursting.',
    text: 'Temporarily move data or clones of data, from on-premises environments to cloud, or between clouds, for dynamic workload flexibility, and for data processing.',
  },
]

export const OurServices = () => {
  return <SectionType4 heading={'Our Services'} cards={cardData} />
}
