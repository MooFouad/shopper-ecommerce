import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-6  md:w-[80%] mx-auto bg-gradient-to-r from-pink-200 to-pink-100 md:px-10 max-md:px-4 min-h-[60vh]'>
      <h1 className='bold md:text-5xl text-3xl'>Get Exclusive Offers On Your Email</h1>
      <p className='bold md:text-2xl text-xl text-gray-700'> Subscribe To Our NewsLetter And Stay Updated</p>
      <div className=" flex gap-4">
        <input type="email" placeholder='enter your email ' className='py-1 px-2 border rounded-full w-full'/>
        <button className=' text-white bg-black py-2 px-6 rounded-full'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter