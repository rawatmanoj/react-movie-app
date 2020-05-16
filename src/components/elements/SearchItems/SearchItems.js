import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY } from "../../../config";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import "./SearchItem.scss";
const SearchItems = () => {
  const [searchData, setData] = useState([]);
  const params = new useParams();

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${params.search}&page=1&include_adult=true`
      );
      setData(res);
    })();
  }, [params.search]);

  return (
    <div className="searchitem-container">
      <div className="search-header">Search Results for {params.search}</div>
      <hr></hr>
      <div className="searchwrapper-container">
        {searchData.data
          ? searchData.data.results.map((item) => {
              if (item.poster_path) {
                return (
                  <div className="searchwrap-box">
                    <img
                      className="search-image"
                      alt="search"
                      src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.poster_path}`}
                    ></img>
                  </div>
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default SearchItems;
