import React from 'react';
import Image from 'next/image';
import h4image from '../images/h4.png';

import h41 from '../images/H4-1.png';

import h42 from '../images/H4-2.png';

import h43 from '../images/H4-3.png';

const WhyChooseUs = () => (
  <div className="py-12 w-[60%]">
    <div className="container mx-auto px-2">
      <h2 className="mb-8">Why Choose Us</h2>
      <span>As the complexity of buildings to increase, the field
of architecture.</span>
      <div className="flex flex-col">
        
        <div className="w-full p-4">
          <div className='flex items-center'>
            
            <Image src={h41} width={100}/>
            <div className="p-3">
            <h3 className="text-xl font-semibold mb-2">Property Management</h3>
            <p className="text-gray-600">Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
            </div>
          </div>
        </div>
        <div className="w-full  p-4">
        <div className='flex items-center'>
            
            <Image src={h42} width={100}/>
            <div className="p-3">
            <h3 className="text-xl font-semibold mb-2">Mortgage Services</h3>
            <p className="text-gray-600">Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
            </div>
          </div>
         
        </div>

        <div className="w-full p-4">
        <div className='flex items-center'>
            
            <Image src={h43} width={100}/>
            <div className="p-3 pl-4">
            <h3 className="text-xl font-semibold mb-2">        Property Investment
</h3>
            <p className="text-gray-600">Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
);


export default function H4() {
  return (
    <div className='grid grid-cols-2'>
        <div  className='p-10 flex justify-center'>
        <Image src={h4image} className='object-fit'/>

        </div>
        <WhyChooseUs/>
    </div>
  )
}
