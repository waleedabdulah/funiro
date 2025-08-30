import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts : [],
  isLoading: true
};

const productItemsSlice = createSlice({
  name: 'productItems',
  initialState,
  reducers: {
    settingAllProductsInfo : (state, action) => {
      state.allProducts = [...action.payload];
      state.isLoading = false;
    }
  },
});

export const { settingAllProductsInfo } = productItemsSlice.actions;
export const productItemsReducer = productItemsSlice.reducer;
