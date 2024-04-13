import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollection from '../components/NewCollection'
import NewsLetter from '../components/NewsLetter'

const Shop = () => {
    return (
        <div className=''>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}

export default Shop