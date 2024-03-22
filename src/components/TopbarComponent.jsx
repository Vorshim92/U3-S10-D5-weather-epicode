import React, { useState } from "react";
import * as icons from "react-bootstrap-icons";

const Navbar = ({ onSearchChange }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="/assets/imgs/logo.png" alt="" width="80px" height="80px" />
            </a>
            <div className="search-icon" onClick={handleSearchClick}>
              <icons.Search />
            </div>
            <div className={`searchbar div_box_research ${isSearchBarVisible ? "" : "d-none"}`}>
              <input id="searchBar" type="text" className="box_research" placeholder="Cerca una città..." onChange={onSearchChange} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
