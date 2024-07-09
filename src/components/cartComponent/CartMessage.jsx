import React from "react";

const CartMessage = () => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 pt-7 pb-7 rounded-sm text-center p-8">
        <div className="mb-7 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/152/436/original/tick-check-mark-icon-sign-symbol-design-free-png.png"
            className="w-12 h-12"
            alt=""
          />
        </div>
        <h6 className="text-white text-base font-medium">
          Sản phẩm đã được thêm vào giỏ hàng
        </h6>
      </div>
    </div>
  );
};

export default CartMessage;
