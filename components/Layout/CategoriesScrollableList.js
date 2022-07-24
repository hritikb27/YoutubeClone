import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard } from "swiper";

const items = [
  { name: 'All', href: '#', selected: true , id: 1},
  { name: 'Music', href: '#', selected: false, id: 2},
  { name: 'Live', href: '#', selected: false, id: 3},
  { name: 'Lofi', href: '#', selected: false, id: 4},
  { name: 'Free', href: '#', selected: false, id: 5},
  { name: 'Gaming', href: '#', selected: false, id: 6},
  { name: 'Ghibli', href: '#', selected: false, id: 7},
  { name: 'Computer', href: '#', selected: false, id: 8},
  { name: 'Ambient', href: '#', selected: false, id: 9},
  { name: 'Linux', href: '#', selected: false, id: 10},
  { name: 'Classical', href: '#', selected: false, id: 11},
  { name: 'Bollywood', href: '#', selected: false, id: 12},
  { name: 'Probability', href: '#', selected: false, id: 13},
  { name: 'Calculus', href: '#', selected: false, id: 14},
  { name: 'files', href: '#', selected: false, id: 15},
  { name: 'Conversation', href: '#', selected: false, id: 16},
  { name: 'Recent', href: '#', selected: false, id: 17},
  { name: 'Watched', href: '#', selected: false, id: 18},
  { name: 'New to you', href: '#', selected: false, id: 19},
  { name: 'Ghibli', href: '#', selected: false, id: 20},
  { name: 'Computer', href: '#', selected: false, id: 21},
  { name: 'Ambient', href: '#', selected: false, id: 22},
  { name: 'Linux', href: '#', selected: false, id: 23},
  { name: 'Classical', href: '#', selected: false, id: 24},
  { name: 'Bollywood', href: '#', selected: false, id: 25},
  { name: 'Probability', href: '#', selected: false, id: 26},
  { name: 'Calculus', href: '#', selected: false, id: 27},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CategoriesScrollableList = () => {
  const [itemArr, setItemArr] = useState(items)

  const handleSelection = (item)=> {
    const newArr = itemArr.map(i=>{
      if(i.id===item.id)return {...i, selected: true}
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
          slidesPerView={9} slidesPerColumn={5} spaceBetween={20}
          
          className="p-10">
          {itemArr.map((item, i) => {
            return <SwiperSlide className={classNames(item.selected ? 'bg-black text-white' : 'bg-[rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,0,0,0.09)]', ' cursor-pointer h-[30px] min-w-[80px] w-[fit-content] flex justify-center rounded-2xl border border-[rgba(0,0,0,0.1)]')} key={i}>
              <span onClick={()=>handleSelection(item)} >{item.name}</span>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default CategoriesScrollableList