import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, CoverImg, title, overview, genre_ids }) {
  return (
    <div>
      <img src={CoverImg} alt={title} width={320} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{overview}</p>
      <ul>
        {genre_ids.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>

    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Movie;


