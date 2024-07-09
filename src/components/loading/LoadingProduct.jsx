import React from "react";
import { BeatLoader } from "react-spinners";
const LoadingProduct = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <BeatLoader color="#ea580c" size={19} />
      </div>
    </div>
  );
};

export default LoadingProduct;
