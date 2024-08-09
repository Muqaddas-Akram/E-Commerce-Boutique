// src/pages/NewArrival.jsx
import React, { useState, useEffect } from 'react';
import ProductNavbar from '../../components/ProductNavbar';
import ImageModal from "../../components/ImageModal";
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

const images = [
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        title: "Product 1",
        color: "Red",
        price: "$100",
        rating: "4.5",
        description: "Description for Product 1",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        title: "Product 2",
        color: "Blue",
        price: "$150",
        rating: "4.0",
        description: "Description for Product 2",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        title: "Product 3",
        color: "Green",
        price: "$200",
        rating: "4.8",
        description: "Description for Product 3",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        title: "Product 4",
        color: "Yellow",
        price: "$250",
        rating: "4.2",
        description: "Description for Product 4",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        title: "Product 5",
        color: "Purple",
        price: "$300",
        rating: "4.7",
        description: "Description for Product 5",
    },
];

const NewArrival = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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

    return (
        <>
            <ProductNavbar />
            <div className="grid gap-4 m-10">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg w-4/5 mx-auto"
                        src={images[currentImageIndex].img}
                        alt={`Image ${currentImageIndex + 1}`}
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {images.map((product, index) => (
                        <div key={index}>
                            <img
                                className="h-auto max-w-full rounded-lg cursor-pointer"
                                src={product.img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => openModal(product)}
                            />
                        </div>
                    ))}
                </div>
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

export default NewArrival;
