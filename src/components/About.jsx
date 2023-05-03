import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-cyan-500 via-cyan-500 to-amber-300 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-500' >About</p>
            </div>
            <p className='text-xl mt-20'>
            Hello! My name is Adrian. I am husband and a father of two and love spending a lot of time with my family. I used to be a teacher for fifteen years.  I taught primarily in Japan and the United Arab Emirates. When my family came back to the US, I decided I would follow my dream and become a web developer. I am happy to say I have completed my goal and am now entering the work force.             </p>
            <br />
            <p className='text-xl'>
            I am interested in learning more about UI, but all areas interest me. I love hearing about projects and what people can imagine and I want to be a part of the process and make the dream a reality. Please get in touch with me and let me know what you are working on. I would love to help.            </p>
        </div>
    </div>
  )
}

export default About