import React from "react";

const CartNotLogin = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center p-5">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/search/a60759ad1dabe909c46a.png"
          alt=""
          className="w-[210px]"
        />
        <div className="flex flex-col justify-between items-center ">
          {" "}
          <h2 className=" uppercase  font-bold">
            Vui lòng Login để xem giỏ hàng
            <span className=" font-light lowercase text-xl"></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartNotLogin;
