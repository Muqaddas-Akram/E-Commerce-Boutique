import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl text-center text-pink-400 font-bold mb-5">Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-center text-2xl text-purple-400 m-5'>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-4 border-b pb-4">
              <div className="flex items-center">
                <img
                  className="w-20 h-20 object-cover mr-4"
                  src={item.image}
                  alt={item.title}
                />
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <p>Rating: {item.rating}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
