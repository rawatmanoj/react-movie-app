import React from "react";
import Swiper from "react-id-swiper";
import "./heroimage.scss";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../../config";

const Heroimage = ({ images, genres }) => {
  const getGenre = (photo) => {
    const genre = genres.find((genre) => {
      return genre.id === photo.genre_ids[0];
    });

    return genre;
  };

  const params = {
    observer: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  };

  return (
    <div className="heroimage-container1">
      <Swiper {...params}>
        {images
          ? images.map((photo) => {
              // if (photo !== undefined && photo !== null) {
              const genre = getGenre(photo);

              return (
                <div key={photo.id} className="imagediv-container">
                  <div
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) center center / cover no-repeat, 
                url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${photo.backdrop_path}) center top / cover no-repeat rgb(255, 255, 255)`,
                    }}
                    className="heroimage-container2"
                  >
                    <div className="heroimage-desc">
                      <div className="heroimage-title">{photo.title}</div>
                      <div className="vote_average">
                        {photo.vote_average} Rating
                      </div>
                      {genre !== undefined ? (
                        <div className="heroimage-genre">{genre.name}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
              // }
            })
          : null}
      </Swiper>
    </div>
  );
};

export default React.memo(Heroimage);
