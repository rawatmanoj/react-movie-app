import React, { useState, useCallback } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../../config";
import { useHistory } from "react-router-dom";
import Search from "./search";
const Header = () => {
  return (
    <div className="nav-container">
      <Search />
    </div>
  );
};

export default React.memo(Header);
