import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <div className='flex justify-center items-center p-4 md:p-6'>Copyright @ {year.getFullYear()} - All Rights Reserved</div>
  )
}

export default Footer