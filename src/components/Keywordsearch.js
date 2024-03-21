import React from 'react';
import Image from 'next/image';
import search from '../images/search.png'
import advance from '../images/advance.png'

export default function Keywordsearch() {
  return (
    <div className='absolute'>
        <div className='bg-white rounded-t-xl font-semibold  flex gap-3 w-fit pl-2 pr-2'>
            <span className='border-b-black border-b-2 p-3'>All</span>
            <span className='p-3'>For Sale</span>
            <span className='p-3'>For Rent</span>
        </div>
        <div className='p-3 rounded-b-2xl bg-white flex gap-5 items-center'>
            <input placeholder='Enter Keyword' className='outline-none p-4 rounded-lg  bg-slate-100 '/>
            <input placeholder='Type' type='select' className='outline-none p-4 rounded-lg  bg-slate-100 '/>
            <span className='flex gap-2 items-center'><Image src={advance} width={20}/><span>Advanced</span></span>
            <Image src={search} width={40} alt='search' className='p-3 rounded-xl bg-[#EB6753]'/>
        </div>
    </div>
  )
}
