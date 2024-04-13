import exclusive_image from './assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-pink-200 to-pink-100 min-h-[70vh] md:px-10 max-md:px-4 md:w-[80%] mx-[auto] mb-8">
        {/* left container */}
        <div className="left flex-1 bold">
            <h1 className='md:text-4xl max-md:text-2xl uppercase mb-2'>exclusive</h1>
            <h2 className='md:text-3xl max-md:text-xl mb-2'>Offers For You</h2>
            <p className='text-gray-700 mb-4'>Only On Best Seller Products</p>
            <button className='py-2 px-4 bg-red-500 rounded-full'>Check Now</button>
        </div>
        {/* right container */}
        <div className="flex-1">
            <img src={exclusive_image} alt="exclusive_image" />
        </div>
        </div>
    )
}

export default Offers