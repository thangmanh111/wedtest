import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import BoxModalCheck from "./BoxModalCheck";
const CheckoutCart = ({ productCheck }) => {
  const [totalItem, setTotalItem] = useState(0);
  const { carts } = useSelector((state) => state.CartSlice);
  const [proCheckout, setProductCheckOut] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [checkBackdrop, setCheckBackdrop] = useState(false);

  const handleChek = () => {
    setCheckBackdrop(true);
    const newCartCheck = carts.filter((item) => productCheck.includes(item.id));

    setProductCheckOut(newCartCheck);
    setTimeout(() => {
      setCheckBackdrop(false);
    }, 1000);
    setOpen(true);
  };

  useEffect(() => {
    const newCartCheck = carts.filter((item) => productCheck.includes(item.id));
    console.log(newCartCheck);
    setProductCheckOut(newCartCheck);
  }, [productCheck, carts]);

  useEffect(() => {
    const totalPrice = proCheckout.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalItem(totalPrice);
  }, [proCheckout]);

  return (
    <div>
      <div className="flex justify-end py-3">
        <div className="flex w-1/3 flex-col p-6 border-2 overflow-x-auto shadow-md sm:rounded-lg">
          <h1 className=" font-bold p-3">
            <p>Total Price: {Math.ceil(totalItem)}</p>
          </h1>

          {/* <Link to={"/checkout"}> */}
          <button
            onClick={handleChek}
            disabled={carts.length === 0}
            type="button"
            className=" text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-orange-700 dark:border-orange-700"
          >
            Thanh toán
          </button>
          {checkBackdrop ? (
            <div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={checkBackdrop}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          ) : (
            <BoxModalCheck
              handleCloseBox={() => {
                setOpen(false);
              }}
              open={open}
              proCheckout={proCheckout}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
