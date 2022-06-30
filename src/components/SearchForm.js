import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { loading, setSearchTerm } = useGlobalContext();

  return (
    <>
      <h1>SearchForm component</h1>
    </>
  );
};

export default SearchForm;
