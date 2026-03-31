import React from 'react';

const TabCart = ({carts, setCarts}) => {
  const totalPrice = carts.reduce((sum, item)=> sum + item.price, 0)
  const handleProceed = ()=>{
    setCarts([]);
  }

  const handleDelete =(item)=>{
   const filteredArray = carts.filter(cart=> cart.id != item.id)
  
   setCarts(filteredArray)
  }
  return (
    <div className='p-10 max-w-[80%] mx-auto shadow-sm'>
      <h1 className='text-xl font-bold mb-3'>Your Cart</h1>

      {
        carts.length === 0 ? <p className='text-center'>This Cart is Empty</p> : 
        <>
           <div className='p-5'>
        {
          carts.map((item) =>(
            <div key={item.id} >
              <div className='flex justify-between p-4 shadow-sm rounded-md'>
                
                <div className='flex gap-2 items-center justify-center'>
                  <span className='bg-white py-2 px-3 rounded-full shadow-sm'>{item.icon}</span>
                 <div> 
                  <p className='text-xl font-bold'>{item.name}</p>
                  <p className='text-gray-400'>${item.price}</p>
                  </div>
                </div>
                <button className='btn bg-white shadow-sm rounded-full text-red-500 py-1 px-2'onClick={()=>handleDelete(item)}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>

     <div className='flex justify-between items-center p-5'>
      <div className='text-gray-400'>Total:</div>
      <div className='text-xl'>{totalPrice}</div>
     </div>
     <button onClick={handleProceed} className='btn w-full mt-5 bg-red-500 text-white text-2xl rounded-full'>Proceed to Checkout</button>
        
        </>
      }

   
    </div>
  );
};

export default TabCart;