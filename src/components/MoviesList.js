import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const MoviesList = () => {
  const [movies, setMovies] = useState(null);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:3001/movies");
    setMovies(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(!movies){
    return <Shimmer/>
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      {movies.map((movie) => (
        <Link key={movie.id} to={"/movie?id=" + movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
