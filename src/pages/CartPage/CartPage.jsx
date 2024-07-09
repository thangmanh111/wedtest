import React, { useState } from "react";
import ListCart from "../../components/cartComponent/ListCart";
import CheckoutCart from "../../components/cartComponent/CheckoutCart";

const CartPage = () => {
  const [idProduct, setIdProduct] = useState([]);

  return (
    <div className="max-w-[1200px] mx-auto my-5 rounded-md">
      <ListCart
        setId={(data) => {
          setIdProduct(data);
        }}
       
      />

      <CheckoutCart productCheck={idProduct}  />
    </div>
  );
};

export default CartPage;
