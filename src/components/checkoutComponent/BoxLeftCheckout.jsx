import React from "react";
import { useSelector } from "react-redux";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Link } from "react-router-dom";
const BoxLeftCheckout = ({ proCheck, totalPrice, totalShip }) => {
  const { carts } = useSelector((state) => state.CartSlice);

  return (
    <div className="col-span-2">
      {/* <div className="p-6">
          <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <svg
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
              </span>
            </li>
            <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                <span class="me-2">2</span>
                Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
              </span>
            </li>
            <li class="flex items-center">
              <span class="me-2">3</span>
              Confirmation
            </li>
          </ol>
        </div> */}
      <div className="p-2 border-2 border-orange-500 rounded-lg">
        {/* detail order box1*/}
        <div className="flex justify-between border p-3">
          <h1 className=" text-xl font-semibold">Chi tiết đơn hàng</h1>
          <div className=" flex  flex-col items-end">
            <div className="flex gap-2 items-center">
              <img
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-GHN-Slogan-VN-768x280.png"
                className=" w-24"
                alt=""
              />
              |<h1 className=" text-sm">Tiêu chuẩn</h1>
              <h1 className=" text-sm p-2 bg-red-600 text-white rounded-lg">
                #9325DSAFMFSLAD0
              </h1>
            </div>
            <div className=" text-sm">
              Dự kiến lấy hàng: 8:30 - 12:00 - 19/7 - Dự kiến giao hàng: Sáng
              20/4{" "}
            </div>
          </div>
        </div>

        {/* detail product box2 */}
        <div>
          {/*  tracking*/}
          <div className="p-4">
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li class="flex w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex w-full items-center after:content-['---'] sm:after:hidden after:mx-2 after:text-gray-300 dark:after:text-gray-700">
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Chờ xác nhận
                </span>
              </li>

              <li class="flex w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Chờ lấy hàng
                </span>
              </li>
              <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-black">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Giao hàng
                </span>
              </li>

              <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Hoàn hành
                </span>
              </li>
            </ol>
          </div>
          {/* note user */}
          <div className="flex flex-col gap-1 p-3 bg-orange-200 rounded-lg">
            <h1 className=" text-lg font-semibold"> Lưu ý của khách hàng</h1>
            <p>
              Lần trước còn thiếu mua giày mà sao giao đơn hàng chai lau kính là
              sao vậy , chụp ảnh cho đánh giá một sao nhé{" "}
            </p>
          </div>
          {/* detail pro */}
          <div className="">
            <h1 className="flex  gap-2 py-3">
              Hàng gửi từ{" "}
              <p className="text-blue-600 font-semibold">
                Kho Hà Đông, Hà Nội
              </p>
            </h1>
            {proCheck && proCheck.length > 0
              ? proCheck.map((item) => (
                  <Link to={`/product/${item.id}`}>
                    <div
                      key={item.id}
                      className="flex justify-between items-center mt-2 cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <div>
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-[70px] rounded-lg border-2"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <h1 className="font-semibold text-lg">
                            {item.title}{" "}
                          </h1>
                          <h1>SKU: {item.sku}</h1>
                          <h1>Danh mục: {item.category}</h1>
                        </div>
                      </div>
                      <div>x{item.quantity}</div>
                      <div>{Math.ceil(item.price)}$</div>
                    </div>
                  </Link>
                ))
              : null}
          </div>

          {/* check out */}

          <div className="flex justify-end pt-5 mt-3 border-t-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-44">
                <h1 className=" text-lg font-semibold">Tổng tiền hàng: </h1>
                <h1>{totalPrice}$</h1>
              </div>
              <div className="flex justify-between gap-10">
                <h1 className=" text-lg font-semibold">Phí vận chuyển: </h1>
                <h1>2$</h1>
              </div>
              <div className="flex justify-between gap-10">
                <h1 className=" text-lg font-semibold">Thành tiền: </h1>
                <h1 className=" text-lg font-semibold text-orange-500">
                  {totalShip}$
                </h1>
              </div>
            </div>
          </div>

          {/* ------- */}

          <div className="flex justify-end pt-5 mt-3 border-t-2">
            <div className="flex flex-row gap-[43px]">
              <h1>Phương thức thanh toán: </h1>
              <p className="flex items-center gap-2">
                Chuyển khoản <AddCardIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxLeftCheckout;
