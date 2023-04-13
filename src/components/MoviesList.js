import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { storeMovies } from "../utils/movieSlice";

const MoviesList = () => {
  const dispatch = useDispatch();
  /* const [movies, setMovies] = useState(null); */
  const movieList = useSelector((store) => store.movie);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:3001/movies");
    /* setMovies(data.data); */
    dispatch(storeMovies(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (movieList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      {movieList?.items.map((movie) => (
        <Link key={movie.id} to={"/movie?id=" + movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
