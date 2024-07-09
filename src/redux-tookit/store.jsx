import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/ProductSlice";
import CategorySlice from "./features/CategorySlice";
import SearchProductSlice from "./features/SearchProductSlice";
import CartSlice from "./features/CartSlice";
import AthSlice from "./features/AthSlice";
const reducer = combineReducers({
  ProductSlice,
  CategorySlice,
  SearchProductSlice,
  CartSlice,
  AthSlice
});

const store = configureStore({
  reducer,
});

export default store;
