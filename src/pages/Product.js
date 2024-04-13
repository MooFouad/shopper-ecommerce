import React, { useContext } from 'react'
import all_product from './../components/assets/all_product';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductBoady from '../components/ProductBoady';

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    // const product = all_product.get(productId)
    const product = all_product.find((e)=>e.id === Number(productId))
    return (
        <div className="flex flex-col justify-center items-center md:px-10 max-md:px-4">
            <Breadcrum product={product} />
            <ProductBoady product={product} />
        </div>
    )
}

export default Product