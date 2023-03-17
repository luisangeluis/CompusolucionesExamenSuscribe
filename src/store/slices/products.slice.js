import { createSlice } from "@reduxjs/toolkit";
import products from '../../data';

const productsSlice = createSlice({
    name:'products',
    initialState:products,
    reducers:{
        setProducts:(state,action)=>action.payload
    }

})

export default productsSlice.reducer;
export const {setProducts} = productsSlice.actions;

