import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchProduct: [],
  productBrand: [],
  isCheckBrand: false,
};

const searchProductSlice = createSlice({
  name: "searchProductSlice",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      return {
        ...state,
        searchProduct: [...action.payload],
      };
    },
    searchProductsByBrand: (state, action) => {
      return {
        ...state,
        productBrand: action.payload.length > 0 ? [...action.payload] : [],
        isCheckBrand: action.payload.length > 0 ? true : false,
      };
    },
  },
});

export const { searchProducts, searchProductsByBrand } =
  searchProductSlice.actions;
export default searchProductSlice.reducer;
