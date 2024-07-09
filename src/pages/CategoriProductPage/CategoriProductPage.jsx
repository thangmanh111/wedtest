import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import getApiAll from "../../services/GetApiAll";
import ListCate from "../../components/categoriesComponent/ListCate";

import ListProByCate from "../../components/categoriesComponent/ListProByCate";
import NavigeCate from "../../components/categoriesComponent/NavigeCate";
const CategoriProductPage = () => {
  const [listCategories, setListCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const getProductCate = async () => {
    setLoading(true);
    const res = await getApiAll.getApiProductByCategory(id);
    const { products } = res;
    setListCategories(products);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getProductCate();
    }
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [id]);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <NavigeCate />

      <div className="flex flex-row gap-6 bg-white p-3">
        <div className="w-1/4 rounded-md">
          <h1 className=" uppercase py-3 font-bold">Danh mục</h1>

          <ListCate
            handleClick={(category) => {
              handleCategoryClick(category);
            }}
          />
        </div>

        <div className="flex-col rounded-md gap-2 w-full">
          <ListProByCate listCategories={listCategories} isLoading={loading} />
        </div>
      </div>
    </div>
  );
};

export default CategoriProductPage;
