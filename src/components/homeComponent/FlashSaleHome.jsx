import React from "react";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import getApiAll from "../../services/GetApiAll";
import { Link } from "react-router-dom";
import LoadingProduct from "../loading/LoadingProduct";
const FlashSaleHome = ({ isLoading }) => {
  const [listFlash, setListFlash] = useState([]);
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className=" flex gap-1  justify-center items-center">
        <div className=" bg-black  text-white px-3 rounded"> {hours}</div>
        <div className=" bg-black  text-white px-2 rounded"> {minutes}</div>
        <div className=" bg-black  text-white px-2 rounded">{seconds}</div>
      </span>
    );
  };

  const getProFlash = async () => {
    const res = await getApiAll.getApiProduct();

    const pro = await res.products;
    setListFlash(pro);
  };

  useEffect(() => {
    getProFlash();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col mt-5">
        <div className="flex gap-3 p-3 items-center bg-white rounded-md py-4">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e5389.png"
            alt=""
            className="h-[32px]"
          />
          <Countdown date={Date.now() + 10000000} renderer={renderer} />
        </div>
        {isLoading ? (
          <div className="mt-3 flex justify-center">
            <LoadingProduct />
          </div>
        ) : (
          <div className=" flex flex-wrap mt-2">
            {listFlash.slice(0, 6).map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
                <div
                  key={item.id}
                  className="w-[200px] h-[248px] bg-white cursor-pointer p-3 relative gap-1 border hover:scale-[1.02] ease-in duration-200"
                >
                  <img src={item.thumbnail} alt="" className="p-3 w-full" />
                  <span className=" absolute w-[37px] h-[22px] bg-red-200  text-red-700 flex justify-center items-center rounded top-1 left-1">
                    {item.minimumOrderQuantity}%
                  </span>
                  <h1 className="text-center text-2xl text-red-600">
                    {Math.ceil(item.price)}$
                  </h1>
                  <p className="h-[16px] bg-orange-400 flex justify-center items-center text-xs rounded-xl mx-3 uppercase text-white">
                    Đang bán chạy
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashSaleHome;
