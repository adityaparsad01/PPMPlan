import React from "react";

const Search = ({ changehandler }) => {
  return (
    <>
      <div className="inputcontainer">
        <input placeholder="Search Here" onChange={changehandler} />
      </div>
    </>
  );
};

export default Search;
