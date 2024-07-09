import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ListCate = ({ handleClick }) => {
  const cate = useSelector((state) => state.CategorySlice.categorys);
  const { id } = useParams();
  return (
    <div>
      <div className="flex flex-col gap-2 bg-gray-100 rounded px-2 py-3">
        {cate.map((item, index) => (
          <div
            className={`p-1 cursor-pointer  ${
              id === item.slug ? "bg-red-500 text-white rounded-md" : ""
            }`}
            key={item.id}
            onClick={() => handleClick(item.slug, item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCate;
