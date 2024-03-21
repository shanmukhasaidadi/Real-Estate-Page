import React from 'react'
import { SwipeCarousel } from './Corousel'
import Image from 'next/image';
import h8image from '../images/H8.png'
export default function H5() {
  return (
    <div className='grid grid-cols-2  pl-48 p-24 bg-[#E9E9E9]'>
        <div className='flex flex-col gap-14 items-left'>
            <div>
                <h2>More than 10 Years of Experience</h2>
                <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
            <div className='flex justify-between'>
                <span className='flex flex-col'>
                    <span className='text-2xl font-bold'>85%</span>
                    <span className='text-sm'>Completed Property</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-2xl font-bold'>99%</span>
                    <span className='text-sm'>Completed Property</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-2xl font-bold'>95%</span>
                    <span className='text-sm'>Completed Property</span>
                </span>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-col'>
            <div className='bg-white p-5 rounded-lg w-96 flex flex-col'>
                <span className='font-bold'>Awesome Design</span>
                <span className='p-2 italic'>“Amazing design, easy to customize and a
design quality superlative account on its cloud
platform for the optimized performance. And
we didn’t on our original designs.”</span>
                <div className='flex border-t-2 pt-3'>
                    <Image src={h8image} width={50} />
                    <span className='flex flex-col '>
                        <span className='font-bold'> Ali Tufan</span>
                        <span>Product Manager</span>
                    </span>
                </div>

            </div>
            <Dots imgIndex={0} setImgIndex={()=>console.log('click')}/>
            </div>
            
        </div>
    </div>
  )
}
const Dots = ({ imgIndex, setImgIndex }) => {
    const slides = [
        {
          name:'First'
        },
        {
          name:'Second'
        },
        {
          name:'Third'
        }
      ];
      
    return (
      <div className="mt-4 flex w-full justify-center gap-2">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          );
        })}
      </div>
    );
  };