import React, { useState } from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

const ProductCard = ({product , carts, setCarts}) => {
  const [isBuy, setIsBuy] = useState(false)

  const handleBuyClick =()=>{
    setIsBuy(true);
    setCarts([...carts, product])
  }
  return (
    <div key={product.id} className='p-4 w-80 shadow-sm gap-4 rounded-2xl space-y-2'>
            <div className='flex justify-between'>
              <span className='bg-white rounded-full px-2 py-2 shadow-sm'>{product.icon}</span>
              <p className={`${product.tag === 'popular'? "bg-amber-300 text-blue-500 " : product.tag === 'best seller' ? "bg-green-300 text-red-500" : "bg-purple-500 text-green-800"} py-1 px-2 rounded-full`}>{product.tag}</p>
              
            </div>
            <h2 className='text-xl font-bold'>{product.name}</h2>
            <p className='text-gray-400'>{product.description}</p>
          <div className='flex'>
            <p className='text-xl font-bold'>$ {product.price}</p>
              <span className='text-gray-400'>/{product.period}</span>
          </div>
          <ul className='text-gray-400'>
            {
              product.features.map((item , index)=>{
               return <li key={index} className='flex items-center gap-2 text-center'><FaRegCheckCircle></FaRegCheckCircle>{item}</li>
              })
            }
          </ul>
          <button className={`${isBuy ? "bg-linear-to-r from-green-400 to-green-400" : "bg-linear-to-r from-purple-600 to-purple-400"} py-2 px-10 w-full rounded-2xl`}onClick={handleBuyClick}>{isBuy ? 'added to card' : 'Buy Now'}</button>
          </div>
  );
};

export default ProductCard;