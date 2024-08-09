import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ isOpen, onRequestClose, product, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Close button */}
        <button
          onClick={onRequestClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-48 h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">{product.title}</h2>
          <p className="text-sm text-gray-600 mt-2">Color: {product.color}</p>
          <p className="text-lg font-semibold mt-2">{product.price}</p>{" "}
          {/* Added price */}
          <div className="flex items-center gap-1 mt-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>
          <p className="text-gray-800 mt-4 text-center">
            {product.description}
          </p>{" "}
          {/* Added description */}
          <div className="mt-4 flex space-x-2">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => onAddToCart(product)}
            >
              Add To Cart
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
