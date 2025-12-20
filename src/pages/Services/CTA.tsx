import { SectionType3 } from '@components/Sections/SectionType3'
import img from '@images/Services/CTA.png'
import imgSmall from '@images/Services/CTA_mobile.png'

const cardData = [
  {
    heading: 'Get in touch',
    text: 'No matter what solutions, products, or services you’re interested in, we’d love to talk.',
    btnText: 'Contact Us',
    btnLink: '/contact-us',
  },
  {
    heading: 'Schedule Now',
    text: 'We need 5 minutes of your time to book a meeting and schedule a call with us.',
    btnText: 'Schedule Now',
    btnLink: '/contact-us',
  },
]

export const CTA = () => {
  return (
    <SectionType3
      img={img}
      imgSmall={imgSmall}
      heading={'Make your move'}
      text={
        'There couldn’t be a better time than right now for your digital transformation. And the smartest move you can make is to join forces with White Code Labs today.'
      }
      cards={cardData}
    />
  )
}
