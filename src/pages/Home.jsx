import React from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='max-w-[70vw]'>
            <Slider/>
        </div>


    <div className="bg-gray-700 w-full flex justify-center mt-10 h-40 items-center flex-col">
        <p className='text-white font-display '>
            Reel banayein, Viral ho jayein
        </p>
        <button className='text-white inline-block py-[10px] px-[20px] text-[24px] font-bold text-center decoration-none bg-[#ff5252] border-black 
         rounded-[10px] border-[2px] shadow-[5px_5px_0px_black] duration-[0.3s] transition-all ease-in hover:bg-white hover:text-[#ff5252] 
        hover:border-[#ff5252]
        active:bg-[#fcf414] active:shadow-none active:translate-y-[4px]'>Explore Now</button>
    </div>

    <div className='flex flex-row'>
      <Card title={"Music"} image={"https://img.icons8.com/fluency/48/aipods-pro-max.png"}/>
      <Card title={"Video"} image={"https://img.icons8.com/external-anggara-detail-outline-anggara-putra/48/external-video-camera-audio-line-anggara-putra-3.png"}/>
      <Card title={"Influencer"} image={"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-influencer-influencer-marketing-flaticons-lineal-color-flat-icons-24.png" }/>
    </div>


    </div>
  )
}

