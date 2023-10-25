import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import useLocationParams from "../../hooks/useLocationParams";
import { useSearchParams } from "react-router-dom";
import { fetchTableData } from "../../store/reducers/tableDataSlice";
import Loader from "../../components/loader/Loader";
import Search from "../../components/search/Search";

const Table = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams();

  // pagination
  const [pageNumber, setPageNumber] = useState(1);
  const currentPage = search.get("page");

  // filters
  const [value, setValue] = useState("");
  const searchValue = search.get("name");

  // selectors
  const tableDataInfo = useSelector(
    (state) => state.tableDataReducer.tableDataInfo
  );
  const tableDataResults = useSelector(
    (state) => state.tableDataReducer.tableDataResults
  );
  const loader = useSelector((state) => state.tableDataReducer.loader);
  console.log(tableDataInfo);
  console.log(tableDataResults);

  const handleChange = (e) => {
    setValue(e.target.value);
    search.delete("page");

    if (e.target.value < 1) {
      search.delete("name");
      setSearch(search);
    } else {
      search.set("name", e.target.value);
      setSearch(search);
    }
  };

  //   const clearSearch = () => {
  //     if (searchValue) {
  //       search.delete("page");
  //       search.delete("name");
  //       setSearch(search);
  //       setValue("");
  //     }
  //   };

  useEffect(() => {
    if (currentPage === null) {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    } else {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    }
  }, [currentPage]);

  useEffect(() => {
    if (searchValue) {
      setValue(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    if (value.length < 1) {
      dispatch(fetchTableData());
      //   dispatch(fetchCharacters({ params }));
    } else {
      dispatch(fetchTableData());
      //   dispatch(fetchCharacters({ params }));
    }
  }, [pageNumber, value, params]);

  return (
    <Box
      sx={{
        display: "felx",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loader ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <Box sx={{ width: "600px", margin: "0 auto" }}>
          <Search
            value={value}
            change={handleChange}
            // clearSearch={clearSearch}
          />
        </Box>
      )}
    </Box>
  );
};

export default Table;
