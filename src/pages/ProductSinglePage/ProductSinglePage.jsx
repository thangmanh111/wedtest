import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getApiAll from "../../services/GetApiAll";
import BoxProDetail from "../../components/singlePageProComponent/BoxProDetail";
import NavigaSiglePro from "../../components/singlePageProComponent/NavigaSiglePro";
import BoxDesDetail from "../../components/singlePageProComponent/BoxDesDetail";
import BoxCommnet from "../../components/singlePageProComponent/BoxCommnet";
import BoxProductCategory from "../../components/singlePageProComponent/BoxProductCategory";
import LoadingBackdrop from "../../components/loading/LoadingBackdrop";
const ProductSinglePage = () => {
  const [proDetail, setProDetail] = useState({});
  const [imgMain, setImgMain] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [productCate, setProductCate] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getApiAll.getApiProductDetail(id);
      setProDetail(res);
      setImgMain(res.thumbnail);

      const { products } = await getApiAll.getApiProductByCategory(
        res.category
      );
      setProductCate(products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCLick = (data) => {
    setImgMain((prevImgMain) =>
      prevImgMain === data ? proDetail.thumbnail : data
    );
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="max-w-[1200px] mx-auto my-7">
      <NavigaSiglePro title={proDetail.title} />

      {isLoading ? (
        <LoadingBackdrop isLoading={isLoading}/>
      ) : (
        <>
          <BoxProDetail
            imgMain={imgMain}
            proDetail={proDetail}
            getImg={handleCLick}
          />

          <BoxDesDetail proDetail={proDetail} />
          <BoxCommnet proDetail={proDetail} />
          <BoxProductCategory productCate={productCate} />
        </>
      )}
    </div>
  );
};

export default ProductSinglePage;
