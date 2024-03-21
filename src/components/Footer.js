import React from 'react';
import logo from '../images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '../images/footer-logo.png';
import apple from '../images/apple.png';
import googleplay from '../images/gppgleplay.png'
const Footer = () => {
    


    return (<div className='flex flex-col bg-[#181A20] text-white'>     
  
  <Image alt='logo' src={footerLogo} className='w-full -ml-20'/>
  
       <div className='grid md:grid-cols-5  font-normal p-14 md:pl-36  text-left gap-7 justify-center'>
            <div className='col-span-1 flex flex-col items-left gap-4'
      
            >
               
               
                
                <span className='font-bold'>Popular Search </span>
                
                <span className='flex flex-col font-thin gap-3'>
                    <span>Apartment for Sale </span>
                <span>Apartment for Rent </span>
                <span>Offices for Sale </span>
                <span>Officesm for Rent </span>
                </span>

            </div>
            <div className='flex flex-col gap-3'>
            <span className='font-bold'>Quick Links </span>
            <span className='flex flex-col font-thin gap-3'>
                    <span>Terms of Use </span>
                <span>Privacy Policy </span>
                <span>Pricing Plans </span>
                <span>Our Services </span>
                <span>Contact</span>
                <span>Careers</span>
                <span>FAQs</span>
                </span>
                  </div>
            <div className='flex flex-col gap-3'>
            <span className='font-bold'>Discovery </span>
                
                <span className='flex flex-col font-thin gap-3'>
                    <span>Chicago </span>
                <span>Los Angeles </span>
                <span>New Jersey </span>
                <span>New York </span>
                {/* <span>Contact</span> */}
                {/* <span>Careers</span> */}
                <span>California</span>
                </span>

            </div>
            <div className='col-span-2 flex flex-col gap-8'>
                    <div className='flex gap-5 font-light'>
                        <span className='flex flex-col'>
                            <span>Total Free Customer Support</span>
                            <span className='text-sm font-extralight'>+(088)123456789</span>
                        </span>
                        <span className='flex flex-col'>
                        <span>Live Support?</span>
                            <span className='text-sm font-extralight'>hi@homez.com</span>
                        </span>
                    </div>
                    <span>Keep Yourself Up to Date</span>
                    <div className='flex flex-col gap-5'>
                        <Image src={apple}/>
                        <Image src={googleplay}/>
                    </div>
            </div>
        </div>
     </div>

    );
}

export default Footer;
