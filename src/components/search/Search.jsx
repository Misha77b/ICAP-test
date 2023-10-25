import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "./icons/SearchIcon";
import "./Search.scss";
import ClearIncon from "./icons/ClearIncon";
import { Box, Button } from "@mui/material";

const Search = ({ value, change, clearSearch }) => {
  return (
    <Box className="search">
      <SearchIcon />
      <input
        className="search__input"
        onChange={change}
        type="text"
        name="search-input"
        value={value}
        aria-labelledby="label-fname"
        placeholder="Search..."
      />
      {/* <Button className="search__clear-icon" onClick={clearSearch}>
        <ClearIncon />
      </Button> */}
    </Box>
  );
};

export default Search;

Search.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
  clearSearch: PropTypes.func,
};
