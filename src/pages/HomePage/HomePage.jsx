import React, { useEffect, useState } from "react";
import SliderBar from "../../components/homeComponent/SliderBar";
import CategoriList from "../../components/homeComponent/CategoriList";
import ShopMallHome from "../../components/homeComponent/ShopMallHome";
import ListProductHome from "../../components/homeComponent/ListProductHome";
import PaginationHome from "../../components/homeComponent/PaginationHome";
import FlashSaleHome from "../../components/homeComponent/FlashSaleHome";
import getApiAll from "../../services/GetApiAll";
import { useDispatch } from "react-redux";
import { listProducts } from "../../redux-tookit/features/ProductSlice";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listParam, setListParam] = useState({
    skip: 0,
    limit: 20,
    total: 0,
  });
  const dispath = useDispatch();
  const getApiProducts = async () => {
    setIsLoading(true);
    const params = {
      skip: listParam.skip,
      limit: 20,
      total: listParam.total,
    };
    const res = await getApiAll.getApiProduct(params);

    const { limit, total, skip } = res;

    setListParam({
      skip,
      limit,
      total,
    });

    dispath(listProducts(res));
    setIsLoading(false);
  };

  useEffect(() => {
    getApiProducts();
  }, [listParam.skip]);

  return (
    <div className=" bg-gray-100 py-3">
      <SliderBar />
      <CategoriList />
      <FlashSaleHome isLoading={isLoading}/>
      <ShopMallHome isLoading={isLoading} />
      <ListProductHome isLoading={isLoading} />
      <PaginationHome
        dataPagination={listParam}
        getSkipPagi={(skips) => {
          setListParam({
            ...listParam,
            skip: skips * 10,
          });
        }}
      />
    </div>
  );
};

export default HomePage;
