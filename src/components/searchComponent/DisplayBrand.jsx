import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingBackdrop from "../loading/LoadingBackdrop";
import Rating from "@mui/material/Rating";
const DisplayBrand = ({ isLoading, setLoading }) => {
  const productBrand = useSelector(
    (state) => state.SearchProductSlice.productBrand
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="max-w-[1200px] flex justify-center items-center">
          <LoadingBackdrop isLoading={isLoading} />
        </div>
      ) : (
        <ul className="flex flex-rown flex-wrap gap-3 justify-around mt-3">
          {productBrand && productBrand.length ? (
            productBrand.map((item) => (
              <li className=" bg-white w-[210px] cursor-pointer border relative  hover:scale-[1.02] ease-in duration-200 hover:border-red-600 rounded-2xl py-3">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full border-b-2 rounded-2xl"
                />
                <span className=" absolute top-2 left-0">
                  <img
                    src="https://down-vn.img.susercontent.com/file/76c36bd87ff2eb5887d9ad3516111869"
                    alt=""
                    className="w-[50px]"
                  />
                </span>
                <div className="px-3 h-[120px]">
                  <h2 className="font-bold flex gap-2 flex-row items-center">
                    {item.title.slice(0, 16)}

                    <span className=" bg-slate-100 font-normal p-1 rounded-md">
                      {item.category}
                    </span>
                  </h2>

                  <h3 className="text-red-500">{Math.ceil(item.price)}$</h3>
                  <div className="flex flex-row items-center gap-2 flex-wrap">
                    {" "}
                    <p>Đã bán: {item.stock}k</p>
                    <p className=" text-base">
                      <Rating
                        name="half-rating-read"
                        sx={{ fontSize: 14 }}
                        defaultValue={item.rating}
                        precision={0.5}
                        readOnly
                      />
                    </p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="flex flex-col justify-between items-center">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/search/a60759ad1dabe909c46a.png"
                alt=""
                className="w-[210px]"
              />
              <div className="flex flex-col justify-between items-center ">
                <h2 className=" uppercase  font-bold">
                  {" "}
                  Không tìm thấy kết quả nào
                </h2>
                <h3 className="font-bold">
                  {" "}
                  Hãy thử sử dụng các từ khóa chung chung hơn
                </h3>
              </div>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default DisplayBrand;
