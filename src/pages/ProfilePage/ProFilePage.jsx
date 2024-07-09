import React from "react";
import ListProfileLeft from "../../components/ProfileComponent/ListProfileLeft";
import ListProfileRight from "../../components/ProfileComponent/ListProfileRight";
import { useSelector } from "react-redux";
const ProFilePage = () => {
  const { isLogin, email } = useSelector((state) => state.AthSlice);
    
  return (
    <div className="max-w-[1200px] mx-auto my-3">
      <div className="flex flex-row mx-3">
        <ListProfileLeft profile={email}/>
        <ListProfileRight profile={email} />
      </div>
    </div>
  );
};

export default ProFilePage;
