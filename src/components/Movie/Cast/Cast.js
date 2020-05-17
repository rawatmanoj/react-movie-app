import React from "react";
import "./Cast.scss";
import Swiper from "react-id-swiper";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";
import no_image from "../../../images/no_image.jpg";

const Cast = ({ cast }) => {
  const params = {
    observer: true,
    observeParents: true,

    rebuildOnUpdate: true,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 7,
        spaceBetween: 70,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className="items-swiper-container">
      <h1>CAST</h1>
      {cast.data ? (
        <Swiper {...params}>
          {cast.data
            ? cast.data.cast.map((item) => {
                return (
                  <div key={item.id} className="hover-item">
                    <div style={{ height: "3.9rem" }}></div>
                    <div className="items-container">
                      <div className="movies">
                        {item.profile_path ? (
                          <img
                            className="movies-img"
                            alt="movie"
                            src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.profile_path}`}
                          ></img>
                        ) : (
                          <img
                            className="movies-img"
                            alt="movie"
                            src={no_image}
                          ></img>
                        )}
                      </div>
                    </div>
                    {item.name ? (
                      <div className="movie-desc1">{item.name}</div>
                    ) : null}
                  </div>
                );
              })
            : null}
        </Swiper>
      ) : null}
    </div>
  );
};

export default Cast;
