import React from "react";

const sortProduct = ({ sortPro, sortProRating }) => {
  const handleSort = (e) => {
    const valueSelec = e.target.value;
    const sortBy = "price";
    sortPro(valueSelec, sortBy);
  };

  const handleShortRating = () => {
    const sortByRating = "rating";
    const valueSelec = "desc";
    sortProRating(valueSelec, sortByRating);
  };
  return (
    <div>
      <ul className="flex gap-3 p-3 items-center bg-gray-200">
        <li className=" bg-slate-50 p-2">Sắp xếp theo</li>
        <li className=" bg-slate-50 p-2">Mới Nhất</li>
        <li
          className=" bg-orange-300 p-2 text-white cursor-pointer"
          onClick={handleShortRating}
        >
          Bán chạy
        </li>
        <li>
          <select
            onChange={handleSort}
            name=""
            id=""
            className=" bg-white block p-2  w-full text-sm   border-0 border-b-2  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200"
          >
            <option value="">Giá: </option>
            <option value="asc">Giá: Thấp tới cao</option>
            <option value="desc">Giá: Cao tới thấp </option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default sortProduct;
