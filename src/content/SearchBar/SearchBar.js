import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";

import "../../components/Header/Header.scss";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  let navigate = useNavigate();
  const onSubmit = (e) => {
    navigate(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form action="/search-result" method="get" className="navbar-form-search">
      <TextField
        placeholder="Что вы ищете?"
        variant="outlined"
        type="text"
        id="search"
        name="s"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon fontSize="small" />
      </IconButton>
    </form>
  );
};

export default SearchBar;
