import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

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
    return;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-72 sm:w-96 flex flex-col justify-center items-center text-stone-400 text-left">
        <p className="text-stone-200 text-4xl">{movie_name}</p>
        <p className="p-2 m-2">{genre.toString()}</p>

        <img className="" alt={movie_name} src={poster} />
        <div className="flex flex-col justify-start">
          <p className="m-2">DIRECTOR : {director}</p>
          <p className="m-2">REALEASE DATE : {release_date}</p>
          <p className="m-2">AVERAGE RATING : {ratings}</p>
          <p className="m-2">CAST : {cast}</p>
          <p className="m-2">RUNTIME : {runtime}mins</p>
          <p className="m-2 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
