import React from 'react'
import { Carousel } from 'antd'
const AuthCarousel = ({img,title,desc}) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-full mb-10'>
               <img src={img} alt="" className='w-[600px] h-[500px] m-auto' /> 
                <h3 className='text-4xl text-white text-center font-bold'>{title}</h3>    
                <p className='text-2xl mt-5 text-white text-center'>{desc}</p>
            </div>
    </>
  )
}

export default AuthCarousel
