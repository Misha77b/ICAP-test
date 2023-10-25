import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import useLocationParams from "../../hooks/useLocationParams";
import { useSearchParams } from "react-router-dom";
import { fetchTableData } from "../../store/reducers/tableDataSlice";
import Loader from "../../components/loader/Loader";
// import Search from "../../components/search/Search";
import Tables from "../../components/tables/Tables";
import PaginationNav from "../../components/pagination/PaginationNav";
import { goBackBtnStyle } from "../login/formStyle";

const Table = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams();

  // pagination
  const [offsetNumber, setOffsetNumber] = useState(1);
  const currentOffset = search.get("offset");

  // filters
  const [value, setValue] = useState("");
  //   const searchValue = search.get("name");

  // selectors
  const tableDataInfo = useSelector(
    (state) => state.tableDataReducer.tableDataInfo
  );
  const tableDataResults = useSelector(
    (state) => state.tableDataReducer.tableDataResults
  );
  const loader = useSelector((state) => state.tableDataReducer.loader);

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //     search.delete("offset");

  //     if (e.target.value < 1) {
  //       search.delete("name");
  //       setSearch(search);
  //     } else {
  //       search.set("name", e.target.value);
  //       setSearch(search);
  //     }
  //   };

  //   const clearSearch = () => {
  //     if (searchValue) {
  //       search.delete("offset");
  //       search.delete("name");
  //       setSearch(search);
  //       setValue("");
  //     }
  //   };

  useEffect(() => {
    if (currentOffset === null) {
      setOffsetNumber(currentOffset ? parseInt(currentOffset) : 1);
    } else {
      setOffsetNumber(currentOffset ? parseInt(currentOffset) : 1);
    }
  }, [currentOffset]);

  //   useEffect(() => {
  //     if (searchValue) {
  //       setValue(searchValue);
  //     }
  //   }, [searchValue]);

  useEffect(() => {
    if (value.length < 1) {
      dispatch(fetchTableData({ params }));
    } else {
      dispatch(fetchTableData({ params }));
    }
  }, [offsetNumber, value, params]);

  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "felx",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Go back btn */}
      <Button component={Link} to="/" sx={goBackBtnStyle}>
        Go back
      </Button>
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
        <Box
          sx={{
            width: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* <Search
            value={value}
            change={handleChange}
            clearSearch={clearSearch}
          /> */}
          <Tables tableData={tableDataResults} />
          <PaginationNav
            totalPages={tableDataInfo.count}
            pageNumber={offsetNumber}
            setPageNumber={setOffsetNumber}
          />
        </Box>
      )}
    </Box>
  );
};

export default Table;
