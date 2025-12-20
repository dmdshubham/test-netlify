// import React from 'react'
import Hero from '@images/Home/WhiteCodeLab/white-codelab.png'
import { SectionType2 } from '@components/Sections/SectionType2'

const WhyCodeLab = () => {
  return (
    <SectionType2
      img={Hero}
      imgAlt={'Why White Code Labs?'}
      heading={'Why White Code Labs?'}
      text={
        <>
          <br />
          <br />
          <p>
            Because your biggest digital bets deserve a partner who’s executed
            them at scale. With 14+ years building resilient platforms for
            startups turned unicorns and Fortune 500s that dominate. we optimize
            cloud, data, and AI to deliver outcomes that move your bottom line.
          </p>
          <p>
            Our edge? We engineer the confidence to move fast without breaking
            things, turning your most complex challenges into unshakeable
            competitive advantages.
          </p>
        </>
      }
    />
  )
}

export default WhyCodeLab
