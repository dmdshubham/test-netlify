import { Swiper, useSwiper } from 'swiper/react'
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

interface Props {
  sections: {
    id: string
    Component: React.FC
  }[]
}

let timeOutId: NodeJS.Timeout

export const FullPageSlider: React.FC<Props> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [allowSwip, setAllowSwip] = useState(true)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    return () => {
      clearTimeout(timeOutId)
    }
  }, [])

  return (
    <>
      <div className='hidden lg:block'>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard]}
          className='h-[100dvh]'
          direction='vertical'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          speed={800}
          freeMode={false}
          longSwipes={false}
          onSlideChangeTransitionStart={() => setAllowSwip(false)}
          onSlideChangeTransitionEnd={() => {
            timeOutId = setTimeout(() => {
              setAllowSwip(true)
            }, 400)
          }}
          longSwipesRatio={0}
          allowSlideNext={allowSwip}
          allowSlidePrev={allowSwip}
          preventInteractionOnTransition
        >
          {sections?.map(({ id, Component }) => (
            <SwiperSlide
              id={id}
              key={id}
              className='flex h-full items-center justify-center md:h-screen'
            >
              <Component />
            </SwiperSlide>
          ))}
          <PaginationDots count={sections.length} activeIndex={activeIndex} />
        </Swiper>
      </div>

      <div className='lg:hidden'>
        {sections?.map(({ id, Component }) => (
          <div id={id} key={id} className='flex items-center justify-center'>
            <Component />
          </div>
        ))}
      </div>
    </>
  )
}

const PaginationDots: React.FC<{ count: number; activeIndex: number }> = ({
  count,
  activeIndex,
}) => {
  const swiper = useSwiper()

  return (
    <div className='fixed right-10 top-1/2 z-10 hidden h-fit w-fit -translate-y-1/2 flex-col items-center justify-center gap-1 lg:flex'>
      {Array.from({ length: count })?.map((_, i) => (
        <button
          key={i}
          onClick={() => swiper.slideTo(i)}
          className='group relative flex h-4 w-4 cursor-pointer items-center justify-center rounded-xl'
        >
          <div
            className={`aspect-square w-[0.375rem] rounded-full bg-slate-700 transition-transform duration-700 ease-linear ${
              activeIndex === i ? 'scale-[2.1]' : 'scale-1'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
