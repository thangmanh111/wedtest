import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
const BoxProductCategory = ({ productCate }) => {
  return (
    <div>
      {" "}
      <div className="mt-3">
        <h1 className=" font-semibold py-3">CÓ THỂ BẠN CŨNG THÍCH</h1>
        <ul className="flex flex-rown flex-wrap gap-3 justify-around ">
          {productCate.slice(0, 10).map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <li className=" bg-white w-[225px] cursor-pointer border relative  hover:scale-[1.02] ease-in duration-200 hover:border-red-600 rounded-2xl py-3">
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
                    {item.title.slice(0, 15)}
                    {"..."}

                    <span className=" bg-slate-100 font-normal p-1 rounded-md">
                      {item.category}
                    </span>
                  </h2>

                  <h3 className="text-red-500">{Math.ceil(item.price)}$</h3>
                  <div className="flex flex-row items-center gap-2 flex-wrap">
                    {" "}
                    <p className=" text-base">
                      <Rating
                        name="half-rating-read"
                        sx={{ fontSize: 14 }}
                        defaultValue={item.rating}
                        precision={0.5}
                        readOnly
                      />
                    </p>
                    <p>Đã bán: {item.stock}k</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoxProductCategory;
