import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e929561b8910b660d28ec7027eac6b3d`
    )
    const json = await response.json();
    setMovies(json.results)
    setLoading(false)
  };
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies)
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
          <div>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                CoverImg={`https://image.tmdb.org/t/p/w200`+movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                genre_ids={movie.genre_ids}
              />
            ))}
          </div>
        )}
    </div>
  );
}

export default Home;