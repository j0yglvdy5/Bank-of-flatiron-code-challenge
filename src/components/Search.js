import React from "react";

  function Search({ onSearchChange }) {
    const handleSearchInput = (e) => {
      onSearchChange(e.target.value);
    };
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchInput}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
