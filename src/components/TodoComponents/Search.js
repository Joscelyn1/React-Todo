import React from "react";

function Search(props) {
  function handleChanges(event) {
    props.filter(event.target.value);
  }
  return (
    <div className="search">
      <input
        onChange={handleChanges}
        placeholder="Search for to-dos..."
        type="text"
        name="item"
        id="searchField"
      />
    </div>
  );
}

export default Search;
