import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import RoomIcon from "@mui/icons-material/Room";
import "./modal.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useNavigate } from "react-router-dom";
const BoxModalCheck = ({ open, handleCloseBox, proCheckout }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const totalAll = useMemo(() => {
    const totalPrice = proCheckout.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const totalShip = proCheckout.reduce(
      (total, item) => total + item.quantity * item.price,
      2
    );

    return { totalPrice, totalShip };
  }, [proCheckout]);
  const handleSaveCheckout = () => {
    localStorage.setItem("productCheckout", JSON.stringify(proCheckout));
    navigate("/checkout");
  };
  return (
    <div>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleCloseBox}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            {proCheckout && proCheckout.length > 0 ? (
              <div>
                {" "}
                <div className="flex  items-center gap-44 pb-5 w-full">
                  {" "}
                  <p className=" cursor-pointer">
                    <DialogActions>
                      {" "}
                      <CancelPresentationIcon onClick={handleCloseBox} />
                    </DialogActions>
                  </p>
                  <h1 className="text-2xl flex items-center justify-center">
                    Thanh toán
                  </h1>
                </div>
                <div className="xBNaac"></div>
                <div className="flex flex-col mt-3">
                  <h1 className="flex items-center text-orange-500">
                    {" "}
                    <RoomIcon /> Địa Chỉ Nhận Hàng
                  </h1>
                  <p>
                    <strong>thang manh (+84) 569009525</strong> Kp Quảng Vinh, Thành Phố Sầm Sơn, Thanh Hóa
                  </p>
                </div>
                <h1 className=" text-lg font-semibold py-3">Sản phẩm: </h1>
                {proCheckout.map((item) => (
                  <div
                    key={item.id}
                    className=" flex  gap-3 justify-start bg-slate-100 p-3 mb-2"
                  >
                    <div>
                      <img src={item.thumbnail} alt="" className=" w-20" />
                    </div>
                    <div>
                      <h1>{item.title}</h1>
                      <h2>x{item.quantity}</h2>
                      <h1>{Math.ceil(item.price)}$</h1>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-1 py-2">
                  <div className="flex justify-between items-center pt-3 border-t-2">
                    <h1 className=" text-lg font-semibold">
                      Tùy chọn vận chuyển:{" "}
                    </h1>
                    <p className="border-2 p-2 cursor-pointer">GHN</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <AccessTimeIcon sx={{ fontSize: 18 }} />
                    <h1>Nhận hàng sau 7 - 14 ngày</h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1>Ghi chú:</h1>
                    <input
                      type="text"
                      placeholder="Lưu ý cho người bán"
                      className="border outline-none p-2"
                    />
                  </div>
                </div>
                <div className="flex flex-row  justify-between py-3 ">
                  <h1>Tổng số ({proCheckout.length} sản phẩm): </h1>
                  <h1 className=" text-lg  font-semibold">
                    {Math.ceil(totalAll.totalPrice)}$
                  </h1>
                </div>
                <div className="flex flex-col pt-3 gap-1">
                  <div className="pt-3 border-t-2">
                    <h1 className=" text-lg font-semibold ">
                      Chi tiết thanh toán:{" "}
                    </h1>
                  </div>

                  <div className="flex justify-between">
                    <h1>Tổng tiền hàng</h1>
                    <h1>{Math.ceil(totalAll.totalPrice)}$</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>Phí vận chuyển</h1>
                    <h1>2$</h1>
                  </div>

                  <div className="flex justify-between">
                    <h1>Tổng thanh toán</h1>
                    <h1 className=" text-lg font-semibold">
                      {Math.ceil(totalAll.totalShip)}$
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <div className="pt-3 border-t-2">
                    <h1 className=" text-lg font-semibold ">
                      Phương thức thanh toán:{" "}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                      <AddCardIcon sx={{ fontSize: 25 }} />
                      <h1>Chuyển khoản</h1>
                    </div>
                    <div>
                      <h1 className="p-2 border-2 cursor-pointer">Thay đổi</h1>
                    </div>
                  </div>
                </div>
                {/* <Link to={"/checkout"}> */}
                <button
                  onClick={handleSaveCheckout}
                  className=" w-full mt-3 bg-orange-500 p-2 rounded-md text-white font-semibold hover:bg-orange-400"
                >
                  Đặt hàng
                </button>
                {/* </Link> */}
              </div>
            ) : (
              <div className="h-[200px] w-[500px] flex flex-col justify-between">
                <h1 className="flex justify-center">
                  {" "}
                  Vui lòng chọn sản phẩm để đặt hàng!!
                </h1>
                <button
                  onClick={handleCloseBox}
                  className=" w-full mt-3 bg-orange-500 p-2 rounded-md text-white font-semibold hover:bg-orange-400"
                >
                  Oke
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BoxModalCheck;
