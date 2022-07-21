import { Fragment, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    MenuAlt2Icon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

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
    { name: 'Lo-fi', href: '#' },
    { name: 'Free Music', href: '#' },
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
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <Carousel responsive={responsive} arrows={true} className="min-h-[50px] w-full bg-white sticky flex gap-5 border-y border-y-[rgba(0, 0, 0, 0.1)]">
            {items.map((item, i)=>{
                return <div className='w-[fit-content] bg-[rgba(0,0,0,0.05)] px-[10px] flex justify-center rounded-xl border border-[rgba(0,0,0,0.1)]' key={i}>
                    {item.name}
                </div>
            })}
        </Carousel>
    )
}

export default CategoriesScrollableList