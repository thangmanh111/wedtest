import React from "react";
import { Pagination } from "@mui/material";
const PaginationHome = ({ dataPagination, getSkipPagi }) => {
  const { total } = dataPagination;
  
  return (
    <div className="max-w-[1200px] mx-auto my-5 rounded-md flex justify-center">
      <div className="mt-6">
        <Pagination
          count={Math.ceil(dataPagination.total / dataPagination.limit)}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={(e, page) => {
            getSkipPagi(page - 1);
          }}
        />
      </div>
    </div>
  );
};

export default PaginationHome;
