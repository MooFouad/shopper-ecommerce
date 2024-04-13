import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from './../context/ShopContext';

const Item = (props) => {
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='max-w-[350px] hover:scale-95 duration-300 border-2 rounded-lg shadow mb-4 flex flex-col gap-4 p-4'>
            <Link  to={`/product/${props.id}`} >
                <img src={props.image} alt="product-img" />
            </Link>
            <p>{props.name}</p>
            <div className="flex gap-6">
                <div className="text-gray-800 bold text-xl">
                    ${props.new_price}
                </div>
                <div className="text-gray-400 bold line-through text-xl">
                    ${props.old_price}
                </div>
                
            </div>
            <button 
            onClick={()=>addToCart(props.id)}
            className='uppercase bold hover:text-red-500 hover:bg-gray-100 text-white bg-red-500 py-2 px-8 rounded-full duration-300 '
            >
                    Add to cart
            </button>
        </div>
    )
}

export default Item