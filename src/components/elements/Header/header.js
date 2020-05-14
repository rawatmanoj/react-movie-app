import React, { useState, useCallback } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../../config";
import { useHistory } from "react-router-dom";
import Search from "./search";
const Header = () => {
  // const useSearch = useCallback(
  //   async (data) => {
  //     const [searchTerm, setSearchterm] = useState(" ");
  //     const [data, setData] = useState([]);
  //     const history = useHistory();
  //     // console.log(data);
  //     const res = await axios(
  //       `${API_URL}search/movie?query=${data.name}&api_key=${API_KEY}`
  //     ).catch((err) => console.log(err));

  //     setData(res);
  //     setSearchterm(data.name);

  //     history.push({
  //       pathname: "/search",
  //       state: { data: res, search: data.name },
  //     });
  //   },
  //   [searchTerm]
  // );

  //console.log(searchTerm);

  return (
    <div className="nav-container">
      <Search />
    </div>
  );
};

export default React.memo(Header);
