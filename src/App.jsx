import React from "react";
import { HashRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/Route";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderCart from "./components/headerCart/HeaderCart";
import toast, { Toaster } from "react-hot-toast";
import NoticationBox from "./components/notication/NoticationBox";

function App() {
  return (
    <>
      <NoticationBox />
      <Toaster />
      <Router>
        <ConditionalHeader />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}

const ConditionalHeader = () => {
  const location = useLocation();
  const noHeaderRoutes = ["/cart", "/checkout", "/profile"];

  return !noHeaderRoutes.includes(location.pathname) ? (
    <Header />
  ) : (
    <HeaderCart />
  );
};

export default App;
