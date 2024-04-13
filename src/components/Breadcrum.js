import arrow_icon from './assets/breadcrum_arrow.png'
const Breadcrum = ({product}) => {
  return (
    <div className='flex md:justify-center max-md:justify-start items-center flex-wrap gap-2 my-8'>
      Home <img src={arrow_icon} alt="arrow-icon" />
      Shop <img src={arrow_icon} alt="arrow-icon" />
      {product.category} <img src={arrow_icon} alt="arrow-icon" />
      {product.name}
    </div>
  )
}

export default Breadcrum