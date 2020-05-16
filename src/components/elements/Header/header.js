import React from "react";

import Search from "./search";
const Header = () => {
  return (
    <div className="nav-container">
      <Search />
    </div>
  );
};

export default React.memo(Header);
