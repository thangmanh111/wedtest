import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categorys: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    listCategory: (state, action) => {
      return {
        ...state,
        categorys: action.payload,
      };
    },
  },
});

export const { listCategory } = categorySlice.actions;
export default categorySlice.reducer;
