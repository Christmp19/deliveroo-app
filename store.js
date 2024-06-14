import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './features/basketSlice';
import restaurantSlice from './features/restaurantSlice';


export const store = configureStore({
    reducer: {
        basket: basketSlice,
        restaurant: restaurantSlice
    },
});