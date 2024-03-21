import Image from 'next/image';
import React, { useState } from 'react';
import h6image from '../images/h6.png'
export default function H6() {
  return (
    <div className='grid grid-cols-2'>
        <RealEstateInquiryForm/>
        <div className='pl-0 p-24'>
            <Image src={h6image}/>
        </div>
    </div>
  )
}


const RealEstateInquiryForm = () => {
  const [inquiryType, setInquiryType] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSize, setMinSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="p-24 flex flex-col justify-center">
      <h2 className="text-3xl font-semibold mb-6">Real Estate Inquiry Form</h2>
      <div className="mb-4">
        <label htmlFor="inquiryType" className="block text-gray-700 font-semibold mb-2">Inquiry Type</label>
        <select id="inquiryType" value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4 outline-none">
          <option value="">Please choose an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      
      <div className='flex justify-between'>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">How to address</label>
        <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4 " />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4" />
      </div>
      
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4" />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Personnel Role</label>
        <input id="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4" />
      </div>
      <div className='flex justify-between'>
      <div className="mb-4">
        <label htmlFor="maxPrice" className="block text-gray-700 font-semibold mb-2">Max Price</label>
        <input id="maxPrice" type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4" />
      </div>
      <div className="mb-4">
        <label htmlFor="minSize" className="block text-gray-700 font-semibold mb-2">Min Size</label>
        <input id="minSize" type="number" value={minSize} onChange={(e) => setMinSize(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4" />
      </div>
      </div>
      <button type="submit" className="bg-[#EB6753] text-white font-semibold py-2 px-4 rounded-lg w-full">Submit</button>
    </form>
  );
};

