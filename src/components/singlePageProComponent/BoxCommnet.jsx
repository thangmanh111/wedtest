import React from "react";
import Rating from "@mui/material/Rating";
const BoxCommnet = ({ proDetail }) => {
  return (
    <div>
      <div className=" mt-3 bg-gray-50">
        <h1 className="bg-gray-100 p-3">ĐÁNH GIÁ SẢN PHẨM: </h1>
        <div className="p-3 flex flex-col justify-center gap-3">
          {proDetail?.reviews?.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-1">
                <img
                  className="w-[30px] rounded-full"
                  src="https://tse4.mm.bing.net/th?id=OIP.OesLvyzDO6AvU_hYUAT4IAHaHa&pid=Api&P=0&h=180"
                  alt=""
                />
                <h1 className=" text-xl font-bold">{item.reviewerName} </h1>
              </div>

              <h1>
                {" "}
                <Rating
                  name="half-rating-read"
                  sx={{ fontSize: 16 }}
                  defaultValue={item.rating}
                  precision={0.5}
                  readOnly
                />{" "}
              </h1>
              <p className=" text-xs">{item.date}</p>
              <h3>{item.comment}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxCommnet;
