import React from 'react'
import heroImage from "../assets/heroImage.png";
// import Normandy from "../assets/Normandy.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-cyan-500 via-cyan-500 to-amber-300' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4lx sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>           
                     I am a new developer beginning my new career building and desgining software.
                     Currently, I love to work on web application using technologies like
                     HTML, CSS , React, Tailwind, and GraphQL.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                       Portfolio
                       <span className='group-hover:rotate-90 duration-300'>
                       <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                       </span>
                    </Link>
                </div>
            </div>
            <div>
               <img src={heroImage} alt="My Profile" 
               className='mx-auto w-2/3 md:full rounded-3xl'/> 
            </div>
        </div>

    </div>
  )
}

export default Home