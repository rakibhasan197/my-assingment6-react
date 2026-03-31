import React, { use } from 'react';

import ProductCard from '../ProductCard/ProductCard';

const MainSection = ({productPromise, carts , setCarts}) => {
  const products = use(productPromise)
  
  return (
    <div className='max-w-[80%] mx-auto'>
   


      
      <div>
        <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3 space-x-4'>
         {
          products.map(product => 
            <ProductCard product={product} carts={carts} setCarts={setCarts}></ProductCard>
          )
         }
        </div>
      </div>
    </div>
  );
};

export default MainSection;