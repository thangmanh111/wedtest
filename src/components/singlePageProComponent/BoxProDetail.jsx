import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addtoCart } from "../../redux-tookit/features/CartSlice";
import CartMessage from "../cartComponent/CartMessage";
import toast from "react-hot-toast";
import { updateStateOpenLogin } from "../../redux-tookit/features/AthSlice";
import { useNavigate } from "react-router-dom";
const BoxProDetail = ({ imgMain, proDetail, getImg }) => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.AthSlice);
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev - 1 <= 0 ? 1 : prev - 1));
  };

  const handleAddToCart = (product) => {
    if (email) {
      setMessageSuccess(true);
      dispatch(addtoCart({ ...product, quantity }));
      setTimeout(() => setMessageSuccess(false), 2000);
    } else {
      toast.error(" Vui lòng đăng nhập để thêm!!", {
        duration: 2000,
        position: "top-center",
        style: {
          fontSize: "14px",
        },
      });
      dispatch(updateStateOpenLogin(true));
    }
  };

  const buyNow = (data) => {
    if (email) {
      dispatch(addtoCart({ ...data, quantity }));
      navigate("/cart");
    } else {
      toast.error(" Vui lòng đăng nhập để thêm!!", {
        duration: 2000,
        position: "top-center",
        style: {
          fontSize: "14px",
        },
      });
      dispatch(updateStateOpenLogin(true));
    }
  };
  return (
    <div>
      {messageSuccess && <CartMessage />}
      <div className="flex flex-row border-2 p-3 rounded-md">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="p-2">
            <img src={imgMain} alt="" className="w-full" />
          </div>

          <div className="flex px-2 gap-2">
            {proDetail?.images?.slice(0, 4).map((item, index) => (
              <img
                src={item}
                alt=""
                className={
                  item === imgMain
                    ? "w-[80px] h-[80px] border cursor-pointer border-solid border-2 border-sky-500"
                    : "w-[80px] h-[80px] border cursor-pointer"
                }
                onClick={() => getImg(item)}
              />
            ))}
          </div>
        </div>
        <div className="w-full p-2">
          <div className="flex flex-col">
            <h1 className="text-2xl">{proDetail.title}</h1>

            <div className="flex flex-row gap-2 py-2">
              <div className="flex flex-row items-center px-2">
                <h2 className="underline">{proDetail.rating}</h2>
                <p>
                  <Rating
                    name="half-rating-read"
                    sx={{ fontSize: 14 }}
                    defaultValue={proDetail?.rating}
                    precision={0.5}
                    readOnly
                  />
                </p>
              </div>
              |<h2 className="px-2">{proDetail.stock} Đánh giá</h2> |
              <h2>{proDetail.minimumOrderQuantity} Đã bán</h2>
            </div>

            <div className="flex flex-row gap-3 p-3 items-center bg-gray-100 my-2">
              <h3 className="text-4xl text-red-500">
                {Math.ceil(proDetail.price)}$
              </h3>
              <span className="p-1 bg-red-400 text-xs font-bold text-white">
                {proDetail.minimumOrderQuantity}% GIẢM
              </span>
            </div>

            <div className="flex gap-3 flex-row flex-wrap bg-white py-3">
              <h1 className="font-bold">Vận chuyển: </h1>
              <div>
                <div>Miễn phí vận chuyển</div>
                <div>Vận chuyển tới : Phường Thanh Khê Tây, Quận Thanh Khê</div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex gap-4 flex-row flex-wrap bg-white py-3 items-center">
                <h1 className="font-bold">Màu sắc: </h1>
                <div className="flex flex-row gap-2 cursor-pointer">
                  {proDetail?.images?.slice(0, 4).map((item, index) => (
                    <span
                      key={index}
                      className={
                        item === imgMain
                          ? "flex gap-2 p-2 border items-center border-solid border-2 border-sky-500"
                          : "flex gap-2 p-2 border items-center"
                      }
                      onClick={() => getImg(item)}
                    >
                      <img src={item} alt="" className="w-[30px]" />
                      White
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-4 flex-row flex-wrap bg-white py-3 items-center">
                <h1 className="font-bold">Số lượng: </h1>
                <div className="flex flex-row gap-2 cursor-pointer">
                  <div className="flex items-center mx-3 gap-3 border">
                    <button
                      type="button"
                      className="flex items-center justify-center bg-gray-100"
                      onClick={decreaseQty}
                    >
                      <RemoveIcon />
                    </button>
                    <div className="qty-value flex align-center justify-center">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      className="flex items-center justify-center bg-gray-100"
                      onClick={increaseQty}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => handleAddToCart(proDetail)}
              >
                Add to cart
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => buyNow(proDetail)}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxProDetail;
