import React from 'react';
import { BsCart } from 'react-icons/bs';
import { toast } from 'react-toastify';

const TabCart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handleProceed = () => {
    setCarts([]);
    toast.success("proceed to cart successfully");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter(cart => cart.id !== item.id);
    setCarts(filteredArray);
    toast.error("delete item!");
  };

  return (
    <div className='p-4 md:p-8 lg:p-10 max-w-[95%] md:max-w-[85%] lg:max-w-[80%] mx-auto shadow-sm'>
      
      <h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-3 text-center md:text-left'>
        Your Cart
      </h1>

      {
        carts.length === 0 ? (
          <div>
            <span className='flex justify-center mb-8 text-3xl md:text-4xl lg:text-5xl'>
              <BsCart />
            </span>
            <p className='text-center text-sm md:text-base lg:text-lg'>
              This Cart is Empty
            </p>
          </div>
        ) : (
          <>
            <div className='p-2 md:p-5'>
              {
                carts.map((item) => (
                  <div key={item.id} className='mb-3'>
                    
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 p-3 md:p-4 shadow-sm rounded-md'>
                      
                      <div className='flex gap-2 items-center'>
                        <span className='bg-white py-2 px-3 rounded-full shadow-sm text-sm md:text-base lg:text-lg'>
                          {item.icon}
                        </span>

                        <div>
                          <p className='text-base md:text-lg lg:text-xl font-bold'>
                            {item.name}
                          </p>
                          <p className='text-gray-400 text-sm md:text-base'>
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <button
                        className='btn bg-white shadow-sm rounded-full text-red-500 py-1 px-3 md:py-2 md:px-4 text-sm md:text-base w-full md:w-auto'
                        onClick={() => handleDelete(item)}
                      >
                        Remove
                      </button>
                    </div>

                  </div>
                ))
              }
            </div>

            <div className='flex justify-between items-center p-3 md:p-5 text-sm md:text-base lg:text-lg'>
              <div className='text-gray-400'>Total:</div>
              <div className='font-bold'>${totalPrice}</div>
            </div>

            <button
              onClick={handleProceed}
              className='btn w-full mt-5 bg-red-500 text-white text-base md:text-lg lg:text-2xl rounded-full py-2 md:py-3'
            >
              Proceed to Checkout
            </button>
          </>
        )
      }

    </div>
  );
};

export default TabCart;