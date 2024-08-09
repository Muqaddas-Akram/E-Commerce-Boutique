// src/pages/Product.jsx
import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import ProductNavbar from "../components/ProductNavbar";
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addItem(selectedProduct));
      closeModal();
    }
  };

  const products = [
    {
      img: "src/assets/Images/Image13.jpg",
      title: "party",
      color: "Red",
      price: "$29.99",
      rating: 4.5,
      description: "This is product 1 description."
    },
    {
      img: "src/assets/Images/Image12.jpg",
      title: "reseption",
      color: "Blue",
      price: "$39.99",
      rating: 4.0,
      description: "This is product 2 description."
    },
    {
      img: "src/assets/Images/Image17.jpg",
      title: "hoodie",
      color: "Green",
      price: "$19.99",
      rating: 4.8,
      description: "This is product 3 description."
    },
    {
      img: "src/assets/Images/Image16.jpg",
      title: "Shirt",
      color: "Yellow",
      price: "$49.99",
      rating: 4.2,
      description: "This is product 4 description."
    },
    {
      img: "src/assets/Images/Image15.jpg",
      title: "baby girl",
      color: "Black",
      price: "$24.99",
      rating: 4.3,
      description: "This is product 5 description."
    },
    {
      img: "src/assets/Images/Image14.jpg",
      title: "baby",
      color: "White",
      price: "$34.99",
      rating: 4.6,
      description: "This is product 6 description."
    }
  ];

  return (
    <>
      <ProductNavbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img 
                  alt="gallery" 
                  className="w-full object-cover h-full object-center block" 
                  src="src/assets/Images/Image13.jpg"
                  onClick={() => openModal(products[0])}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img 
                  alt="gallery" 
                  className="w-full object-cover h-full object-center block" 
                  src="src/assets/Images/Image12.jpg"
                  onClick={() => openModal(products[1])}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img 
                  alt="gallery" 
                  className="w-full h-full object-cover object-center block" 
                  src="src/assets/Images/Image17.jpg"
                  onClick={() => openModal(products[2])}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img 
                  alt="gallery" 
                  className="w-full h-full object-cover object-center block" 
                  src="src/assets/Images/Image16.jpg"
                  onClick={() => openModal(products[3])}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img 
                  alt="gallery" 
                  className="w-full object-cover h-full object-center block" 
                  src="src/assets/Images/Image15.jpg"
                  onClick={() => openModal(products[4])}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img 
                  alt="gallery" 
                  className="w-full object-cover h-full object-center block" 
                  src="src/assets/Images/Image14.jpg"
                  onClick={() => openModal(products[5])}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
}

export default Products;
