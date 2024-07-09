import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useParams } from "react-router-dom";
import getApiAll from "../../services/GetApiAll";
import { searchProducts } from "../../redux-tookit/features/SearchProductSlice";
import ListSearch from "../../components/searchComponent/ListSearch";
import SortProduct from "../../components/searchComponent/sortProduct";
import SearchBrand from "../../components/searchComponent/SearchBrand";
import DisplayBrand from "../../components/searchComponent/DisplayBrand";

import NavigaSearch from "../../components/searchComponent/NavigaSearch";
const SearchPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [sortPrice, setSortPrice] = useState({
    sortBy: "",
    order: "",
  });
  const dispath = useDispatch();
  const { searchTerm } = useParams();
  const checkBrand = useSelector(
    (state) => state.SearchProductSlice.isCheckBrand
  );
  const getProSearch = async () => {
    setisLoading(true);
    const param = {
      q: searchTerm,
      sortBy: sortPrice.sortBy,
      order: sortPrice.order,
    };

    const res = await getApiAll.getApiProductSearchSort(param);
    dispath(searchProducts(res.products));
    setisLoading(false);
  };

  useEffect(() => {
    getProSearch();
  }, [searchTerm, sortPrice.order, sortPrice.sortBy]);
  return (
    <div className="max-w-[1200px] mx-auto">
      <NavigaSearch />

      <h1 className=" uppercase font-bold p-3">
        <FilterAltIcon />
        Bộ lọc tìm kiếm
      </h1>
      <div className="flex flex-row gap-6 bg-white p-3">
        <SearchBrand />

        <div className="flex-col rounded-md gap-2  w-full">
          <SortProduct
            sortPro={(value, sortBy) => {
              setSortPrice({
                ...sortPrice,
                sortBy,
                order: value,
              });
            }}
            sortProRating={(order, sortBy) => {
              setSortPrice({
                ...sortPrice,
                sortBy,
                order,
              });
            }}
          />

          <div>
            {checkBrand ? (
              <DisplayBrand
                isLoading={isLoading}
                setLoading={(data) => {
                 setisLoading(data);
                }}
              />
            ) : (
              <ListSearch isLoading={isLoading} setLoading={(data) => {
                setisLoading(data);
               }}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
