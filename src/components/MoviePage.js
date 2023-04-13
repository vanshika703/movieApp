import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchMovie = async () => {
    const data = await axios.get("http://localhost:3001/movies?id=" + id);
    setMovie(data.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div className="h-screen w-full ">
      <p className="text-stone-200">{movie[0]?.movie_name}</p>
    </div>
  );
};

export default MoviePage;
