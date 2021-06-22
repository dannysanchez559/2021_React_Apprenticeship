import React from "react";

function Header() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header">
      <h1>Movie App Title</h1>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter movie name" />
        <button id="searchbutton" type="submit"></button>
      </form>
    </div>
  );
}

export default Header;
