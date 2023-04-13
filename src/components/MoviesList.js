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
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const movieList = useSelector((store) => store.movie);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:3001/movies");
    /* setMovies(data.data); */
    dispatch(storeMovies(data.data));
    setFilteredMovies(data.data);
  };

  const handleSearch = () => {
    const newList = movieList.items.filter((movie) =>
      movie.movie_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(newList);
    console.log("fl", filteredMovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!filteredMovies) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl text-stone-200 text-center font-medium pt-4">
        Movie App
      </p>
      <div className="flex"><input
      className="w-96 p-2 m-2 rounded bg-stone-800 text-stone-200"
        type="text"
        placeholder="Search your movie here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="button" className="p-2 m-2 text-stone-200" onClick={handleSearch}>
        Search
      </button></div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={"/movie?id=" + movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
