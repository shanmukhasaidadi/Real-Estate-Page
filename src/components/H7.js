import React from 'react'
import first from '../images/H7-1.png';
import second from '../images/H7-2.png';
import third from '../images/H7-3.png';
import Image from 'next/image';
export default function H7() {
    const blogs=[
       {
         img:first,
         type:'Townhome',
         desc:'Unveils the Best Canadian Cities for Biking and Walk',
         date:<span className='flex flex-col items-center p-2 pl-4 pr-4 shadow-lg absolute right-10 rounded-lg -bottom-10 bg-white'>
            <span>Feb</span>
            <span className='text-xl font-semibold'>03</span>
         </span>
        },
        {
            img:second,
            type:'Villa',
            desc:'Diamond Manor Apartment in the New York and Service',
            date:<span className='flex flex-col items-center p-2 pl-4 pr-4 shadow-lg absolute right-10 rounded-lg -bottom-10 bg-white'>
            <span>Feb</span>
            <span className='text-xl font-semibold'>03</span>
         </span>
           },
           {
            img:third,
            type:'Townhome',
            desc:'7 Simple Ways to Keep Your Kids Toys From Taking Over Your Home',
            date:<span className='flex flex-col items-center p-2 pl-4 pr-4 shadow-lg absolute right-10 rounded-lg -bottom-10 bg-white'>
            <span>Feb</span>
            <span className='text-xl font-semibold'>03</span>
         </span>
           }
    ]
  return (
    <div className='flex flex-col gap-10 p-24'>
        <div className='flex flex-col items-center'>
            <h2>From Our Blog</h2>
            <span className='text-sm'>Aliquam lacinia diam quis lacus euismod</span>
        </div>
        <div className='flex justify-around'>
            {blogs?.map((each,index)=><div key={index} className='flex flex-col max-w-72 gap-3'>
                <div className='relative'>
                <Image src={each.img} alt={each.type} className='rounded-xl'/>
                {each.date}
                </div>
                <span className='text-sm font-light'>{each.type}</span>
                <span className='font-bold'>{each.desc}</span>
                
                </div>)}
        </div>
    </div>
  )
}
