import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard } from "swiper";

const items = [
  { name: 'All', href: '#' },
  { name: 'Music', href: '#' },
  { name: 'Live', href: '#' },
  { name: 'Lofi', href: '#' },
  { name: 'Free', href: '#' },
  { name: 'Gaming', href: '#' },
  { name: 'Ghibli', href: '#' },
  { name: 'Computer', href: '#' },
  { name: 'Ambient', href: '#' },
  { name: 'Linux', href: '#' },
  { name: 'Classical', href: '#' },
  { name: 'Bollywood', href: '#' },
  { name: 'Probability', href: '#' },
  { name: 'Calculus', href: '#' },
  { name: 'files', href: '#' },
  { name: 'Conversation', href: '#' },
  { name: 'Recent', href: '#' },
  { name: 'Watched', href: '#' },
  { name: 'New to you', href: '#' },
  { name: 'Ghibli', href: '#' },
  { name: 'Computer', href: '#' },
  { name: 'Ambient', href: '#' },
  { name: 'Linux', href: '#' },
  { name: 'Classical', href: '#' },
  { name: 'Bollywood', href: '#' },
  { name: 'Probability', href: '#' },
  { name: 'Calculus', href: '#' },
]

const CategoriesScrollableList = () => {
  const [itemArr, setItemArr] = useState(items)

  return (
    <div className='relative w-full bg-white w-full sticky border-y border-y-[rgba(0, 0, 0, 0.1)]'>
      <div className="overflow-hidden min-h-[60px] max-h-[60px] w-full bg-white  flex items-center gap-8 ">
        <Swiper
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          slidesPerView={9} slidesPerColumn={5} spaceBetween={30}
          
          className="p-10">
          {itemArr.map((item, i) => {
            return <SwiperSlide className='h-[30px] w-[fit-content] bg-[rgba(0,0,0,0.05)] flex justify-center rounded-2xl border border-[rgba(0,0,0,0.1)]' key={i}>
              {item.name}
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default CategoriesScrollableList