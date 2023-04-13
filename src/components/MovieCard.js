const MovieCard = ({ movie }) => {
  const { poster, movie_name, director, release_date, ratings } = movie;
  return (
    <div className="w-72 m-5 p-5 bg-stone-800 shadow-md shadow-stone-800 hover:shadow-md hover:shadow-stone-700 ease-in duration-200">
      <img alt={movie_name} src={poster} className="w-72 h-56" />
      <p className="text-xl font-medium text-stone-200 py-2">{movie_name}</p>
      <div className="flex justify-between text-xs  text-stone-400">
        <p>{director}</p>
        <p>{release_date}</p>
        <p className="bg-green-600 text-stone-900 px-1 rounded">
          &#9733;{ratings}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
