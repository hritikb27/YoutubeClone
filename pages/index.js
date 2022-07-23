import Head from 'next/head'
import Image from 'next/image'
import VideoCard from '../components/VideoCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full h-full text-white">
      <VideoCard />
    </div>
  )
}
