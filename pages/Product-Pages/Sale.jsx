// src/pages/Sale.jsx
import React, { useState } from "react";
import ProductNavbar from "../../components/ProductNavbar";
import ImageModal from "../../components/ImageModal";
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

const Sale = () => {
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

    const images = [
        {
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
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
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
            title: "Product 3",
            color: "Blue",
            price: "$150",
            rating: "4.0",
            description: "Description for Product 2",
        },
        {
            img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            title: "Product 4",
            color: "Red",
            price: "$100",
            rating: "4.5",
            description: "Description for Product 1",
        },
        // Add more products as needed
    ];

    const handleAddToCart = () => {
        if (selectedProduct) {
            dispatch(addItem(selectedProduct));
            closeModal();
        }
    };

    return (
        <>
            <ProductNavbar />
            <div className="grid grid-cols-2 m-10 md:grid-cols-3 gap-4">
                {images.map((product, index) => (
                    <div key={index}>
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

export default Sale;
