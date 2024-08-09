// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <header className="text-gray-600 -my-3 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">E-Commerce</span>
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`md:flex md:items-center md:space-x-4 ${
              isOpen ? "block" : "hidden"
            } w-full md:w-auto`}
          >
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-5 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 mr-5 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/products"
              className="block mt-4 md:inline-block md:mt-0 mr-5 hover:text-gray-900"
            >
              Products
            </Link>
            <Link
              to="/order-history"
              className="block mt-4 md:inline-block md:mt-0 mr-5 hover:text-gray-900"
            >
              Order History
            </Link>
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 mr-5 hover:text-gray-900"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative group flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-white"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 512 512"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                >
                  <path
                    fill="#df75e1"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </div>

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button onClick={() => setIsCartOpen(!isCartOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="22.5"
                    className="mr-2"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#e03cec"
                      d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                </button>
                {isCartOpen && (
                  <div className="cart-list absolute right-0 mt-6 w-48 bg-gradient-to-r from-purple-200 to-pink-200 shadow-lg rounded-lg p-4 z-50">
                    <button
                      className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsCartOpen(false)}
                    >
                      &times;
                    </button>
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                          <p className="text-sm">{item.title}</p>
                          <button
                            className="text-red-500 hover:text-red-700 text-xs"
                            onClick={() => handleRemoveFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Cart is empty</p>
                        <button
                          className="text-gray-600 hover:text-gray-900 text-xs"
                          onClick={() => setIsCartOpen(false)}
                        >
                          &times;
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
                >
                  Log In
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
