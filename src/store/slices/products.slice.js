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
export const { setProducts, setByMaker } = productsSlice.actions;

export const getByMaker = (maker) => (dispatch) => {
  // console.log(maker);
  let result = [];
  
  if(maker==='') 
    result = products
  
  else{
    result = products.filter(product => {
      return product.maker === maker;
    })
  }
  console.log(result);

  dispatch(setProducts(result));
}

