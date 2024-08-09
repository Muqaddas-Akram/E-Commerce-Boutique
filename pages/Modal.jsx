
// src/pages/Modal.jsx
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const Modal = ({ product, onClose, onAddToCart }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <button className="text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <img
          className="w-full h-auto object-cover mt-4"
          src={product.image}
          alt={product.title}
        />
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 font-bold">Rating: {product.rating}</p>
        <div className="flex space-x-2 justify-center mt-4">
          <button
            className="text-white bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Add To Cart
          </button>
          <button
            className="text-white bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
