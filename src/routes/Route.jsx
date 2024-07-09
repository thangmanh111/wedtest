import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import CategoriProductPage from "../pages/CategoriProductPage/CategoriProductPage";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";

import ProductSinglePage from "../pages/ProductSinglePage/ProductSinglePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import ProFilePage from "../pages/ProfilePage/ProFilePage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProFilePage />} />
      <Route path="/category/:id" element={<CategoriProductPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/product/:id" element={<ProductSinglePage />} />
      <Route path="/search/:searchTerm" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
