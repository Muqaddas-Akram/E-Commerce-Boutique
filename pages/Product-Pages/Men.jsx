import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import ImageModal from "../../components/ImageModal";
import ProductNavbar from "../../components/ProductNavbar";

const Men = () => {
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

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setModalIsOpen(false);
  };

  const images = [
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      title: "Product 1",
      color: "Red",
      price: "$100",
      rating: "4.5",
      description: "Description for Product 1",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      title: "Product 2",
      color: "Blue",
      price: "$150",
      rating: "4.0",
      description: "Description for Product 2",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      title: "Product 3",
      color: "Green",
      price: "$200",
      rating: "4.2",
      description: "Description for Product 3",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      title: "Product 4",
      color: "Yellow",
      price: "$250",
      rating: "4.7",
      description: "Description for Product 4",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      title: "Product 5",
      color: "Purple",
      price: "$300",
      rating: "4.9",
      description: "Description for Product 5",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      title: "Product 6",
      color: "Pink",
      price: "$120",
      rating: "4.3",
      description: "Description for Product 6",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      title: "Product 7",
      color: "Black",
      price: "$90",
      rating: "4.1",
      description: "Description for Product 7",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      title: "Product 8",
      color: "White",
      price: "$110",
      rating: "4.6",
      description: "Description for Product 8",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      title: "Product 9",
      color: "Orange",
      price: "$140",
      rating: "4.4",
      description: "Description for Product 9",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      title: "Product 10",
      color: "Brown",
      price: "$130",
      rating: "4.5",
      description: "Description for Product 10",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      title: "Product 11",
      color: "Gray",
      price: "$160",
      rating: "4.8",
      description: "Description for Product 11",
    },
    {
      img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      title: "Product 12",
      color: "Navy",
      price: "$170",
      rating: "4.9",
      description: "Description for Product 12",
    },
  ];

  return (
    <>
      <ProductNavbar />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-10">
        {images.map((product, index) => (
          <div key={index} className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={product.img}
                alt={product.title}
                onClick={() => openModal(product)}
              />
            </div>
          </div>
        ))}
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Men;
