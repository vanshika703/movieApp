import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Shimmer from "./Shimmer";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchMovie = async () => {
    const data = await axios.get("http://localhost:3001/movies?id=" + id);
    setMovie(data.data[0]);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const {
    movie_name,
    director,
    release_date,
    ratings,
    poster,
    genre,
    description,
    cast,
    runtime,
  } = movie || {};

  if (!movie) {
    return <Shimmer/>;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-72 sm:w-96 flex flex-col justify-center items-center text-stone-200 text-left">
        <p className="text-2xl sm:text-4xl">{movie_name}</p>
        <p className="p-2 m-2">{genre.join(" , ")}</p>

        <img className="w-full h-56" alt={movie_name} src={poster} />
        <div className="flex flex-col justify-start">
          <p className="m-2">DIRECTOR : <span className="text-stone-400">{director}</span></p>
          <p className="m-2">REALEASE DATE : <span className="text-stone-400">{release_date}</span></p>
          <p className="m-2">AVERAGE RATING : <span className="text-stone-400">{ratings}</span></p>
          <p className="m-2">CAST : <span className="text-stone-400">{cast.join(" , ")}</span></p>
          <p className="m-2">RUNTIME : <span className="text-stone-400">{runtime}mins</span></p>
          <p className="m-2 text-sm"><span className="text-stone-400">{description}</span></p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
