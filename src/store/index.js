import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice';
import setFilters from './slices/setFilters.slice';

export default configureStore({
    reducer:{
        products,
        setFilters,
    }
})