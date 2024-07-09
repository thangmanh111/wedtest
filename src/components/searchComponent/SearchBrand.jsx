import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchProductsByBrand } from "../../redux-tookit/features/SearchProductSlice";

const SearchBrand = () => {
  const [showBrand, setShowBrand] = useState([]);
  const dispatch = useDispatch();
  const productSearch = useSelector(
    (state) => state.SearchProductSlice.searchProduct
  );
  const uniqueBrands = [...new Set(productSearch.map((item) => item.brand))];

  const handleSearchBrand = (e) => {
    const checked = e.target.checked;
    const brands = e.target.value.toString();

    if (brands) {
      const newBrands = productSearch.filter((item) =>
        item.brand.toLowerCase()?.includes(brands.toLowerCase() ?? "")
      );

      if (checked) {
        setShowBrand(newBrands);
        dispatch(searchProductsByBrand(newBrands));
      } else {
        setShowBrand([]);
        dispatch(searchProductsByBrand([]));
      }
    }
  };

  return (
    <div className="w-1/4 rounded-md">
      <h1 className=" text-lg font-semibold pb-2">Thương Hiệu</h1>
      <div className="flex flex-col gap-2 border rounded px-3">
        {uniqueBrands.map((item) => (
          <div key={item} className="p-1">
            <input
              type="checkbox"
              name=""
              id=""
              value={item} // Set the value of the checkbox to the brand name
              onChange={handleSearchBrand}
            />{" "}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBrand;
