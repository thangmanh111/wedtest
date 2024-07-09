import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import BoxLogin from "../Login/BoxLogin";
import swal from "sweetalert";
import { clearCart } from "../../redux-tookit/features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Person4Icon from "@mui/icons-material/Person4";

import LogoutIcon from "@mui/icons-material/Logout";
import {
  updateStateOpenLogin,
  doLogout,
} from "../../redux-tookit/features/AthSlice";
const Header = () => {
  const [showHoverContent, setShowHoverContent] = useState(false);
  const dispatch = useDispatch();

  const { isOpenLogin, email } = useSelector((state) => state.AthSlice);

  const handleClickOpenLogin = () => {
    dispatch(updateStateOpenLogin(true));
  };

  const navigate = useNavigate();
  const handleClearLocal = () => {
    dispatch(doLogout());
    swal("Logout success!", "", "success");
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <>
      <header className="bg-orange-500">
        {/* contact */}
        <div className="max-w-[1200px] mx-auto ">
          <div className="flex justify-between">
            <div className="contact-left">
              <ul className="flex items-center  text-lg gap-5 text-white ">
                <li className="py-4 cursor-pointer ">Kênh Người Bán</li>
                <li className="py-4 cursor-pointer">Tải ứng dụng</li>
                <li className="py-4 cursor-pointer flex gap-2  items-center">
                  Kết nối
                  <FacebookIcon />
                  <InstagramIcon />
                </li>
              </ul>
            </div>
            <div className="contact-right">
              <ul className="flex items-center text-lg gap-5 text-white ">
                <li className="py-4 cursor-pointer">
                  <CircleNotificationsIcon />
                  Thông báo
                </li>
                <li className="py-4 cursor-pointer">
                  <HelpIcon />
                  Hỗ trợ
                </li>
                <li className="py-4 cursor-pointer">
                  {email ? (
                    <div
                      onMouseEnter={() => setShowHoverContent(true)}
                      onMouseLeave={() => setShowHoverContent(false)}
                    >
                      <div>
                        <AccountCircleIcon />
                        {email}
                      </div>
                      <div>
                        {showHoverContent && (
                          <>
                            <div className="absolute top-[35px] right-[150px] z-10 mt-2 w-[115px] bg-white rounded-lg shadow-lg p-2 ">
                              <div className="flex items-center gap-2 rounded-md">
                                <div className="flex flex-col ">
                                  <Link to={"/profile"} className="flex">
                                    <h2 className="flex items-center text-black px-4 hover:bg-slate-200 rounded-md">
                                      <Person4Icon fontSize="sm" /> Profile
                                    </h2>
                                  </Link>
                                  <h2
                                    onClick={handleClearLocal}
                                    className="flex items-center text-black px-4 hover:bg-slate-200 rounded-md"
                                  >
                                    <LogoutIcon fontSize="sm" />
                                    Logout
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <span className="absolute top-[40px] right-[160px] w-4 h-4 bg-white transform rotate-45 "></span>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <span onClick={handleClickOpenLogin}>
                      <AccountCircleIcon />
                      Login
                    </span>
                  )}

                  <BoxLogin
                    handleCloseBox={() => {
                      dispatch(updateStateOpenLogin(false));
                    }}
                    openState={isOpenLogin}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
