import starIcon from '../components/assets/star_icon.png'
import starDullIcon from '../components/assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ProductBoady = ({product}) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <>
    <div className='flex justify-center items-center max-md:flex-col gap-8'>
      {/* left container */}
      <div className="flex flex-1 justify-center items-center gap-4">
        {/* img list */}
        <div className="flex flex-col gap-4">
          <img src={product.image} alt="product-img" className='h-[150px] max-md:h-[100px] ' />
          <img src={product.image} alt="product-img" className='h-[150px] max-md:h-[100px] '/>
          <img src={product.image} alt="product-img" className='h-[150px] max-md:h-[100px] '/>
          <img src={product.image} alt="product-img" className='h-[150px] max-md:h-[100px] '/>
        </div>
          {/* product img */}
          <div className="">
            <img src={product.image} alt="product-img" className='w-[580px] h-[700px] max-md:h-[auto] max-md:w-[auto]'/>
          </div>
        </div>
        {/* right container */}
        <div className="flex flex-1 justify-center items-start flex-col gap-4">
          <h1 className='bold text-2xl'>{product.name}</h1>
          {/* stars & rating container */}
          <div className="flex justify-center items-center">
            <img src={starIcon} alt="star-icon" />
            <img src={starIcon} alt="star-icon" />
            <img src={starIcon} alt="star-icon" />
            <img src={starIcon} alt="star-icon" />
            <img src={starDullIcon} alt="star-icon" />
            <p>(168)</p>
          </div>
          {/* price */}
          <div className="flex gap-4 mb-4">
            <div className="text-gray-400 bold line-through text-xl">
            ${product.old_price}
            </div>
            <div className="text-gray-800 bold text-xl">
              ${product.new_price}
            </div>
          </div>
          {/* description */}
          <div className="text-gray-500 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam asperiores molestiae!
          </div>
          {/* size */}
          <div className="mb-4">
            <h1 className='bold text-lg text-gray-700 mb-4'>Select Size</h1>
            <div className="flex gap-2 cursor-pointer ">
              <p className='border py-2 px-4 hover:bg-gray-200'>S</p>
              <p className='border py-2 px-4 hover:bg-gray-200'>M</p>
              <p className='border py-2 px-4 hover:bg-gray-200'>L</p>
              <p className='border py-2 px-4 hover:bg-gray-200'>XL</p>
              <p className='border py-2 px-4 hover:bg-gray-200'>XXL</p>
            </div>
          </div>
          <button 
          onClick={() =>addToCart(product.id)}
          className='uppercase bold hover:text-red-500 hover:bg-gray-100 text-white bg-red-500 py-2 px-8 rounded-full duration-300  w-[400px] max-md:w-[100%]'>add to cart</button>
        </div>
    </div>
    </>
  )
}

export default ProductBoady