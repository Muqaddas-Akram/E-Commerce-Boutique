// src/ReduxToolKit/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from './userSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
  },
});

export { store };
