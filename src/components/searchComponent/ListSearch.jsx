import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import LoadingBackdrop from "../loading/LoadingBackdrop";
const ListSearch = ({ isLoading, setLoading }) => {
  const listSearch = useSelector(
    (state) => state.SearchProductSlice.searchProduct
  );
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {" "}
      {isLoading ? (
        <div className="max-w-[1200px] flex justify-center items-center">
          <LoadingBackdrop isLoading={isLoading} />
        </div>
      ) : (
        <ul className="flex flex-rown flex-wrap gap-3 justify-around mt-3">
          {listSearch && listSearch.length && (
            listSearch.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <li className=" bg-white w-[220px] cursor-pointer border relative  hover:scale-[1.02] ease-in duration-200 hover:border-red-600 rounded-2xl py-3">
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
              </Link>
            ))
          ) }
        </ul>
      )}
    </div>
  );
};

export default ListSearch;
