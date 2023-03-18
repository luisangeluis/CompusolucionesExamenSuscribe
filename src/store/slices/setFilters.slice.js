import { createSlice } from "@reduxjs/toolkit";

const setFilterSlice = createSlice({
  name: 'setFilters',
  initialState: {},
  reducers: {
    setFilters: (state, action) => action.payload
  }
})

export default setFilterSlice.reducer;
export const { setFilters } = setFilterSlice.actions;