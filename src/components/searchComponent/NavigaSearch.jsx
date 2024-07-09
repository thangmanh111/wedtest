import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useParams } from "react-router-dom";
const NavigaSearch = () => {
  const { searchTerm } = useParams();
  return (
    <div>
      <h1 className="flex items-center p-3 bg-slate-200 mt-3 cursor-pointer">
        <Link to={"/"}>
          <div className="flex items-center gap-1 hover:underline">
            <HomeIcon />
            Home <NavigateNextIcon />
          </div>
        </Link>
        <span>
          <div className="flex items-center gap-1">
            Kết quả tìm kiếm "{searchTerm}"
          </div>
        </span>
      </h1>
    </div>
  );
};

export default NavigaSearch;
