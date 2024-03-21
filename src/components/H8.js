import React from 'react'
import H8image from '../images/H8.png'
import Image from 'next/image'

export default function H8() {
  return (
    <div className='grid grid-cols-2 h-[50vh] items-center p-24 bg-[#f0d7d3]'>
        <div className='flex flex-col gap-8'>
            <div>
            <h2>Become A Real Estate Agent</h2>
            <span>We only work with the best companies around the globe to survey</span>
          
            </div>
             <span className='bg-[#EB6753] text-white font-semibold py-2 px-4 rounded-lg w-fit'>Register Now</span>
        </div>
        <div className='relative'>
            <Image src={H8image} className='absolute -top-96'/>
        </div>
        
    </div>
  )
}
