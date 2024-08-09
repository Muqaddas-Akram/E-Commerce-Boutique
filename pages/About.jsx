// src/pages/About.jsx
import React, { useState } from "react";
import Modal from './Modal';

const products = [
  {
    id: 1,
    category: "Women",
    title: "Summer Dress",
    image: "src/assets/Images/Image18.jpeg",
    rating: 4.5,
    description: "Elegant summer dress perfect for any occasion. Comfortable and stylish, made from high-quality materials."
  },
  {
    id: 2,
    category: "Men",
    title: "Casual Shirt",
    image: "src/assets/Images/Image4.jpg",
    rating: 4,
    description: "Classic casual shirt, ideal for everyday wear. Made from breathable fabric, offering both comfort and style."
  },
  {
    id: 3,
    category: "Kids",
    title: "Kids Shirt",
    image: "src/assets/Images/Image5.jpg",
    rating: 4.5,
    description: "Adorable kids t-shirt with fun designs. Soft and durable, perfect for active play and everyday use."
  },
  {
    id: 4,
    category: "Men",
    title: "Men's Jacket",
    image: "src/assets/Images/Image10.png",
    rating: 4,
    description: "Stylish men's jacket, perfect for layering. Keeps you warm and looks great with any outfit."
  },
  {
    id: 5,
    category: "Women",
    title: "Casual Dress",
    image: "src/assets/Images/Image3.jpg",
    rating: 4.5,
    description: "Chic blouse for a sophisticated look. Versatile and easy to pair with skirts or pants for a complete outfit."
  }
];


const About = ({ setCartItems, cartItems }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowModal(false); 
  };

  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-pink-200 to-purple-300 m-10 rounded">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 md:w-1/5">
              <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-36 md:h-24 w-full object-cover object-center"
                  src={product.image}
                  alt={product.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {product.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {product.title}
                  </h1>
                  <div className="flex items-center flex-wrap ">
                    <button
                      className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowModal(true);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 0.5;
                      return (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${ratingValue <= product.rating ? 'text-yellow-300' : 'text-gray-400'}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default About;
