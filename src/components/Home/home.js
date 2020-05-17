import React, { useState, useEffect } from "react";
import Header from "../elements/Header/header";
import Heroimage from "../elements/heroimage/heroimage";
import PopularMovies from "../elements/PopularMovies/PopularMovies";
import UpcomingMovies from "../elements/UpcomingMovies/UpcomingMovies";
import NowPlaying from "../elements/NowPlaying/NowPlaying";
import TopRated from "../elements/TopRatedMovies/TopRatedMovies";
import axios from "axios";
import HomeFooter from "../elements/HomeFooter/HomeFooter";
import { API_URL, API_KEY } from "../../config";
import Spinner from "../elements/Spinner/Spinner";
const useHeroimage = () => {
  const [Heroimage, setHeroimage] = useState([]);
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const genres = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      ).catch((err) => console.log(err));

      const genresList = genres.data.genres.map((genre) => {
        return genre;
      });

      setGenre(genresList);

      const posterImages = () => {
        const images = res.data.results.filter((result, i) => {
          return result;
        });

        return images;
      };

      setHeroimage(posterImages);
    })();
  }, []);
  return { Heroimage, genres };
};

function useUpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const upcomingMoviesList = () => {
        const list = res.data.results.filter((result, i) => {
          return result;
        });

        return list;
      };

      setUpcomingMovies(upcomingMoviesList);
    })();
  }, []);
  return upcomingMovies;
}

function useNowplayingMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const nowPlayingMoviesList = () => {
        const list = res.data.results.filter((result, i) => {
          return result;
        });

        return list;
      };

      setNowPlayingMovies(nowPlayingMoviesList);
    })();
  }, []);
  return nowPlayingMovies;
}

function useTopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios(
        `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((err) => console.log(err));

      const topRatedMoviesList = () => {
        const list = res.data.results.filter((result, i) => {
          return result;
        });

        return list;
      };

      setTopRatedMovies(topRatedMoviesList);
    })();
  }, []);
  return topRatedMovies;
}

function useLoader() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  return loader;
}

const Home = () => {
  const loader = useLoader();

  const res = useHeroimage();
  const images = res.Heroimage;
  const genres = res.genres;

  const upcomingMovies = useUpcomingMovies();
  const nowPlayingMovies = useNowplayingMovies();
  const topRatedMovies = useTopRatedMovies();

  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div className="home-container">
          <div className="fixed-header">
            <Header />
          </div>
          <div>
            {images ? <Heroimage images={images} genres={genres} /> : null}

            <div className="home-movie-list">
              <PopularMovies popularMovies={images} />
              <UpcomingMovies upcomingMovies={upcomingMovies} />
              <NowPlaying nowPlayingMovies={nowPlayingMovies} />
              <TopRated topRatedMovies={topRatedMovies} />
              <HomeFooter />
            </div>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
