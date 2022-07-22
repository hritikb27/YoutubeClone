import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard } from "swiper";

const items = [
  { name: 'All', href: '#', selected: true },
  { name: 'Music', href: '#', selected: false },
  { name: 'Live', href: '#', selected: false },
  { name: 'Lofi', href: '#', selected: false },
  { name: 'Free', href: '#', selected: false },
  { name: 'Gaming', href: '#', selected: false },
  { name: 'Ghibli', href: '#', selected: false },
  { name: 'Computer', href: '#', selected: false },
  { name: 'Ambient', href: '#', selected: false },
  { name: 'Linux', href: '#', selected: false },
  { name: 'Classical', href: '#', selected: false },
  { name: 'Bollywood', href: '#', selected: false },
  { name: 'Probability', href: '#', selected: false },
  { name: 'Calculus', href: '#', selected: false },
  { name: 'files', href: '#', selected: false },
  { name: 'Conversation', href: '#', selected: false },
  { name: 'Recent', href: '#', selected: false },
  { name: 'Watched', href: '#', selected: false },
  { name: 'New to you', href: '#', selected: false },
  { name: 'Ghibli', href: '#', selected: false },
  { name: 'Computer', href: '#', selected: false },
  { name: 'Ambient', href: '#', selected: false },
  { name: 'Linux', href: '#', selected: false },
  { name: 'Classical', href: '#', selected: false },
  { name: 'Bollywood', href: '#', selected: false },
  { name: 'Probability', href: '#', selected: false },
  { name: 'Calculus', href: '#', selected: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CategoriesScrollableList = () => {
  const [itemArr, setItemArr] = useState(items)

  const handleSelection = (item)=> {
    const newArr = itemArr.map(i=>{
      if(i.name===item.name)return {...i, selected: true}
      else return {...i, selected: false};
    })
    setItemArr(newArr)
  }
  
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
            return <SwiperSlide className={classNames(item.selected ? 'bg-black text-white' : 'bg-[rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,0,0,0.09)]', ' cursor-pointer h-[30px] w-[fit-content] flex justify-center rounded-2xl border border-[rgba(0,0,0,0.1)]')} key={i}>
              <span onClick={()=>handleSelection(item)} >{item.name}</span>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default CategoriesScrollableList