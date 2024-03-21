
import React, { useState ,useEffect, useRef} from 'react';

import Image from 'next/image';

import logo from '../images/logo.png'
import Link from 'next/link';
import profile from '../images/profile.png'

const Header = () => {


   

  const [navItems, setNavItems] = useState(
    [
      {
          title: 'Home',
          subNav: [],
          url:'/'
      },
      {
          title: 'Listings',
          url:'/',
         
      },
      {
          title: 'Members',
          url:'/',
            
      },
      {
          title: 'Blog',
          url:'/',
        
      },
      {
        title: 'Pages',
        url:'/',
      
    },
 
  ]
   );

  const [openSubNav, setOpenSubNav] = useState(-1);
  const [openSubSubNav, setOpenSubSubNav] = useState(-1);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setOpenSubNav(index);
  };

  const handleMouseLeave = () => {
    setOpenSubNav(-1);
  };
   const handleMouseEnterSub = (index) => {
   console.log(index)
    setOpenSubSubNav(index);
  };

  const handleMouseLeaveSub = () => {
    setOpenSubSubNav(-1);
  };

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };
  



  return (
    <header className="text-[#00000080] header"
    style={
      {backdropFilter:'blur(20px)',
      // backgroundColor:'white'
      }
    }
    
    >
       
      <div className="container mx-auto">
      
        <div className="flex justify-between md:justify-around items-center p-5">
        <div><Image src={logo} alt='LOGO' style={{
          // scale:'1.8',

        }}
        width={150}
        // height={90}
        className='mt-4 ml-6'
        /></div>
          <div className="hidden md:flex flex-col gap-5 justify-center">
         
            <nav className='text-lg font-semibold' 
            >
              <ul className="flex space-x-10">
                {navItems?.map((item, index) => (
                  <li
                    key={index}
                    className={`relative mix-blend-overlay	text-[#181A20] p-3 rounded-md hover:bg-[#edc9c4] cursor-pointer`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}

                  >
                 {item.title}
                  </li>
                ))}
                {/* <span className=''>  <span onClick={handleClickOpen}className='p-3 rounded-xl bg-gradient-to-r hover:bg-gradient-to-l from-[#E41D8C] to-[#7A348F] text-white font-medium cursor-pointer'>{"Appointment"}</span>
</span> */}
<span className='flex items-center gap-3 font-medium'>
    <Image src={profile}/>
    <span className='text-black'>Login / Register</span>
    <span className='bg-black p-2 rounded-lg text-white'>Add property</span>
</span>
              </ul>
            </nav>
                      </div>
          <div className="md:hidden flex items-center">
          {/* <span className=''>  <span onClick={handleClickOpen}className='p-3 rounded-xl bg-gradient-to-r hover:bg-gradient-to-l from-[#E41D8C] to-[#7A348F] text-white font-medium cursor-pointer'>{"Appointment"}</span>
</span> */}
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-10 w-10 text-[#EB6753] m-2"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (<>
                  <path d="M1 1L37 1"  stroke-linecap="round"/>
<path d="M6 9L37 9"  stroke-linecap="round"/>
<path d="M1 17L37 17"  stroke-linecap="round"/>
</> )}
              </svg>
            </button>
          </div>
        </div>
        {isNavOpen && (
          <nav className="md:hidden absolute  h-[80vh] w-screen bg-white overflow-scroll"
        //   variants={hoverVariant}
        //   initial='initial'
        //   animate='animate'
          >
            <ul className=" text-gray-800 flex flex-col p-5 items-start gap-5">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-start text-3xl border-b ${openSubNav === index ? 'text-[#E41D8Cb3] cursor-pointer' : ''}`}
                  // onClick={() => item.subNav.length== 0&&setOpenSubNav(openSubNav === index ? -1 : index)}
                >
                 {item.title}                </li>
              ))}
            </ul>
          
          </nav>
        )}
        
      </div>
    </header>
  );
};

export default Header;
