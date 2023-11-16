import React from "react";
import "./Search.css";

const Search = ({ setSearch }) => {
  return (
    <div className="Search">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="serach-bar"
        type="text"
        placeholder="Search for any book...."
      />
    </div>
  );
};

export default Search;
