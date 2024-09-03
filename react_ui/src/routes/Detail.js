import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieItem, setMoviesItem] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e929561b8910b660d28ec7027eac6b3d`
    )
    const json = await response.json();
    setMoviesItem(json)
    setLoading(false)
  };
  console.log(movieItem);
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div>
        {loading ? (
        <h1>loading</h1>
      ) : (
          <div>
            <p><img src={`https://image.tmdb.org/t/p/w500/${movieItem.backdrop_path}`} /></p>
            <div>
              <h1><strong>영화제목 : </strong>{movieItem.original_title}</h1>
              <p><strong>영화제작사홈페이지 : </strong><a href={movieItem.homepage}>homePage</a></p>
              <span><strong>영화언어 : </strong>{movieItem.original_language}</span>
              <p><strong>영화줄거리 : </strong>{movieItem.overview}</p>
              <ul>
                <li><strong>영화개봉날짜 : </strong>{movieItem.release_date}</li>
                <li><strong>영화러닝타임 : </strong>{movieItem.runtime}</li>
                <li><strong>영화개봉상태 : </strong>{movieItem.status}</li>
                <li><strong>영화평점 : </strong>{movieItem.vote_average}</li>
              </ul>
              <p>영화제작사 리스트</p>
              <ul>
                {movieItem.production_companies.map((g) => (
                  <li key={g}>{g.name} || <img src={`https://image.tmdb.org/t/p/w50${g.logo_path}`} /></li>
                ))}
              </ul>
            </div>
          </div>
        )}
    </div>
  )
}
/*
{{genre_ids.map(g => (
          <li key={g}>{g}</li>
        ))} }
        */
export default Detail;