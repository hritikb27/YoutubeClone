import { createRef, useRef, useState } from "react"
import {
    ClockIcon,
    SaveAsIcon
} from '@heroicons/react/outline'

const VideoCard = ({ img, logo, time, title, channel, views, uploaded, verified, live }) => {
    const videoDurationRef = useRef()
    const videoCardRef = useRef()
    const metaDataRef = useRef()
    const [timeOutId, setTimeOutId] = useState()
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        videoDurationRef.current.innerText = 'Keep hovering to play'
        const timer = setTimeout(() => {
            videoCardRef.current.style.transform = 'scale(1.2)'
            videoCardRef.current.style.zIndex = '9'
            videoCardRef.current.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            videoCardRef.current.style.background = 'white'
            metaDataRef.current.style.transform = 'scale(0.9)'
            setIsHovered(true)
            // videoCardRef.current.style.height = '400px'
            videoDurationRef.current.innerText = time
        }, 500)
        setTimeOutId(timer)
    }

    const handleMouseLeave = () => {
        videoDurationRef.current.innerText = time
        if (timeOutId) clearTimeout(timeOutId)
        setIsHovered(false)
        videoCardRef.current.style.zIndex = '0'
        videoCardRef.current.style.background = ''
        videoCardRef.current.style.boxShadow = ''
        metaDataRef.current.style.transform = 'scale(1)'
        videoCardRef.current.style.transform = 'scale(1)'
    }

    return (

        <div ref={videoCardRef} className="z-0 absolute transition-all duration-300 ease-in-out w-full flex justify-center items-center">
            <div className="w-full">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-full w-full relative">
                    <img className="w-full h-full" src={img} alt="" />
                    <div className="absolute inset-0 flex justify-end items-end mr-2 mb-1 z-10"><span ref={videoDurationRef} className="bg-black w-[fit-content] px-1">{time}</span></div>
                </div>
                <div ref={metaDataRef} className="transition-all duration-300 ease-in-out">
                    <div className="mt-3 flex items-start space-x-2">
                        <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flex flex-col text-md tracking-tighter leading-tight">
                            <div className="text-black font-semibold overflow-ellipsis">{title}</div>
                            <div className="mt-1 flex items-baseline space-x-1">
                                <div className="text-[#606060]">{channel}</div>
                                {verified && <div className="w-4 h-4 pt-0.5">
                                    <svg viewBox="0 0 24 24" className="text-gray-600" fill="currentColor">
                                        <g><path fillRule="evenodd" clipRule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g>
                                    </svg>
                                </div>}
                            </div>
                            <div className="flex">
                                <div className="text-[#606060] after:mx-2 after:content-['•']">{views}</div>
                                <div className="text-[#606060] after:mx-2 after:content-['•']">{uploaded}</div>
                            </div>
                            {live && <div className="mt-1 text-xs tracking-wide font-bold border border-red-500 text-red-600 px-1 py-0.5 rounded-sm w-max">LIVE NOW</div>}
                        </div>
                    </div>
                    {isHovered && <div className="w-full flex justify-between text-gray-500 text-md font-semibold gap-2 h-[35px] my-4">
                        <div className="flex justify-center items-center bg-gray-200 w-[50%]">
                            <ClockIcon className="mr-3 flex-shrink-0 h-6 w-6 text-black" aria-hidden="true" />
                            <button>WATCH LATER</button>
                        </div >
                        <div className="flex justify-center items-center bg-gray-200 w-[50%]">
                            <SaveAsIcon className="mr-3 flex-shrink-0 h-6 w-6 text-black" aria-hidden="true" />
                            <button>ADD TO QUEUE</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default VideoCard