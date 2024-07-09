import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useParams } from "react-router-dom";
const NavigeCate = () => {
  const { id } = useParams();
  return (
    <div>
      {" "}
      <h1 className="flex items-center p-3 bg-slate-200 mt-3 gap-1">
        <Link to={"/"}>
          <div className="flex items-center hover:underline">
            <HomeIcon />
            Home <NavigateNextIcon />
          </div>
        </Link>
        <span>{id}</span>
      </h1>
    </div>
  );
};

export default NavigeCate;
