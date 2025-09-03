import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Products-slice';



export const store = configureStore({
    reducer: {
        products: productsSlice,

    }

});