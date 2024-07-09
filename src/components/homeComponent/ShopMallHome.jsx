import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReplyIcon from "@mui/icons-material/Reply";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import getApiAll from "../../services/GetApiAll";
import mall1 from "../../assets/mall1.jpg";
import mall2 from "../../assets/mall2.jpg";
import mall3 from "../../assets/mall3.jpg";
import mall4 from "../../assets/mall4.jpg";
import { Link } from "react-router-dom";
import LoadingProduct from "../loading/LoadingProduct";
const ShopMallHome = ({ isLoading }) => {
  const [listMall, setListMall] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  const getProMall = async () => {
    const res = await getApiAll.getApiProduct();

    const pro = await res.products;
    setListMall(pro);
  };

  useEffect(() => {
    getProMall();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-2 mt-10">
        <div className="py-5 border-solid  rounded-md bg-white">
          <ul className="flex gap-5 px-3 items-center justify-start">
            <li className="text-red-500">SHOPE MALL |</li>
            <li>
              <ReplyIcon style={{ color: "red" }} />
              Trả Hàng Miễn Phí 15 Ngày
            </li>
            <li>
              <GppGoodIcon style={{ color: "red" }} />
              Hàng Chính Hãng 100%
            </li>
            <li>
              <LocalShippingIcon style={{ color: "red" }} />
              Miễn Phí Vận Chuyển
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-6 bg-white py-3 px-2">
          <div className="w-1/3 rounded-md h-[500px]">
            <Slider {...settings}>
              <div className="rounded-md">
                <img src={mall1} alt="" className="w-full h-auto rounded-md" />
              </div>
              <div className="rounded-md">
                <img src={mall2} alt="" className="w-full h-auto rounded-md" />
              </div>
              <div className="rounded-md">
                <img src={mall3} alt="" className="w-full h-auto rounded-md" />
              </div>
              <div className="rounded-md">
                <img src={mall4} alt="" className="w-full h-auto rounded-md" />
              </div>
            </Slider>
          </div>
          <div className="flex-grow rounded-md ">
            {isLoading ? (
              
                <LoadingProduct/>
              
            ) : (
              <ul className="flex flex-wrap gap-2 cursor-pointer">
                {listMall && listMall.length
                  ? listMall.slice(0, 8).map((item) => (
                      <Link key={item.id} to={`/product/${item.id}`}>
                        <li
                          key={item.id}
                          className=" rounded-xl bg-slate-200 border h-[232px] hover:scale-[1.02] ease-in duration-200 "
                        >
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-[180px] rounded-md"
                          />
                          <h2 className="text-center">{item.category} -50%</h2>
                        </li>
                      </Link>
                    ))
                  : null}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMallHome;
