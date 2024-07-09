import React from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
const ListProfileLeft = ({profile}) => {
  return (
    <div className=" w-1/5 flex flex-col border my-3">
      {/* box1 */}
      <div className="flex flex-row gap-3 p-3 justify-start">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&P=0&h=180"
          alt=""
          className="w-[50px] h-[50px]"
        />
        <div>
          <h1>{profile.slice(0,13)}</h1>
          <h2>Edit porfile</h2>
        </div>
      </div>

      {/* bo2 */}
      <div className="box2">
        <ul className="flex flex-col gap-3 p-3 cursor-pointer">
          <li>
            {" "}
            <LoyaltyIcon />
            7.7 Siêu Sale Giữa Năm
          </li>
          <li className="text-red-500">
            {" "}
            <AccountCircleIcon />
            Tài Khoản Của Tôi
          </li>
          <li>
            <ListAltIcon />
            Đơn Mua
          </li>
          <li>
            <NotificationsNoneIcon />
            Thông Báo
          </li>
          <li>
            <ConfirmationNumberIcon />
            Kho Voucher
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListProfileLeft;
