import React from "react";
import ItemSwiper from "../itemSwiper/itemSwiper";

const UpcomingMovies = ({ upcomingMovies }) => {
  return (
    <div className="UpcomingitemSwiper-container">
      <ItemSwiper type={"Upcoming"} items={upcomingMovies} />
    </div>
  );
};

export default React.memo(UpcomingMovies);
