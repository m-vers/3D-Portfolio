import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

// Creation of Navigation for Portfolio
const Navbar = () => {
  const [active, setActive] = useState(' '); //Sets which nav is active
  const [toggle, setToggle] = useState(false); //Sets the menu to toggle on smaller screens

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Creation of Logo and link to top of site */}
        <Link to="/" className='flex items-center gap-2' 
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Mitchell Baldwin</p>
        </Link>

{/* List for links About, Projects, & Contact */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li 
            key={Link.id} 
            className={`${
              active === Link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`} 
            onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
              <a href={`${Link.pdf}`}>{Link.pdfTitle}</a>
            </li>
          ))}
        </ul>

{/* This div will create the menu for smaller screens */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>

{/* Same list as before, just reshaped for small screens */}
              <ul className='list-non flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li 
                key={Link.id} 
                className={`${
                  active === Link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`} 
                onClick={() => {
                  setToggle(!toggle); //Set to close menu when link is selected
                  setActive(Link.title);
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
              </ul>

            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar