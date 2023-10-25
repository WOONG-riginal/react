import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Movie({ year, title, summary, poster, genres, rate }) {
  return (
    <li class="movie">
        <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres, rate }, }}>
            <div class="pic">
                <img src={poster} alt={title}/>
            </div>
            <div class="info">
                <h2>{title}</h2>
            </div>
            <div class="additional">
                <h3>
                    {summary.slice(0,299)}...
                </h3>
                <h4>관람평 : <span>{rate}</span></h4>
            </div>
            <div class="curtain"></div>
        </Link>
    </li>
  )
}

Movie.propTypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie