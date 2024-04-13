import React from 'react'
import handIcon from './assets/hand_icon.png'
import arrowIcon from './assets/arrow.png'
import heroImage from './assets/hero_image.png'

const Hero = () => {
    return (
        <div className='flex  md:h-[100vh]  justify-center md:justify-around items-center bg-gradient-to-r from-pink-200 to-pink-100 max-md:py-6 md:px-10 max-md:px-4'>
            {/* left container */}
            <div className="flex flex-col gap-2 justify-center flex-1">
                <h2 className='bold uppercase  md:text-4xl text-nowrap'>new arrivals only</h2>
                {/* hand-icon ccontainer */}
                <div className=" flex justify-center items-start gap-1 flex-col lg:text-[70px] md:text-[50px] max-md:text-lg bold">
                    <div className="hand-icon flex justify-center items-center gap-6">
                        <p>new</p>
                        <img src={handIcon} alt="hand-icon" className='md:w-[100px] max-md:w-[30px]' />
                    </div >
                    <p>colliction</p>
                    <p>for everyone</p>
                </div>
                {/* latest btn container */}
                <div className="flex gap-[10px] justify-center items-center bg-red-500 rounded-xl py-2 cursor-pointer hover:scale-110 duration-500 text-white bold text-xl md:max-w-[50%]">
                    <div className="max-md:text-sm">Latest Colliction</div>
                    <img src={arrowIcon} alt="arrow-icon" className='w-[20px] max-md:w-[15px]' />
                </div>
            </div>
            {/* right container */}
            <div className="flex items-center justify-center flex-1 ">
                <img src={heroImage} alt="hero-img" className='md:w-[70%]'
                />
            </div>
        </div>
    )
}

export default Hero