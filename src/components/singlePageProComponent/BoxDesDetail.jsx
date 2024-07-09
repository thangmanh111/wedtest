import React from "react";

const BoxDesDetail = ({ proDetail }) => {
  return (
    <div>
      <div className=" mt-3">
        <h1 className="bg-gray-100 p-3">MÔ TẢ SẢN PHẨM: </h1>
        <div className="p-3 border-2">
          <h1>{proDetail.description}</h1>
          <h1>
            Category: <span>{proDetail.category}</span>
          </h1>
          <h1>
            Brand: <span>{proDetail.brand ? proDetail.brand : "No brand"}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BoxDesDetail;
