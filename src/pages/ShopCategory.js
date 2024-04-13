import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropDownIcon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)
    return (
        <div>
            <img src={props.banner} alt="banner-img"
            className='mb-8 md:w-[80%] mx-[auto]'/>
            <div className="flex justify-between items-center md:px-10 max-md:px-4 mb-8 max-md:flex-col gap-4">
                <p>
                    <span className='bold pr-1'>
                        Showing 1-12
                    </span>
                    out of 36 products
                </p>
                {/* filter products */}
                <div className="flex items-center justify-center gap-2 border py-1 px-4 rounded-full">
                    <span>Sort by</span> <img src={dropDownIcon} alt="dropdown-icon" />
                </div>
            </div>
            {/* products  */}
            <div className="collection flex flex-wrap justify-center items-center gap-4">
                {
                    all_product.map((item, index)=>{
                        if(props.category===item.category){
                            return <Item 
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            />
                        }else{
                            return null
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ShopCategory