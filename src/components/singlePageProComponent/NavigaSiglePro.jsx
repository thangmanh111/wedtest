import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const NavigaSiglePro = ({ title }) => {
  return (
    <div>
      <h1 className="px-3 py-2 bg-gray-100 mb-3 flex flex-row ">
        {" "}
        <HomeIcon />
        <Link to={"/"} className="hover:underline">
          Home
        </Link>{" "}
        <NavigateNextIcon /> {title}
      </h1>
    </div>
  );
};

export default NavigaSiglePro;
