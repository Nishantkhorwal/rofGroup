import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Navbar from './Navbar';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function Headers() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState([false, false, false, false, false]);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleDropdownClick = (index) => {
    const updatedDropdownState = [...openDropdown];
    updatedDropdownState[index] = !updatedDropdownState[index];
    setOpenDropdown(updatedDropdownState);
  };

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-row justify-between items-center w-full py-4 lg:px-6 bg-gray-100'>
          <div className='flex flex-row items-center ps-2 lg:ps-10'>
            <img src='mainlogo.png' className='w-[50px] lg:w-[130px] me-6 ' alt='Logo' />
            
          </div>
          <div className='flex flex-row'>
            <button className='px-4 py-2  bg-yellow-500 font-bold hidden lg:block lg:mx-6 shadow-2xl'>Login</button>
            <button className='px-4 py-2  bg-yellow-500 font-bold shadow-xl hidden lg:me-3 lg:block'>Contact Us</button>
            <div className=' mx-2 lg:mx-2 lg:px-3 lg:py-2  justify-center items-center bg-white hover:bg-blue-600 cursor-pointer hidden lg:flex '><a href='/'><FaInstagram /></a></div>
            <div className=' mx-2 lg:mx-2 lg:px-3 lg:py-2  justify-center items-center bg-white hover:bg-blue-600 cursor-pointer hidden lg:flex '><a href='/'><FaTwitter /></a></div>
            <div className=' mx-2 lg:mx-2 lg:px-3 lg:py-2  justify-center items-center bg-white hover:bg-blue-600 cursor-pointer hidden lg:flex '><a href='/'><IoLogoWhatsapp /></a></div>
            <div className=' mx-2 lg:mx-2 lg:px-3 lg:py-2 justify-center items-center bg-white hover:bg-blue-600 cursor-pointer hidden lg:flex '><a href='/'><FaFacebookF /></a></div>

            <FiMenu className='text-3xl mx-6 block lg:hidden' onClick={handleMenuClick} />
          </div>
        </div>

        {/* Dropdown menu */}
        {openMenu && (
          <div className='bg-blue-900 text-white font-bold border-t border-gray-200 lg:hidden'>
            <ul className='flex flex-col items-center'>
              <li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer flex flex-col justify-start items-start w-full' >
                <div className=' w-full'>Home</div>
              </li>
              <li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer flex flex-col justify-start items-start w-full' onClick={() => handleDropdownClick(1)}>
              <div className='flex flex-row justify-between w-full'><h1>About Us</h1> {openDropdown[0] ? <MdKeyboardArrowUp className="ml-2" /> : <MdKeyboardArrowDown className="ml-2" />}</div>
                {openDropdown[1] && (
                  <ul className=''>
                     <Link to='/vision'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Vision, Mission & Values</li></Link>
                     <Link to='/foundermessage'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Founder's Message</li></Link>
                     <Link to='/principalmessage'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Principal's Message</li></Link>
                  </ul>
                )}
              </li>
              <li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer flex flex-col justify-start items-start w-full' onClick={() => handleDropdownClick(2)}>
              <div className='flex flex-row justify-between w-full'><h1>Media</h1> {openDropdown[0] ? <MdKeyboardArrowUp className="ml-2" /> : <MdKeyboardArrowDown className="ml-2" />}</div>
                {openDropdown[2] && (
                  <ul className=''>
                    <Link to='/admissionprocess'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Admission Process / Fees</li></Link>
                    <Link to='/applynow'> <li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Apply Now</li></Link>
                  </ul>
                )}
              </li>
              <li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer flex flex-col justify-start items-start w-full' onClick={() => handleDropdownClick(3)}>
              <div className='flex flex-row justify-between w-full'><h1>Construction Updates</h1> {openDropdown[0] ? <MdKeyboardArrowUp className="ml-2" /> : <MdKeyboardArrowDown className="ml-2" />}</div>
                {openDropdown[3] && (
                  <ul className=''>
                    <Link to='/parenttestimonials'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Parent's Testimonials</li></Link>
                    <Link to='/studenttestimonials'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Student's Testimonials</li></Link>
                    <li className='text-base py-2 cursor-pointer'>Our Gallery</li>
                  </ul>
                )}
              </li>
              <li className='text-lg font-semibold hover:bg-yellow-500 py-3 px-6 cursor-pointer flex flex-col justify-start items-start w-full'onClick={() => handleDropdownClick(4)}>
              <div className='flex flex-row justify-between w-full'><h1>Contact Us</h1> {openDropdown[0] ? <MdKeyboardArrowUp className="ml-2" /> : <MdKeyboardArrowDown className="ml-2" />}</div>
                {openDropdown[4] && (
                  <ul className=''>
                    <Link to='/contactinfo'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Contact Information</li></Link>
              <Link to='/enquiry'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Enquiry</li></Link>
              <Link to='/career'><li className='px-4 py-2 hover:bg-gray-200 hover:text-blue-900 cursor-pointer'>Career</li></Link>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
        <Navbar/>
      </div>
    </>
  )
}

export default Headers;




