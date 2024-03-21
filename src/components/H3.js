import React from 'react'
import house from '../images/home.png';
import apartment from '../images/apartment.png';
import villa from '../images/villa.png'
import Image from 'next/image';
export default function H3() {

  return (
    <App/>
  )
}


const ApartmentTypes = ({ apartmentTypes }) => (
  <div className='flex justify-around w-full p-10'>
    {apartmentTypes.map((type, index) => (
      <div key={index} className='flex flex-col gap-3 text-center items-center'>
        <Image src={type.img} className='' width={25}/>
        <h3>{type.name}</h3>
        <span className='font-light'>{type.properties} Properties</span>
      </div>
    ))}
  </div>
);




const App = () => {
  const apartmentTypes = [
    { name: 'Houses', properties: 7 ,img:house},
    { name: 'Apartments', properties: 3  ,img:apartment},
    { name: 'Office', properties: 4 ,img:apartment },
    { name: 'Villa', properties: 4  ,img:villa},
    { name: 'Townhome', properties: 2  ,img:house},
  ];

  return (
    <div className='bg-black text-white flex flex-col items-center p-24'>
      <h1>Explore Apartment Types</h1>
      <span className='text-sm font-light'>Aliquam lacinia diam quis lacus euismod</span>
      <ApartmentTypes apartmentTypes={apartmentTypes} />
    </div>
  );
};

