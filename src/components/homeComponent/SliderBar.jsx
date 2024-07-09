import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

const SliderBar = () => {
  var settings = {
    className: "h-full",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="max-w-[1200px] mx-auto my-5 rounded-md ">
      {/* <div className="max-w-[1200px] mx-auto flex gap-2"> */}

      <Slider {...settings}>
        <div className=" rounded-2xl">
          <img src={banner1} alt="" className="w-full rounded-2xl" />
        </div>
        <div className=" rounded-2xl">
          <img src={banner2} alt="" className="w-full rounded-2xl" />
        </div>
        <div className=" rounded-2xl">
          <img src={banner3} alt="" className="w-full rounded-2xl" />
        </div>
        <div className=" rounded-2xl">
          <img src={banner4} alt="" className="w-full rounded-2xl" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderBar;
