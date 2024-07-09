import React, { useEffect, useState } from "react";
import getApiAll from "../../services/GetApiAll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoriList = () => {
  const listCate = useSelector((state) => state.CategorySlice.categorys);
  const navigate = useNavigate();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "40px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",

          width: "40px",
          marginLeft: "15px",
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    className: "h-full",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleDetail = (item) => {
    navigate(`/category/${item.slug}`);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex gap-2 flex-col">
        <div className="py-5  uppercase  bg-white font-bold px-3 rounded-md ">
          Danh mục
        </div>

        <Slider {...settings}>
          <div className="flex ">
            <div className="flex flex-row flex-wrap justify-around gap-0 ">
              {listCate.slice(0, 10).map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleDetail(item)}
                  className=" bg-white w-[115px] h-[140px] flex justify-center items-center  cursor-pointer flex-col "
                >
                  <img
                    src="https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn"
                    className="w-[70px] h-[70px]"
                    alt={item.name}
                  />
                  <h1 className="text-red-500 text-center">{item.name} </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-row flex-wrap justify-around gap-0">
              {listCate.slice(10, 20).map((item) => (
                <div
                  onClick={() => handleDetail(item)}
                  key={item.id}
                  className=" bg-white w-[115px] h-[140px] flex justify-center items-center  flex-col cursor-pointer"
                >
                  <img
                    src="https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn"
                    className="w-[70px] h-[70px]"
                    alt={item.name}
                  />
                  <h1 className="text-red-500 text-center">{item.name} </h1>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CategoriList;
