import Head from 'next/head'
import Image from 'next/image'
import VideoCard from '../components/VideoCard'
import videoData from '../sampleData/sampleData' 
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full h-full text-white flex gap-4 flex-wrap mt-6">
      {videoData.map(video=>{
        return <div className="relative w-[100%] sm:w-[48%] md:w-[35%] lg:w-[30%] xl:w-[23%] h-[30%] flex mb-[290px] mt-6" key={video.id}>
          <VideoCard img={video.img} logo={video.logo} time={video.time} title={video.title} channel={video.channel} views={video.views} uploaded={video.uploaded} verified={video.verified} live={video.live} />
        </div>
      })}
    </div>
  )
}
