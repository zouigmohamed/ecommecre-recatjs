import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/CartContext';


const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    
    <div className=''id='products' >
<div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition-transform transform translate-y-0 hover:-translate-y-2 duration-300">
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-500' src={product.image} alt='image' /> 
          </div>

        </div>
      <div className='flex flex-col items-center justify-center gap-y-2 opacity-100 absolute transition-all duration-300   top-0 right-0  p-2'>
            <button onClick={()=>{ addToCart(product.id , product); }}>
              <div className='flex justify-center items-center rounded-lg text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl'/>
            </div>
            </button>
            <Link to={`products/${product.id}`} className='rounded-lg bg-white w-12 h-12 flex justify-center items-center text-primary drop-shadow-xl' ><BsEyeFill/></Link>
          </div>
      </div>

      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{product.category}</div>
        <Link to={`/${product.id}`}>
          <h2 className='font-semibold mb-1'>{product.title}</h2>
        </Link >
        <h2 className='font-semibold'> $ {product.price}</h2>
      </div>

    </div>
  );
};

// Add props validation using propTypes
Product.propTypes = {
  product: PropTypes.object.isRequired, // Change
};

export default Product;
