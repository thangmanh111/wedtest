import React from "react";
import { useSelector } from "react-redux";
import BoxProductHome from "./BoxProductHome";
import { useEffect } from "react";
import LoadingProduct from "../loading/LoadingProduct";
import LoadingSkeleton from "../loading/LoadingSkeleton";
const ListProductHome = ({ isLoading }) => {
  const products = useSelector((state) => state.ProductSlice.products);

  useEffect(() => {
    {
      !isLoading
        ? window.scrollTo({ top: 1800, behavior: "smooth" })
        : undefined;
    }
  }, [isLoading]);
  return (
    <div className="max-w-[1200px] mx-auto my-7">
      <div className="flex flex-col gap-2 mt-10">
        <div className=" bg-white py-5 border-solid border-b-4 border-solid border-3 border-orange-500 rounded-md flex justify-center items-center">
          <h1 className="uppercase font-bold text-red-600">Gợi ý hôm nay</h1>
        </div>
        <div className="flex flex-row mt-2 p-2 ">
          {isLoading ? (
            <div className="max-w-[1200px] m-auto">
              {" "}
              <LoadingSkeleton />
            </div>
          ) : (
            <ul className="flex flex-rown flex-wrap gap-3 justify-around ">
              {products && products.length
                ? products.map((item) => (
                    <BoxProductHome item={item} key={item.id} />
                  ))
                : null}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProductHome;
