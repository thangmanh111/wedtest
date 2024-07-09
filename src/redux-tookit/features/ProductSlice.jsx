import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    listProducts: (state, action) => {
      return {
        ...state,
        products: action.payload.products,
      };
    },
  },
});

export const { listProducts } = productSlice.actions;
export default productSlice.reducer;
