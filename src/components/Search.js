import React from "react";

const Search = ({ handleSearch, searchTerm }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => handleSearch(e.target.value)} value={searchTerm} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
