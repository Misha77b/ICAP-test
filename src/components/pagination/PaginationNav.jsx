import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import "./PaginationNav.scss";

const PaginationNav = ({ totalPages, pageNumber, setPageNumber }) => {
  const [search, setSearch] = useSearchParams();
  const totalPagesCount = Math.round(totalPages / 10) - 2;

  const handlePageChange = (_, num) => {
    setPageNumber(num);

    search.set("offset", num);
    setSearch(search);
    if (num === 1) {
      search.delete("offset");
      setSearch(search);
    }
  };

  return (
    <Stack sx={{ margin: "30px auto 20px" }}>
      <Pagination
        count={totalPagesCount || 0}
        page={pageNumber}
        onChange={handlePageChange}
        size={"small"}
      />
    </Stack>
  );
};

export default PaginationNav;

PaginationNav.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
};
