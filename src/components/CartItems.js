import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import removeIcon from './assets/cart_cross_icon.png'
const CartItems = () => {
  const {getTotalAmount, all_product, removeFromCart, cartItems} = useContext(ShopContext)

  return (
    <>
      <div className='md:px-10 max-md:px-4 '>
      <h1 className='text-2xl bold py-8 text-center'>Shopping Cart </h1>
      {
        all_product.map((item, index) =>{
          if(cartItems[item.id]>0 ){
          return <div key={index} className="">
          {/* cartItem container */}
          <div className="flex items-center justify-center gap-10 max-md:flex-col mb-8 border p-4 rounded-2xl">
            {/* left item img */}
            <div className="flex flex-1">
              <img src={item.image} alt="product-img" />
            </div>
            {/* right container */}
            <div className="flex flex-1  flex-col gap-6 text-gray-800 bold md:w-[200px]">
            <p className='bold text-gray-600'>{item.name}</p>
            {/* price & quantity container */}
            <div className="flex justify-between items-center gap-2">
              <div className="flex justify-center items-center gap-2">
                <p>Price</p>
                <p>${item.new_price}</p>
              </div>
              <div className="flex justify-center items-center gap-2">
              <p>Quantity</p>
              {/* cart items quantity */}
              <p className='border p-1'>
                {cartItems[item.id]}
              </p>
            </div>
              </div>
              
            {/* total & remove */}
            <div className="flex justify-between items-center gap-2">
              <div className="flex justify-center items-center gap-2">
                <p>Total</p>
                {/* total */}
                <p>
                {item.new_price*cartItems[item.id]}
              </p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-red-500 py-1 px-4 cursor-pointer rounded">
                <p className=''>Remove</p>
                <img 
                onClick={()=> removeFromCart(item.id)}
                className='cursor-pointer'
                src={removeIcon} alt="remove-icon" />
              </div>
            </div>
            </div>
          </div>
          <hr className='my-4'/>
        {/* cart total amount */}
        <div className="">
          {/* cart total */}
          <div className="">
            <h1>Subtotal</h1>
            <p>
              ${getTotalAmount()}
            </p>
          </div>
          
        </div>
          </div>
            }
            return null;
        })
        }
    </div>
  </>
  )
}

export default CartItems