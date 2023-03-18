import { createSlice } from "@reduxjs/toolkit";
import products from '../../data';

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    setProducts: (state, action) => action.payload,

  }

})

export default productsSlice.reducer;
export const { setProducts, } = productsSlice.actions;

export const getByMaker = (maker) => (dispatch) => {
  let result = [];
  console.log({maker});
  if (maker === 'all')
    result = products
  else
    result = products.filter(product => product.maker === maker)

  dispatch(setProducts(result));
}

export const getByTerm = (term) => (dispatch) => {
  let result = [];

  result = products.filter(product => product.maker.includes(term))
  dispatch(setProducts(result));
}

