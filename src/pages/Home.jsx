import React, { useState, useEffect } from 'react';
import Headers from '../components/Headers';
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaBell } from "react-icons/fa";

import { FaBook } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import { FaRegHeart } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { FaHandshake } from 'react-icons/fa';
import { GiDiamondHard } from 'react-icons/gi';
import { MdOutlineLightbulb } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { FaChartLine } from 'react-icons/fa';



import classNames from 'classnames';
import Footer from '../components/Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counteron, setCounterOn] = useState(false);
  // Array of slide images
  const slides = [
    'bgImage1.jpg',
    'bgImage2.jpg',
  ];

  // Array of quotes
  const quotes = [
    "",
    "",
  ];

  useEffect(() => {
    // Auto play the carousel
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
   const events =[
    {
      date : "15 Aug, 2024",
      title : "Why Invest in Gurugram: A Smart Real Estate Move",
      img : "/Value1.jpg",
      para : "Why Invest in Gurugram: A Smart Real Estate Move",
    },
    {
      date : "15 Aug, 2024",
      title : "Looking to invest in real estate? Affordable housing is the way to go! Here's why",
      img : "/Value1.jpg",
      para : "Looking to invest in real estate? Affordable housing is the way to go! Here's why",
    },
    {
      date : "15 Aug, 2024",
      title : "5 Smart Commercial Investment Tips? you must know before entering the Year 2022!",
      img : "/Value1.jpg",
      para : "5 Smart Commercial Investment Tips? you must know before entering the Year 2022!",
    },

   ]
  return (
    <>
      <Headers />
      <div className="relative h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={classNames(
              'absolute inset-0 transition-opacity duration-1000',
              {
                'opacity-100': currentSlide === index,
                'opacity-0': currentSlide !== index,
              }
            )}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
            {/* Overlay text */}
            {currentSlide === index && (
              <div className="absolute top-60 bg-transparent left-2   md:left-5 w-[40%]  p-4">
                <p className="text-blue-900 font-bold text-3xl   md:text-6xl ">{quotes[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='bg-[#0a2657] px-16'>
        <div className='flex flex-wrap flex-col md:flex-row  py-10 px-5 md:px-32 lg:px-0 '>
               <div className='flex flex-col px-3   w-full lg:w-[13%] py-6 justify-around items-center border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 cursor-pointer hover:bg-opacity-50 mb-4 lg:mb-0 mx-3'>
                  <IoPeopleSharp className='text-orange-500 mb-2 text-5xl '/>
                  <h1 className='text-gray-300 text-2xl  font-semibold mb-1'>Community</h1>
                  <h3 className='text-gray-300 text-sm  font-semibold text-center'>Build Community to learn.</h3>

               </div>
               <div className='flex flex-col px-3   w-full lg:w-[13%] py-6 justify-around items-center border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 cursor-pointer hover:bg-opacity-50 mb-4 lg:mb-0 mx-3'>
                  <FaBook  className='text-orange-500 mb-4 text-5xl'/>
                  <h1 className='text-gray-300 text-2xl  font-semibold mb-3'>Career</h1>
                  <h3 className='text-gray-300 text-sm  font-semibold text-center'>Explore career procedures.</h3>

               </div>
               <div className='flex flex-col px-3   w-full lg:w-[13%] py-6 justify-around items-center border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 cursor-pointer hover:bg-opacity-50 mb-4 lg:mb-0 mx-3'>
                  <FaBell  className='text-orange-500 mb-4 text-5xl'/>
                  <h1 className='text-gray-300 text-2xl  font-semibold mb-3'>Alert</h1>
                  <h3 className='text-gray-300 text-sm  font-semibold text-center'>Turn on our notification.</h3>

               </div>
               <div className='flex flex-col px-3   w-full lg:w-[13%] py-6 justify-around items-center border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 cursor-pointer hover:bg-opacity-50 mb-4 lg:mb-0 mx-3'>
                  <FaRegHeart className='text-orange-500 mb-4 text-5xl'/>
                  <h1 className='text-gray-300 text-2xl  font-semibold mb-3'>Facility</h1>
                  <h3 className='text-gray-300 text-sm  font-semibold text-center'>Unmatched Facility Standards.</h3>

               </div>
               <div className=' lg:w-[30%] mx-4 w-full flex flex-col justify-center '>
                  <h4 className='text-sm text-orange-500'>You are welcome</h4>
                  <h1 className='text-gray-400 text-xl  lg:text-5xl font-bold'>Discover Our Top Events</h1>
               </div>
        </div>
        
      </div>
      <div className='px-4 lg:px-32 py-20'>
        <div className='flex flex-col lg:flex-row'>
          <div className=' w-full lg:w-[30%] mb-4 lg:mb-0'>
            <h1 className='text-blue-950 text-4xl font-bold mb-4'>Welcome</h1>
            <p className='mb-3 text-[#212528]'>Welcome to ROF, your trusted partner in real estate excellence. We are a name synonymous with innovation, integrity, and unmatched commitment to delivering quality projects.Our path in the real estate industry has been shaped by an unwavering commitment to excellence and a determination to surpass the expectations of our valued customers.</p>
            <div className='mb-4'>
            <ul>
              <li className='flex flex-row items-center'><GoDotFill className='text-blue-600 me-3'/><h1 className='text-black'>International Reputation</h1></li>
              <li className='flex flex-row items-center'><GoDotFill className='text-green-600 me-3'/><h1 className='text-black'>Prepare Future Leaders</h1></li>
              <li className='flex flex-row items-center'><GoDotFill className='text-yellow-500 me-3'/><h1 className='text-black'>Moral And Spiritual Compass</h1></li>
              <li className='flex flex-row items-center'><GoDotFill className='text-red-600 me-3'/><h1 className='text-black'>Curriculum and Instructions</h1></li>
            </ul>
            
            </div>
            <div className='px-4 flex justify-between items-center w-[60%] py-2 hover:bg-orange-500 cursor-pointer border border-transparent bg-orange-400 text-white text-xl'>Find Out More <IoMdArrowDropright/></div>
           
          </div>
          <div className='relative bg-[url("/Value1.jpg")] bg-opacity-50 bg-cover object-fill w-full  lg:w-[30%] h-72 mt-4 lg:mt-0 mb-6 lg:mb-0 lg:mx-10'>
 
          <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 bg-opacity-30 flex flex-col justify-center items-center '>
            <h2 className='text-xl font-bold text-white mb-4'>Sneak Peek Into Our Company</h2>
            <p className='text-sm text-gray-100 font-semibold px-3'>What you will get to see once you work with us.</p>
          </div>
        </div>
        <div className="relative p-4 w-full lg:w-[30%] ">
          <p className="text-base mb-4">
            <span className="text-5xl font-bold float-left mr-2 leading-none text-orange-600">A</span>
            <span className='font-semibold text-blue-800'>re you looking for the best real estate company in the India? If yes, then your search is over.You will get the best quality here.Look what our founder has to say about us.</span>
          </p>
          <p className='text-blue-900 text-md mb-4'> It gives me great pleasure to welcome you to the online home of our company as the founder and leader of the dedicated team behind our agency. We at ROF group are dedicated to creating a quality environment that supports creativity, academic excellence and a passion for life long business.</p>
          <div className='px-4 flex justify-between items-center w-[60%] py-2 hover:bg-orange-500 cursor-pointer border border-transparent bg-orange-400 text-white text-xl'>Find Out More <IoMdArrowDropright/></div>
        </div>

        </div> 
       
        

      </div>
      <div>
    
      <div className='bg-blue-950 py-20 px-16 z-30'>
        <h3 className='text-sm text-orange-500 ms-3'>Upcoming Company Blogs</h3>
        <h1 className='text-gray-200 text-xl lg:text-5xl font-bold'>Discover Our Top Company<br/> Blogs In A Year.</h1>

      </div>
      <div className='flex flex-col lg:flex-row pt-20  px-6 lg:px-20'>
        <div className='flex flex-col w-full lg:w-[70%] mb-5 lg:mb-0'>
          {events.map((e)=>(
          <div className='flex flex-row mb-5' key={e.title}>
            <div className={`bg-[url("${e.img}")] object-fill bg-cover w-[25%] h-36 me-7 `}>

            </div>
            <div className='w-[75%]'>
              <div className='flex flex-row mb-4 items-center'><IoMdArrowDropright/><p className='mx-1'>Date</p><IoMdArrowDropright/><p>{e.date}</p></div>
              <h1 className='font-bold text-blue-950 text-3xl mb-3'>{e.title}</h1>
              <p className='text-gray-500 text-sm mb-2'>{e.para}</p>
              <hr className='border-t-2  border-t-blue-900 w-10'></hr>
            </div>

          </div>
          ))}

        </div>
        <div className='rounded-lg w-full lg:w-[25%] border lg:relative lg:-top-40  bg-white mb-6 lg:mb-0'>
          <div className='bg-orange-500 h-4 rounded-t-lg mb-6'></div>
          <h1 className='text-blue-950 font-bold text-lg text-center mb-4'>Fun Facts About School</h1>
          <div className='flex justify-center'><hr className='border-t-4 border-t-orange-500  w-10'></hr></div>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
           <div className='py-10'> 
          <div className='flex flex-col justify-center items-center mb-6'>
            <h1 className='text-3xl font-bold text-blue-950'>
            <PiStudentFill className='text-orange-500 text-5xl'/>
            { counteron && <CountUp start={0} end={300} duration={2} delay={0}/> }+</h1>
          
            <h3 className='text-lg font-semibold text-gray-400'>Projects Complete</h3>
          </div>
          <div className='flex flex-col justify-center items-center  mb-6'>
            <h1 className='text-3xl font-bold text-blue-950'>
            <GiTeacher className='text-orange-500 text-5xl'/>
            { counteron && <CountUp start={0} end={100} duration={2} delay={0}/> }+
            </h1>
    
            <h3 className='text-lg font-semibold text-gray-400'>Mentors</h3>
          </div>
          <div className='flex flex-col justify-center items-center  mb-6'>
            <h1 className='text-3xl font-bold text-blue-950 '>
            <IoIosStar className='text-orange-500 text-5xl'/>
            { counteron && <CountUp start={0} end={20} duration={2} delay={0}/> }+
            </h1>
          
            <h3 className='text-lg font-semibold text-gray-400'>Years of experience</h3>
          </div>
          <div className='flex flex-col justify-center items-center  mb-6'>
            <h1 className='text-3xl font-bold text-blue-950'>
            <MdWorkspacePremium className='text-orange-500 text-5xl'/>
            { counteron && <CountUp start={0} end={100} duration={2} delay={0}/> }+
            </h1>
           
            <h3 className='text-lg font-semibold text-gray-400'>Award Winnings</h3>
          </div>
          </div>
          </ScrollTrigger>

        </div>
       

      </div>
      </div>
      <div className='flex flex-row overflow-hidden py-4'> 
      <div className='w-[5%] hidden lg:block h-full me-5' >
        <div className='w-full  mb-6 h-[400px]'>
          <img src='insigniamart.jpg' className='w-full h-full object-cover'></img>
        </div>
        <div className='w-full h-[160px]'>
          <img src='normanton.jpg' className='w-full h-full object-cover'></img>
        </div>
      </div>
          <div className='flex flex-col lg:flex-row w-full lg:w-[80%] mb-6 lg:mb-0 '>
          <div className='px-20  bordder border-transparent bg-gray-50 w-full  lg:w-[50%] mb-6 lg:mb-0'>
            <h1 className='font-bold text-4xl text-blue-950 mb-7 mt-10'>
              Enquiry Now
            </h1>
            <form>
              <div className='flex flex-col mb-6'>
               <label htmlFor='name' className='text-gray-500'>Client Name</label> 
              <input className='border border-gray-300 px-14 py-3' required></input>
              </div>
              <div className='flex flex-col mb-6'>
               <label htmlFor='email' className='text-gray-500'>Email</label> 
              <input type='email' className='border border-gray-300 px-14 py-3'></input>
              </div>
              <div className='flex flex-col mb-10'>
               <label htmlFor='Phone' className='text-gray-500'>Phone Number</label> 
              <input type='text' className='border border-gray-300 px-14 py-3'></input>
              </div>
              <button className='w-full bg-orange-500 text-white font-bold text-sm text-center py-4 '>Send</button>
            </form>
          </div>
          <div className='bg-blue-950   px-4 py-7 w-full  lg:w-[50%]'>
            <h1 className='font-bold text-3xl px-5 py-5 text-white'>Our Events</h1>
            <div className='flex flex-col px-5'>
              <div className='flex flex-row bg-purple-950 bg-opacity-20 border border-[#47377099] hover:bg-yellow-600 cursor-pointer   py-5 px-5 mb-3'>
                <div className=''>
                  <img src='testimonials3.jpg' className='w-28'></img>
                </div>
                <div className=''>
                <div className='flex flex-row mb-2 items-center text-gray-300'><IoMdArrowDropright/><p className='mx-1'>Date</p><IoMdArrowDropright/><p>15 aug, 2024</p></div>
                <h1 className='ms-5 font-bold text-gray-50'>Our top most upcoming event is on 15 Aug, Stay Tuned..</h1>
                
                </div>

              </div>
              <div className='flex flex-row bg-purple-950 border border-[#47377099] hover:bg-yellow-600 cursor-pointer bg-opacity-20  py-5 px-5 mb-3'>
                <div className=''>
                  <img src='online.jpg' className='w-28'></img>
                </div>
                <div className=''>
                <div className='flex flex-row mb-2 items-center text-gray-300'><IoMdArrowDropright/><p className='mx-1'>Date</p><IoMdArrowDropright/><p>15 aug, 2024</p></div>
                <h1 className='ms-5 font-bold text-gray-50'>Our top most upcoming event is on 15 Aug, Stay Tuned..</h1>
                
                </div>

              </div>
              <div className='flex flex-row bg-purple-950 border border-[#47377099] hover:bg-yellow-600 cursor-pointer bg-opacity-20  py-5 px-5 mb-3'>
                <div className=''>
                  <img src='Value1.jpg' className='w-28'></img>
                </div>
                <div className=''>
                <div className='flex flex-row mb-2 items-center text-gray-300'><IoMdArrowDropright/><p className='mx-1'>Date</p><IoMdArrowDropright/><p>15 aug, 2024</p></div>
                <h1 className='ms-5 font-bold text-gray-50'>Our top most upcoming event is on 15 Aug, Stay Tuned..</h1>
                
                </div>

              </div>
              

            </div>
          </div>

          </div>
          <div className='w-[15%] hidden lg:block h-full me-5 translate-x-9' >
        <div className='w-full  mb-6 h-[400px]'>
          <img src='bgImage1.jpg' className='w-full h-full object-cover'></img>
        </div>
        <div className='w-full h-[160px]'>
          <img src='bgImage2.jpg' className='w-full h-full object-cover'></img>
        </div>
      </div>

          
        </div>
      <div className='md:px-20 px-4 py-20 bg-blue-950 mt-2 pb-60'>
        <div className='flex flex-row  '>
        <div className='w-full'>
        <h3 className='text-sm font-bold text-orange-500 mb-2'>Always With You</h3>
        <h1 className='font-bold text-3xl lg:text-6xl mb-14 text-white'>Why We Are Best In<br/> The Industry.</h1>
        </div>
        <div className='w-[70%] mt-8 hidden lg:block'>
          <p className='text-gray-200'>Our vertical solutions expertise allows your business to streamline workflow, and increase productivity. No matter the business, has you covered with industry compliant solutions, customized to your company’s specific needs, specific needs.</p>
        </div>
        </div>
        <div className='flex flex-wrap flex-col  md:flex-row justify-center lg:justify-around'>
        <div className='flex flex-col justify-center items-center  mb-5 lg:mb-0 w-full lg:w-[15%]  border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 hover:bg-opacity-50 px-5 bg-transparent py-8 cursor-pointer '>
             <FaHandshake className='text-orange-500 text-7xl mb-4 spin-on-hover'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Trust</h3> 
            <p className='text-gray-300 text-center '>Always Delivering Promises.</p>

        </div>
        <div className='flex flex-col justify-center items-center  mb-5 lg:mb-0 w-full lg:w-[15%]  border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 px-5 bg-transparent py-8 hover:bg-opacity-50 cursor-pointer'>
             <GiDiamondHard className='text-orange-500 text-7xl mb-4 spin-on-hover'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Quality</h3> 
            <p className='text-gray-300 text-center'>Crafting Superior Experiences.</p>

        </div>
        <div className='flex flex-col justify-center items-center  mb-5 lg:mb-0 w-full lg:w-[15%]  border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 px-5 bg-transparent py-8 hover:bg-opacity-50 cursor-pointer'>
             <MdOutlineLightbulb className='text-orange-500 text-7xl mb-4 spin-on-hover'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Innovation</h3> 
            <p className='text-gray-300 text-center'>Pioneering Real Estate Solutions</p>

        </div>
        <div className='flex flex-col justify-center items-center  mb-5 lg:mb-0 w-full lg:w-[15%]  border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 px-5 bg-transparent py-8 hover:bg-opacity-50 cursor-pointer'>
             < GiAchievement className='text-orange-500 text-7xl mb-4 spin-on-hover'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Expertise</h3> 
            <p className='text-gray-300 text-center'>Mastering Property Excellence</p>

        </div>
        <div className='flex flex-col justify-center items-center  mb-5 lg:mb-0 w-full lg:w-[15%]  border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 px-5 bg-transparent py-8 hover:bg-opacity-50 cursor-pointer'>
             <BiSupport className='text-orange-500 text-7xl mb-4 spin-on-hover'/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Support</h3> 
            <p className='text-gray-300 text-center'>Guiding Every Step</p>

        </div>
        <div className='flex flex-col justify-center items-center  mb-5 lg:mb-0 w-full lg:w-[15%]  border-[#47377099] border-4 rounded-md bg-purple-950 bg-opacity-20 px-5 bg-transparent py-8 hover:bg-opacity-50 cursor-pointer'>
             <FaChartLine className='text-orange-500 text-7xl mb-4 spin-on-hover '/>
            <h3 className='font-semibold text-3xl text-gray-300 mb-3 '>Value</h3> 
            <p className='text-gray-300 text-center'>Maximizing Your Investment</p>

        </div>
        
        </div>
        <div className='mt-20'>
          <h3 className='text-orange-500 font-semibold lora text-center'>
            Testimonials
          </h3>
          <h1 className='text-3xl font-bold lora text-white text-center'>Explore The Clients Experience</h1>
        </div>
        
      </div>
      <div className='relative bg-transparent -top-48 px-4 md:px-32  lg:px-20'>
      <div className='flex flex-col lg:flex-row '>
           <div className=' w-full lg:w-[30%] rounded-xl shadow-2xl bg-gray-100 py-10 px-14 lg:px-20 hover:shadow-2xl hover:bg-slate-300  lg:me-8 mb-4 md:mb-8 lg:mb-0'>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl '>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate illum nam voluptatum soluta minus atque? Magni, nostrum! Facilis, veniam? Libero."</p>
        
           <div className='flex justify-center items-center mb-6'><div className='bg-[url("../public/testimonials1.jpg")] h-14 bg-cover w-14 rounded-full ' > </div></div>
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >Tarini Aggarwal</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>Advisor</h4>
           </div>
           <div className='w-full lg:w-[30%] rounded-xl shadow-2xl hover:shadow-2xl hover:bg-slate-300 bg-gray-100 py-10 px-14 lg:px-20 lg:me-8 md:mb-8 mb-4 lg:mb-0'>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate illum nam voluptatum soluta minus atque? Magni, nostrum! Facilis, veniam? Libero."</p>
        
           <div className='flex justify-center items-center mb-6'><div className='bg-[url("../public/testimonials2.jpg")] h-14 bg-cover w-14 rounded-full ' > </div></div>
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >Manvi Bhardwaj</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>Client</h4>
           </div>
           <div className='w-full lg:w-[30%] rounded-xl shadow-2xl hover:shadow-2xl hover:bg-slate-300 bg-gray-100 py-10 px-14 lg:px-20 lg:me-8 mb-4 md:mb-8 lg:mb-0'>
            <p className='text-center text-gray-600 mb-6 font-signika text-xl'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate illum nam voluptatum soluta minus atque? Magni, nostrum! Facilis, veniam? Libero."</p>
        
           <div className='flex justify-center items-center mb-6'><div className='bg-[url("../public/testimonials3.jpg")] h-14 bg-cover w-14 rounded-full ' > </div></div>
           <h3 className='text-center text-lg text-gray-600 mb-1 font-signika' >Kanishka</h3>
           <h4 className='text-center text-md text-gray-600 font-signika'>Client</h4>
           </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between px-4 lg:px-20 '>
        <div className='w-full lg:w-[50%] lg:ms-20 lg:mt-20 mb-10 lg:mb-0'>
          <h1 className='font-bold text-xl md:text-3xl lg:text-4xl lora mb-5 text-blue-800'>Job openings now available - join our real estate community!</h1>
          <h3 className='text-gray-600 mb-4 text-xl'>Contact us for more information:</h3>
          <div className='border border-blue-950 hover:bg-slate-300 cursor-pointer rounded-md px-6 py-4 text-center flex flex-row justify-center items-center md:w-[55%] lg:w-[55%]'><BsFillTelephoneFill className='me-4 text-red-500'/><h1 className='text-black font-semibold text-2xl font-signika'>+91 1234567890</h1></div>

        </div>
        <div className='flex justify-end items-baseline '>
          <img src='HomeFooter2.svg' className='w-[500px] '></img>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Home;