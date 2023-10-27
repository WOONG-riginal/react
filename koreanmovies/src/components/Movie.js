import React from 'react'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ backdrop_path, genre_ids, overview, poster_path, release_date, title, vote_average}) {
  return (
    <div className='movie-container'>
      <img src={IMG_BASE_URL + poster_path} alt={title} />
      <div className='movie-info'>
        <h4>{title.slice(0,19)}</h4>
        <p>{release_date}</p>
      </div>
    </div>
  )
}
