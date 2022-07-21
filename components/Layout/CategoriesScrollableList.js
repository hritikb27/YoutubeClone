import { Fragment, useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuAlt2Icon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import CustomRightArrow from '../Arrows/CustomRightArrow';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const CategoriesScrollableList = () => {
  const [itemArr, setItemArr] = useState(items)
  const [inputFocus, setInputFocus] = useState(false)

  const handleRight = ()=> {
    const firstVal = itemArr[0];
    let removeFirstElem = itemArr.filter((x,i)=>i!==0)
    removeFirstElem.push(itemArr[0])
    setItemArr(removeFirstElem)
  }
  
  const handleLeft = ()=> {
    const firstVal = itemArr[0];
    let removeFirstElem = itemArr.filter((x,i)=>i!==(itemArr.length-1))
    removeFirstElem.splice(0,0, itemArr[itemArr.length-1])
    setItemArr(removeFirstElem)
  }

  return (
    <div className='relative w-full bg-white w-full sticky border-y border-y-[rgba(0, 0, 0, 0.1)]'>
      <div className="overflow-hidden absolute min-h-[80px] w-full bg-white  flex items-center gap-8 ">
        <button className='fixed mr-6' onClick={()=>handleLeft()}><AiOutlineLeft /></button>
        {itemArr.map((item, i) => {
          return <div className='h-[30px] w-[fit-content] bg-[rgba(0,0,0,0.05)] px-[10px] flex justify-center rounded-xl border border-[rgba(0,0,0,0.1)]' key={i}>
            {item.name}
          </div>
        })}
      </div>
      <button className='fixed right-0 top-[10%]' onClick={()=>handleRight()}><AiOutlineRight /></button>
    </div>
  )
}

export default CategoriesScrollableList