import React, { useEffect, useMemo, useState } from "react";
import BoxLeftCheckout from "../../components/checkoutComponent/BoxLeftCheckout";
import BoxRightCheckout from "../../components/checkoutComponent/BoxRightCheckout";
import LoadingProduct from "../../components/loading/LoadingProduct";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const CheckOutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const productCheckout = JSON.parse(localStorage.getItem("productCheckout"));
  const totalAll = useMemo(() => {
    const totalPrice = productCheckout.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const totalShip = productCheckout.reduce(
      (total, item) => total + item.quantity * item.price,
      2
    );
    return { totalPrice, totalShip };
  }, [productCheckout]);
  console.log(productCheckout);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      <div className="max-w-[1200px] mx-auto my-3 ">
        <ul className="flex items-center gap-3 mb-3">
          <Link to={"/"}>
            <li className="text-4xl font-bold text-orange-500">Soppe</li>
          </Link>
          |<li className="text-xl text-red-600">Thanh toán</li>
        </ul>
        {isLoading ? (
          <div>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={isLoading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            <BoxLeftCheckout
              proCheck={productCheckout}
              totalPrice={Math.ceil(totalAll.totalPrice)}
              totalShip={Math.ceil(totalAll.totalShip)}
            />
            <BoxRightCheckout
              totalPrice={Math.ceil(totalAll.totalPrice)}
              totalShip={Math.ceil(totalAll.totalShip)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CheckOutPage;
