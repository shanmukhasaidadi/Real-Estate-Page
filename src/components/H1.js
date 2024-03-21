import React from 'react'
import h1 from '../images/h1.png'
import Image from 'next/image'
import Keywordsearch from './Keywordsearch'
export default function H1() {
  return (
    <div className='hero'
 
    >
        <div className='grid grid-cols-2 p-36 pb-0 items-center'>
            <div className=''>
                <h1 className='mb-8'>
                    Find The Perfect Place to Live With your Family
                </h1>
                <Keywordsearch/>
            </div>
            <Image src={h1} alt='hero section'/>
        </div>
        
    </div>
  )
}
