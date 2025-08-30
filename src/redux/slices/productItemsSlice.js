import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts : [],
};

const productItemsSlice = createSlice({
  name: 'productItems',
  initialState,
  reducers: {
    settingAllProductsInfo : (state, action) => {
      state.allProducts = [...action.payload];
    }
  },
});

export const { settingAllProductsInfo } = productItemsSlice.actions;
export const productItemsReducer = productItemsSlice.reducer;
