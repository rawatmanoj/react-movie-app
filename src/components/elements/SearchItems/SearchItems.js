import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY } from "../../../config";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import Spinner from "../../elements/Spinner/Spinner";
import { Link } from "react-router-dom";

import "./SearchItem.scss";

function useLoader() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 500);

  return loader;
}

const renderMovieDesc = (title) => {
  if (title.length < 45) {
    return <h3>{title}</h3>;
  } else {
    let shrink = title.split(" ").slice(0, 3).join(" ");
    return <h3>{shrink}</h3>;
  }
};

const SearchItems = () => {
  const loader = useLoader();
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
  console.log(searchData);
  return (
    <div>
      {" "}
      {loader ? (
        <Spinner />
      ) : (
        <div className="searchitem-container">
          <div className="search-header">
            Search Results for {params.search}
          </div>
          <hr></hr>
          <div className="searchwrapper-container">
            {searchData.data
              ? searchData.data.results.map((item) => {
                  if (item.poster_path) {
                    return (
                      <div key={item.id} className="hover-item">
                        <div style={{ height: "3.9rem" }}></div>
                        <div className="searchwrap-box">
                          <Link to={{ pathname: `/movie/${item.id}` }}>
                            <img
                              className="search-image"
                              alt="search"
                              src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.poster_path}`}
                            ></img>
                          </Link>
                          {item.title ? (
                            <div className="movie-desc">
                              {renderMovieDesc(item.title)}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchItems;
