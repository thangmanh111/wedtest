import React from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
const BoxRightCheckout = ({ totalPrice, totalShip }) => {
  const { email } = useSelector((state) => state.AthSlice);

  return (
    <div className="col-span  ">
      <div className="flex flex-col">
        <div className="h-[250px] p-3 border-2 border-orange-500  rounded-lg  mb-5">
          <div className="flex flex-col pb-3">
            <h1 className=" text-lg font-semibold">Thông tin người mua</h1>
            <div>
              <h1 className=" text-sm text-gray-400">Người mua</h1>
              <h1 className=" text-base font-semibold">Nguyen Manh Thắng</h1>
              <h1>{email}</h1>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className=" text-sm text-gray-400">Địa chỉ nhận hàng</h1>
            <div>
              <h1>Mạnh Thắng</h1>
              <h1>+569009525</h1>
              <h1>
                Quảng Vinh, Sầm Sơn, Thanh Hóa
              </h1>
            </div>
          </div>
        </div>

        <div className="h-[240px] p-3 border-2 border-orange-500  rounded-lg  mb-5">
          <div className="flex flex-col pb-3">
            <h1 className=" text-lg font-semibold">Thông tin thanh toán</h1>
            <div>
              <h1 className=" text-sm text-gray-400">Phương thức thanh toán</h1>
              <h1 className=" text-base font-semibold">Chuyển khoản</h1>
            </div>
          </div>

          <div className="flex flex-col pb-3 gap-2">
            <h1 className=" text-sm text-gray-400">Thanh toán của người mua</h1>

            <div className="flex justify-between">
              <h1 className="text-sm font-semibold">Tổng tiền hàng:</h1>
              <h1>{totalPrice}$</h1>
            </div>

            <div className="flex justify-between">
              <h1 className="text-sm font-semibold">
                Phí vận chuyển <FlightTakeoffIcon />:
              </h1>
              <h1>2$</h1>
            </div>

            <div className="flex justify-between">
              <h1 className="text-sm font-semibold">Tổng thanh toán:</h1>
              <h1>{totalShip}$</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxRightCheckout;
