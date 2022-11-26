import React from "react";

const Header = () => {
  return (
    <header tabIndex={1} className="header">
      <div className="header-logo">
        <img
          src="https://namastedev.com/namaste-react-bootcamp/assets/img/small-logo.png"
          alt="logo"
        />
      </div>

      <div className="header-searchbar">
        <input type="text" name="searchInput" placeholder="enter the keyword" />
        <button>Search</button>
      </div>

      <div className="header-user">
        <img src="https://icons8.com/icon/21441/user" alt="user icon" />
      </div>
    </header>
  );
};

export default Header;
